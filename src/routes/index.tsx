// src/Router.tsx
import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from '../pages/Landing';
import GoldSmithPage from '../pages/GoldLoan/GoldSmith';
import LoginPage from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import DashboardLayout from '../components/Layouts/DashboardLayout';
import MarketValue from '../pages/GoldLoan/MarketValue';
import Accounts from '../pages/AccessAndPermission/Accounts';
import Roles from '../pages/AccessAndPermission/Roles';
import Members from '../pages/AccessAndPermission/Members';
import Group from '../pages/ApprovalAndRatification/Group';
import User from '../pages/ApprovalAndRatification/User';
import Workflow from '../pages/ApprovalAndRatification/Workflow';
import MisReport from '../pages/Reports/mis';
import GoldReport from '../pages/Reports/gold';

const isAuthenticated = () => {
    // Replace with your actual authentication logic
    return true; // For now, this will always redirect to login
};

interface AuthRouteProps {
    children: ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
    return isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
};

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/dashboard/*"
                    element={
                        <AuthRoute>
                            <DashboardLayout>
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                </Routes>
                            </DashboardLayout>
                        </AuthRoute>
                    }
                />
                <Route
                    path="/gold/*"
                    element={
                        <AuthRoute>
                            <DashboardLayout>
                                <Routes>
                                    <Route path="/goldsmith" element={<GoldSmithPage />} />
                                    <Route path="/marketvalue" element={<MarketValue />} />
                                    {/* Add more private routes here */}
                                </Routes>
                            </DashboardLayout>
                        </AuthRoute>
                    }
                />
                <Route
                    path="/permission/*"
                    element={
                        <AuthRoute>
                            <DashboardLayout>
                                <Routes>
                                    <Route path="/accounts" element={<Accounts />} />
                                    <Route path="/roles" element={<Roles />} />
                                    <Route path="/members" element={<Members />} />
                                    {/* Add more private routes here */}
                                </Routes>
                            </DashboardLayout>
                        </AuthRoute>
                    }
                />
                <Route
                    path="/approval/*"
                    element={
                        <AuthRoute>
                            <DashboardLayout>
                                <Routes>
                                    <Route path="/group" element={<Group />} />
                                    <Route path="/user" element={<User />} />
                                    <Route path="/workflow" element={<Workflow />} />
                                    {/* Add more private routes here */}
                                </Routes>
                            </DashboardLayout>
                        </AuthRoute>
                    }
                />
                <Route
                    path="/reports/*"
                    element={
                        <AuthRoute>
                            <DashboardLayout>
                                <Routes>
                                    <Route path="/mis" element={<MisReport />} />
                                    <Route path="/gold" element={<GoldReport />} />
                                    {/* Add more private routes here */}
                                </Routes>
                            </DashboardLayout>
                        </AuthRoute>
                    }
                />
                {/* Redirect to home if the route doesn't match */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
