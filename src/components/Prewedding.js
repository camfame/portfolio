import React, { Component } from 'react'
import { PW01, PW03, PW05 } from './images';
import M from 'materialize-css'

const a = {
    pw01: [PW03],
    pw03: [PW01],
    pw05: [PW05],
};

export default class Prewedding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preweddingTitle: "Pre-wedding portraits",
        };
    }

    componentDidMount(){
        var mb = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(mb,{

      })
    }
    render() {
        return (
            <div className='preWedding'>
                <div className='row'>
                    <div className='wrapper'>

                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    
                    <div className='row'>
                        <div className='col m2'></div>
                        <div className='col m8 s12 about-us'>
                            <p className='two col m12 s12'>{this.state.preweddingTitle}</p>
                        </div>
                        <div className='col m2'></div>
                    </div>

                    <div className='row'>
                        {/* <div className='m4 s6'></div> */}

                        {Object.entries(a).length > 0 &&
                            Object.entries(a).map(([key, value]) => {
                                return <div className='col m4 s6' key={value[0]}>
                                    <div className='prewedimagecontainer'>
                                        <img className='materialboxed responsive-img prewedimage' src={value[0]} />
                                    </div>
                                </div>
                            })
                        }
                    </div>

                    <div className='row'></div>
                    
                    </div>
                </div>
            </div>
        )
    }
}


{/* <Modal modalImage={this.state.photos.one}/> */}