import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'

import CustomerCenter from '../../components/customerCall'
import StationList from '../../components/stationList'

/*import Line1 from '../../components/line_info/line_1'
import Line2 from '../../components/line_info/line_2'
import Line3 from '../../components/line_info/line_3'
import Line4 from '../../components/line_info/line_4'
import Line5 from '../../components/line_info/line_5'
import Line6 from '../../components/line_info/line_6'*/

import dynamic from 'next/dynamic'
import { render } from 'react-dom'

const Approach = () =>
{
    const router = useRouter()
    const { id } = router.query
    let lineNumber:any = '', lineId:any
    let lineData:any
    const [lineList, setLineList] = useState([])

    if(id !== undefined && id >= 1 && id <= 9)
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

    const getData = async function() {
        if(id !== undefined) {
            const lineData = await import('../../components/line_info/line_' + id)
            setLineList(lineData.getStation)
        }
    }

    useEffect(() => {
        getData()
    }, [id])
    
    return (
        <>
            <Head>
                <title>SSing Metro :: {lineNumber}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <StationList lineId={lineId} list={lineList}/>
        </>
    )
}

export default Approach