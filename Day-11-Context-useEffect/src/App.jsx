import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { MyStore, MyStoreProvider } from './Context/MyContext';


const App = () => {




  console.log("App Rendering.....")


  return (
    <div>
   App
      <MyStoreProvider>
        <Home/>
      </MyStoreProvider>
   
      <About/>
      <Contact/>
    </div>
  );
};

export default App;