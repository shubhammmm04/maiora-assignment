import React, { useState } from 'react';
import Selected from '../components/Selected';
import Search from '../components/Search';
import { GoPlus } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import Calendar from '../components/Calendar';

const Table = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const users = [
    { id: 1, enNumber: "25143", name: 'John Doe', class: "XII", section: "C", reason: "FEVER ", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 2, enNumber: "25143", name: 'Jane Smith', class: "XII", section: "C", reason: "FEVER ", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 3, enNumber: "25143", name: 'James Johnson', class: "XII", section: "C", reason: "FEVER", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 4, enNumber: "25143", name: 'Emily Davis', class: "XII", section: "C", reason: "FEVER", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 5, enNumber: "25143", name: 'John Doe', class: "XII", section: "C", reason: "FEVER ", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 6, enNumber: "25143", name: 'Jane Smith', class: "XII", section: "C", reason: "FEVER ", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 7, enNumber: "25143", name: 'James Johnson', class: "XII", section: "C", reason: "FEVER", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 8, enNumber: "25143", name: 'Emily Davis', class: "XII", section: "C", reason: "FEVER", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 9, enNumber: "25143", name: 'John Doe', class: "XII", section: "C", reason: "FEVER ", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 10, enNumber: "25143", name: 'Jane Smith', class: "XII", section: "C", reason: "FEVER ", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 11, enNumber: "25143", name: 'James Johnson', class: "XII", section: "C", reason: "FEVER", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 12, enNumber: "25143", name: 'Emily Davis', class: "XII", section: "C", reason: "FEVER", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 13, enNumber: "25143", name: 'John Doe', class: "XII", section: "C", reason: "FEVER ", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 14, enNumber: "25143", name: 'Jane Smith', class: "XII", section: "C", reason: "FEVER ", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 15, enNumber: "25143", name: 'James Johnson', class: "XII", section: "C", reason: "FEVER", leaveDate: "22 Mar'24 ", status: "Active" },
    { id: 16, enNumber: "25143", name: 'Emily Davis', class: "XII", section: "C", reason: "FEVER", leaveDate: "22 Mar'24 ", status: "Active" }
  ];



  return (
    <>
      <div className='flex justify-between '>
        <div className='flex items-center '>

          <Selected />
          <Search />

        </div>
        <button type="button" onClick={() => setModalOpen(true)} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium border border-[#F2BA1D] rounded-md text-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
          <GoPlus />
          Add New Leaves
        </button>

      </div>
      {modalOpen && (
        <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 ">
          <div className="relative p-4 w-full  max-w-3xl max-h-full ">
            <div className="relative bg-white rounded-lg shadow w-[100%] mx-auto">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add New Leave
                </h3>
                <button onClick={() => setModalOpen(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                  <IoIosCloseCircle className='text-[#000000] w-10 h-10' />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className='flex justify-between p-4'>
                <div className='w-[50%]'>

                  <form class="w-[100%] mx-auto ">
                    <select id="countries" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Select Class</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </form>


                  <form class="max-w-sm mx-auto my-4">
                    <select id="countries" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Select Section</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </form>


                  <form class="max-w-sm mx-auto">
                    <select id="countries" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Select Student</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>

                  </form>

                  <form class="max-w-sm my-4">
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Reason..."></textarea>
                  </form>
                </div>
                <div className='w-[50%] px-2'>

                  <div className='flex items-center'>
                    <h1>Number of Leave days: </h1>
                    <div class="flex items-center mb-4">
                      <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 ring-yellow-500 bg-yellow-500 " checked />
                      <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                        Single Day
                      </label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 ring-yellow-500 bg-yellow-500 " checked />
                      <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                        Multiple Days
                      </label>
                    </div>
                  </div>

                  <div><Calendar /></div>

                  <div className='flex items-center mt-4'>
                    <h1>Status: </h1>
                    <div class="flex items-center mx-8 ">
                      <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 ring-yellow-500 bg-yellow-500 "  />
                      <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                        Approved
                      </label>
                    </div>
                    <div class="flex items-center mx-8">
                      <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 ring-yellow-500 bg-yellow-500 "  />
                      <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                        UnApproved
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='px-4'>
              <button type="button" onClick={() => setModalOpen(true)} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium border border-[#F2BA1D] rounded-md text-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
          Reset
        </button>
              <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">ADD LEAVE</button>

              </div>

            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Enrollment Number
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Section
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reason
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Leave Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>

            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.enNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.class}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.section}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.reason}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.leaveDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.status}</td>
                <div className='flex items-center px-6 py-4 whitespace-nowrap text-sm'>
                  <FaEye className='text-[#F2BA1D] ' size={"20px"} />
                  <GiNotebook className='text-[#F2BA1D] mx-4' size={"20px"} />
                </div>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default Table;