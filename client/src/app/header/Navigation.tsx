import styled from 'styled-components';

import { useAuthContext } from '../../auth/AuthContext';
import { hasImagesAccess, hasReportAccess } from '../../auth/permissions';
import NavigationLink from './NavigationLink';

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const Navigation = () => {
  const { identity } = useAuthContext();

  return (
    <Nav>
      <NavigationLink to="/">Home</NavigationLink>

      {hasImagesAccess(identity) && (
        <NavigationLink to="/images">Images</NavigationLink>
      )}

      {hasReportAccess(identity) && (
        <NavigationLink to="/report">Report</NavigationLink>
      )}

      {identity ? (
        <NavigationLink to="/logout">Log out</NavigationLink>
      ) : (
        <NavigationLink to="/login">Log in</NavigationLink>
      )}
    </Nav>
  );
};

export default Navigation;
