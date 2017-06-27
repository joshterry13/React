//React
import React from 'react';
import {} from 'prop-types';
//Components
import Wine from './Wine'



const WineList = ({wines}) => {
    console.log(wines)
    return (
        <div>
            {
                wines.map(wine => {
                   return <Wine wine={wine} />
                })
            }
        </div>

    );
};

WineList.propTypes = {};

export default WineList
