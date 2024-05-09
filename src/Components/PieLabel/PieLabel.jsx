import React from 'react';
import "./PieLabel.css";

export default function PieLabel(props) {
    const { name, color } = props;
    return (
        <div className='pieLabel'>
            <span className='labelColorBar' style={{backgroundColor: color}}></span>
            <span className='labelText'>{name}</span>
        </div>
    );
};
