import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect } from 'react'
import dotenv from 'dotenv'

import 'dotenv/config'

const Home: NextPage = () => {
  const { query } = useRouter();
  const apikey:string|undefined = process.env.REACT_APP_API_KEY
  const api_line = encodeURIComponent(query.line_id)
  console.log(apikey)
  const apiurl:string = 'http://swopenapi.seoul.go.kr/api/subway/' + apikey + '/json/realtimePosition/0/100/' + api_line

  const line:any = [
    ['1호선', 1], ['2호선', 2], ['3호선', 3], ['4호선', 4], ['5호선', 5], ['6호선', 6], ['7호선', 7], ['8호선', 8], ['9호선', 9],
    ['경의중앙선', 'gyeongjung'], ['수인분당선', 'suinbundang'], ['경춘선', 'gyeongchun'],
    ['우이신설선', 'ui'], ['신분당선', 'shinbundang'], ['공항철도', 'airport']
    /*,['신림', 'shinrim'],['인천1호', 'incheon1'], ['인천2호', 'incheon2']*/
  ];

  function getData(){
    axios.get(apiurl).then((res) => {
      const data = res.data;
      if(data.status === 500) { return console.log('error!') }
      console.log(data.realtimePositionList)
      data.realtimePositionList.map((e:any, key:number) => {
        console.log('열차번호: ' + e['trainNo'])
        console.log('열차종점: ' + e['statnTnm'])
      })
    })
  }

  useEffect(() => {
    if(query.line_id !== undefined) {
      getData()
    }
  })

  return (
    <>
      <nav>
        <ul className='gnb'>
          {
            line.map(
              (e:any, key:number) => {
                let line_name:any = '';
                const line_number:any = 'bg line_' + e[1]
                if (e[1] >= 0 && e[1] <= 9) line_name = e[0]
                else line_name = e[0]
                return(
                  <li className={line_number} key={key}>
                    <Link href={{ pathname: '', query: { line_id: e[0] } }}>
                      <a className='selectMetro'>{line_name}</a>
                    </Link>
                  </li>
                )
              })
          }
        </ul>
      </nav>
    </>
  )
}

export default Home
