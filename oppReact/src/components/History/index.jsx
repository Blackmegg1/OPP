import React, { Component } from 'react'
import { Empty, Table} from 'antd'
export default class History extends Component {
    render() {
        const { HistoryD } = this.props;
        if (HistoryD[1] === undefined || HistoryD[0] === {}) {
            return (<Empty></ Empty>)
        }
        else {
            return (
                <Table dataSource={HistoryD[0]} columns={HistoryD[1]} pagination={{ hideOnSinglePage: true, position: ["bottomCenter"] , pageSize:7}}
                    bordered={true}
                    title={() => {
                        return <b>算符优先分析</b>
                    }}
                    style={{
                        position: 'fixed',
                        display: "inline-block",
                        width: "600px",
                        height: "55vh",
                    }} />)
        }
    }
}
