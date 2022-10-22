import type { NextPage } from 'next'

export default function StationList({ list }) {

    return(
        <>
        {
            list!==undefined && list.map((item: any, key: number) => {
                if(item.status === 0) return
                return(
                    <div className='row' key={key}>
                        <div className='direction_down'>
                            <div className={ 'down_approach' + item.down_approach_stnid}>{item.down_approach_data}</div>
                            <div className={ 'down_arrival' + item.down_arrive_stnid}>{item.down_arrive_data}</div>
                            <div className={ 'down_leave' + item.down_leave_stnid}>{item.down_leave_data}</div>
                        </div>
                        <div className='station_info'>
                            <div>
                                <span className={ 'StnId bg line_' + item.lineId}>{item.stationId}</span>
                                <span className='StnName'>{item.stationName}</span>
                            </div>
                        </div>
                        <div className='direction_up'>
                            <div className={'up_leave ' + item.up_approach_stnid}>{item.up_approach_data}</div>
                            <div className={'up_arrival ' + item.up_arrive_stnid}>{item.up_arrive_data}</div>
                            <div className={'up_approach ' + item.up_leave_stnid}>{item.up_leave_data}</div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}
