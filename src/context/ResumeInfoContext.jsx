import { createContext } from "react";
import query from '../../service/GlobalApi'

export const ResumeInfoContext=createContext(query.dummyResumes[0]);

