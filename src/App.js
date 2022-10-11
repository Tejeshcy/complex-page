
import './App.css';
import Data from './Components/Data';

import {ProSidebarProvider} from 'react-pro-sidebar'

import NewBar from './Components/NewBar';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  return (
    <ProSidebarProvider>
      <Header />
      <NewBar/>
      <Footer/>
    </ProSidebarProvider>
      
      
      
      
    
  );
}

export default App;
