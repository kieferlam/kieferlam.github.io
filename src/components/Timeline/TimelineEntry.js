import React from 'react';
import './Timeline.scss';

const monthString = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

class TimelineEntry extends React.Component {

    getDateString() {
        return `${monthString[this.props.date.getMonth()]} - ${this.props.date.getFullYear()}`;
    }

    getImageDOM() {
        if (!this.props.img) return <div />
        var imgname = this.props.img.substr(this.props.img.lastIndexOf("/")+1)
        return <img src={process.env.PUBLIC_URL + this.props.img} alt={imgname} />
    }

    render() {
        return <div className={`timeline-entry ${this.props.className}`}>
            <div className="timeline-entry-knob-container"></div>
            <div className="timeline-entry-date-container">{this.getDateString()}</div>
            <div className="timeline-entry-content-container">
                <div className="timeline-entry-image-container">{this.getImageDOM()}</div>
                <div className="timeline-entry-textcontent-container">
                    <div className="timeline-entry-title-container" dangerouslySetInnerHTML={{__html: this.props.title}}></div>
                    <div className="timeline-entry-separator"></div>
                    <div className="timeline-entry-description-container" dangerouslySetInnerHTML={{__html: this.props.description}}></div>
                </div>
            </div>
        </div>
    }
}

export default TimelineEntry;