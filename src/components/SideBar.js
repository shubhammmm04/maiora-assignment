
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="bg-[#08183A] text-white w-64 min-h-screen">
      <div className="p-4">
        <div className='flex justify-between items-center'>
        <div className='bg-[#F2BA1D] rounded-lg px-4 py-1'>
        <h2 className="text-xl font-bold ">John Doreamon</h2>
        </div>
        <GiHamburgerMenu />
        </div>
        <ul className="space-y-2 mt-4">
          <li className="hover:bg-yellow-500 p-2 rounded">
            <a href="#" className="block">Go To Super Admin</a>
          </li>
          <li className="hover:bg-yellow-500 p-2 rounded">
            <a href="#" className="block">School Management</a>
          </li>
          <li className="hover:bg-yellow-500 p-2 rounded">
            <a href="/sidebar/academics" className="block">Academics</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
