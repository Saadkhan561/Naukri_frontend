import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Jobs from './Jobs';

const EmpProfile = () => {
  const [appliedJobs, setAppliedJobs] = useState();
  useEffect(() => {
    async function getAppliedJobs() {
      const res = await fetch('http://localhost:3001/appliedJobs');
      if (!res.ok) {
        throw new Error(`HTTP Error ${res.status} not found`);
      }
      const resData = await res.json();
      const data = await resData;
      setAppliedJobs(data);
    }
    getAppliedJobs();
  }, []);

  const navigate = useNavigate();

  const renderAppliedJobs = () => {
    return appliedJobs.map((j) => {
      return (
        <Tablerow>
          <TableValue>{j.cmpname}</TableValue>
          <TableValue>{j.title}</TableValue>
          <TableValue>{j.city}</TableValue>
          <td>
            <ViewButon
              onClick={() => navigate('/jobDetail?cmp_id=' + j.cmp_id)}
            >
              View Details
            </ViewButon>
          </td>
        </Tablerow>
      );
    });
  };

  const logOut = () => {
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <Main>
      <EmpDetailDiv>
        <EmpSubDiv1>
          <h1>Saad Khan</h1>
          <p>Manager</p>
          <p>Changan</p>
        </EmpSubDiv1>
        <EmpSubDiv2>
          <EditProfileButton>Edit Profile</EditProfileButton>
          <LogoutButton onClick={() => logOut()}>Log Out</LogoutButton>
        </EmpSubDiv2>
      </EmpDetailDiv>
      <hr />
      <EmpJobDiv>
        <h2>Applied Jobs</h2>
        <TableDiv>
          <thead>
            <tr>
              <TableHead>Company</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>City</TableHead>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {appliedJobs && renderAppliedJobs()}
        </TableDiv>
      </EmpJobDiv>
    </Main>
  );
};

export default EmpProfile;

// STYLED CSS
const Main = styled.div`
  border: 1px solid black;
  margin-left: 10%;
  margin-right: 10%;
  height: 100%;
`;

const EmpDetailDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EmpSubDiv1 = styled.div`
  padding: 40px;
`;
const EmpSubDiv2 = styled.div`
  padding: 40px;
`;

const LogoutButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 7px;
  border: none;
  width: 100px;
  height: 40px;
  margin-left: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: 300ms;
    cursor: pointer;
  }
`;

const EditProfileButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 7px;
  border: none;
  width: 100px;
  height: 40px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: 300ms;
    cursor: pointer;
  }
`;

const EmpJobDiv = styled.div`
  margin-top: 10px;
  padding: 40px;
`;

const TableDiv = styled.table`
  padding: 20px;
  width: 100%;
  // border: 1px solid black;
`;

const Tablerow = styled.tr`
  text-align: center;
  border: 1px solid black;
`;

const TableHead = styled.th`
  border-bottom: 1px solid grey;
`;

const TableValue = styled.td`
  border-bottom: 1px solid grey;
`;

const ViewButon = styled.button`
  background-color: grey;
  color: white;
  padding: 10px;
  border-radius: 7px;
  border: none;
  width: 100px;
  height: 32px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: 300ms;
    cursor: pointer;
  }
`;
