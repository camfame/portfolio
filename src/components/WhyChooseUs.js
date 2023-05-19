import React, { Component } from 'react'
import WhyChooseUsImage from './images/whychooseus.jpg'

export default class WhyChooseUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutUsTitle: "Why Choose Us?",
            aboutUsContent: "At Camfame we understand that your wedding day is one of the most important moments in your life. Our mission is to preserve those precious moments, allowing you to relive the emotions and the essence of your wedding day for years to come. What sets us apart is our commitment to capturing the unique story of each couple we work with.",
            bullets: {
                "one": "From the initial consultation to the final delivery of your wedding album, we are dedicated to delivering a personalized and top-notch service.",
                "two": "We use state-of-the-art equipment and editing techniques to ensure that every photography we deliver is of the highest quality.",
                "three": "Our attention to detail and commitment to excellence is what sets us apart."
            }            
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
                                <img className='aboutusimage' src={WhyChooseUsImage} />
                            </div>
                            <div className='col m8 s9 aboutuscontent'>
                                <p className='aboutuscontent'>{this.state.aboutUsContent}</p>
                                <ol style={{ listStyleType: 'disc' }}>
                                    <li>{this.state.bullets.one}</li>
                                    <li>{this.state.bullets.two}</li>
                                    <li>{this.state.bullets.three}</li>
                                </ol>
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
