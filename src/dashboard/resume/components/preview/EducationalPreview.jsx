import React from 'react'

function EducationalPreview({resumeInfo,template}) {
  return (
    <div className='my-6'>
    <h2 className={template?.subheading}
    style={{
        color:resumeInfo?.themeColor
    }}
    >Education</h2>
    <hr style={{
        borderColor:resumeInfo?.themeColor
    }} />
 <section className={template.General}>
 {resumeInfo?.education.map((education,index)=>(
        <div key={index} className={template.education_item}>
            <h2 className='text-sm font-bold'
                style={{
                    color:resumeInfo?.themeColor
                }}
            >{education.universityName}</h2>
            <h2 className='text-xs flex justify-between'>{education?.degree} in {education?.major}
            <span className='font-bold'>  {education?.startDate} - {education?.endDate}</span>
            </h2>
            <p className='text-xs my-2'>
                {education?.description}
            </p>
        </div>
    ))}

 </section>
   

    </div>
  )
}

export default EducationalPreview