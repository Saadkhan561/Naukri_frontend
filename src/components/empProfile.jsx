import { Button } from 'bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';

const EmpProfile = () => {
  return (
    <Main>
      <EmpDetailDiv>
        <EmpSubDiv1>
          <h1>Saad Khan</h1>
          <p>Manager</p>
          <p>Changan</p>
        </EmpSubDiv1>
        <EmpSubDiv2>
          <LogoutButton>Log Out</LogoutButton>
        </EmpSubDiv2>
      </EmpDetailDiv>
      <hr />
      <EmpJobDiv>
        <h2>Applied Jobs</h2>
        <TableDiv>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>City</th>
            <th></th>
            <th></th>
          </tr>
          <Tablerow>
            <td>Changan</td>
            <td>Manager</td>
            <td>Karachi</td>
            <td>
              <ViewButon>View Details</ViewButon>
            </td>
          </Tablerow>
          <Tablerow>
            <td>Younus Textile</td>
            <td>Senior Manager</td>
            <td>Lahore</td>
            <td>
              <ViewButon>View Details</ViewButon>
            </td>
          </Tablerow>
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
`;

const EmpJobDiv = styled.div`
  margin-top: 10px;
  padding: 40px;
`;

const TableDiv = styled.table`
  padding: 20px;
  width: 100%;
  border: 1px solid black;
`;

const Tablerow = styled.tr`
  text-align: center;
  border: 1px solid black;
`;

const ViewButon = styled.button`
  background-color: grey;
  color: white;
  padding: 10px;
  border-radius: 7px;
  border: none;
  width: 100px;
  height: 32px;
`;
