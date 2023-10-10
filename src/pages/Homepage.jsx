import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Headernew } from '../components/UI/Headernew';
import { Footernew } from '../components/UI/Footernew';

const Homepage = () => {
    const [things , setThings] = useState("1")


    const settings = {
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1300,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ],
      
      };
    
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
                                <img className="" src="user_assets/images/home-new/Diana7.jpg" alt="" />
                                <div className='content-slide'>
                                    <h1>Introducing Diana</h1>
                                    <Link to='/models' className='explore-modal-btn'>Explore Diana</Link>
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
                        <Col md="12">
                            <div className='welcome-font'>
                                <h2>Welcome To Taboo</h2>
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
                </Container>
                <Row>
                    <Col md="12">
                    <Slider {...settings}>
                                <div className='modal-slider'>
                                    <img className="img-fluid" src="user_assets/images/home-new/Diana7.jpg" alt="" />
                                    <div className='content-welcome'>
                                        <h3>TABOO MODEL <br></br>
                                            KHLOE</h3>
                                        <a className='explore-modal-btn'>Explore KHLOE</a>
                                    </div>
                                </div>
                            
                                <div className='modal-slider'>
                                    <img className="img-fluid" src="user_assets/images/home-new/jaylenebikini-stills-1.jpg" alt="" />
                                    <div className='content-welcome'>
                                        <h3>TABOO MODEL <br></br>
                                            JAYLENE</h3>
                                        <a href="/models" className='explore-modal-btn'>Explore JAYLENE</a>
                                    </div>
                                </div>
                          
                                <div className='modal-slider'>
                                    <img className="img-fluid" src="user_assets/images/home-new/jaylene-hot-bikini-stills-17.jpg" alt="" />
                                    <div className='content-welcome'>
                                        <h3>TABOO MODEL <br></br>
                                            DIANA</h3>
                                        <a href="/models" className='explore-modal-btn'>Explore Diana</a>
                                    </div>
                                </div>
                           
                                <div className='modal-slider'>
                                    <img className="img-fluid" src="user_assets/images/home-new/Natalia-Anderson.jpg" alt="" />
                                    <div className='content-welcome'>
                                        <h3>TABOO MODEL <br></br>
                                            DIANA</h3>
                                        <a href="/models" className='explore-modal-btn'>Explore Diana</a>
                                    </div>
                                </div>
                            
                        </Slider>
                    </Col>
                </Row>
            </div>
        <Footernew/>   
        </>
    )
}

export default Homepage
