import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  logIn: (username: string, password: string) => Promise<boolean>;
}

const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  padding: 48px 36px;
  background: white;
  border: 2px solid black;

  h2 {
    margin-top: 0;
  }

  label {
    font-size: 16px;
  }

  input {
    margin: 0 0 24px 0;
    border: 2px solid black;
    padding: 8px;
    font-size: 16px;
    border-radius: 3px;
  }

  button {
    border: 2px solid black;
    background: pink;
    padding: 6px;
    border-radius: 3px;
    font-size: 16px;
  }
`;

const Error = styled.p`
  margin-top: 24px;
  margin-bottom: 0;
  color: red;
  font-weight: bold;
  text-align: center;
`;

const Login = ({ logIn }: Props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const onSubmit = async () => {
    setError(false);
    const success = await logIn(username, password);
    if (success) {
      navigate('/');
    } else {
      setError(true);
    }
  };

  return (
    <StyledLogin
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <h2>Look at all this security! Wa wa wee wa!</h2>

      <label htmlFor="username">Username</label>
      <input
        title="Available users: 'aatu'"
        type="text"
        onChange={(event) => setUsername(event.target.value)}
        id="username"
      />

      <label htmlFor="password">Password</label>
      <input
        title="The password is always 'password'"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        id="password"
      />

      <button>Log in super securely!</button>

      {error && <Error>Oopsie woopsie!</Error>}
    </StyledLogin>
  );
};

export default Login;
