import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState,useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import GlobalApi from './../../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

function AddResume() {
    const [openDialog, setOpenDialog] = useState(false)
    const [resumeTitle, setResumeTitle] = useState('');
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const [resumeList,setResumeList]=useState([]);

    useEffect(()=>{
      user&&GetResumesList()
    },[user])
  
  
    const GetResumesList = () => {
      GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then(resp => {
        console.log(resp.data);
        setResumeList(resp.data);
      });
  };

    const onCreate = async () => {
        setLoading(true);
        const data = {
            data: {
                title: resumeTitle,
                id:resumeList.length+1,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName
            }
        };
    
        try {
            const response = await GlobalApi.CreateNewResume(data);
            const newResumeId = response.data.id;
            setLoading(false);
            navigate(`/dashboard/resume/${newResumeId}/edit`);
        } catch (error) {
            setLoading(false);
            console.error("Error creating resume:", error);
        }
    };
    

    return (
        <div>
            <div
                className='p-14 py-24 border 
                items-center flex 
                justify-center bg-secondary
                rounded-lg h-[280px]
                hover:scale-105 transition-all hover:shadow-md
                cursor-pointer border-dashed'
                onClick={() => setOpenDialog(true)}
            >
                <PlusSquare />
            </div>

            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                            <p>Add a title for your new resume</p>
                            <Input
                                className="my-2"
                                placeholder="Ex. Full Stack resume"
                                onChange={(e) => setResumeTitle(e.target.value)}
                            />
                        </DialogDescription>
                        <div className='flex justify-end gap-5'>
                            <Button onClick={() => setOpenDialog(false)} variant="ghost">Cancel</Button>
                            <Button
                                disabled={!resumeTitle || loading}
                                onClick={() => onCreate()}
                            >
                                {loading ? <Loader2 className='animate-spin' /> : 'Create'}
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddResume;
