import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Body from "./component/Body";
import EditDetails from "./component/editDetails/EditDetails";
import Errorpage from "./component/errorPage/Errorpage";
import Footer from "./component/footer/Footer";
import UserForm from "./component/userForm/UserForm";
import ViewDetails from "./component/viewDetails/ViewDetails";

function App() {
  return (
    <div className="App">
      <Body />
      <Outlet />
      <Footer />
    </div>
  );
}

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <UserForm />,
      },
      {
        path: "/viewdetails",
        element: <ViewDetails />,
      },
      {
        path: "/editdetails",
        element: <EditDetails />,
      },
    ],
  },
]);

export default App;
