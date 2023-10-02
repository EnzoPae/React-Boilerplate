//Router
import { Route, Routes } from "react-router-dom";
//Utils Pages
import DefaultPage from "./utils/defaultPage";
import HomePage from "./utils/homePage";
//Auth Pages
import SignIn from "./auth/signIn";
import SignUp from "./auth/SignUP";
//User Pages
import { COMPONENTS_MAP } from "./routes/components";

const Layout = ({ auth, routes }) => {
  const filteredRoutes = routes.flatMap((cat) => cat.routes);
  const USER_ROUTES = filteredRoutes.map((r, i) => (
    <Route key={i} path={r.path} element={COMPONENTS_MAP[r.comp]} />
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
