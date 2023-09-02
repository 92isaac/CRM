import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./routes/LandingPage";
import SharedDashboardLayout from "./layout/SharedLayout";
import PageNotFound from "./routes/PageNotFound";
import { Loading } from "./helpers/Loading";
import ScrollToTop from "./helpers/ScrollToTop";

const WorkSpace = lazy(() => import("./routes/WorkSpace"));
const Client = lazy(() => import("./routes/Client"));
const SheduleAppointment = lazy(() => import("./routes/SheduleAppointment"));
const ClientProfile = lazy(() => import("./routes/ClientProfile"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workspace" element={<SharedDashboardLayout />}>
          <Route path="/workspace" element={<WorkSpace />} />
          <Route path="/workspace/clients" element={<Client />} />
          <Route path="/workspace/clients/profile/:id" element={<ClientProfile />} />
          <Route path="/workspace/schedule-appointment" element={<SheduleAppointment />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
