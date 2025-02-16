import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {
  const [user, setUser] = useState(null); // Placeholder for user object, update as needed
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    // Replace this logic with how you manage user state (e.g., from context, local storage, or an API)
    const currentUser = { primaryEmailAddress: { emailAddress: 'test@example.com' }, fullName: 'John Doe' }; // Example user data
    setUser(currentUser);
    if (currentUser) GetResumesList(currentUser);
  }, []);

  const GetResumesList = (currentUser) => {
    GlobalApi.GetUserResumes(currentUser?.primaryEmailAddress?.emailAddress)
      .then(resp => {
        console.log(resp.data);
        setResumeList(resp.data);
      });
  };

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className='grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10
      '>
        <AddResume />
        {resumeList?.length > 0 ? resumeList.map((resume, index) => (
          <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList} />
        )) :
          [1, 2, 3, 4].map((item, index) => (
            <div key={index} className='h-[280px] rounded-lg bg-slate-200 animate-pulse'>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
