import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  logIn: (username: string, password: string) => Promise<boolean>;
}

const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #bdbdbd;

  label {
    font-size: 20px;
  }

  input {
    margin: 0 0 24px 0;
    border: none;
    border-radius: 12px;
    padding: 8px;
    font-size: 24px;
  }

  button {
    border: 2px solid black;
    background: pink;
    padding: 6px;
    border-radius: 3px;
    font-size: 24px;
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
  const history = useHistory();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const onSubmit = async () => {
    setError(false);
    const success = await logIn(username, password);
    if (success) {
      history.push('/');
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
      <h2>Great security! Wa wa wee wa!</h2>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        onChange={(event) => setUsername(event.target.value)}
        id="username"
      />

      <label htmlFor="password">Password</label>
      <input
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
