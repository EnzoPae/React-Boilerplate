//Router
import { Route, Routes } from "react-router-dom";
//Utils Pages
import DefaultPage from "./utils/defaultPage";
import HomePage from "./utils/homePage";
//Auth Pages
import SignIn from "./auth/signIn";
import SignUp from "./auth/SignUP";
//User Pages
import { COMPONENTS_MAP } from "./routes/elements";
import { filterRoutes } from "./routes/filterRoutes";

const Layout = ({ auth, routes }) => {
  const filteredRoutes = filterRoutes(routes);
  const USER_ROUTES = filteredRoutes.map((r) => (
    <Route key={r.id} path={r.path} element={COMPONENTS_MAP[r.element]} />
  ));
  return (
    <>
      {!auth ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<DefaultPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<DefaultPage />} />
          {routes ? USER_ROUTES : null}
        </Routes>
      )}
    </>
  );
};

export default Layout;
