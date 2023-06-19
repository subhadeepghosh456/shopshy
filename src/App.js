
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Maincontainer from './components/Maincontainer';
import Body from './components/Body';
import Products from './components/Products';
import Cart from './components/Cart';
import Detail from './components/Detail';
import { Provider } from 'react-redux';
import store from './components/utils/store';

const appRouter  = createBrowserRouter([
  {
    path:'/',
    element:<Maincontainer />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/products',
        element:<Products />
      },
      
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/detail',
        element:<Detail />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
