import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/about',
    element: <About />
  },
  {
    path:'*',
    element:<NotFound />
  }
],{
  basename:'/react-app-demo'
})

function App() {

  return (
    <RouterProvider  router={router} />
  )
}

export default App
