import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header/Header';
import { Route } from "react-router";
import Homepage from './pages/homepage/Homepage';
import Contact from './pages/contact/Contact';
import Footer from './components/layout/footer/Footer';
import { ThemeProvider } from "styled-components";
import theme from './style/theme';
import ApplicationProvider from './context/ApplicationContext';
import initializeI18N from "./i18n/init";

initializeI18N();

function App() {
  return (
    <BrowserRouter>
    <ApplicationProvider>
      <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
          <Footer />
      </ThemeProvider>
      </ApplicationProvider>
    </BrowserRouter>
  );
}

export default App;
