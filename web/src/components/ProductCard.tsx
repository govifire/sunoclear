import { Col, Row, Typography } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import { useDeviceSize } from "../utils/useDeviceSize";

const { Text } = Typography;

type Props = {
  readonly productImg: string;
  readonly shortDescription: readonly string[];
};

export const ProductCard = ({ productImg, shortDescription }: Props) => {
  const { isDesktopOrLarger } = useDeviceSize();
  return (
    <Row
      justify="center"
      style={{
        margin: isDesktopOrLarger ? "0px 20px" : "0px 5px",
      }}
      className="product_card"
    >
      <Col>
        <Row style={{ display: "flex", flexDirection: "column" }}>
          <img
            alt=""
            src={productImg}
            height={isDesktopOrLarger ? "150px" : "100px"}
            width={isDesktopOrLarger ? "250px" : "90%"}
            style={{ borderRadius: 5, marginLeft: "5%" }}
          ></img>
        </Row>
        <div style={{ marginTop: 40 }}>
          {shortDescription.map((description) => (
            <Row style={{ marginTop: 10 }}>
              <HeartTwoTone style={{ paddingRight: 10 }} /> <Text style={{ width: "80%" }}>{description}</Text>
            </Row>
          ))}
        </div>
      </Col>
    </Row>
  );
};
