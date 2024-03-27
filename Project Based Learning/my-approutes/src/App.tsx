import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./404";
import Home from "./home";
import SignUp from "./modules/signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/login",
          element: <div>Login!</div>,
          errorElement: <ErrorPage />,
        },
        // Remove the '/signup' route from the children array
      ],
    },
    // Define the '/signup' route outside the children array
    {
      path: "/signup",
      element: <SignUp />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/signup/success",
          element: <div>Welcome!</div>,
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "/helloWorld",
      element: <div>Hello world!</div>,
      errorElement: <ErrorPage />,
    },
  ]);

  return (<>
    <RouterProvider router={router} />
      <div>
        {/* Your Link should go here or anywhere within RouterProvider */}
        <a href="/signup" className="btn btn-primary">
          Sign up
        </a>
    </div></>
  );
}

export default App;
