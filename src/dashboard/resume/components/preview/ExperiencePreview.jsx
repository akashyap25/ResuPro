import React from 'react'

function ExperiencePreview({resumeInfo, template}) {
  return (
    <div className='my-6'>
        <h2 className={template?.subheading}
        style={{
            color:resumeInfo?.themeColor
        }}
        >Professional Experience</h2>
        <hr style={{
            borderColor:resumeInfo?.themeColor
        }} />
        <section className={template.General}>
        {resumeInfo?.Experience?.map((experience,index)=>(
            <div key={index} className={template.experience_item}>
                <h2 className='text-sm font-bold'
                 style={{
                    color:resumeInfo?.themeColor
                }}>{experience?.title}</h2>
                <h2 className='text-xs flex justify-between'>{experience?.companyName}, 
                {experience?.city}, 
                {experience?.state}
                <span className='font-bold'>  {experience?.startDate} To {experience?.currentlyWorking?'Present':experience.endDate} </span>
                </h2>
                {/* <p className='text-xs my-2'>
                    {experience.workSummery}
                </p> */}
                <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:experience?.workSummery}} />
            </div> ))}

        </section>
        
       
    </div>
  )
}

export default ExperiencePreview