import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    social: {},
    listSocial: {
      listStyle: "none",
      color: theme.palette.green,
      display: "flex",
      flexDirection: "column",
      width: "fit-content",
      position: "fixed",
      bottom: "0",
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
      color: theme.palette.green,
    },
    li: {
      paddingBottom: "10px",
    },
  };
});
export default useStyles;
