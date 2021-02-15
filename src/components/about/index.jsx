import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useStyles from "../about/styles";
import img from "../../assets/img/ThaoTruong.jpg";
function About() {
  const classes = useStyles();
  return (
    <div className="About" id="About">
      <Row>
        <Col xs={8} className="info__about">
          <div className="px-5 py-5">
            <div className="header__info">
              <span className={classes.miniHeader}>Xin chào, tôi là </span>
              <div className={classes.mainHeader}>
                <p className="m-0">Thảo Trương</p>
                <p>- Software Developer.</p>
              </div>
            </div>
            <div className="main__About">
              <p>
                Tôi hiện đang là sinh viên năm 3 ngành Công nghệ Thông tin
                trường Đại học Khoa học Tự nhiên thành phố Hồ Chí Minh.
                <br />
                Tôi có niềm yêu thích việc tạo ra trang web và xây dựng chức
                năng của chúng.
                <br />
                <br />
                Đây là những framework và ngôn ngữ tôi đã sử dụng và đang tích
                lũy kinh nghiệm:
                <ul>
                  <li>React</li>
                  <li>Angular</li>
                  <li>JavaScript</li>
                  <li>HTML & CSS</li>
                </ul>
              </p>
            </div>
          </div>
        </Col>
        <Col xs={4} className="img__about d-flex align-items-center ">
          <div className={`${classes.imgBlock}`}>
            <div className={classes.imgBorder}></div>
            <div className={` ${classes.img}`}>
              <img src={img} alt="img__portfolio" className={`w-100 `} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;
