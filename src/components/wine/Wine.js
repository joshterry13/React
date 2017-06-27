//React
import React from 'react';
import {} from 'prop-types';
//Components



const Wine = ({wine}) => {
    console.log(wine)

    return (
        <div>
            <p>{wine.name}</p>
            <p>{wine.rating}</p>


        </div>
    );
};

Wine.propTypes = {};

export default Wine
