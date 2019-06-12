import React from 'react';

const ButtonKey = props => {
    return (
        <button type="button" onClick={props.operationHandling} className={props.className} value={props.value}>{props.label}</button>
    );
};

export default ButtonKey;