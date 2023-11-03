import React, { useRef, useEffect , useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Headernew } from '../components/UI/Headernew';
import { Footernew } from '../components/UI/Footernew';
import HoverObserver from 'react-hover-observer';
const IndividuaModel = () => {
    // ======== image reveal code start ======== //
    const [position, setPosition] = useState({  top: 0 });

    const handleMouseMove = (e) => {
        console.log("e", e);

        setPosition({
            // left: e.clientX,
            top: e.clientY - 120,
        });
    };


        // const [position, setPosition] = useState({ left: 0, top: 0 });
      
        // const handleMouseMove = (e) => {
        //   setPosition({
        //     left: e.pageX - 120,
        //     top: e.pageY - 80,
        //   });
        // };
      
        // const containedStyle = {
        //   position: 'relative',
        //   width: '300px',
        //   height: '400px',
        // };
      
        // const highlightRegionStyle = {
        //   position: 'absolute',
        //   left: position.left + 'px',
        //   top: position.top + 'px',
        //   width: '50px', // Adjust this as needed
        //   height: '50px', // Adjust this as needed
        //   backgroundPosition: `${-position.left}px ${-position.top}px`,
        // };

// // Get references to the container and the highlight region elements
// var imageHop = document.querySelector(".imageHop");
// var highlightRegion = document.querySelector(".highlight-region");

// // Add a 'mousemove' event listener to the container
// imageHop.addEventListener('mousemove', function(e) {
//     // Get the left property value of the highlight region element
//     var leftValue = getComputedStyle(highlightRegion).getPropertyValue("left");

//     // Calculate the new CSS properties
//     var newLeft = e.pageX - 120 + "px";
//     var newTop = e.pageY - 80 + "px";
//     var backgroundPosition = (-e.pageX + 120) + 'px ' + (-e.pageY + 80) + 'px';

//     // Update the CSS properties of the highlight region
//     highlightRegion.style.left = newLeft;
//     highlightRegion.style.top = newTop;
//     highlightRegion.style.backgroundPosition = backgroundPosition;

//     // Log the left property value
//     console.log(leftValue);
// });

    
    return (
        <>
            <Headernew />
            <div className='main-banner-slider invidual-images'>
                <Row>
                    <Col lg="12">
                        <div className='slide'>
                            <img className="khloe-modal-image" src="user_assets/images/home-new/khloe/khloe6.png" alt="" />
                            <div className='content-slide'>
                                <h1>Khloe Terae</h1>
                                <Link to='/models' className='explore-modal-btn'>Explore Khloe</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='welcome-taboo-sec'>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className='welcome-font'>
                                <h2>Khloe Terae</h2>
                                <Row>
                                    <Col md="6">
                                        <p>At TABOO, nothing is forbidden. We aim to promote personal empowerment, inspiring our holders to be confident, happy, and excited to explore their
                                            taboo fAt TABOO, nothing is forbidden. We aim to promote personal empowerment, inspiring our holders to be confident, happy, and excited to
                                            explore their taboo fantasies. Put simply, Taboo will not only be a platform to discover adult content from carefully selected models, </p>
                                    </Col>
                                    <Col md="6">
                                        <p>but also a gateway
                                            to some of the world’s most beautiful NFTs, with a beautiful TABOO Metaverse to come. The best bit? That would be the full integration of NFT
                                            blockchain technology, the fiat on-ramp for easy purchase, breath-taking Virtual Reality experiences and the finest content, making Taboo a genuine
                                            market disruptor within the adult industry. At TABOO, nothing is forbid.</p>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="4">
                        {/* <div className="contained" style={containedStyle} onMouseMove={handleMouseMove}>
      <div className="highlight-region" style={highlightRegionStyle}></div>
    </div> */}
                        </Col>
                        <Col lg="4" md="6" sm="6">



                            {/* <div
                                className="hover-container"
                                onMouseMove={handleMouseMoveq}
                            >
                                <div
                                    className="circle"
                                    style={{ left: `${circlePosition.x}px`, top: `${circlePosition.y}px` }}
                                >
                                    <img
                                        src="../public/user_assets/images/home-new/khloe/khloe.jpg"
                                        alt="Revealed Image"
                                        className="revealed-image"
                                    />
                                </div>
                            </div> */}
                            <div className='individual-modal'>
                                <div
                                    class="scene"
                                    onMouseMove={(e) => {
                                        handleMouseMove(e);
                                    }}
                                >
                                    <div
                                        className="magic"
                                        style={{ position: "absolute",  top: position.top, background: "url('../public/user_assets/images/home-new/khloe/khloe1.jpg')    no-repeat fixed" }}
                                    >

                                    </div>
                                </div>






                                <div className='outer-content'>
                                    <div className='row'>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                Highest Bid
                                            </div>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                New Bid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='inner-content'>
                                    <h4>Khloe 01</h4>
                                    <h3>2000 TABOO</h3>
                                </div>

                            </div>







                        </Col>
                        <Col lg="4" md="6" sm="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />

                                </div>
                                <div className='inner-content'>
                                    <h4>Khloe 01</h4>
                                    <h3>2000 TABOO</h3>
                                </div>
                                <div className='outer-content'>
                                    <div className='row'>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                Highest Bid
                                            </div>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                New Bid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe2.jpg" alt="" />

                                </div>
                                <div className='inner-content'>
                                    <h4>Khloe 01</h4>
                                    <h3>2000 TABOO</h3>
                                </div>
                                <div className='outer-content'>
                                    <div className='row'>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                Highest Bid
                                            </div>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                New Bid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />
                                    <ul className='shutter-section'>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className='inner-content'>
                                    <h4>Khloe 01</h4>
                                    <h3>2000 TABOO</h3>
                                </div>
                                <div className='outer-content'>
                                    <div className='row'>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                Highest Bid
                                            </div>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                New Bid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />
                                    <ul className='shutter-section'>
                                    <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className='inner-content'>
                                    <h4>Khloe 01</h4>
                                    <h3>2000 TABOO</h3>
                                </div>
                                <div className='outer-content'>
                                    <div className='row'>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                Highest Bid
                                            </div>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                New Bid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />
                                    <ul className='shutter-section'>
                                    <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className='inner-content'>
                                    <h4>Khloe 01</h4>
                                    <h3>2000 TABOO</h3>
                                </div>
                                <div className='outer-content'>
                                    <div className='row'>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                Highest Bid
                                            </div>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                New Bid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />
                                    <ul className='shutter-section'>
                                    <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className='inner-content'>
                                    <h4>Khloe 01</h4>
                                    <h3>2000 TABOO</h3>
                                </div>
                                <div className='outer-content'>
                                    <div className='row'>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                Highest Bid
                                            </div>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                New Bid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />
                                    <ul className='shutter-section'>
                                    <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className='inner-content'>
                                    <h4>Khloe 01</h4>
                                    <h3>2000 TABOO</h3>
                                </div>
                                <div className='outer-content'>
                                    <div className='row'>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                Highest Bid
                                            </div>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                New Bid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />
                                    <ul className='shutter-section'>
                                    <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className='inner-content'>
                                    <h4>Khloe 01</h4>
                                    <h3>2000 TABOO</h3>
                                </div>
                                <div className='outer-content'>
                                    <div className='row'>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                Highest Bid
                                            </div>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <div className='bid-box'>
                                                New Bid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footernew />
        </>
    )
}

export default IndividuaModel
