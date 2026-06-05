import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import ProtectedRoutes from './ProtectedRoutes';
import DashboardLayout from '../layouts/DashboardLayout';
import AnalyticsPage from '../features/analytics/pages/AnalyticsPage';
import UserPage from '../features/user/pages/UserPage';
import AppointmentsPage from '../features/appointments/pages/AppointmentsPage';
import BillingsPage from '../features/billing/pages/BillingsPage';
import RolesPage from '../features/roles/pages/RolesPage';
import DoctorsPage from '../features/doctors/pages/DoctorsPage';
import PatientsPage from '../features/patients/pages/PatientsPage';
import PermissionRoute from './PermissionRoute';
import LandingPageRedirect from './LandingPageRedirect';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <DashboardLayout />
            </ProtectedRoutes>
          }
        >
          <Route index element={<LandingPageRedirect />} />
          <Route
            path="analytics"
            element={
              <PermissionRoute permission="VIEW_ANALYTICS">
                <AnalyticsPage />
              </PermissionRoute>
            }
          />
          <Route
            path="users"
            element={
              <PermissionRoute permission="MANAGE_USERS">
                <UserPage />
              </PermissionRoute>
            }
          />
          <Route
            path="appointments"
            element={
              <ProtectedRoutes>
                <PermissionRoute permission="VIEW_APPOINTMENT">
                  <AppointmentsPage />
                </PermissionRoute>
              </ProtectedRoutes>
            }
          />
          <Route
            path="billing"
            element={
              <ProtectedRoutes>
                <PermissionRoute permission="VIEW_BILLING">
                  <BillingsPage />
                </PermissionRoute>
              </ProtectedRoutes>
            }
          />
          <Route
            path="roles"
            element={
              <ProtectedRoutes>
                <PermissionRoute permission="MANAGE_ROLES">
                  <RolesPage />
                </PermissionRoute>
              </ProtectedRoutes>
            }
          />
          <Route
            path="doctors"
            element={
              <ProtectedRoutes>
                <PermissionRoute permission="VIEW_DOCTOR">
                  <DoctorsPage />
                </PermissionRoute>
              </ProtectedRoutes>
            }
          />
          <Route
            path="patients"
            element={
              <ProtectedRoutes>
                <PermissionRoute permission="VIEW_PATIENT">
                  <PatientsPage />
                </PermissionRoute>
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
