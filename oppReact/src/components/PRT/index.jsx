import React, { Component } from 'react'
import { Empty, Table, Tag } from 'antd'


export default class PRT extends Component {
    render() {
        const { PRTD } = this.props;
        if (PRTD[1] === undefined || PRTD[0] === undefined) {
            return (<Empty></ Empty>)
        }
        else {
            PRTD[1].map(
                (item, index) => {
                    if (index !== 0) {
                        item["render"] = (tag) => {
                            if (tag === ">") {
                                return (<Tag color={"magenta"}>&gt;</Tag>)
                            }
                            else if (tag === "=") {
                                return (<Tag color={"gold"}>=</Tag>)
                            }
                            else if (tag === "<") {
                                return (<Tag color={"blue"}>&lt;</Tag>)
                            }
                            else if (tag === "*") {
                                return (<Tag color={"default"}>*</Tag>)
                            }
                        }
                    }
                }
            )
            return (
                <Table dataSource={PRTD[0]} columns={PRTD[1]} pagination={{ hideOnSinglePage: true, position: ["bottomCenter"] }}
                    bordered={true}
                    title={() => {
                        return <b>算符优先关系表</b>
                    }}
                    style={{
                        display: "inline-block",
                        width: "600px",
                        height: "55vh",
                        marginRight: "60px",
                        marginLeft: "20px",
                    }} />
            )
        }
    }
}
