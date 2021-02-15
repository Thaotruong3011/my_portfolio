import React from "react";
import useStyles from "./styles";
function Email() {
  const classes = useStyles();
  return (
    <div className={classes.email}>
      <a className={classes.a} href="mailto:thaotruonggl30@gmail.com">
        Thaotruonggl30@gmail.com
      </a>
    </div>
  );
}

export default Email;
