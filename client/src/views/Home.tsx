import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAuthContext } from '../auth/AuthContext';

const StyledHome = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2,
  p {
    margin: 6px 0;
  }

  hr {
    margin: 36px 0;
  }
`;

const Content = styled.div`
  background: white;
  padding: 36px;
  text-align: center;
  border-radius: 3px;
  border: 2px solid black;
`;

type CoinFace = 'heads' | 'tails';

const Home = () => {
  const { identity } = useAuthContext();
  const isLoggedIn = !!identity;
  const name = identity?.name;
  const permissions = identity?.permissions;

  const [coinFace, setCoinFace] = useState<CoinFace>('heads');

  useEffect(() => {
    const isHeads = Math.floor(Math.random() * 2) === 0;
    if (isHeads) {
      setCoinFace('heads');
    } else {
      setCoinFace('tails');
    }
  }, []);

  const loginStatusText = isLoggedIn ? 'logged in' : 'logged out';
  const nameText = isLoggedIn
    ? `you claim to be someone called ${name}`
    : "we don't know who you are";
  const getMoodText = () => {
    switch (coinFace) {
      case 'heads':
        return 'Interesting!';
      case 'tails':
        return 'Eh, who cares?';
    }
  };

  return (
    <StyledHome>
      <Content>
        <h2>Hello!</h2>
        <p>
          This is a sample application for demonstrating automated tests on
          React.
        </p>
        <p>
          There is a simple, mocked backend that allows you to view some data
          and pictures depending on your user rights. These options will be
          visible on the navigation at the top.
        </p>
        <hr />
        <p>
          According to the information from our immense data collection efforts,
          you are currently <b>{loginStatusText}</b>, and <b>{nameText}</b>.
        </p>
        {permissions && (
          <p>
            Your permissions are: <code>{JSON.stringify(permissions)}</code>
          </p>
        )}
        <p>{getMoodText()}</p>
      </Content>
    </StyledHome>
  );
};

export default Home;
