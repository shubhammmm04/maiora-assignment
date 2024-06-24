import React from 'react';
import Sidebar from './SideBar';
import Table from '../pages/Table';

const Layout = () => {
  return (
    <div className="flex">
    <Sidebar />
    <main className="flex-1">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Student Leaves</h1>
        <Table  />
      </div>
    </main>
  </div>
  );
};

export default Layout;
