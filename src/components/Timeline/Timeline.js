import React from 'react';
import './Timeline.scss';

class Timeline extends React.Component {
    render() {
        var entries = this.props.entries.sort((a, b) => b.props.date - a.props.date)
        return <div className={`timeline ${this.props.className}`}>
            {entries}
        </div>
    }
}

export default Timeline;