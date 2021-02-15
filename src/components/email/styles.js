import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    email: {
      position: "fixed",
      bottom: 0,
      right: "40px",
      "&::after": {
        content: "'' ",
        display: "block",
        height: "90px",
        width: "1px",
        backgroundColor: theme.palette.green,
        margin: "0 auto",
      },
    },
    a: {
      writingMode: "vertical-rl",
      fontSize: "13px",
      color: theme.palette.blue,
      fontFamily: "SFMono",
      display: "inline-block",
      textDecoration: "none",
    },
  };
});
export default useStyles;
