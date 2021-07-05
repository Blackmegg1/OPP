import React, { Component } from 'react'
import { Table } from 'antd'
const dataSource = [
  {
      "key": 0,
      "steps": 1,
      "moves": "",
      "enterStr": "i+(i*i)+i#",
      "signStack": "#"
  },
  {
      "key": 1,
      "steps": 2,
      "moves": "移入i",
      "enterStr": "+(i*i)+i#",
      "signStack": "#i"
  },
  {
      "key": 2,
      "steps": 3,
      "moves": "归约i",
      "enterStr": "(i*i)+i#",
      "signStack": "#N"
  },
  {
      "key": 3,
      "steps": 4,
      "moves": "移入+",
      "enterStr": "(i*i)+i#",
      "signStack": "#N+"
  },
  {
      "key": 4,
      "steps": 5,
      "moves": "移入(",
      "enterStr": "i*i)+i#",
      "signStack": "#N+("
  },
  {
      "key": 5,
      "steps": 6,
      "moves": "移入i",
      "enterStr": "*i)+i#",
      "signStack": "#N+(i"
  },
  {
      "key": 6,
      "steps": 7,
      "moves": "归约i",
      "enterStr": "i)+i#",
      "signStack": "#N+(N"
  },
  {
      "key": 7,
      "steps": 8,
      "moves": "移入*",
      "enterStr": "i)+i#",
      "signStack": "#N+(N*"
  },
  {
      "key": 8,
      "steps": 9,
      "moves": "移入i",
      "enterStr": ")+i#",
      "signStack": "#N+(N*i"
  },
  {
      "key": 9,
      "steps": 10,
      "moves": "归约i",
      "enterStr": "+i#",
      "signStack": "#N+(N*N"
  },
  {
      "key": 10,
      "steps": 11,
      "moves": "归约N*N",
      "enterStr": "+i#",
      "signStack": "#N+(N"
  },
  {
      "key": 11,
      "steps": 12,
      "moves": "移入)",
      "enterStr": "+i#",
      "signStack": "#N+(N)"
  },
  {
      "key": 12,
      "steps": 13,
      "moves": "归约(N)",
      "enterStr": "i#",
      "signStack": "#N+N"
  },
  {
      "key": 13,
      "steps": 14,
      "moves": "归约N+N",
      "enterStr": "i#",
      "signStack": "#N"
  },
  {
      "key": 14,
      "steps": 15,
      "moves": "移入+",
      "enterStr": "i#",
      "signStack": "#N+"
  },
  {
      "key": 15,
      "steps": 16,
      "moves": "移入i",
      "enterStr": "#",
      "signStack": "#N+i"
  },
  {
      "key": 16,
      "steps": 17,
      "moves": "归约i",
      "enterStr": "",
      "signStack": "#N+N"
  },
  {
      "key": 17,
      "steps": 18,
      "moves": "归约N+N",
      "enterStr": "",
      "signStack": "#N"
  },
  {
      "key": 18,
      "steps": 19,
      "moves": "移入#",
      "enterStr": "",
      "signStack": "#N#"
  }
]

const columns =[
  {
      "title": "steps",
      "dataIndex": "steps",
      "key": "steps"
  },
  {
      "title": "enterStr",
      "dataIndex": "enterStr",
      "key": "enterStr"
  },
  {
      "title": "signStack",
      "dataIndex": "signStack",
      "key": "signStack"
  },
  {
      "title": "moves",
      "dataIndex": "moves",
      "key": "moves"
  }
]
export default class Tableme extends Component {
  render() {
    return (
      <Table dataSource={dataSource} columns={columns} pagination={{hideOnSinglePage:true,position:["bottomCenter"] }}/>
    )
  }
}
