import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  logOut: () => void;
}

const Logout = ({ logOut }: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    logOut();
    navigate('/');
  });

  return <p>Logging out...</p>;
};

export default Logout;
