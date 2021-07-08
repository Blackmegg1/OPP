import React, { Component } from 'react'
import { Table, Tag, Empty } from 'antd'


export default class FIRSTVT extends Component {
    render() {
        const { FIRSTVTD } = this.props;
        if (FIRSTVTD[1] === undefined || FIRSTVTD[0] === undefined) {
            return (<Empty></ Empty>)
        }
        else {
            FIRSTVTD[1].map(
                (item, index) => {
                    if (index !== 0) {
                        item["render"] = (tag) => {
                            if (tag) {
                                return (<Tag color={"green"}>true</Tag>)
                            }
                            else return (<Tag color={"red"}>false</Tag>)
                        }
                    }
                }
            )
            return (
                <Table dataSource={FIRSTVTD[0]} columns={FIRSTVTD[1]}
                    pagination={{ hideOnSinglePage: true, position: ["bottomCenter"] }}
                    bordered={true}
                    title={() => {
                        return <b>FIRSTVT</b>
                    }}
                    style={{
                        display: "inline-block",
                        width: "600px",
                        height: "40vh",
                        marginTop: "15px",
                        marginRight: "60px",
                        marginLeft: "20px",
                    }} />
            )
        }
    }
}
