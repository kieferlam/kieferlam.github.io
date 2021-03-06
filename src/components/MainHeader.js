import React from 'react';
import './MainHeader.scss';

import Portrait from '../media/img/portrait.jpg';
import Hexagon from './HexagonDiv/Hexagon';

class MainHeader extends React.Component {
    render() {

        const social_links = Array.isArray(this.props.socials) ? this.props.socials.map((soc, index) => <li key={'header-socials-' + index}><a href={soc.url}><img src={process.env.PUBLIC_URL + soc.img} alt={soc.name} /></a></li>) : [];

        var portraitDOM = <img src={Portrait} alt="Portrait" />;
        portraitDOM = this.props.className === "header-large" ? (<Hexagon height="20rem">{portraitDOM}</Hexagon>) : portraitDOM;

        return (
            <div className={this.props.className}>
                <div className="header-colour-overlay">
                    <div className="header-background-text-container">
                        <p>Random tech image from unsplash.com</p>
                    </div>
                    <div className="header-canvas-container">
                        <canvas id="header-canvas" ref={c => this.canvas = c}></canvas>
                    </div>
                    <div className="header-container">
                        <div className="portrait-container">{portraitDOM}</div>
                        <div className="header-text-container">
                            <div className="name-links-container">
                                <h1>Kiefer Lam</h1>
                                <div className="links-container">
                                    <ul>
                                        {social_links}
                                    </ul>
                                </div>
                            </div>
                            <div className="description-container">
                                <p className="description-text">{this.props.profile.summary}</p>
                                <p className={'description-link hide'}><a href="/cv">View CV</a></p>

                                <p className="description-footer-text">
                                    Web Development &#124; Graphics Programming &#124; Machine Learning &#124; App Development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default MainHeader;