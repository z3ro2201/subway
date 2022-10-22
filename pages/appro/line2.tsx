import type { NextPage } from 'next'
import axios from 'axios'

import Line2 from '../../components/line_info/line2'
import CustomerCenter from '../../components/customerCall'
import List from '../../components/List'

const Line_2: NextPage = () => {
  return (
    <>
      <main>
        {
          Line2.map((e:any, key:number) => {
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
                        <span className='StnId bg line_2'>{e[1]}</span>
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

export default Line_2