import React from "react";
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap";
import './dropdown.css';
import Img1 from '../../images/img1.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function DropDown(){

    
    

    return(
        <>
        <div>
            
        <div className="main-dropdown">
            <Row>
               <Col sm={12} md={12} >
               
                   <div className="list-items">
                   <div className="main-sub-parent">
                       <ul style={{marginTop:'revert'}}>
                           <li>Martials Arts
                               <div className="hide-nav" style={{position:"absolute" , right:"53rem"}}>
                                   <ul>
                                       <li><Link to={`/martial-arts/${"karate-uniforms"}` } >Karate Uniforms</Link></li>
                                       <li><Link to={`/martial-arts/${"jiu-jitsu-uniforms"}`}>Jiu Jitsu Uniforms</Link></li>
                                       <li><Link to={`/martial-arts/${"taekwondo-uniforms"}`}>Taekwondo Uniforms</Link></li>
                                       <li><Link to={`/martial-arts/${"kung-fu-uniforms"}`}>Kung Fu Uniforms</Link></li>
                                       <li><Link to={`/martial-arts/${"hakama-uniforms"}`}>Hakama Uniforms</Link></li>
                                       <li><Link to={`/martial-arts/${"belts"}`}>Belts</Link></li>
                                   </ul>
                               </div>
                           </li>
                           <li>Boxing & Arts
                           <div className="hide-nav">
                                   <Row>
                                       <Col sm={12} md={3}>
                                           <div className="nav-links">
                                                <ul>
                                                    <li><h3 style={{fontSize:'18px' ,fontWeight:'bold' ,color:'black'}}>Gloves</h3></li>
                                                    <li>Boxing Gloves</li>
                                                    <li>MMA Gloves</li>
                                                    <li>Bag Gloves</li>
                                                    <li>Grappling Gloves</li>
                                                    <li>karate Mitts</li>
                                                </ul>
                                           </div>
                                       </Col>
                                       <Col sm={12} md={3}>
                                           <div className="nav-links">
                                           <ul>
                                                    <li><h3 style={{fontSize:'18px' ,fontWeight:'bold' ,color:'black'}}>Protective</h3></li>
                                                    <li>Head Guards</li>
                                                    <li>Shin & Instep Guards</li>
                                                    <li>Groin Protectors</li>
                                                    <li>Mouth Guards</li>
                                                    <li>Elbow & Ankle Guards</li>
                                                    <li>Chest Protectors</li>
                                                </ul>
                                           </div>
                                       </Col>
                                       <Col sm={12} md={3}>
                                           <div className="nav-links">
                                           <ul>
                                                    <li><h3 style={{fontSize:'18px' ,fontWeight:'bold',color:'black'}}>Training & Coaching</h3></li>
                                                    <li> Focus Mitts</li>
                                                    <li>Paou Thai</li>
                                                    <li>Kick shield</li>
                                                    <li>Training Knives</li>
                                                    <li>Training Vests</li>
                                                </ul>
                                           </div>
                                       </Col>
                                       <Col sm={12} md={3}>
                                           <div className="nav-links">
                                           <ul>
                                                    <li><h3 style={{fontSize:'18px' ,fontWeight:'bold',color:'black'}}>Punching Bags</h3></li>
                                                    <li> Punching Bags</li>
                                                    <li>Speed Balls</li>
                                                    <li>Medicine Balls</li>
                                                </ul>
                                           </div>
                                       </Col>
                                   </Row>
                               </div>
                           </li>
                           <li>Sports Wear
                           <div className="hide-nav">
                           <Row>
                                       <Col sm={12} md={3}>
                                           <div className="nav-links">
                                                <ul>
                                                    <li><h3 style={{fontSize:'18px' ,fontWeight:'bold',color:'black'}}>Gloves</h3></li>
                                                    <li>Boxing Gloves</li>
                                                    <li>MMA Gloves</li>
                                                    <li>Bag Gloves</li>
                                                    <li>Grappling Gloves</li>
                                                    <li>karate Mitts</li>
                                                </ul>
                                           </div>
                                       </Col>
                                       <Col sm={12} md={3}>
                                           <div className="nav-links">
                                           <ul>
                                                    <li><h3 style={{fontSize:'18px' ,fontWeight:'bold',color:'black'}}>Protective</h3></li>
                                                    <li>Head Guards</li>
                                                    <li>Shin & Instep Guards</li>
                                                    <li>Groin Protectors</li>
                                                    <li>Mouth Guards</li>
                                                    <li>Elbow & Ankle Guards</li>
                                                    <li>Chest Protectors</li>
                                                </ul>
                                           </div>
                                       </Col>
                                       <Col sm={12} md={3}>
                                           <div className="nav-links">
                                           <ul>
                                                    <li><h3 style={{fontSize:'18px' ,fontWeight:'bold',color:'black'}}>Training & Coaching</h3></li>
                                                    <li> Focus Mitts</li>
                                                    <li>Paou Thai</li>
                                                    <li>Kick shield</li>
                                                    <li>Training Knives</li>
                                                    <li>Training Vests</li>
                                                </ul>
                                           </div>
                                       </Col>
                                       <Col sm={12} md={3}>
                                           <div className="nav-links">
                                           <ul>
                                                    <li><h3 style={{fontSize:'18px' ,fontWeight:'bold',color:'black'}}>Punching Bags</h3></li>
                                                    <li> Punching Bags</li>
                                                    <li>Speed Balls</li>
                                                    <li>Medicine Balls</li>
                                                </ul>
                                           </div>
                                       </Col>
                                   </Row>
                               </div>
                           </li>
                           <li>Apparel
                           <div className="hide-nav">
                           <Row>
                                       <Col sm={12} md={3}>
                                           <div className="nav-links">
                                                <ul>
                                                    <li><h3 style={{fontSize:'18px' ,fontWeight:'bold',color:'black'}}>Gloves</h3></li>
                                                    <li>Boxing Gloves</li>
                                                    <li>MMA Gloves</li>
                                                    <li>Bag Gloves</li>
                                                    <li>Grappling Gloves</li>
                                                    <li>karate Mitts</li>
                                                </ul>
                                           </div>
                                       </Col>
                                       <Col sm={12} md={3}>
                                           <div className="nav-links">
                                           <ul>
                                                    <li><h3 style={{fontSize:'18px' ,fontWeight:'bold',color:'black'}}>Protective</h3></li>
                                                    <li>Head Guards</li>
                                                    <li>Shin & Instep Guards</li>
                                                    <li>Groin Protectors</li>
                                                    <li>Mouth Guards</li>
                                                    <li>Elbow & Ankle Guards</li>
                                                    <li>Chest Protectors</li>
                                                </ul>
                                           </div>
                                       </Col>
                                       <Col sm={12} md={3}>
                                           <div className="nav-links">
                                           <ul>
                                                    <li><h3 style={{fontSize:'18px' ,fontWeight:'bold',color:'black'}}>Training & Coaching</h3></li>
                                                    <li> Focus Mitts</li>
                                                    <li>Paou Thai</li>
                                                    <li>Kick shield</li>
                                                    <li>Training Knives</li>
                                                    <li>Training Vests</li>
                                                </ul>
                                           </div>
                                       </Col>
                                       <Col sm={12} md={3}>
                                           <div className="nav-links">
                                           <ul>
                                                    <li><h3 style={{fontSize:'18px' ,fontWeight:'bold',color:'black'}}>Punching Bags</h3></li>
                                                    <li> Punching Bags</li>
                                                    <li>Speed Balls</li>
                                                    <li>Medicine Balls</li>
                                                </ul>
                                           </div>
                                       </Col>
                                   </Row>
                               </div>
                           </li>
                           <li>Sports Gloves
                           <div className="hide-nav" style={{position:'absolute' , right:'6rem'}}>
                                   <ul>
                                       <li>Judo Jitsu</li>
                                       <li>Karate</li>
                                   </ul>
                               </div>
                           </li>
                           <li>Accessories
                           <div className="hide-nav" style={{position:"absolute" , left:'67rem' ,width:'30vh'}}>
                                   <ul>
                                       <li>Judo Jitsu</li>
                                       <li>Karate</li>
                                   </ul>
                               </div>
                           </li>
                       </ul>
                   </div>
                </div>
               </Col>
                {/* Drop Down Lists */}
               
            </Row>
        </div>

        

</div>

       </>
    )
}


export default DropDown;


