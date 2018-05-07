import React, { Component } from 'react';

var $S = require('scriptjs');

class SimpleGoogleMaps extends Component {
  constructor(props){
    super(props);

    this.state = {
      mapLoaded: false
    };
  }

  componentDidMount(){
    window.google ? this.setState({
      mapLoaded:true
    }) :
    $S(`https://maps.googleapis.com/maps/api/js?key=${this.props.apiKey}`, () => {
      this.setState({
        mapLoaded:true
      });
    });
  }

  render(){
    if(this.state.mapLoaded){
      var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: this.props.zoom,
        center: {
          lat: this.props.center.lat,
          lng: this.props.center.lng
        }
      });
      if(this.props.marker){
        if(Array.isArray(this.props.marker)){
          for(let i of this.props.marker){
            new google.maps.Marker({
              position: i,
              map: map,
            });
          }
        }else{
          new google.maps.Marker({
            position: this.props.marker,
            map: map,
          });
        }
      }
    }
    return (
      <div id='map' style={this.props.style}></div>
    );
  }
}

export default SimpleGoogleMaps;
