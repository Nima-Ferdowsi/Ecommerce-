import React from 'react';
import Avatar from '../../img/team-3.jpg'

const Navbar = (props) => {
    return (
        <nav>
            <div className='nav_left '>
                <i onClick={props.toggle} className='fas fa-bars'></i>
                <h6 className='  mb-0 text-white text-uppercase  '>
                    Dashboard
                </h6>
            </div>
            <div className='nav_right '>
                <input type="text" className='form-control' placeholder="Search" />
                <img src={Avatar}/>
            </div>

        </nav>
       );
}
 
export default Navbar;  