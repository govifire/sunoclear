import { Col, Row } from "antd";
import { ReactNode } from "react";
import { useDeviceSize } from "../utils/useDeviceSize";

type Props = {
  readonly children: ReactNode;
};

export function Wrapper({ children }: Props) {
  const { isTabletOrLarger } = useDeviceSize();

  return (
    <Row justify="center">
      <Col style={{ width: isTabletOrLarger ? 768 : "100%" }}>{children}</Col>
    </Row>
  );
}
