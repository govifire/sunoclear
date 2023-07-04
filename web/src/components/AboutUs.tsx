import { Col, Row, Typography } from "antd";
import { useState } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";

const { Text } = Typography;

export default function AboutUs() {
  const [aboutUsText] = useState<string>("We are in the begining phase, join us and make the India better.");
  //   setAboutUsText("We are in the begining phase, join us and make the India better.");

  return (
    <Row
      justify="center"
      style={{
        // backgroundColor: "#f5f5f5",
        // border: "2px solid #ccc",
        minHeight: 200,
        padding: 10,
        borderRadius: 6,
        outline: "none",
        transition: "border-color 0.3s ease",
        width: "100%",
      }}
    >
      <Row justify="start" style={{ padding: 20, margin: 20 }}>
        <Col>
          <h1 style={{ fontSize: 20, fontFamily: "Arvo, sans-serif", textAlign: "left" }}><b>Try SunoClear and regain Hearing together!</b></h1>
          <p style={{ fontSize: 18, fontFamily: "Arvo, sans-serif", fontStretch: "expanded", textAlign: "left" }}>
            At <b>SunoClear</b>, we are dedicated to improving the quality of life for individuals with hearing
            impairments. We understand the profound impact that hearing loss can have on one's daily life,
            relationships, and overall well-being. Our mission is to provide innovative and personalized solutions that
            empower people to reconnect with the world of sound and regain their ability to communicate effectively.{" "}
          </p>

          <p style={{ fontSize: 18, fontFamily: "Arvo, sans-serif", fontStretch: "expanded", textAlign: "left" }}>
            With 4 years of experience in the industry, our team of skilled professionals is passionate about helping
            individuals overcome the challenges of hearing loss. We specialize in offering a comprehensive range of
            advanced hearing aid technologies and services tailored to meet the unique needs and preferences of each
            individual.{" "}
          </p>

          <p style={{ fontSize: 18, fontFamily: "Arvo, sans-serif", fontSmooth: "always", fontStretch: "expanded", textAlign: "left" }}>
            We take pride in staying up-to-date with the latest advancements in hearing aid technology. By partnering
            with leading manufacturers, we offer a wide selection of cutting-edge devices that combine superior
            performance, comfort, and style. Our goal is to ensure that our clients have access to the most effective
            and discreet solutions that enhance their hearing experience and seamlessly integrate into their lifestyle.
          </p>

          <p style={{ fontSize: 18, fontFamily: "Arvo, sans-serif", fontStretch: "expanded", textAlign: "left" }}>
            At <b>SunoClear</b>, we value transparency, integrity, and personalized service. We take the time to listen
            to your concerns, understand your specific hearing needs, and provide honest recommendations based on our
            expertise. Our goal is to build lasting relationships with our clients, supporting them on their journey to
            better hearing and improved quality of life.{" "}
          </p>

          <p style={{ fontSize: 18, fontFamily: "Arvo, sans-serif", fontStretch: "expanded", textAlign: "left" }}>
            Discover the difference that better hearing can make. Contact us today to schedule a consultation and take
            the first step towards regaining your hearing and reconnecting with the world around you.
          </p>
        </Col>
      </Row>
    </Row>
  );
}
