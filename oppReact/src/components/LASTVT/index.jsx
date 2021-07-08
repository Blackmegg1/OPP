import React, { Component } from 'react'
import { Table,Tag,Empty } from 'antd'


export default class LASTVT extends Component {
    render() {
        const { LASTVTD } = this.props;
        if (LASTVTD[1] === undefined || LASTVTD[0]=== undefined) {
            return (<Empty></ Empty>)
        }
        else {
            LASTVTD[1].map(
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
                <Table dataSource={LASTVTD[0]} columns={LASTVTD[1]} 
                pagination={{ hideOnSinglePage: true, position: ["bottomCenter"] }}
                bordered={true}
                title={() => {
                    return <b>LASTVT</b>
                }} 
                style={{
                    display:"inline-block",
                    width:"600px",
                    height:"40vh",
                    marginTop:"15px"}} />
            )
        }
    }
}
