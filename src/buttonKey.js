import React from 'react';

const ButtonKey = props => {
    return (
        <button type="button" className={props.className} value={props.value}>{props.label}</button>
    );
};

export default ButtonKey;