import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Table from './pages/Table';
import Forms from './pages/Forms';
import Layout from './components/Layout';
import Academics from './pages/Academics';

function App() {
  const isAuthenticated = true;
  return (
    <div className="App">
    <Routes >

      <Route path="/" element={<Login />} /> {/* Default route for login */}
        <Route path="/sidebar/*" element={isAuthenticated ? <Layout /> : <Navigate to="/" />}>
          <Route path="table" element={<Table />} />
          <Route path="academics" element={<Academics/>} />
          <Route path="forms" element={<Forms />} />
        </Route>
    </Routes>
  </div>
  );
}

export default App;

