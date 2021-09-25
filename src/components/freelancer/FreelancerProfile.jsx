import moment from "moment";
import {
  Avatar,
  Paper,
  Typography,
  IconButton,
  Input,
  Button,
  Badge,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  LocationOn,
  VerifiedUser,
  AttachFile,
  PhotoCamera,
} from "@material-ui/icons";
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
  skills: {
    padding: "4%",
    borderBottom: "1px solid #dfdfdf",
  },
  skillList: {
    display: "flex",
    "& p": {
      padding: "1% 2% 1% 2%",
      backgroundColor: "#f2f2f2",
      marginRight: "2%",
      borderRadius: "15px",
    },
  },
  employment: {
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

const FreelancerProfile = ({ freelancer }) => {
  const classes = useStyles();
  const { data } = freelancer;
  const {
    avatar,
    firstName,
    lastName,
    overview,
    hourlyRate,
    isVerified,
    location,
    phone,
    rating,
    education,
    employments,
    totalMoneyEarned,
    createdAt,
    citizenship,
    resume,
    expertise,
    englishLanguage,
    title,
  } = data;
  const { skills, service, expertiseLevel } = expertise;
  const { proficiency } = englishLanguage;
  const { country, city } = location;
  const { school, degree, areaOfStudy, datesAttended } = education;
  const { averageScore } = rating;
  const { phoneNumber } = phone;
  const { amount } = totalMoneyEarned;
  return (
    <div className={classes.profileContainer}>
      <Paper className={classes.profile}>
        <div className={classes.nameContainer}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  style={{ display: "none" }}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  size="small"
                >
                  <PhotoCamera fontSize="small" />
                </IconButton>
              </label>
            }
          >
            <Avatar
              alt={firstName + " " + lastName}
              src={avatar}
              sx={{ width: 56, height: 56 }}
            />
          </Badge>

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
              <Typography variant="h5">Hourly rate</Typography>
              <Typography variant="body1" style={{ marginTop: "4px" }}>
                $ {hourlyRate.amount}
              </Typography>
            </div>
            <div>
              <div>
                <Typography variant="h5">Rating</Typography>
                <Rating name="disabled" value={averageScore} disabled />
                <span style={{ bottom: "5px", position: "relative" }}>
                  {" "}
                  ({rating.rateCounts}{" "}
                  {rating.rateCounts <= 1 ? "review" : "reviews"})
                </span>
              </div>
              <Typography variant="h5">Availability</Typography>
              <Typography variant="body1" style={{ marginTop: "4px" }}>
                <i> As Needed - Open to Offers</i>
              </Typography>
            </div>
            <div>
              <Typography variant="h5">Language</Typography>
              <Typography variant="body1" style={{ marginTop: "4px" }}>
                English: {proficiency}
              </Typography>
            </div>
            <div>
              <Typography variant="h5">Education</Typography>
              <Typography variant="h6" style={{ marginTop: "4px" }}>
                {school}
              </Typography>
              <Typography variant="subtitle1">
                {areaOfStudy}, {degree}
              </Typography>
              <Typography variant="subtitle2">
                <b>
                  {" "}
                  {moment(datesAttended.from).format("ll")} -{" "}
                  {moment(datesAttended.to).format("ll")}{" "}
                </b>
              </Typography>
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
              <Typography variant="h5">Money earned</Typography>
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
              <Typography variant="h4">{title}</Typography>
              <Typography variant="body2" style={{ marginTop: "15px" }}>
                {overview}
              </Typography>
            </div>
            <div className={classes.description}>
              <Typography variant="h5">Service & Level</Typography>
              <Typography variant="body1" style={{ marginTop: "10px" }}>
                <b>{service}</b>
              </Typography>
              <Typography variant="body1">
                <i>{expertiseLevel}</i>
              </Typography>
            </div>
            <div className={classes.skills}>
              <Typography variant="h5">Skills</Typography>
              <div className={classes.skillList}>
                {skills.map((skill) => (
                  <Typography key={skill} variant="body2">
                    {skill}
                  </Typography>
                ))}
              </div>
            </div>
            <div>
              <div className={classes.employment}>
                <Typography variant="h5">Employment History</Typography>
                <div style={{ padding: "2%" }}>
                  {employments.map((e) => (
                    <>
                      <Typography variant="h6">{e.company}</Typography>
                      <div className={classes.locationContainer}>
                        <Typography variant="caption">
                          {e.location.city}, {e.location.country}
                        </Typography>
                      </div>
                      <Typography variant="body1">{e.title}</Typography>
                      <Typography variant="subtitle2">
                        <b>
                          ( {moment(e.period.from).format("ll")} -{" "}
                          {moment(e.period.to).format("ll")} )
                        </b>
                      </Typography>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className={classes.employment}>
                <Typography variant="h5">Documents</Typography>
                <label htmlFor="contained-button-file">
                  <Input
                    style={{ display: "none" }}
                    id="contained-button-file"
                    accept={[
                      "application/pdf",
                      "application/docx",
                      "application/vnd.oasis.opendocument.text",
                    ]}
                    type="file"
                    onChange={(e) => {}}
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
                {resume && (
                  <div
                    style={{
                      marginTop: "4px",
                      borderBottom: "0px",
                      display: "flex",
                      justifyContent: "left",
                      paddingLeft: 0,
                      paddingRight: 0,
                      paddingBottom: 0,
                      paddingTop: 0,
                    }}
                  >
                    <AttachFile fontSize="small" color="primary" />{" "}
                    <a href={`${resume}`} style={{ color: "#303f9f" }} download>
                      <Typography variant="body2"> {resume}</Typography>
                    </a>
                  </div>
                )}
                {citizenship && (
                  <div
                    style={{
                      marginTop: "4px",
                      borderBottom: "0px",
                      display: "flex",
                      justifyContent: "left",
                      paddingLeft: 0,
                      paddingRight: 0,
                      paddingBottom: 0,
                      paddingTop: 0,
                    }}
                  >
                    <AttachFile fontSize="small" color="primary" />{" "}
                    <a
                      href={`${citizenship}`}
                      style={{ color: "#303f9f" }}
                      download
                    >
                      <Typography variant="body2"> {citizenship}</Typography>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default FreelancerProfile;
