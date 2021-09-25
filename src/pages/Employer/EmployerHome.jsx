import {
  Avatar,
  Button,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  home: {
    margin: "4%",
  },
  search: {
    borderBottom: "1px solid #dfdfdf",
    padding: "2%",
    display: "flex",
    justifyContent: "space-between",
  },
  searchBox: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  freelancers: {
    display: "flex",
    justifyContent: "center",
    padding: "4%",
  },
  freelancerCardContainer: {
    border: "1px solid #dfdfdf",
    padding: "4%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "2%",
  },
}));

const EmployerHome = () => {
  const classes = useStyles();

  const FreelancerCard = () => (
    <div className={classes.freelancerCardContainer}>
      <Avatar>SJ</Avatar>
      <Typography variant="h4">Slippin' Jimmy</Typography>
      <Typography variant="subtitle1">Nepal</Typography>
      <Typography variant="h6">Title</Typography>
      <Typography variant="body1">Rate</Typography>
    </div>
  );
  return (
    <div className={classes.root}>
      <Paper className={classes.home}>
        <div className={classes.search}>
          <Paper component="form" className={classes.searchBox}>
            <InputBase
              className={classes.input}
              placeholder="Search Freelancers"
            />
            <SearchIcon />
          </Paper>
          <Link to="/job-post">
            {" "}
            <Button variant="contained" color="primary">
              Post Job
            </Button>
          </Link>
        </div>
        <div className={classes.freelancers}>
          <FreelancerCard />
          <FreelancerCard />
          <FreelancerCard />
        </div>
      </Paper>
    </div>
  );
};

export default EmployerHome;
