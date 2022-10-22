
export default function List ({keys, managecode, stnid, stnname, transfer}) {
    <div className='row' key={keys}>
        <div className='direction_down'>
          <div className={ 'down_approach stnid_' + managecode }></div>
          <div className={ 'down_arrival stnid_' + managecode }></div>
          <div className={ 'down_leave stnid_' +  managecode} ></div>
        </div>
        <div className='station_info'>
          <div>
            <span className='StnId bg line_1'>{stnid}</span>
            <span className='StnName'>{stnname}</span>
          </div>
        </div>
        <div className='direction_up'>
          <div className={'up_approach stnid_' + managecode}></div>
          <div className={'up_arrival stnid_' + managecode}></div>
          <div className={'up_leave stnid_' + managecode}></div>
        </div>
    </div>
}
