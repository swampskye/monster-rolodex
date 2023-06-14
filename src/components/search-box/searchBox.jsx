import React, { Component } from 'react'
import './searchBox.css';

export default class searchBox extends Component {
    render() {
        return (
            <div>
                <input
                    className={this.props.className}
                    type='search'
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangeHandler}
                />
            </div>
        )
    }
}
