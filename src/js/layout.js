import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import injectContext, { Context } from './store/appContext';
// components
import ScrollToTop from './component/scrollToTop';
import Alert from './component/Alert.jsx'
// views
import Home from './views/Home.jsx'

const Layout = () => {
  const basename = process.env.BASENAME || '';
  const { store: { alert } } = useContext(Context);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<h1>Not found!</h1>} />
          </Routes>
          {
            // throwing an alert
            alert && <Alert message={alert.message} type={alert.type} />
          }
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
