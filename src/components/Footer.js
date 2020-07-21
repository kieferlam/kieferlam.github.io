import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props)

        this.state = { socials: [] }
        fetch(process.env.PUBLIC_URL + '/data/socials.json').then(res => res.json()).then(result => this.setState({ socials: result }))
    }
    render() {

        const social_links = this.state.socials.map((soc, index) => {
            return(
            <li key={`footer-social-${index}`}>
                <div className="footer-social-img-container"><img src={soc.img} alt={soc.name} /></div>
                <a href={soc.url}>
                    {soc.name}
                </a>
            </li>)
        });

        return (
            <div className={`${this.props.className} footer`}>
                <div className="footer-message-text">
                    <h1>&nbsp;</h1>
                    <p>I made this website using React (just for practise)!</p>
                    <p>Hosted with Github Pages. Check out my Github!</p>
                </div>
                <div className="footer-message-text">
                    <h1>Info</h1>
                    <ul>
                        <li>+447884955566</li>
                        <li>5/1998</li>
                        <li>Colchester</li>
                    </ul>
                </div>
                <div className="footer-socials-container">
                    <h1>Links</h1>
                    <ul>
                        {social_links}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;