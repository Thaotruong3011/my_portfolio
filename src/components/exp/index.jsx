import React from "react";
import useStyles from "./styles";

function Experience() {
  const classes = useStyles();
  return (
    <div className="Exp p-5" id="Exp">
      <div className="Exp__header">
        <h5 className={classes.exp__header}>
          <span className={classes.subtitle}>1.</span>Kinh Nghiệm Làm Việc
        </h5>
      </div>
      <div className="exp__content">
        <p>Chưa có kinh nghiệm làm việc.</p>
      </div>
    </div>
  );
}

export default Experience;
