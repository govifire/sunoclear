import { Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import { routes } from "../constants/Routes";
import { useDeviceSize } from "../utils/useDeviceSize";
import sunoClearLogo from "../images/suno-clear-logo-2.png";
import { Some } from "../utils/Some";
import AboutUs from "../components/AboutUs";
import { BookHearingAid } from "../components/BookHearingAid";

// If you're trying to style this TopNav - FORGIVE ME!
const getMenuItemPadding = (isTabletOrLarger: boolean, isTinyScreen: boolean) => {
  // Desktop
  if (isTabletOrLarger) {
    return undefined;
  }

  // Tiny mobile
  if (isTinyScreen) {
    return "0 7px";
  }

  // In-between
  return "0 11px";
};

export function TopNav() {
  const { isTabletOrLarger, isTinyScreen } = useDeviceSize();
  const menuItemStyle = { padding: getMenuItemPadding(isTabletOrLarger, isTinyScreen) };
  console.log("isTabletOrLarger:", isTabletOrLarger);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const targetSectionId = event.currentTarget.getAttribute("href");
    if (Some(targetSectionId)) {
      const targetSection = document.querySelector(targetSectionId) as HTMLElement;
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <Row align="stretch" justify={isTabletOrLarger ? "center" : "start"}>
        {!isTinyScreen && (
          <Col className="text-center" span={4}>
            <img src={sunoClearLogo} style={{ height: isTabletOrLarger ? 80 : 30 }} />
          </Col>
        )}
        <Col span={isTinyScreen ? 24 : 20}>
          <Row justify="end">
            <Col>
              <Menu mode="horizontal" selectedKeys={[window.location.pathname]}>
                <Menu.Item key={routes.AboutUs} style={menuItemStyle}>
                  <a href="#aboutUs" onClick={handleMenuClick}>
                    About Us
                  </a>
                </Menu.Item>

                <Menu.Item key={routes.HearingAids} style={menuItemStyle}>
                  <a href="#hearingAids" onClick={handleMenuClick}>
                    Hearing Aids
                  </a>
                </Menu.Item>

                <Menu.Item key={routes.ContactUs} style={menuItemStyle}>
                  <a href="#contactUs" onClick={handleMenuClick}>
                    Contact Us
                  </a>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
