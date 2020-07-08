import React from 'react';
import './Timeline.scss';

const monthString = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

class TimelineEntry extends React.Component {

    getDateString() {
        return `${monthString[this.props.date.getMonth()]} - ${this.props.date.getFullYear()}`;
    }

    render() {
        return <div className={`timeline-entry ${this.props.className}`}>
            <div className="timeline-entry-knob-container"></div>
            <div className="timeline-entry-date-container">{this.getDateString()}</div>
            <div className="timeline-entry-title-container">{this.props.title}</div>
            <div className="timeline-entry-separator"></div>
            <div className="timeline-entry-description-container">{this.props.description}</div>
        </div>
    }
}

export default TimelineEntry;