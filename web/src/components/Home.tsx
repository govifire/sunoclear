import { Col, Row, Typography } from "antd";
import React, { useState } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import hearingAidImage from "../images/hearing-aid.png";
import { BookHearingAid } from "./BookHearingAid";
import AboutUs from "./AboutUs";
import { ProductSlide } from "./ProductSlide";

const { Text } = Typography;

export default function Home() {
  return (
    <DefaultLayout>
      <Row>
        <Col span={12} style={{ display: "flex", flexDirection:"column", textAlign: "center", verticalAlign: "middle", marginTop: 20 }}>
          <Text style={{ fontSize: 30, color: "#499898", textAlign: "center" }}>
            {" "}
            Digital Hearing Aid By Suno Clear{" "}
          </Text>
          <img
            src={hearingAidImage}
            alt="hearing-aid image"
            style={{ height: "70%", borderRadius: 10, marginTop: 20 }}
          ></img>
        </Col>
        <Col span={12}>
          <BookHearingAid></BookHearingAid>
        </Col>
      </Row>
      <Row id="aboutUs" justify={"center"} style={{ marginTop: 30, marginBottom: 30 }}>
        <Col style={{ width: "100%", textAlign: "center" }}>
          <AboutUs />
        </Col>
      </Row>
      <ProductSlide />
    </DefaultLayout>
  );
}
