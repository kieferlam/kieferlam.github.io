import React from 'react';
import './MainHeader.scss';

import Portrait from '../media/img/portrait.jpg';
import Hexagon from './HexagonDiv/Hexagon';

class MainHeader extends React.Component {
    getWaveSvg() {
        return <svg width="0" height="0">
            <defs>
                <clipPath id="wave" clipPathUnits="objectBoundingBox">
                    <path d=""></path>
                </clipPath>
            </defs>
        </svg >
    }

    render() {

        const social_links = this.props.socials.map((soc, index) => <li key={'header-socials-' + index}><a href={soc.url}><img src={process.env.PUBLIC_URL + soc.img} alt={soc.name} /></a></li>);

        return (
            <div className={this.props.className}>
                <div className="header-colour-overlay">
                    <div className="header-background-text-container">
                        <p>Random tech image from unsplash.com</p>
                    </div>
                    <div className="header-container">
                        <div className="portrait-container">
                            <Hexagon height="20rem">
                                <img src={Portrait} alt="Portrait" />
                            </Hexagon>
                        </div>
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
                {this.getWaveSvg()}
            </div>
        )
    }
}

export default MainHeader;