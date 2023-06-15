import React, { Component } from 'react'
import './searchBox.css';

const searchBox = ({ className, placeholder, onChangeHandler }) => {

    return (
        <div>
            <input
                className={className}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </div>
    )
}
export default searchBox;