import React, { Component } from 'react'
import ContactImage from './images/contactus.gif'

export default class ContactUS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactUsTitle: "Make it happen",            
        };
    }
    render() {
        return (
            <div className='shadow'>
                <div className='row'>
                <div className='col m2'></div>
                <div className='col m8 s12 about-us'>
                    <p className='one col m12 s12'>{this.state.contactUsTitle}</p>
                    
                    <div className='col m12 s12 about-us'>
                        <div className='row contactcontent'>
                            <ul>
                                <li><a href="https://m.facebook.com/profile.php?id=100092586198112&mibextid=LQQJ4d" target='blank'></a></li>
                                <li><a href="https://www.instagram.com/thecamfame/" target='blank'></a></li>
                                <li><a href="https://wa.me/919726354549/?text=Hello%20Camfame"></a></li>
                                <li><a href="mailto:camfame.create@gmail.com"></a></li>
                                <li><a href="tel:+919726354549"></a></li>
                            </ul>
                        </div>

                        {/* <img src='http://drive.google.com/uc?export=view&id=1IbTHDjkkNiFW4b5XXJoqDqgoM9LxyVQx' /> */}
                    </div>

                </div>
                <div className='col m2'></div>
                </div>

            </div>
        )
    }
}
