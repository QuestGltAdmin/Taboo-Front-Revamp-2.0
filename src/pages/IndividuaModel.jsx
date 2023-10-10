import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Headernew } from '../components/UI/Headernew';
import { Footernew } from '../components/UI/Footernew';

const IndividuaModel = () => {
    // const magicRef = useRef();

    // const [position, setPosition] = useState({ left: 0, top: 0 });

    // const handleMouseMove = (e) => {
    //   const magicWHalf = magicRef.current.clientWidth / 2;
    //   setPosition({
    //     left: e.pageX - magicWHalf,
    //     top: e.pageY - magicWHalf,
    //   });
    // };

    return (
        <>
            <Headernew />
            <div className='main-banner-slider'>
                <Row>
                    <Col lg="12">
                        <div className='slide'>
                            <img className="" src="user_assets/images/home-new/khloe/khloe.jpg" alt="" />
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
                        {/* <Col lg="4">
                            <div
                                className="magic"
                                ref={magicRef}
                                style={{ position: 'absolute', left: position.left, top: position.top }}
                            >
                                {/ Magic content /}
                            </div>
                        </Col> */}
                        <Col lg="4" md="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe4.jpg" alt="" />

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
                        <Col lg="4" md="6">
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
                        <Col lg="4" md="6">
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
                        <Col lg="4" md="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />
                                    <ul className='shutter-section'>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
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
                        <Col lg="4" md="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />
                                    <ul className='shutter-section'>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
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
                        <Col lg="4" md="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />
                                    <ul className='shutter-section'>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
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
                        <Col lg="4" md="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />
                                    <ul className='shutter-section'>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
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
                        <Col lg="4" md="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />
                                    <ul className='shutter-section'>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
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
                        <Col lg="4" md="6">
                            <div className='individual-modal'>
                                <div className='image-shutter'>
                                    <img className="img-fluid" src="user_assets/images/home-new/khloe/khloe1.jpg" alt="" />
                                    <ul className='shutter-section'>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
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
