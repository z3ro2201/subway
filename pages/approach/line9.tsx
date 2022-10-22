import type { NextPage } from 'next'
import axios from 'axios'

import Line9 from '../../components/line_info/line9'
import CustomerCenter from '../../components/customerCall'
import List from '../../components/List'

const Line_9: NextPage = () => {
  return (
    <>
      <main>
        {
          Line9.map((e:any, key:number) => {
            if(e[5] !== '미개통') {
              return(
                <>
                  <div className='row' key={key}>
                    <div className='direction_down'>
                      <div className={ 'down_approach stnid_' + e[1] }></div>
                      <div className={ 'down_arrival stnid_' + e[1] }></div>
                      <div className={ 'down_leave stnid_' +  e[1]} ></div>
                    </div>
                    <div className='station_info'>
                      <div>
                        <span className='StnId bg line_9'>{e[1]}</span>
                        <span className='StnName'>{e[4]}</span>
                      </div>
                    </div>
                    <div className='direction_up'>
                      <div className={'up_approach stnid_' + e[1]}></div>
                      <div className={'up_arrival stnid_' + e[1]}></div>
                      <div className={'up_leave stnid_' + e[1]}></div>
                    </div>
                  </div>
                </>
              )}
          })
        }
      </main>
    </>
  )
}

export default Line_9