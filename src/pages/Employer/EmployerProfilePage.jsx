import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import EmployerProfile from "../../components/employer/EmployerProfile";

const EmployerProfilePage = () => {
  const profile = useSelector((state) => state.checkProfileState);
  return (
    <div>
      {profile.data ? (
        <EmployerProfile employer={profile.data} />
      ) : (
        <div style={{ display: "flex", marginLeft: "47%", marginTop: "18%" }}>
          <CircularProgress variant="indeterminate" disableShrink size={80} />
        </div>
      )}
    </div>
  );
};

export default EmployerProfilePage;
