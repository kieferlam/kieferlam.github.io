import React from 'react';
import './CvPage.scss';

const monthString = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

function StringToDateFormat(dateString) {
    var date = new Date(dateString)
    if (!date) return dateString
    return `${monthString[date.getMonth()]} - ${date.getFullYear()}`
}

function Skills(props) {
    var skills_div = []
    if (!props.profile.skills || typeof props.profile.skills !== "object") return <p>Something went wrong!</p>
    for (const [skill_cat, skills] of Object.entries(props.profile.skills)) {
        if (!Array.isArray(skills)) continue
        skills_div.push(
            <div key={skill_cat} className="skills-box">
                <h2>{skill_cat}</h2>
                <ul>
                    {skills.map(skill => <li key={`skill-${skill_cat}-${skill}`}>{skill}</li>)}
                </ul>
            </div>
        )
    }
    return skills_div
}

function Experience(props) {
    if (!props.profile.experience || !Array.isArray(props.profile.experience)) return <p>Something went wrong!</p>
    var exp = props.profile.experience.sort((a, b) => new Date(b.end) - new Date(a.end)).map(e => <li key={`experience-${e.title}`}>
        <h2>{e.title}</h2><p className="period">{StringToDateFormat(e.start)} &mdash; {StringToDateFormat(e.end)}</p>
        <p>{e.location}</p>
        <p>{e.description}</p>
    </li>)
    return <ul>{exp}</ul>
}

function Education(props) {
    if (!props.profile.education || !Array.isArray(props.profile.education)) return <p>Something went wrong!</p>
    var edu = props.profile.education.map(e => <li key={`education-${e.title}`}>
        <span className="edu-title">{e.title}</span> &mdash; <span className="edu-loc">{e.location}</span>
        <p>{StringToDateFormat(e.start)} &mdash; {StringToDateFormat(e.end)}</p>
        <p>{e.description}</p>
    </li>)
    return <ul>{edu}</ul>
}

function Hobbies(props) {
    if (!props.profile.hobbies || !Array.isArray(props.profile.hobbies)) return <p>Something went wrong!</p>
    var hobs = props.profile.hobbies.map(h => <li key={`hobby-${h.hobby}`}>
        <div className="list-icon"><img src={process.env.PUBLIC_URL + h.image} alt={h.hobby} /></div>
        {h.hobby}
    </li>)
    return <ul>{hobs}</ul>
}

function Contact(props){
    if (!props.profile.contact || !Array.isArray(props.profile.contact)) return <p>Something went wrong!</p>
    var contact = props.profile.contact.map(c => <li key={`contact-${c.method}`}>
        <div className="list-icon"><img src={process.env.PUBLIC_URL + c.image} alt={c.method} /></div>
        {c.value}
    </li>)
    return <ul>{contact}</ul>
}

class CvPage extends React.Component {
    render() {
        const profile = this.props.profile ? this.props.profile : {}

        var summary = profile.summary ? profile.summary : ''

        return <div className={`CvPage ${this.props.className}`}>
            <div className="profile">
                <p className="profile-name"><span>Kiefer Lam</span> <span><a href={process.env.PUBLIC_URL + process.env.REACT_APP_PDF_LOCATION}>View PDF version</a></span></p>
                <p className="profile-location">Colchester, UK</p>
                <p className="profile-email">kieferlam@gmail.com &mdash; <a href="https://github.com/kieferlam">github.com/kieferlam</a> &mdash; <a href="https://www.linkedin.com/in/kieferlam/">linkedin.com/in/kieferlam</a></p>
                <p className="profile-summary">{summary}</p>
            </div>
            <div className="grid-left-col">
                <div className="education">
                    <h1>Education</h1>
                    <Education profile={profile} />
                </div>
                <div className="skills">
                    <h1>Skills</h1>
                    <Skills profile={profile} />
                </div>
                <div className="contact">
                    <h1>How to reach me</h1>
                    <Contact profile={profile} />
                </div>
            </div>
            <div className="grid-right-col">
                <div className="experience">
                    <h1>Experience</h1>
                    <Experience profile={profile} />
                </div>
                <div className="hobbies">
                    <h1>Personal Interests</h1>
                    <Hobbies profile={profile} />
                </div>
            </div>
        </div>
    }
}

export default CvPage;