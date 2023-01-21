import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PostCV = () => {
  const navigate = useNavigate();
  const [cv, setCV] = useState({ file: '' });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setCV({ cv, [name]: value });
  };
  return (
    <Main>
      <PostDiv>
        <div>
          <h1>Add a resume to Naukri</h1>
        </div>
        <Form action='/'>
          <LabelResume htmlFor='upload'>
            <UploadImg src='./assets/upload.png'></UploadImg>
            <b>Upload your Resume</b>
          </LabelResume>
          <ResumeField
            name='file'
            id='upload'
            type='file'
            hidden
            value={cv.file}
            onChange={handleChange}
          />
          <SubmitButton onClick={() => navigate('/jobs')}>Submit</SubmitButton>
        </Form>
      </PostDiv>
    </Main>
  );
};

export default PostCV;

// STYLED CSS

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
const PostDiv = styled.div`
  display: grid;
  grid-template-rows: 40px 200px;
  row-gap: 10px;
  margin-top: 70px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  padding: 30px;
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: 60px 40px;
  row-gap: 8px;
`;

const ResumeField = styled.input`
  background-color: grey;
`;

const LabelResume = styled.label`
  color: blue;
  border: 1px solid grey;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  width: 97%;
`;

const UploadImg = styled.img`
  margin-right: 20px;
  height: 25px;
`;

const SubmitButton = styled.button`
  font-size: 16px;
  color: white;
  background-color: blue;
  border-radius: 10px;
  border: none;
  width: 200px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: 300ms;
  }
`;
