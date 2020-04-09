import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme =>({
    detailsPoster: {
        height:220,
        width:"100%",
        [theme.breakpoints.down("xs")]: {
            height: "300px"
          }
    },
    detailsContainer: {
        padding: "10px 0"
    },
    movieInfo: {
        padding: "0px 10px"
    }
}));
