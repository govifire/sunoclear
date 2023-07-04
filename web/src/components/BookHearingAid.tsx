import "./DefineCSSClasses.css";
import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import { useState } from "react";
import { useApi } from "../utils/useApi";
import { useDefaultErrorHandler } from "../utils/useDefaultErrorHandler";

const { Text } = Typography;

type BookHearingAid = {
  readonly email?: string;
  readonly name: string;
  readonly mobileNumber: string;
  readonly userProblem?: string;
};

const values = {
  email: "",
  name: "",
  mobileNumber: "",
  userProblem: "",
};

export const BookHearingAid = () => {
  const [form] = Form.useForm<BookHearingAid>();
  const { hearingAidClient } = useApi();
  const { errorHandler } = useDefaultErrorHandler();
  const [hasBooked, setHasBooked] = useState(false);
  const [personName, setPersonName] = useState("");

  const submit = async (formValues: BookHearingAid) => {
    try {
      await hearingAidClient.bookFreeHearingAidTrial({
        email: formValues.email?.trim(),
        name: formValues.name.trim(),
        mobileNumber: formValues.mobileNumber.trim(),
        userProblem: formValues.userProblem?.trim(),
      });
      setHasBooked(true);
      setPersonName(formValues.name.trim());
    } catch (error: unknown) {
      errorHandler(error);
    }
  };

  return (
    <>
      <Row
        justify="center"
        style={{
          backgroundImage: "linear-gradient(to bottom, #7eece8, #131c1c)",
          borderRadius: 20,
          paddingLeft: 20,
          paddingRight: 20,
          marginLeft: 10,
          marginTop: 30,
          width: "100%",
        }}
      >
        <Col span={24} style={{ marginTop: 20, marginBottom: 20 }}>
          <Row justify="center">
            <Text style={{ fontSize: 20, color: "black" }}>Book a Free Hearing Aid Trial </Text>
          </Row>
          <Row justify="center" style={{ marginTop: 20, width: "100%" }}>
            {hasBooked ? (
              <Row justify="center" align="middle" className="welcome_screen">
                <Col className="fade-in" span={12}>
                  <h2>Welcome, {personName}!</h2>
                  <p>Thank you for booking a hearing aid trial.</p>
                  <p>We look forward to assisting you in your journey to better hearing.</p>
                  <p>Please proceed to our reception area for further instructions.</p>
                </Col>
              </Row>
            ) : (
              <Form form={form} initialValues={values} layout="vertical" onFinish={submit} style={{ width: "100%" }}>
                <Form.Item name="name" required={false} rules={[{ message: "Please enter your name", required: true }]}>
                  <Input placeholder="Please enter your name" style={{ height: 40 }} />
                </Form.Item>
                <Form.Item
                  name="mobileNumber"
                  required={false}
                  rules={[{ message: "Please enter your mobile number", required: true }]}
                >
                  <Input placeholder="Please enter your mobile number" style={{ height: 40 }} />
                </Form.Item>
                <Form.Item name="email" required={false}>
                  <Input placeholder="Please enter your mobile email (Optional)" style={{ height: 40 }} />
                </Form.Item>
                <Form.Item name="userProblem" required={false}>
                  <Input placeholder="Please explain us your problem" style={{ height: 60 }} />
                </Form.Item>
                <Form.Item required={true}>
                  <Checkbox checked>I authorize Suno clear to contact me.</Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" style={{ background: "orange", width: "100%" }}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
};
