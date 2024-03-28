import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
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

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
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
        // element:<Login />
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
        path:"/moviedetails/:movieID",
        element:<MovieDetails />
      }
    ],
  },
]);
const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName } = user;
  //       dispatch(addUser({ uid, email, displayName }));
  //     } else {
  //       // User is signed out
  //       // ...
  //       dispatch(removeUser());
  //     }
  //   });
  // }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
