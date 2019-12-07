import React, { Component } from 'react'
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

export class Geo extends Component {
    async getCurrentPosition() {
        const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current', coordinates);
      }
    
      watchPosition() {
        const wait = Geolocation.watchPosition({}, (position, err) => {
        })
      }
      
      async getLocation() {
        const position = await Geolocation.getCurrentPosition();
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      }

    render() {
        return (
            <div>
                <h1>latitude : { this.latitude }</h1>
                <h1>longitude : { this.longitude }</h1>
            </div>
        )
    }
}

export default Geo
