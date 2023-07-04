import { Col, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";

const { Text } = Typography;

type Contact = {
  readonly email: string;
  readonly name: string;
  readonly mobileNumber: string;
};

export default function ContactUs() {
  const [contactUsText] = useState<string>("Please reach out to the following people for further queries, thank you.");
  const [contacts, setContacts] = useState<readonly Contact[]>([]);

  useEffect(() => {
    const getContactUs = async () => {
      try {
        const contactsFromDB = [{ email: "gsingh@mt.iitr.ac.in", name: "govind", mobileNumber: "7477221726" }];
        setContacts(contactsFromDB);
      } catch (error) {
        console.log(error);
      }
    };

    getContactUs();
  }, []);

  return (
    <DefaultLayout>
      {contacts.length > 0 ? (
        <>
          <Row justify="start">
            <Col span={12} style={{ marginTop: 30 }}>
              <Text>{contactUsText}</Text>
            </Col>
          </Row>

          <Row justify="center" style={{ marginTop: 20 }}>
            <Col span={6}>
              {" "}
              <b>Name</b>{" "}
            </Col>
            <Col span={6}>
              <b> Email</b>{" "}
            </Col>
            <Col span={6}>
              {" "}
              <b>Mobile number</b>{" "}
            </Col>
          </Row>

          {contacts.map((contact) => (
            <>
              <Row justify="center" style={{ marginTop: 20 }}>
                <Col span={6}> {contact.name}</Col>
                <Col span={6}>{contact.email}</Col>
                <Col span={6}>{contact.mobileNumber}</Col>
              </Row>
            </>
          ))}
        </>
      ) : (
        <Row justify="center">
          {" "}
          <Text>Currently you can not reach out to us, please try after sometime.</Text>
        </Row>
      )}
    </DefaultLayout>
  );
}
