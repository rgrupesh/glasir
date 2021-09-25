// TODO: Add filtering of jobs

import Cookie from "js-cookie";
import Axios from "../../axios-url";
import React, { useEffect, useState, useCallback } from "react";
import { LinearProgress, Typography } from "@material-ui/core";

import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import JobRequest from "./JobRequest";
import { useStyles } from "./styles";
import AppPagination from "../pagination/AppPagination";
import usePagination from "../pagination/Pagination";

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [jobsPerPage, setJobsPerPage] = useState(10);
  const [noOfPages, setNoOfPages] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useSelector((state) => state.checkProfileState);
  const classes = useStyles();
  const token = Cookie.get("token");
  const _DATA = usePagination(jobs, jobsPerPage);

  const getJobs = useCallback(
    async (text, category) => {
      setLoading(true);
      if (category) {
        try {
          const res = await Axios.get(
            `/api/v1/job/search?text=${text}&page=${page}&jobsPerPage=${jobsPerPage}&category=${category}&expertiseLevel=&projectType=&payType=`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const { jobs, totalResults, entriesPerPage } = res.data;
          setJobs(jobs);
          setError("");
          setNoOfPages(Math.ceil(totalResults / jobsPerPage));
          setJobsPerPage(entriesPerPage);
          setLoading(false);
        } catch (error) {
          if (error.response.statusText === "Not Found") {
            setError("No jobs found");
            setJobs([]);
            setNoOfPages(0);
            setLoading(false);
            return;
          }
          setError(error.response.data.data.error);
          setLoading(false);
        }
      }
    },
    [jobsPerPage, page, token]
  );

  const updateSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    getJobs(newSearchTerm);
  };
  useEffect(() => {
    if (data) {
      if (data.data) {
        getJobs(searchTerm, data.data.expertise.service);
      }
    }
  }, [data, getJobs, searchTerm]);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <div className={classes.jobBoardContainer}>
      <div className={classes.jobRequestsContainer}>
        <SearchBox refreshFunction={updateSearchTerm} />

        {!loading && jobs && data ? (
          <>
            {" "}
            <div className={classes.jobRequests}>
              <div style={{ marginBottom: -30 }}>
                <Typography variant="h6">Most Recent For You</Typography>
              </div>{" "}
              {error && (
                <div style={{ textAlign: "center" }}>
                  <h4>{error}</h4>
                </div>
              )}
              {_DATA.currentData().map((job) => (
                <JobRequest job={job} key={job._id} />
              ))}
            </div>
            <div className={classes.pagination}>
              {jobs.length !== 0 && (
                <AppPagination
                  page={page}
                  handleChange={handleChange}
                  noOfPages={noOfPages}
                />
              )}
            </div>
          </>
        ) : (
          <LinearProgress />
        )}
      </div>
    </div>
  );
};

export default JobBoard;
