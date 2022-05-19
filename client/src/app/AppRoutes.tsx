import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuthContext } from '../auth/AuthContext';
import AuthorizedRoute from '../auth/AuthorizedRoute';
import { Permission } from '../auth/types';
import Home from '../views/Home';
import ImagesView from '../views/images/ImagesView';
import Login from '../views/Login';
import Logout from '../views/Logout';
import ReportContainer from '../views/report/ReportContainer';

const AppRoutes = () => {
  const { logIn, logOut } = useAuthContext();

  return (
    <Routes>
      <Route path="/login" element={<Login logIn={logIn} />} />

      <Route path="/logout" element={<Logout logOut={logOut} />} />

      <Route
        path="/images"
        element={
          <AuthorizedRoute permission={Permission.Images}>
            <ImagesView />
          </AuthorizedRoute>
        }
      />

      <Route
        path="/report"
        element={
          <AuthorizedRoute permission={Permission.Report}>
            <ReportContainer />
          </AuthorizedRoute>
        }
      />

      <Route path="/" element={<Home />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
