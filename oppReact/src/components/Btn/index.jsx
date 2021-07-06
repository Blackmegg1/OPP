import React, { Component } from 'react'
import { Button } from 'antd'

import "./index.css"
export default class Btn extends Component {

    render() {
        const { handleClick } = this.props;
        return (
            <Button type="primary" shape="round" size={'large'} className="myBtn" onClick={handleClick}>解析文法</Button>
        )
    }
}
