import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Watch from "./components/Watch";

function App() {
  /*
  planning for the app

  home / 
  -header
  -login
  -footer

  browse page
  -Movie-container
  -Movie-cardlist
  -Movie-card
     
  */

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "watch",
      element: <Watch />,
    },
  ]);

  <RouterProvider router={appRouter} />;

  return (
    <div className="text-center">
      <Outlet />
    </div>
  );
}

export default App;
