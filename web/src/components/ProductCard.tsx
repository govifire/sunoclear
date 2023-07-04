import { Col, Row, Typography } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

const { Text } = Typography;

type Props = {
  readonly productImg: string;
  readonly shortDescription: readonly string[];
};

export const ProductCard = ({ productImg, shortDescription }: Props) => {
  return (
    <Row justify="center" style={{ display: "flex", marginLeft: 20, marginTop: 30 }} >
      <Col>
        <Row>
          <img alt="" src={productImg} height= "150px" width="250px" style={{ borderRadius: 5, marginLeft: 40 }}></img>
        </Row>
        <div style={{ marginTop: 40 }}>
        {shortDescription.map((description) => (
          <Row style={{ marginTop: 10 }}>
            <HeartTwoTone style={{ paddingRight: 10 }} /> <Text style={{ width: "80%"}}>{description}</Text>
          </Row>
        ))}
        </div>
      </Col>
    </Row>
  );
};
