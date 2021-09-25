import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import FreelancerProfile from "../../components/freelancer/FreelancerProfile";

const FreelancerProfilePage = () => {
  const profile = useSelector((state) => state.checkProfileState);
  return (
    <div>
      {profile.data ? (
        <FreelancerProfile freelancer={profile.data} />
      ) : (
        <div style={{ display: "flex", marginLeft: "47%", marginTop: "18%" }}>
          <CircularProgress variant="indeterminate" disableShrink size={80} />
        </div>
      )}
    </div>
  );
};

export default FreelancerProfilePage;
