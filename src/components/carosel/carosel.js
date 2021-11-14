import React from "react";
import { Col, Row } from "reactstrap";
import './carosel.css';
import Img1 from '../../images/img1.jpg';
import Img2 from '../../images/img2.jpg';
import Img3 from '../../images/img3.jpg';

let i = 0

function Carosel(){
    const imgArr = [
        Img1,
        Img2,
        Img3
    ]

    function nextBtn(){

        if(i === imgArr.length){
            i = 0
        }else{
            i++
        }
    }

    function backBtn(){

    }

    return(
        <div className="main-slider" >
            <Row>
                <Col sm={12} md={12}>
                    <div className="custom-carusel">
                        <img style={{height:'30rem', width:'79rem' ,display:'block'}} src="/Assets/carosel2.jpg" />
                        <div className="btns">
                            <div className="btn1">
                                <button onClick={backBtn}>back</button>
                            </div>
                            <div className="btn2">
                                <button onClick={nextBtn}>Next</button>
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}


export default Carosel;