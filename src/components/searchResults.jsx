import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import JobShortDetail from './jobShortDetail';
import Search from './search';

const SearchResults = () => {
  const [jobs, setJobs] = useState({ resObj: [], data: [] });
  const [searchParams] = useSearchParams();
  const query1 = searchParams.get('s');

  useEffect(() => {
    let responseObject = { resObj: [], data: [] };
    async function getJobs() {
      const res = await fetch('http://localhost:3000/emp/search?q=' + query1);
      if (!res.ok) {
        throw new Error(`HTTP Error ${res.status} not found`);
      }
      const resData = await res.json();
      const data = await resData;
      responseObject.resObj = data.data;
      if (responseObject.resObj.length === 0) {
        responseObject.data = [];
        setJobs(responseObject);
      } else {
        setJobs(responseObject.resObj);
      }
    }
    getJobs();
  }, [query1]);
  console.log(jobs)

  const renderJobs = () => {
    return jobs.map((j) => {
      return (
        <JobShortDetail
          key={j._id}
          id={j._id}
          title={j.title}
          // cmpname={j.cmpname}
          // cmplocation={j.cmplocation}
          // postdate={j.postdate}
          jobType={j.jobType}
          jobDesc={j.jobDesc}
          // skillReq={j.skillReq}
          maxSal={j.salRange.maxSal}
          minSal={j.salRange.minSal}
        />
      );
    });
  };

  const renderJobBody = () => {
    if (jobs.length > 0) {
      return (
        <JobBody>
          <JobBodySubDiv id='job-div'>{renderJobs()}</JobBodySubDiv>
        </JobBody>
      );
    } else {
      return (
        <ErrorDiv>
          <img src='/assets/error.png' height={70} width={70}></img>
          <h3>No results matched for search...</h3>
        </ErrorDiv>
      );
    }
  };

  return (
    <>
      <BodySubDiv>
        <Search />
        <OptionDiv>
          <Option>
            <b>
              <OptionLink href='' onClick={() => navigate('/postCV')}>
                Post your CV
              </OptionLink>
            </b>{' '}
            - It only takes a few seconds
          </Option>
          <Option>
            <b>
              <OptionLink href='' onClick={() => navigate('/postJob')}>
                Employers-Post a job
              </OptionLink>
            </b>{' '}
            - Your next hire might be here
          </Option>
        </OptionDiv>
      </BodySubDiv>
      <JobHeadingDiv>
        <JobHeadingSubDiv>
          <h2>Job Feed</h2>
        </JobHeadingSubDiv>
      </JobHeadingDiv>
      {jobs && renderJobBody()}
    </>
  );
};

export default SearchResults;

// STYLED CSS

const BodySubDiv = styled.div`
  margin-bottom: 60px;
  @media (max-width: 400px) {
    top: 4%;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    top: 7%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    top: 15%;
  }

  @media (min-width: 900px) and (max-width: 1100px) {
    left: 17%;
  }
`;

const OptionDiv = styled.div`
  text-align: center;
  color: black;
  margin-top: 20px;
`;

const Option = styled.p`
  padding: 10px;
`;

const OptionLink = styled.a`
  color: blue;
`;

const JobHeadingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f0eded;
  border-bottom: 1px solid grey;
`;

const JobHeadingSubDiv = styled.div`
  font-size: 25px;
  padding: 40px;
`;

const JobBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

const JobBodySubDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;
  height: 810px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  width: 50%;
`;

const ErrorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
