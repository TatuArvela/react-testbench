import styled from 'styled-components';

import { useAuthContext } from '../../auth/AuthContext';
import { Permission } from '../../auth/types';
import NavigationLink from './NavigationLink';

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const Navigation = () => {
  const { hasPermission, identity } = useAuthContext();

  return (
    <Nav>
      <NavigationLink to="/">Home</NavigationLink>

      {hasPermission(Permission.Images) && (
        <NavigationLink to="/images">Images</NavigationLink>
      )}

      {hasPermission(Permission.Report) && (
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
