import React from "react";
import Email from "../../components/email";
import Header from "../../components/header";
import Social from "../../components/social";
import Main from "../../components/main";
import Container from "@material-ui/core/Container";
import useStyles from "./styles.js";
function Home() {
  const classes = useStyles();
  return (
    <section className={classes.Home}>
      <Header />
      <Social />
      <Email />
      <Container>
        <Main />
      </Container>
    </section>
  );
}

export default Home;
