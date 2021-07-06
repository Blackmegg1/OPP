import React, { Component } from 'react'
import { Table } from 'antd'


export default class LASTVT extends Component {
    render() {
        const { LASTVTD } = this.props;
        if (LASTVTD === undefined) {
            return (<div></ div>)
        }
        else return (
            <Table dataSource={LASTVTD[0]} columns={LASTVTD[1]} pagination={{ hideOnSinglePage: true, position: ["bottomCenter"] }} />
        )
    }
}
