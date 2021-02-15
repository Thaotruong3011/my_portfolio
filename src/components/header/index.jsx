import React from "react";
import useStyles from "./styles";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import Button from "@material-ui/core/Button";

function Header() {
  const classes = useStyles();

  return (
    <section className="Header">
      <div className={classes.header}>
        <div className="logo" style={{ display: "flex", alignItems: "center" }}>
          <a href="#Header">
            <DeveloperModeIcon className={classes.logo} />
          </a>
        </div>
        <div className="nav-bar">
          <ul className={classes.navBar}>
            <div className={classes.navLinks}>
              <li className={classes.link}>
                <a href="#About" className={classes.a}>
                  Thông tin
                </a>
              </li>
              <li className={classes.link}>
                <a href="#Exp" className={classes.a}>
                  Kinh nghiệm
                </a>
              </li>

              <li className={classes.link}>
                <a href="#Work" className={classes.a}>
                  Học vấn
                </a>
              </li>
              <li className={classes.link}>
                <a href="#Work" className={classes.a}>
                  Dự án
                </a>
              </li>
            </div>
            <div
              className="resume"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Button variant="outlined" className={classes.button}>
                <a
                  href="https://drive.google.com/file/d/1mTcL_PFvlxIF9c6t0rDtRZx91CI6day-/view?usp=sharing"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  CV
                </a>
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
