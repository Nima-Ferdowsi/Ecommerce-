import React from 'react';
import OverviewItem from './OverViewItem';

const Overview = () => {
    return ( 

        <>
        <div className='container-fluid overview_container'>
         <div className='row'>
            <OverviewItem title='TRAFFIC' price='10' percent='20' icon='fas fa-chart-bar' bg='orangered'  />
            <OverviewItem title='NEW USERS' price='20' percent='60' icon='fas fa-users' bg='rgb(15, 216, 199)'  />
            <OverviewItem title='SALES' price='35' percent='5' icon='fas fa-chart-pie' bg='rgb(27, 57, 121)'  />
            <OverviewItem title='PERFORMANCE' price='80' percent='40' icon='fas fa-percent' bg='rgb(41, 219, 41)'  />

         </div>
        </div>
        
        </>
    );
}
 
export default Overview;