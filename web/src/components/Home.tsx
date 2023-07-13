import { Col, Row, Typography } from "antd";
import { DefaultLayout } from "../layouts/DefaultLayout";
import hearingAidImage from "../images/hearing-aid.png";
import { BookHearingAid } from "./BookHearingAid";
import AboutUs from "./AboutUs";
import { ProductSlide } from "./ProductSlide";
import { useDeviceSize } from "../utils/useDeviceSize";

const { Text } = Typography;

export default function Home() {
  const { isDesktopOrLarger } = useDeviceSize();
  const selectedFlexDirection = isDesktopOrLarger ? "row" : "column";
  return (
    <DefaultLayout>
      <Row style={{ display: "flex", flexDirection: `${selectedFlexDirection}`, alignItems: "center" }}>
        <Col
          span={isDesktopOrLarger ? 12 : 24}
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            verticalAlign: "middle",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: isDesktopOrLarger ? 30 : 20, color: "#499898" }}>
            {" "}
            Digital Hearing Aid By Suno Clear{" "}
          </Text>
          <img
            src={hearingAidImage}
            alt="hearing-aid image"
            style={{ height: "70%", maxWidth: isDesktopOrLarger ? "100%" : "80%", borderRadius: 10, marginTop: 20 }}
          ></img>
        </Col>
        <Col span={isDesktopOrLarger ? 12 : 24} style={{ alignItems: "center" }}>
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
