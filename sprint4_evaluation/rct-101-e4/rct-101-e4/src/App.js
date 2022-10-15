import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Login from './Routes/Login';
import { ChakraProvider } from '@chakra-ui/react'
import Dashboard from './Routes/Dashboard';

function App() {
  return (
    <div className="App">
       <ChakraProvider>
       <Login/>
           {/* <AllRoutes/> */}
           <Dashboard/>
    </ChakraProvider>
 
     
    </div>
  );
}

export default App;
