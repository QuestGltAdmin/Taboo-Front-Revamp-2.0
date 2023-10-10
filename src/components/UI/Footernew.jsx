import React, { useState } from "react";
import { Col, Container, Row, TabContainer } from 'react-bootstrap'
// import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
// import { Connect } from "../../helpers/Connect";
// import { TabooBalance } from "../../helpers/TabooHelper";
// import { TabooPunk } from "../../helpers/TabooPunk";
// import { TierHelper } from "../../helpers/TierHelper";
// import {
//   grantWebsiteAccessAction,
//   loginSaga,
//   logout,
// } from "../../store/reducers/authReducer";
// import { toast } from "react-toastify";

export const Footernew = () => {
  // const dispatch = useDispatch();
  // const [isLoginStart, setIsLoginStart] = useState(false);

  // const handleLogout = async () => {
  //   dispatch(logout({}));
  // };

  // const handleLogin = async () => {

  //   setIsLoginStart(true)
  //   let address = await Connect();
  //   document.addEventListener("ACCOUNT_CONNECTED", async (e) => {
  //     address = e.detail;
  //     if (address) {
  //       let punk = await TabooPunk(address);
  //       let balance = await TabooBalance(address);
  //       let tier = await TierHelper(punk, balance, address);
  //       dispatch(
  //         loginSaga({
  //           address: address,
  //           balance: balance,
  //           tabooPunk: punk,
  //           tier: tier,
  //         })
  //       );
  //       setIsLoginStart(false)
  //     } else {
  //       handleLogout();
  //       setIsLoginStart(false)
  //       toast.warn("Please connect to binance smart chain!")
  //     }
  //   });
  //   if (address) {
  //     let punk = await TabooPunk(address);
  //     let balance = await TabooBalance(address);
  //     let tier = await TierHelper(punk, balance, address);
  //     dispatch(
  //       loginSaga({
  //         address: address,
  //         balance: balance,
  //         tabooPunk: punk,
  //         tier: tier,
  //       })
  //     );
  //     setIsLoginStart(false)
  //   }
  // };

  return (
   <>
   <footer className='footer-new'>
      <Container>
          <Row>
             <Col lg="4">
                <div className='footer-logo-box'>
                   <img alt=""  src="user_assets/images/home-new/Taboo-logoWhite.svg" className="logo" />
                   <h4>THE<b> PLAYBOY</b> OF<b> CRYPTO</b></h4>
                   <div className='social-links-new'>
                     {/* <a href="https://discord.gg/fuYDVuVwnd"> <img alt=""  src="user_assets/images/social-new1.png" className="" /></a> */}
                     <a href="https://instagram.com/taboo.token?igshid=YmMyMTA2M2Y="> <img alt=""  src="user_assets/images/home-new/instagram.png" className="" /></a>
                     {/* <a href="https://t.me/TABOO_OFFICIAL"> <img alt=""  src="user_assets/images/social-new3.png" className="" /></a> */}
                     <a  href="https://mobile.twitter.com/taboo_io" > <img alt=""  src="user_assets/images/home-new/mail.png" className="" /></a>
                     <a  href="https://mobile.twitter.com/taboo_io" > <img alt=""  src="user_assets/images/home-new/twitter.png" className="" /></a>
                   </div>
                </div>
             </Col>
             <Col lg="4">
               <div className="new-quick-link">
                  <ul>
                    <li><Link to="/buycoin">CRYPTO</Link></li>
                    <li><Link to="mailto:support@taboo.io">SUPPORT</Link></li>
                    <li><a
                    // onClick={(e) => {
                    //   handleLogin()
                    // }}
                  >
                    CONNECT WALLET
                  </a></li>
                    <li><Link to="/ModelRegistration">JOIN US</Link></li>
                  </ul>
                  
                  
                  
                  
               </div>
             </Col>
             <Col lg="4">
                <div className="new-quick-link">
                  <ul>
                    <li><Link>NEWSLETTER</Link></li>
                    <li><Link>SUBCRIBE</Link></li>
                    
                  </ul>
                  
                  
                  <div className="email-outer">
                    <input className="form-control" placeholder='Enter Your Email' type="email"/>
                    <button><img alt=""  src="user_assets/images/home-new/send.png"  /></button>
                  </div>
               </div>
             </Col>
          </Row>
      </Container>
   </footer>
   </>
  )
}
