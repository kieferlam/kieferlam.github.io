import React from 'react';
import './MainHeader.scss';

import Portrait from '../media/img/portrait.png';

class MainHeader extends React.Component{
    render(){
        return (
        <div>
            <div className="portrait-container">
                <img src={Portrait} alt="Portrait" />
            </div>
        </div>
        )
    }
}

export default MainHeader;