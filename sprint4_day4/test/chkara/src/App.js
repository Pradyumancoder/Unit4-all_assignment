import './App.css';
import { Button, ChakraProvider} from '@chakra-ui/react'
import GridApp from './components/GridApp';
import SecondGridApp from './components/SecondGridApp';
function App() {
  return (
   
    <div className="App">
       <ChakraProvider>
      {/* <GridApp/>
       */}
       <SecondGridApp/>
      </ChakraProvider>
    </div>
  );
}

export default App;
