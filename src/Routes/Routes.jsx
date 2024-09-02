import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import FullLayout from '../Layouts/FullLayout';
import Dashboard from '../components/Dashboard/Dashboard';
import Notfound from '../NotFound';
import Login from '../components/Login_Logout/Login';
import Logout from '../components/Login_Logout/Logout';
import Register from '../components/Login_Logout/Register';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/register-now" element={<Register />} />
      <Route path="/logout" element={<Logout />} />

      <Route path="/" element={<FullLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Route>
      <Route path="*" element={<Notfound />} />
    </>
  )
);

export default routes;
