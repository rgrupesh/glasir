import jwt_decode from "jwt-decode";
import { Link, withRouter } from "react-router-dom";
import Cookie from "js-cookie";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { signOut } from "../../helpers/auth";

import { useStyles } from "./styles";

const Header = (props) => {
  const classes = useStyles();

  const token = Cookie.get("token");
  let links = (
    <div className={classes.buttonContainer}>
      <Link to="/sign-in">
        <Button color="inherit">Sign In</Button>
      </Link>
      <Link to="/sign-up">
        <Button color="inherit">Sign Up</Button>
      </Link>
    </div>
  );
  let homeLink = (
    <Link to="/" className={classes.homeLink}>
      <Typography variant="h6" className={classes.title}>
        Glasir
      </Typography>
    </Link>
  );
  if (token) {
    const { role } = jwt_decode(token);
    if (role === "freelancer") {
      links = (
        <div className={classes.buttonContainer}>
          <Link to="/freelancer/profile">
            <Button color="inherit">Profile</Button>
          </Link>

          <Button
            color="inherit"
            onClick={() => {
              signOut(() => {
                props.history.push("/");
              });
            }}
          >
            Logout
          </Button>
        </div>
      );
      homeLink = (
        <Link to="/find-work/recommended" className={classes.homeLink}>
          <Typography variant="h6" className={classes.title}>
            Glasir
          </Typography>
        </Link>
      );
    } else if (role === "employer") {
      links = (
        <div className={classes.buttonContainer}>
          <Link to="/employer/profile">
            <Button color="inherit">Profile</Button>
          </Link>

          <Button
            color="inherit"
            onClick={() => {
              signOut(() => {
                props.history.push("/");
              });
            }}
          >
            Logout
          </Button>
        </div>
      );
      homeLink = (
        <Link to="/my-jobs" className={classes.homeLink}>
          <Typography variant="h6" className={classes.title}>
            Glasir
          </Typography>
        </Link>
      );
    } else {
      links = (
        <div className={classes.buttonContainer}>
          <Link to="/admin">
            <Button color="inherit">Admin</Button>
          </Link>

          <Button
            color="inherit"
            onClick={() => {
              signOut(() => {
                props.history.push("/");
              });
            }}
          >
            Logout
          </Button>
        </div>
      );
      homeLink = (
        <Link to="/admin" className={classes.homeLink}>
          <Typography variant="h6" className={classes.title}>
            Glasir
          </Typography>
        </Link>
      );
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {homeLink}
          {links}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
