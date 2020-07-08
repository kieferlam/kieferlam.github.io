import React from 'react';
import Timeline from './Timeline/Timeline';
import TimelineEntry from './Timeline/TimelineEntry';

const timelineDataUrl = process.env.PUBLIC_URL + '/data/timeline.json'


class MainPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {timeline: []}

        fetch(timelineDataUrl).then(res => res.json()).then(result=>{
            this.setState({timeline: result})
        })
    }

    render(){

        const timeline = this.state.timeline.map((entry, index) => <TimelineEntry key={index} title={entry.title} date={new Date(entry.date)} description={entry.description} />)

        return <div className={this.props.className}>
            <Timeline entries={timeline} />
        </div>
    }
}

export default MainPage;