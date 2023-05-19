import React, { Component } from 'react'
import Camera from './images/aboutcamera.gif'

export default class AboutUS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutUsTitle: "About Us",
            aboutUsContent: "We are a passionate team of professional photographers dedicated to capturing the magic and beauty of your special day. With years of experience and a deep love for storytelling, we are here to provide you with exceptional wedding photography services that will exceed your expectations."
        };
    }
    render() {
        return (
            <div className='shadow'>
                <div className='row'>
                <div className='col m2'></div>
                <div className='col m8 s12 about-us'>
                    <p className='one col m12 s12'>{this.state.aboutUsTitle}</p>
                    
                    <div className='col m12 s12 about-us'>
                        <div className='row aboutuscontentrow'>
                            <div className='col m4 s3'>
                                <img className='aboutusimage' src={Camera} />
                            </div>
                            <div className='col m8 s9 aboutuscontent'>
                                <p className='aboutuscontent'>{this.state.aboutUsContent}</p>
                            </div>
                        </div>
                    </div>
                    

                </div>
                <div className='col m2'></div>
                </div>

            </div>
        )
    }
}
