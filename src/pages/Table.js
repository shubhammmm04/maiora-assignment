import React, { useState } from 'react';
import Selected from '../components/Selected';
import Search from '../components/Search';
import { GoPlus } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from '../redux/addReducer';

const Table = () => {
  const data = useSelector((state) => state?.todos);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [classes, setClasses] = useState('');
  const [section, setSection] = useState('');
  const [student, setStudent] = useState('');
  const [reason, setReason] = useState('');
  const [leaveValue, setLeaveValue] = useState('');
  const [startDate, setStateDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('')


  const handleAddTodo = () => {

    const payload = {
      className: classes,
      section: section,
      student: student,
      reason: reason,
      leaveValue: leaveValue,
      startDate: startDate,
      endDate: endDate,
      status: status

    }
    if (reason) {
      dispatch(addTodo(payload));
      setReason("");
      setClasses("");
      setSection("");
      setStudent("");
      setLeaveValue("");
      setStateDate("");
      setEndDate("");
      setStatus("");
    }
  };


  const onReset = () => {
    setReason("");
    setClasses("");
    setSection("");
    setStudent("");
    setLeaveValue("");
    setStateDate("");
    setEndDate("");
    setStatus("");
  }

  const onSubmit = () => {
    handleAddTodo();
    setModalOpen(false)
  }

  const classesData = [
    "THIRD CLASS",
    "FOURTH CLASS",
    "FIFTH CLASS",
    "SIXTH CLASS"
  ]


  const sectionData = [
    "A Section",
    "B Section",
    "C Section",
    "D Section",
  ]

  const studentDate = [
    "John Doe",
    "Mathias",
    "Ben Steff",
    "Chris Mathew"
  ]


  console.log('>>class',data)


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
          <div className="relative p-4 w-full  ">
            <div className="relative bg-white rounded-lg shadow w-[80%] mx-auto">
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

                  <form className="w-[100%] mx-auto ">
                    <select id="countries" value={classes} onChange={(e) => setClasses(e.target.value)} className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Select Class</option>
                      {classesData?.map((option, index) => {
                        return (
                          <option key={index}>
                            {option}
                          </option>
                        );
                      })}
                    </select>
                  </form>


                  <form className="max-[100%] mx-auto my-4">
                    <select id="section" value={section} onChange={(e) => setSection(e.target.value)} className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Select Section</option>
                      {sectionData?.map((option, index) => {
                        return (
                          <option key={index}>
                            {option}
                          </option>
                        );
                      })}
                    </select>
                  </form>


                  <form className="max-[100%] mx-auto">
                    <select id="student" value={student} onChange={(e) => setStudent(e.target.value)} className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Select Student</option>
                      {studentDate?.map((option, index) => {
                        return (
                          <option key={index}>
                            {option}
                          </option>
                        );
                      })}
                    </select>

                  </form>

                  <form className="max-[100%] my-4">
                    <textarea id="message" rows="4" value={reason} onChange={(e) => setReason(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Reason..."></textarea>
                  </form>
                </div>
                <div className='w-[50%] px-2'>

                  <div className='flex items-center'>
                    <h1>Number of Leave days: </h1>
                    <div className="flex items-center mx-8 ">
                      <input checked={leaveValue === 'Single Day'}
                        onChange={(e) => setLeaveValue(e.target.value)} type="radio" name="Single Day" value="Single Day" className="w-4 h-4 border-gray-300 ring-yellow-500 bg-yellow-500 " />
                      <label for="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                        Single Day
                      </label>
                    </div>
                    <div className="flex items-center mx-8">
                      <input checked={leaveValue === 'Multiple Day'}
                        onChange={(e) => setLeaveValue(e.target.value)} type="radio" name="Multiple Day" value="Multiple Day" className="w-4 h-4 border-gray-300 ring-yellow-500 bg-yellow-500 " />
                      <label for="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                        Multiple Day
                      </label>
                    </div>
                  </div>

                  <div>
                    <div date-rangepicker >
                      <div className="relative py-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                          </svg>
                        </div>
                        <input name="start" type="text" value={startDate} onChange={(e) => setStateDate(e.target.value)} className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Start Date ..." />
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                          </svg>
                        </div>
                        <input name="end" type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="End Date" />
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center mt-4'>
                    <h1>Status: </h1>
                    <div className="flex items-center mx-8 ">
                      <input checked={status === 'Approved'}
                        onChange={(e) => setStatus(e.target.value)} type="radio" name="Approved" value="Approved" className="w-4 h-4 border-gray-300 ring-yellow-500 bg-yellow-500 " />
                      <label for="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                        Approved
                      </label>
                    </div>
                    <div className="flex items-center mx-8">
                      <input checked={status === 'UnApproved'}
                        onChange={(e) => setStatus(e.target.value)} type="radio" name="UnApproved" value="UnApproved" className="w-4 h-4 border-gray-300 ring-yellow-500 bg-yellow-500 " />
                      <label for="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                        UnApproved
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='px-4'>
                <button type="button" onClick={onReset} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium border border-[#F2BA1D] rounded-md text-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                  Reset
                </button>
                <button type="button" onClick={onSubmit} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">ADD LEAVE</button>

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
            {data?.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user?.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user?.student}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user?.class}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user?.section}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user?.reason}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user?.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user?.status}</td>
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