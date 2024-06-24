
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul className="space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded">
            <a href="/table" className="block">Table</a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <a href="#" className="block">Forms</a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <a href="#" className="block">Link 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
