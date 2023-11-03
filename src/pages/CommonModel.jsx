import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Headernew } from '../components/UI/Headernew';
import { Footernew } from '../components/UI/Footernew';

const CommonModel = () => {

    const [things, setThings] = useState("1")

    const banner = {
        fade: true,
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 3000,
        autoplaySpeed: 2000,
        autoplay: true,
        beforeChange: (oldIndex, newIndex) => {
            switch (newIndex) {
                case 0:
                    setThings('1')
                    break
                case 1:
                    setThings('2')
                    break
                case 2:
                    setThings('3')
                    break
                default:
            }
        }

    };

    console.log(things);


    return (
        <>
            <Headernew />
            <div className='main-banner-slider'>
                <p className='paginate-slider'> {`${things} / 3`}</p>
                <Row>
                    <Col lg="12">
                        <Slider {...banner}>
                            <div className='slide'>
                                <img className="" src="user_assets/images/home-new/khloe/khloe5.png" alt="" />
                                <div className='content-slide'>
                                    <h1>Khloe Terae</h1>
                                    <Link to='/models' className='explore-modal-btn'>Brand Ambassador</Link>
                                </div>
                            </div>
                            <div className='slide'>
                                <img className="" src="user_assets/images/home-new/jaylene-cook.jpg" alt="" />
                                <div className='content-slide'>
                                    <h1>Private Rooms</h1>
                                    <Link to='/explore' className='explore-modal-btn'>Enter</Link>
                                </div>
                            </div>
                            <div className='slide'>
                                <img className="" src="user_assets/images/home-new/Natalia-Anderson.jpg" alt="" />
                                <div className='content-slide'>
                                    <h1>Taboo Store</h1>
                                    <Link to='/explore' className='explore-modal-btn'>Enter Store</Link>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </div>

            <div className='welcome-taboo-sec'>
                <Container>
                    <Row>
                        <Col lg="4" md="6" sm="6">
                            <div className='modal-slider'>
                                <img className="img-fluid" src="user_assets/images/home-new/Diana7.jpg" alt="" />
                                <div className='content-welcome'>
                                    <h3>TABOO MODEL <br></br>
                                        KHLOE</h3>
                                    <a className='explore-modal-btn'>Explore KHLOE</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="6">

                            <div className='modal-slider'>
                                <img className="img-fluid" src="user_assets/images/home-new/jaylenebikini-stills-1.jpg" alt="" />
                                <div className='content-welcome'>
                                    <h3>TABOO MODEL <br></br>
                                        JAYLENE</h3>
                                    <a href="/models" className='explore-modal-btn'>Explore JAYLENE</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="6">

                            <div className='modal-slider'>
                                <img className="img-fluid" src="user_assets/images/home-new/jaylene-hot-bikini-stills-17.jpg" alt="" />
                                <div className='content-welcome'>
                                    <h3>TABOO MODEL <br></br>
                                        DIANA</h3>
                                    <a href="/models" className='explore-modal-btn'>Explore Diana</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="6">

                            <div className='modal-slider'>
                                <img className="img-fluid" src="user_assets/images/home-new/Natalia-Anderson.jpg" alt="" />
                                <div className='content-welcome'>
                                    <h3>TABOO MODEL <br></br>
                                        NATALIA</h3>
                                    <a href="/models" className='explore-modal-btn'>Explore Natalia</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="6">

                            <div className='modal-slider'>
                                <img className="img-fluid" src="user_assets/images/home-new/Natalia-Anderson.jpg" alt="" />
                                <div className='content-welcome'>
                                    <h3>TABOO MODEL <br></br>
                                        CLAUDIA</h3>
                                    <a href="/models" className='explore-modal-btn'>Explore Claudia</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="6">

                            <div className='modal-slider'>
                                <img className="img-fluid" src="user_assets/images/home-new/Natalia-Anderson.jpg" alt="" />
                                <div className='content-welcome'>
                                    <h3>TABOO MODEL <br></br>
                                        Jenna</h3>
                                    <a href="/models" className='explore-modal-btn'>Explore Jenna</a>
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

export default CommonModel
