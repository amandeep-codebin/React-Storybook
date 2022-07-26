import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomeScreen, LoginScreen, NotFoundScreen } from "../screens";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const RootNavigator = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      {`Auth: User is ${auth?.isAuthenticated ? "logged in" : "not logged in"}`}
      <br />
      {auth?.isAuthenticated ? (
        <button type="button" onClick={() => auth?.signout()}>
          Logout
        </button>
      ) : (
        <button type="button" onClick={() => auth?.signin()}>
          Login
        </button>
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                  auth?.isAuthenticated ? <HomeScreen /> : <Navigate to="/login"/>
              }
            />
            <Route path="home" element={
                  auth?.isAuthenticated ? <HomeScreen /> : <Navigate to="/login"/>
              } />
            <Route path="login" element={<LoginScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RootNavigator;
