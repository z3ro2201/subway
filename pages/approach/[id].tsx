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
    
    
    if(process.env.NODE_ENV === 'development') {
        let apiuri:any = process.env.REACT_APP_APIDEV
    }
    else { let apiuri:any = process.env.REACT_APP_APIPRO }

    const apiurl:string = 'http://swopenapi.seoul.go.kr/api/subway/' + apikey + '/json/realtimePosition/0/100/' + api_line
    console.log(process.env.REACT_APP_APIDEV)

    const getLineData = async function() {
        if(id !== undefined) {
            const lineData = await import('../../components/line_info/line_' + id)
            setLineList(lineData.getStation)
        }
    }

    const getData = async function() {
        if(id !== undefined) {
            axios.get(apiurl).then((res) => {
                const data = res.data;
                if(data.status === 500) { return console.log('error!') }
                data.realtimePositionList.map((e:any, key:number) => {
                    let getStnId;
                    if(e['statnNm'] !== undefined && e['statnNm'] !== null)
                    {
                        switch(id)
                        {
                            case "shinbundang": 
                                getStnId = 'D' + e['statnId'].substr(8);break
                            case "airport":
                                getStnId = 'A' + e['statnId'].substr(8);break
                            default:
                                getStnId = e['statnId'].substr(6)
                        }
                        console.log(getStnId)
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
            <StationList line={lineNumber} list={lineList}/>
        </>
    )
}

export default Approach