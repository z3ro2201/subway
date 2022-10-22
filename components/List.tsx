
export default function List ({keys, stnid, stnname, transfer}) {
    <div className='row' key={keys}>
        <div className='direction_down'>
          <div className={ 'down_approach stnid_' + stnid }></div>
          <div className={ 'down_arrival stnid_' + stnid }></div>
          <div className={ 'down_leave stnid_' +  stnid} ></div>
        </div>
        <div className='station_info'>
          <div>
            <span className='StnId bg line_1'>{stnid}</span>
            <span className='StnName'>{stnname}</span>
          </div>
        </div>
        <div className='direction_up'>
          <div className={'up_approach stnid_' + stnid}></div>
          <div className={'up_arrival stnid_' + stnid}></div>
          <div className={'up_leave stnid_' + stnid}></div>
        </div>
    a
    </div>
}
