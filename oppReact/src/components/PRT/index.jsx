import React, { Component } from 'react'
import { Table } from 'antd'


export default class PRT extends Component {
    render() {
        const { PRTD } = this.props;
        if (PRTD === undefined) {
            return (<div></ div>)
        }
        else return (
            <Table dataSource={PRTD[0]} columns={PRTD[1]} pagination={{ hideOnSinglePage: true, position: ["bottomCenter"] }} />
        )
    }
}
