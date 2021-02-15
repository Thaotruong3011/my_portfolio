import React from "react";
import useStyles from "./styles";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FileCopyTwoToneIcon from "@material-ui/icons/FileCopyTwoTone";
import LinkTwoToneIcon from "@material-ui/icons/LinkTwoTone";
import Button from "react-bootstrap/Button";
function Projects() {
  const classes = useStyles();
  return (
    <div className="Projects px-5" id="Projects">
      <div className="Projects__header pb-3">
        <h5 className={classes.Projects__header}>
          <span className={classes.subtitle}>3.</span>Dự án
        </h5>
      </div>
      <div className="Projects__content">
        <Row>
          <Col sm={4} className={`${classes.project_block} p-3`}>
            <div className={classes.IconBlock}>
              <FileCopyTwoToneIcon className={classes.icon} />

              <a
                href="https://github.com/Thaotruong3011/movie_project"
                target="_blank"
              >
                <LinkTwoToneIcon className={classes.icon} />
              </a>
            </div>
            <div className="project__content pt-3">
              <p className={classes.projectName}>Website Đặt vé Xem Phim</p>
              <p>Trang web clone theo trang đặt vé phim Tix.vn</p>
              <span>Xây dựng UI </span>
              <br />
              <span>Code function, gọi API, xử lý đặt vé</span>
              <br />
              <span>Đăng nhập đăng ký tài khoản người dùng</span>
              <div>
                <span className={classes.tech}>HTML</span>
                <span className={classes.tech}>CSS</span>
                <span className={classes.tech}>JavaScript</span>
                <span className={classes.tech}>Redux</span>
                <span className={classes.tech}>API</span>
              </div>
              <Button className={`${classes.btnTest} mt-2`}>
                <a
                  href="https://competent-heisenberg-e1bca7.netlify.app/"
                  target="_blank"
                >
                  Test
                </a>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Projects;
