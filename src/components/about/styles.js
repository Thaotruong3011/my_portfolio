import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    About: {
      fontFamily: "Calibre",
    },
    miniHeader: {
      fontFamily: "SFMono",
      color: theme.palette.green,
      fontSize: "15px",
    },
    mainHeader: {
      fontSize: "60px",
      fontWeight: "900",
    },
    imgBlock: {
      position: "relative",
      width: "75%",
      "&:hover + #imgBorder": {
        height: "50%",
      },
    },
    img: {
      position: "relative",
      zIndex: "99",
      width: "100%",
      "&:hover + #imgBorder": {
        height: "50%",
      },
    },
    imgBorder: {
      height: "100%",
      top: "10%",
      right: "-10%",
      width: "100%",
      border: ` 3px solid ${theme.palette.green}`,
      position: "absolute",
      zIndex: "1",
    },
  };
});
export default useStyles;
