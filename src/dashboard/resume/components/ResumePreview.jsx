import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext, useState } from 'react';
import PersonalDetailPreview from './preview/PersonalDetailPreview';
import SummeryPreview from './preview/SummeryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';

function ResumePreview() {
    const { resumeInfo } = useContext(ResumeInfoContext);
    const [selectedTemplate, setSelectedTemplate] = useState("template1");

    const templates = {
        template1: {
            General: "container flex justify-evenly p-2 my-2 text-start",
            contact: "flex flex-row justify-center items-center",
            styles: " text-center text-sm ps-2 m-0 me-2 text-gray-500",
            subheading: " text-center font-bold text-sm",
            experience_item: "my-5",
            project_item: "container",
            achievement_item: "container",
            education_item: "px-1 my-2",
        },
        template2: {
            General: "container flex flex-col p-2 my-2 text-start",
            contact: "flex flex-row justify-center items-center",
            styles: " text-center text-sm ps-2 m-0 me-2 text-gray-500",
            subheading: "mt-1 p-2 text-start border-b",
            experience_item: "container my-2",
            project_item: "container my-2",
            achievement_item: "container my-2",
            education_item: "px-1 my-2",
        },
        template3: {
            General: "container grid grid-cols-2 p-2 my-2 text-start",
            contact: "flex flex-row justify-center items-center",
            styles: " text-center text-sm ps-2 m-0 me-2 text-gray-500",
            subheading: "mt-1 p-2 bg-gray-100 border-b",
            experience_item: "container my-2 p-2",
            project_item: "container my-2 p-2",
            achievement_item: "container my-2 p-2",
            education_item: "px-1 my-2",
        },
        template4: {
            General: "container flex flex-col p-2 my-2 text-start bg-gray-100",
            contact: "flex flex-row justify-center items-center",
            styles: " text-center text-sm ps-2 m-0 me-2 text-gray-500",
            subheading: "mt-1 text-start p-2 border-b",
            experience_item: "container my-1 p-1 bg-gray-100",
            project_item: "container my-1 p-1 bg-gray-100",
            achievement_item: "container my-1 p-1 bg-gray-100",
            education_item: "px-1 my-2",
        },
    };

    return (
        <div className='shadow-lg h-full p-14 border-t-[20px]'
            style={{ borderColor: resumeInfo?.themeColor }}>
            <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setSelectedTemplate(e.target.value)}
                value={selectedTemplate}
            >
                <option value="template1">Template 1</option>
                <option value="template2">Template 2</option>
                <option value="template3">Template 3</option>
                <option value="template4">Template 4</option>
            </select>

            {/* Personal Detail */}
            <PersonalDetailPreview resumeInfo={resumeInfo} template={templates[selectedTemplate]} />
            {/* Summary */}
            <SummeryPreview resumeInfo={resumeInfo} template={templates[selectedTemplate]} />
            {/* Professional Experience */}
            {resumeInfo?.Experience?.length > 0 && <ExperiencePreview resumeInfo={resumeInfo} template={templates[selectedTemplate]} />}
            {/* Education */}
            {resumeInfo?.education?.length > 0 && <EducationalPreview resumeInfo={resumeInfo} template={templates[selectedTemplate]} />}
            {/* Skills */}
            {resumeInfo?.skills?.length > 0 && <SkillsPreview resumeInfo={resumeInfo} template={templates[selectedTemplate]} />}
        </div>
    );
}

export default ResumePreview;