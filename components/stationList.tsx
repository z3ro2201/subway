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
                            <div className={ 'down_approach stn_' + item.manageCode}>{item.down_approach_data}</div>
                            <div className={ 'down_arrival stn_' + item.manageCode}>{item.down_arrive_data}</div>
                            <div className={ 'down_leave stn_' + item.manageCode}>{item.down_leave_data}</div>
                        </div>
                        <div className='station_info'>
                            <div>
                                <span className={ 'StnId bg line_' + item.lineId}>{item.stationId}</span>
                                <span className='StnName'>{item.stationName}</span>
                                <span className='transferLine'>
                                    {
                                        item.transferLine.split(',') && item.transferLine.split(',').map((line:any, key:number) => {
                                            <div>aa</div>
                                        })
                                    }
                                </span>
                            </div>
                        </div>
                        <div className='direction_up'>
                            <div className={'up_leave stn_' + item.manageCode}>{item.up_approach_data}</div>
                            <div className={'up_arrival stn_' + item.manageCode}>{item.up_arrive_data}</div>
                            <div className={'up_approach stn_' + item.manageCode}>{item.up_leave_data}</div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}
