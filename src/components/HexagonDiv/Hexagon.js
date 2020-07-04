import React from 'react';
import './Hexagon.scss';

class Hexagon extends React.Component {
    render() {
        var hex3style = {
            height: this.props.height
        }
        return (
            <div className="hex-1">
                <div className="hex-2">
                    <div className="hex-3" style={hex3style}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Hexagon;