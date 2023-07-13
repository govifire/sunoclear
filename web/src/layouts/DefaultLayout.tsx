import "../components/DefineCSSClasses.css";
import { Col, Layout, Menu, Row, Typography } from "antd";
import { TopNav } from "./TopNav";
import { Wrapper } from "./Wrapper";
import { useDeviceSize } from "../utils/useDeviceSize";
import React from "react";
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";

const { Content, Footer, Header, Sider } = Layout;
const { Text } = Typography;

type Props = {
  readonly children: React.ReactNode;
};

export function DefaultLayout({ children }: Props) {
  const { isTabletOrLarger } = useDeviceSize();

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/sunoclear/", "_blank");
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          position: "fixed",
          left: 0,
          top: "42%",
          backgroundColor: "white",
          zIndex: 1,
        }}
        width="50px"
      >
        <Menu
          style={{
            backgroundColor: "#346363",
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
            // transition: "border-color 0.3s ease",
          }}
        >
          <Menu.Item
            key="1"
            icon={<InstagramOutlined style={{ fontSize: '30px' }} />}
            onClick={handleInstagramClick}
            style={{ paddingLeft: '10px', paddingTop: "5px" }}
            className="social_media_icon"
          >
            Instagram
          </Menu.Item>
          <Menu.Item
            key="1"
            icon={<FacebookOutlined style={{ fontSize: '30px' }} />}
            onClick={handleInstagramClick}
            style={{ paddingLeft: '10px', paddingTop: "5px" }}
            className="social_media_icon"
          >
            FaceBook
          </Menu.Item>
          <Menu.Item
            key="1"
            icon={<WhatsAppOutlined style={{ fontSize: '30px' }} />}
            onClick={handleInstagramClick}
            style={{ paddingLeft: '10px', paddingTop: "5px" }}
            className="social_media_icon"
          >
            WhatsApp
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
        <Header style={{ background: "#346363", textAlign: "center" }}>
          <Text style={{ color: "black" }}>
            <b>Contact-us: 07477221726</b>
          </Text>
        </Header>
        <Header
          style={{
            alignSelf: "center",
            background: "white",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderBlockStart: "unset",
            padding: "0 20px",
            width: "100%",
          }}
        >
          <Wrapper>
            <TopNav />
          </Wrapper>
        </Header>

        <Content style={{ background: "white", padding: isTabletOrLarger ? "24px 50px" : 24 }}>
          <Row justify="center" style={{ margin: "0 auto", maxWidth: 1200 }}>
            <Col span={24}>{children}</Col>
          </Row>
        </Content>

        <Footer id="contactUs" style={{ backgroundColor: "#346363", marginTop: 40 }}>
          <Row style={{ textAlign: "left" }}>
            <Col>
              <h3>Contact Us</h3>
              <p>Name: Govind Thakur</p>
              <p>Email: gsingh@mt.iitr.ac.in</p>
              <p>Phone: +91 7477221726</p>
            </Col>
          </Row>
          <Row justify="center">
            <Col>&copy; Suno Clear Indian Inc.</Col>
          </Row>
        </Footer>
      </Layout>
    </Layout>
  );
}
