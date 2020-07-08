import React from 'react';
import './Timeline.scss';

class Timeline extends React.Component {
    constructor(props){
        super(props)

        this.props.entries.sort((a, b) => b.date - a.date)
    }

    render() {
        return <div className={`timeline ${this.props.className}`}>
            {this.props.entries}
        </div>
    }
}

export default Timeline;