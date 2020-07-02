import React from 'react';
import './MainHeader.scss';

import Portrait from '../media/img/portrait.png';

class MainHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = { socials: [] }
        fetch(process.env.PUBLIC_URL + '/data/socials.json').then(res => res.json()).then(result => this.setState({ socials: result }))
    }

    render() {

        console.log(this.state.socials)
        const social_links = this.state.socials.map((soc, index) => <li key={index}><a href={soc.url}><img src={process.env.PUBLIC_URL + soc.img} alt={soc.name} /></a></li>);

        return (
            <div className={this.props.className}>
                <div className="header-colour-overlay">
                    <div className="header-container">
                        <div className="portrait-container">
                            <img src={Portrait} alt="Portrait" />
                        </div>
                        <div className="header-text-container">
                            <div className="name-links-container">
                                <h1>Kiefer Lam</h1>
                                <div className="socials-container">
                                    <ul>
                                        {social_links}
                                    </ul>
                                </div>
                            </div>
                            <div className="description-container">
                                <p className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt turpis ac dolor pulvinar mollis. Aenean ultrices ante nulla, posuere pellentesque est dignissim in.</p>

                                <p className="description-footer-text">
                                    Web Development &#124; Graphics Programming &#124; Game Development &#124; App Development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainHeader;