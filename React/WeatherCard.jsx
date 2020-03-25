import React, { Component } from 'react'

export default class WeatherCard extends Component {
    render() {
        return (
            <div>
               <div key={this.props.id}>
                   <h1>{this.props.name}</h1>
                   <span><img src={this.props.imgPath} /></span>
                   {this.props.temp}
                   </div> 
            </div>
        )
    }
}
