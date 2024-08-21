import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/dashboard";
import Dashboard from "./pages/dashboard/dashboard";
import Project from "./pages/dashboard/project";
import Activities from "./pages/dashboard/activities";
import Billing from "./pages/dashboard/billing";
import Support from "./pages/dashboard/support";
import Profile from "./pages/dashboard/profile";
import Auth from "./pages/auth";
import ForgotPassword from "./pages/auth/forgotPassword";
import SignIn from "./pages/auth/login";
import SignUp from "./pages/auth/signUp";
import ProjectDetails from "./pages/dashboard/projectDetails";
import Forms from "./pages/dashboard/forms";
import PersonalInfo from "./pages/dashboard/profile/personal-info";
import Notification from "./pages/dashboard/profile/notification";
import Security from "./pages/dashboard/profile/security";
function App() {
  return (
    <>
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              mutations: {
                retry: 0,
              },
            },
          })
        }
      >
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}>
              <Route path="" element={<Dashboard />} />
              <Route path="project" element={<Project />} />
              <Route path="activities" element={<Activities />} />
              <Route path="billing" element={<Billing />} />
              <Route path="support" element={<Support />} />
              <Route path="profile" element={<Profile />}>
              <Route path="personal-information" element={<PersonalInfo />} />
              <Route path="notification-preference" element={<Notification />} />
              <Route path="security" element={<Security />} />
              </Route>
              {/* <Route path="*" element={<h1>Page not found</h1>} /> */}
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/project/forms/:id" element={<Forms />}>
              </Route>
            </Route>

            <Route path="/auth" element={<Auth />}>
              <Route path="sign-up" element={<SignUp />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
