import "./DefineCSSClasses.css";
import { Carousel, Col, Row } from "antd"
import bteImg from "../images/BTE-1.png";
import cicImg from "../images/CIC.png";
import ricImg from "../images/RIC-1.png";
import { ProductCard } from "./ProductCard";

export const ProductSlide = () => {
    return (
        <Row id="hearingAids" justify="center">
            <Col span={24}>
              <Carousel autoplay className="carousel-container" dots={{ className: 'carousel-dots' }} slidesToShow={2}>
                <Row className="carousel-slide">
                    <ProductCard productImg={bteImg} shortDescription={["Smartphone  Connectivity", "Custom made, Available according to skin colour compatibility" ]} />
                </Row>
                <Row className="carousel-slide" >
                    <ProductCard productImg={cicImg} shortDescription={["Invisible", "Music Streaming", "Blootooth Connectivity and Microphone Directionality"]} />
                </Row>
                <Row className="carousel-slide">
                    <ProductCard productImg={ricImg} shortDescription={["Receiver In the canal", "Dynamic Speech Clearity", "Rechargeable batteries with high performance"]} />
                </Row>
             </Carousel>
            </Col>
        </Row>
    )
}