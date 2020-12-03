import React from 'react';
import Weather from './Weather';

export default class Position extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lng: 0,
            isLoaded: true
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            }, (error) => {
                alert(error);
            })
        } else {
            alert('Your geolocation cannot be read.');
        }
    }

    render() {
        const {lat, lng, isLoaded} = this.state;
        if (isLoaded) {
            return (
                <>
                    <h2>Your position is</h2>
                    <p>Position: {lat.toFixed(3)}, {lng.toFixed(3)}</p>
                    <Weather lat={lat} lng={lng}/>
                </>
            )
        } else {
            return (<p>Loading your data...</p>)
        }
    }
}
