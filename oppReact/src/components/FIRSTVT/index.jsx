import React, { Component } from 'react'
import { Table } from 'antd'


export default class FIRSTVT extends Component {
    render() {
        const { FIRSTVTD } = this.props;
        if (FIRSTVTD === undefined) {
            return (<div></ div>)
        }
        else return (
            <Table dataSource={FIRSTVTD[0]} columns={FIRSTVTD[1]} pagination={{ hideOnSinglePage: true, position: ["bottomCenter"] }} />
        )
    }
}
