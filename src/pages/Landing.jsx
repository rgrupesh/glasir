import { withRouter } from "react-router-dom";
import React, { useEffect } from "react";
import Cookie from "js-cookie";
import jwt_decode from "jwt-decode";

import WorkFlow from "../components/work-flow/GuideUser";

const Landing = (props) => {
  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      const { role } = jwt_decode(token);
      if (role === "freelancer") {
        props.history.push("/find-work/recommended");
      } else if (role === "employer") {
        props.history.push("/my-jobs");
      } else {
        props.history.push("/admin");
      }
    }
  }, [props.history]);
  return (
    <div>
      <WorkFlow />
    </div>
  );
};

export default withRouter(Landing);
