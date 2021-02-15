import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      width: "50px",
      height: "50px",
      color: "#64ffda",
      cursor: "pointer",
    },
    header: {
      paddingTop: "1em",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "SFMono",
      letterSpacing: "1px",
      fontWeight: "500",
      fontSize: "13px",
      height: "fit-content",
      padding: "3em",
      paddingBottom: 0,
      boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.3)",
    },
    button: {
      color: theme.palette.green,
      borderColor: theme.palette.green,
      border: `1px solid ${theme.palette.green}`,
      "&:hover": {
        color: theme.palette.blue,
      },
    },

    navLinks: {
      display: "flex",
    },
    link: {
      margin: "1.5em",
    },
    navBar: {
      display: "flex",
      flexDirection: "space-between",
      color: theme.palette.green,
    },
    a: {
      textDecoration: "none",
      color: theme.palette.green,
      "&:hover": {
        textDecoration: "none",
        color: theme.palette.blue,
      },
    },
  };
});
export default useStyles;
