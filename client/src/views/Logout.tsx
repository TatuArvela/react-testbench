import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  logOut: () => void;
}

const Logout = ({ logOut }: Props) => {
  const history = useHistory();
  useEffect(() => {
    logOut();
    history.push('/');
  });

  return <p>Logging out...</p>;
};

export default Logout;
