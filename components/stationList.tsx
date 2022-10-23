import type { NextPage } from 'next'
import React from 'react'

import {transferInfo} from './transferInfo'

type AppLayoutProps = {
    line:any
    list:any
}

export default function StationList({ line, list }: AppLayoutProps) {
    return(
        <>
        <div className='header'>
            {line}
        </div>
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
                                <ul className='transferLine'>
                                    {
                                        item.transferLine && item.transferLine.split(',').map((line:any, key:number) => {
                                            //console.log()
                                            const shortName = transferInfo.map((ele:any, key:number) => {
                                                if(ele.lineCode === line) return ele.lineShortName
                                            })
                                            switch(line)
                                            {
                                                case "SS": line = 2; break;
                                                case "SJ": line = 2; break;
                                                case "MC": line = 5; break;
                                                case "A": line = 'airport';break;
                                                case "UI": line = 'ui';break;
                                                case "sr": line = 'shinrim';break;
                                                case "i1": line = 'incheon1';break;
                                                case 'i2': line = 'incheon2';break;
                                                case 'GG': line = 'gimpogold';break;
                                                default:;
                                            }
                                            return(<li className={'transferIcon bg line_' + line } key={key}>{shortName}</li>)
                                        })
                                    }
                                </ul>
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
