import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            viewport: {
                width: 500,
                height: 300,
                latitude: 8.555216,
                longitude: -11.322184,
                zoom: 5,
                minZoom: 2,
                pitch: 0,
                bearing: 0
            }
        };
    }

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
            />
        );
    }
}

export default Index
