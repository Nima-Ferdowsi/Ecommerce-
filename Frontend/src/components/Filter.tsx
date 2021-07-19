import  React, { Fragment } from 'react';
import { useState } from 'react';

import '../css/filter.css'
 
const Filter: React.FC= () => {

const [filterToggle,setFilterToggle]=useState<boolean>(false)

let classes:string;

if(filterToggle){
    classes='open_filter'
}
else{
    classes=''
}
    return (<Fragment>
          <div className={`filter_container ${classes}`}>
              <span className='filter_title'>Filter
              </span>
              <span className='dropdown-toggle' onClick={()=>setFilterToggle(!filterToggle)}></span>

        <div className='filter_input'>
        <select className='filter_select'>
                <option>OrderBy</option>
                <option>New</option>
                <option>Oldest</option>
            </select>
            <select className='filter_select'>
                <option>Price</option>
                <option>Lowest</option>
                <option>Hieghest</option>
            </select>
        </div>
          </div>
    </Fragment>  );
}
 
export default Filter ;