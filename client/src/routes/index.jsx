import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewUsers from "../layouts/WalkInLayout/viewAll";

import "antd/dist/reset.css";

import UserLayout from "../layouts/WalkInLayout";

const FrontendRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<ViewUsers />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default FrontendRoutes;
