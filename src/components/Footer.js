import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    render() {

        const social_links = this.props.socials.map((soc, index) => {
            return (
                <li key={`footer-social-${index}`}>
                    <div className="footer-social-img-container"><img src={soc.img} alt={soc.name} /></div>
                    <a href={soc.url}>
                        {soc.name}
                    </a>
                </li>)
        });

        var footerText = []
        if(Array.isArray(this.props.profile.footerText)) footerText = this.props.profile.footerText.map(text => <p>{text}</p>)

        var info = []
        if(Array.isArray(this.props.profile.info)) info = this.props.profile.info.map((text, index) => <li key={`info-${index}`}>{text}</li>)

        return (
            <div className={`${this.props.className} footer`}>
                <div className="footer-message-text">
                    <h1>&nbsp;</h1>
                    {footerText}
                </div>
                <div className="footer-message-text">
                    <h1>Info</h1>
                    <ul>
                        {info}
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