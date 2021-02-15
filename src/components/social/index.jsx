import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import useStyles from "./styles.js";
function Social() {
  const classes = useStyles();
  return (
    <div className="social">
      <ul className={classes.listSocial}>
        <li className={classes.li}>
          <a
            href="https://github.com/Thaotruong
3011"
            target="_blank"
            className={classes.a}
          >
            <GitHubIcon />
          </a>
        </li>
        <li className={classes.li}>
          <a
            href="https://linkedin.com/in/thảo-trương-36a848187"
            target="_blank"
            className={classes.a}
          >
            <LinkedInIcon />
          </a>
        </li>
        <li className={classes.li}>
          <a
            href="https://www.facebook.com/thaotruonggl30/"
            target="_blank"
            className={classes.a}
          >
            <FacebookIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
