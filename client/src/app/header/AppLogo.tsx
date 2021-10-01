import styled from 'styled-components';

import logo from '../logo.svg';

const StyledLogo = styled.img`
  height: 100%;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppLogo = () => <StyledLogo src={logo} alt="logo" />;

export default AppLogo;
