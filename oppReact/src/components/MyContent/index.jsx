import React, { Component } from 'react'
import FIRSTVT from '../FIRSTVT'
import LASTVT from '../LASTVT'
import PRT from '../PRT'
import "./index.css"

export default class MyContent extends Component {
    render() {
        const { FIRSTVTD, LASTVTD, PRTD, HistoryD } = this.props;
        return (
            <div className="MyContent">
                <FIRSTVT FIRSTVTD={FIRSTVTD} />
                <LASTVT LASTVTD={LASTVTD} />
                <PRT PRTD={PRTD} />
            </div>
        )
    }
}
