import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    exp__header: {
      fontFamily: "SFMono",
      fontWeight: "700",
      //   width: "fit-content",
      display: "flex",
      alignItems: "center",

      "&::after": {
        content: "''",
        backgroundColor: "#8892b0",
        display: "block",
        height: "1px",
        width: "25%",
        marginLeft: "10px",
      },
    },
    subtitle: {
      color: theme.palette.green,
      paddingRight: "10px",
    },
  };
});
export default useStyles;
