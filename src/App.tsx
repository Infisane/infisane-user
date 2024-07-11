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
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
