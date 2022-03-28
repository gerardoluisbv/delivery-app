

import Navbar from "./components/ui/NavBar";
import Home from "./components/ui/Home";
import Footer from "./components/ui/Footer";

import styled from 'styled-components';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <Navbar/>
      <Home/>
      <Footer/>
    </AppWrapper>
  );
}

export default App;
