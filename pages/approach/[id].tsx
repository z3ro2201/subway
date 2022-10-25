import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'

import CustomerCenter from '../../components/customerCall'
import StationList from '../../components/stationList'

import dynamic from 'next/dynamic'
import { render } from 'react-dom'

const Approach = () =>
{
    const router = useRouter()
    const { id } = router.query
    let lineNumber:any = '', lineId:any
    let lineData:any
    const [lineList, setLineList] = useState([])
    const [realtimeData, setRealtimeData] = useState([{ 'errorMessage': [ {'code': 500 }] }])

    if(id !== undefined && id >= '1' && id <= '9')
    {
        lineId = id
        lineNumber = id + '호선'
    }
    else
        switch(id)
        {
            case "ui":
                lineNumber = '우이신설선'; break;
            case "gyeongjung":
                lineNumber = '경의중앙선'; break;
            case "gyeongchun":
                lineNumber = '경춘선'; break;
            case "suinbundang":
                lineNumber = '수인분당선'; break;
            case "airport":
                lineNumber = '공항철도'; break;
            case "shinbundang":
                lineNumber = '신분당선'; break;
        }

    const api_line = encodeURIComponent(lineNumber)
    const apikey:string|undefined = process.env.REACT_APP_APIKEY
    
    let apiurl = process.env.REACT_APP_API + api_line

    const getLineData = async function() {
        if(id !== undefined) {
            const lineData = await import('../../components/line_info/line_' + id)
            axios.get(apiurl).then((res) => setRealtimeData(res.data))
            setLineList(lineData.getStation)
        }
    }

    const getData = async function() {
        if(id !== undefined) {
            axios.get(apiurl).then((res) => {
                const data = res.data;
                if(data.status === 500) { return console.log('error!') }
                setRealtimeData(data)
                
                const filter = Array.prototype.filter
                const downElement = document.querySelectorAll('.direction_down')
                let downElementReturn = filter.call(downElement, function(ele) {
                    ele.innerText = ''
                    return 
                })
                
                const upElement = document.querySelectorAll('.direction_up')
                let upElementReturn = filter.call(upElement, function(ele) {
                    ele.innerText = ''
                    return
                })
                
                data.realtimePositionList.map((e:any, key:number) => {
                    let getStnId;
                    const manageCode = e['manageCode']
                    
                    if(e['statnNm'] !== undefined && e['statnNm'] !== null)
                    {
                        switch(id)
                        {
                            case "shinbundang": 
                                getStnId = 'D' + e['statnId'].substr(8);break
                            case "airport":
                                getStnId = 'A' + e['statnId'].substr(8);break
                            default:
                                getStnId = e['statnId'].substr(5) //5~
                        }
                        let trainMsg = `${e['statnTnm']}(${e['trainNo']})열차 ${e['statnNm']}`;

                        if(getStnId.substr(0,2) == '00') getStnId = getStnId.substr(2)
                        else getStnId = 'P' + getStnId.substr(2)
                        


                        if(e['updnLine'] == 0) {
                            const infoMessage = document.getElementById('up_' +getStnId)

                            if(infoMessage !== null && infoMessage !== undefined) {
                                let up_arrival_code
                                if(infoMessage.classList[1] !== undefined) {
                                    infoMessage.classList.remove(infoMessage.classList[1])
                                }
                                switch(e['trainSttus'])
                                {
                                    case '1': up_arrival_code = '도착';infoMessage.classList.add('arrival');break;
                                    case '0': up_arrival_code = '접근';infoMessage.classList.add('approach');break;
                                    default: up_arrival_code = '출발';infoMessage.classList.add('leave');
                                }
                                infoMessage.textContent =  `${e['trainNo']}열차 ${e['statnNm']} ${up_arrival_code}`
                            }
                        }else{
                            const infoMessage = document.getElementById('down_' +getStnId)

                            
                            if(infoMessage !== null && infoMessage !== undefined) {
                                let arrival_code
                                if(infoMessage.classList[1] !== undefined) {
                                    infoMessage.classList.remove(infoMessage.classList[1])
                                }
                                switch(e['trainSttus'])
                                {
                                    case '1': arrival_code = '도착';infoMessage.classList.add('arrival');break;
                                    case '0': arrival_code = '접근';infoMessage.classList.add('approach');break;
                                    default: arrival_code = '출발';infoMessage.classList.add('leave');
                                }
                                infoMessage.textContent =  `${e['trainNo']}열차 ${e['statnNm']} ${arrival_code}`
                            }
                            
                        }
                    }
                })
            })
        }
    }

    useEffect(() => {
        getLineData()
        getData()
        const interval = setInterval(() => { 
            getData()
        }, 10000);
        return() => clearInterval(interval)
    }, [id])
    
    return (
        <>
            <Head>{}
                <title>SSing Metro :: {lineNumber}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <StationList line={lineNumber} list={lineList} realtimeData={realtimeData}/>
        </>
    )
}

export default Approach