import React from "react";
import useStyles from "./styles";
import TabContainer from "react-bootstrap/TabContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Nav } from "react-bootstrap";
import TabPane from "react-bootstrap/TabPane";
import TabContent from "react-bootstrap/TabContent";
function Work() {
  const classes = useStyles();
  return (
    <div className="Work p-5" id="Work">
      <div className="Work__header">
        <h5 className={classes.work__header}>
          <span className={classes.subtitle}>2.</span>Học vấn
        </h5>
      </div>
      <div className="Work__content p-5">
        <TabContainer defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className={classes.linkItem}>
                  <Nav.Link eventKey="first">
                    Trường Đại học Khoa học Tự nhiên tp HCM
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className={classes.linkItem}>
                  <Nav.Link eventKey="second">Học viện CyberSoft</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <TabContent>
                <TabPane eventKey="first">
                  <p>
                    <span>Thời gian : 2018-nay</span>
                    <br />
                    <span>Ngành: Công nghệ Thông tin</span>
                    <br />
                    <span>Năm: 3</span>
                  </p>
                </TabPane>
                <TabPane eventKey="second">
                  <p>
                    <span>Thời gian: 7/2020 - 12/2020</span>
                    <br />
                    <span>Khóa học Lập trình Frontend</span>
                  </p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </div>
    </div>
  );
}

export default Work;
