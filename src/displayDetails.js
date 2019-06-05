import React from 'react';

const DisplayDetails = props => {
    return (
        <input type="text" className="calculator-screen" value={props.displayText} disabled />
    );
};

export default DisplayDetails;