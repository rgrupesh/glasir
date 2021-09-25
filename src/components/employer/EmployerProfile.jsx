import moment from "moment";
import { Avatar, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LocationOn, VerifiedUser } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    backgroundColor: "#f1f2f4",
    padding: "1% 12% 4% 12%",
  },
  profile: {},
  nameContainer: {
    padding: "4%",
    borderBottom: "1px solid #dfdfdf",
    display: "flex",
  },
  name: {
    marginLeft: "12px",
    "& h4": {
      fontWeight: "bold",
    },
  },
  infoDescription: {
    display: "grid",
    gridTemplateColumns: "30% auto",
  },
  infoContainer: {
    borderRight: "1px solid #dfdfdf",
    padding: "12%",
    "& div": {
      marginBottom: "8%",
    },
  },
  description: {
    padding: "4%",
    borderBottom: "1px solid #dfdfdf",
  },
  payment: {
    padding: "4%",
    borderBottom: "1px solid #dfdfdf",
  },
  verifyPhoneContainer: {
    display: "flex",
    justifyContent: "start",
  },
  verifyContainer: {
    display: "flex",
    justifyContent: "start",
  },
  locationContainer: {
    display: "flex",
    justifyContent: "start",
    width: "100%",
  },
}));

const EmployerProfile = ({ employer }) => {
  const classes = useStyles();
  const { data } = employer;
  const {
    avatar,
    firstName,
    lastName,
    isVerified,
    location,
    phone,
    rating,
    company,
    totalMoneySpent,
    payment,
    createdAt,
  } = data;
  const { country, city } = location;
  const { name, description, website, tagline } = company;
  const { phoneNumber } = phone;
  const { amount } = totalMoneySpent;
  const { method } = payment;
  const { averageScore } = rating;

  return (
    <div className={classes.profileContainer}>
      <Paper className={classes.profile}>
        <div className={classes.nameContainer}>
          <Avatar
            alt={firstName + " " + lastName}
            src={avatar}
            sx={{ width: 34, height: 34 }}
          />

          <div className={classes.name}>
            <div className={classes.verifyContainer}>
              <Typography variant="h4">{firstName + " " + lastName}</Typography>
              {isVerified ? (
                <div style={{ marginLeft: "5px" }}>
                  <VerifiedUser fontSize="small" />
                </div>
              ) : (
                <Typography style={{ marginLeft: "5px" }}>
                  <i> (Not verified)</i>
                </Typography>
              )}{" "}
            </div>
            <div className={classes.locationContainer}>
              <LocationOn fontSize="small" style={{ marginTop: "1px" }} />
              <Typography variant="subtitle1">
                {city}, {country}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.infoDescription}>
          <div className={classes.infoContainer}>
            <div>
              <Typography variant="h5">Rating</Typography>
              <Rating name="disabled" value={averageScore} disabled />
              <span style={{ bottom: "5px", position: "relative" }}>
                {" "}
                ({rating.rateCounts}{" "}
                {rating.rateCounts <= 1 ? "review" : "reviews"})
              </span>
            </div>
            <div>
              <Typography variant="h5">Phone</Typography>

              <div className={classes.verifyPhoneContainer}>
                <Typography variant="body1">{phoneNumber} </Typography>
                {phone.isVerified ? (
                  <div style={{ marginLeft: "3%" }}>
                    <VerifiedUser fontSize="small" />
                  </div>
                ) : (
                  <Typography style={{ marginLeft: "3%" }}>
                    <b>
                      {" "}
                      <i> (Not verified)</i>
                    </b>
                  </Typography>
                )}{" "}
              </div>
            </div>
            <div>
              <Typography variant="h5">Money spent</Typography>
              <Typography variant="body1">$ {amount}</Typography>
            </div>
            <div>
              <Typography variant="body1">
                Member since <b>{moment(createdAt).format("ll")}</b>
              </Typography>
            </div>
          </div>
          <div>
            <div className={classes.description}>
              <Typography variant="h5">Company</Typography>
              <div style={{ padding: "2%" }}>
                <Typography variant="h6">
                  <b>{name}</b>
                </Typography>
                {website && (
                  <Typography variant="subtitle1">
                    Website:{" "}
                    <i>
                      {" "}
                      <a href={website} target="_blank" rel="noreferrer">
                        {website}
                      </a>
                    </i>
                  </Typography>
                )}
                {tagline && (
                  <Typography variant="subtitle1">
                    Tagline: <b>{tagline}</b>
                  </Typography>
                )}
                <Typography variant="subtitle1">{description}</Typography>
              </div>
            </div>
            <div className={classes.payment}>
              <Typography variant="h5">Payment Method</Typography>
              <div style={{ padding: "2%" }}>
                <Typography variant="subtitle1">Method: {method}</Typography>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default EmployerProfile;
