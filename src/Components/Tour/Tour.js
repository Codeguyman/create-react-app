import React, { Component } from 'react';
import "./Tour.scss";

export default class Tour extends Component {

    state = {
        showInfo:false
    };

    handleinfo = () => {
        this.setState ( {
        showInfo : !this.state.showInfo }
        ) }

    
    render() {

        const{id, city, img , name, info } = this.props.tour;
        const{removeTour} = this.props
        return (
          <article className='tour'>
              <div className="img-container">
                  <img src={img} alt="image of the tour" />
                  <span className="close-btn" onClick = {() => removeTour(id)}>
                      <i className="fas fa-window-close" />
                  </span> </div>
                  <div className="tour-info">
                    <h3>{city}</h3>
                    <h3>{name}</h3>
                    <h5>
                        info{""}
                        <span onClick={this.handleinfo}>
                            <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                    <p>{this.state.showInfo && info}</p>
              </div>
               
          </article>
        )
    }
}
