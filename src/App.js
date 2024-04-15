import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Account from "./components/Account";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { fireEvent } from "@testing-library/react";
import { addUser, removeUser } from "./utils/userSlice";
import MovieDetails from "./components/MovieDetail/MovieDetails";
import GptSearch from "./components/GptSearch";
import Footer from "./components/Footer";
import UpdateAccount from "./components/UpdateAccount";
import UpdateEmailOrPassword from "./components/UpdateEmailOrPassword";
import UpdatePassword from "./components/UpdatePassword";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/moviedetails/:movieID",
        element: <MovieDetails />,
      },
      {
        path: "/gpt-search",
        element: <GptSearch />,
      },
      {
        path: "/account/:uid",
        element: <Account />,
      },
      {
        path: "/updateaccount/:where",
        element: <UpdateAccount />,
      },
      {
        path: "/update-email",
        element: <UpdateEmailOrPassword title={"Email"} />,
      },
      {
        path: "/update-password",
        element: <UpdateEmailOrPassword title={"Password"} />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
