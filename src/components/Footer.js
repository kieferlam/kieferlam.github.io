import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    constructor(props){
        super(props)

        this.state = {socials: []}
        fetch(process.env.PUBLIC_URL + '/data/socials.json').then(res => res.json()).then(result => this.setState({ socials: result }))
    }
    render() {

        const social_links = this.state.socials.map((soc, index) => <li key={index}><a href={soc.url}><img src={process.env.PUBLIC_URL + soc.img} alt={soc.name} /></a></li>);

        return (
            <div className={this.props.className}>
               <div className="footer-message-text">
                   <p>I made this website using React (just for practise)!</p>
                   <p>Hosted with Github Pages. Check out my Github!</p>
               </div>
               <div className="footer-socials-container">
                   <ul>
                       {social_links}
                   </ul>
               </div>
            </div>
        )
    }
}

export default Footer;