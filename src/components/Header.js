import React, { Component } from 'react'
import HeaderImage from './images/header.jpg'
import "materialize-css/dist/css/materialize.min.css";
import $ from 'jquery'

import { FILM, CAMERA } from './images'

export default class Header extends Component {
  componentDidMount(){
    this.closeLoaderIn5Seconds() 
    // $(window).on('load', function() {$('#loaderbox').fadeOut("slow");  });
  }
  constructor(props) {
    super(props);
    this.state = {
        theTitle: "THE",
        contentTitle: "CAMFAME",
        showLoader: true,
        fadeOut: false
    };
  }

  closeLoaderIn5Seconds = () => {
    const loader = document.querySelector('.loaderbox');

  if (loader) {
    loader.style.opacity = '1'; // Set initial opacity

    setTimeout(() => {
      loader.style.opacity = '0'; // Fade out the loader

      setTimeout(() => {
        this.setState({ showLoader: false }); // Hide the loader after the animation
      }, 1500); // Wait for the fade animation duration
    }, 3000); // Wait for the initial delay
  }
}

  render() {
    return (
      <div>
        {/* Loader */}
        {this.state.showLoader &&
          <div className={`loaderbox ${this.state.fadeOut ? 'fade-out' : ''}`}>
            <div class="loader">
              <div class="loader__container">
                <div class="loader__film">
                  <img class="loader__film-img" src={FILM} alt="" />
                  <img class="loader__film-img" src={FILM} alt="" />
                </div>
                <img class="loader__camera" src={CAMERA} alt="" />
              </div>
              <p className='blink-soft loadingtext'>Loading...</p>
            </div>
          </div>
        }

        {/* Header */}
        <div className = "head-text">
          <div className = "head-image">
            <img className='header-background' src = {HeaderImage} alt = "Freedom Blog" />
          </div>
          <div className="center_text">
            <h4 className='text-shadow'>{this.state.theTitle}</h4>
            <h3 className='text-shadow'>{this.state.contentTitle}</h3>
          </div>
        </div>
      </div>
    )
  }
}
