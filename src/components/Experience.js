import  { useRef } from 'react'
import { useScroll,motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details=({position,company,companyLink,time,address,work})=>{
    const ref=useRef(null)
return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
   <LiIcon reference={ref}/>
    <motion.div 
    initial={{y:50}}
    whileInView={{y:0}}
transition={{duration:0.5, type:"spring"}}    >
<h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target='_blank'  className='text-primary dark:text-primaryDark capitalize' rel="noreferrer">@{company}</a></h3>
        <span className='capitalize font-medium text-dark/75 xs:text-sm dark:text-light/75'>{time} | {address}</span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
    </motion.div>
</li>
}
function Experience() {
    const ref=useRef(null);
    const {scrollYProgress}=useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )
  return (
    <div className='my-64 '>
<h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
<div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>
    <motion.div
    style={{scaleY:scrollYProgress}}
    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
    <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
{/* <Details position="Software Engineer" company="Google" companyLink="www.google.com" time="2022-Present" address="Mountain View, CA"
work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
 
/>
<Details position="Intern" company="Facebook" companyLink="www.facebook.com" time="Summer 2021" address="Menlo Park, CA"
work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
share short-form video content, including designing and implementing a new user interface and developing 
the backend infrastructure to support the feature.
"
 
/> */}
<Details position="Software Developer" company="BrideTv" companyLink="www.amazon.com" time="2020-2021" address="Seattle, WA"
work="Worked on a team responsible for developing BrideTv's custom software internally, Designed and developed the backend web services for applications.
"
 
/>
<Details position="Software Developer" company="Chrisland University" companyLink="www.microsoft.com" time="Summer 2019" address="Redmond, WA."
work="Implemented real time geolocation tracking to automatically mark students as present or absent, enhancing accuracy and efficiency in attendance management"
 
/>
<Details position="Software Developer" company="Lawma" companyLink="www.mit.com" time="Fall 2018" address="Massachusetts Ave, Cambridge, MA."
work="Integrated a cloud-based image uploading to Cloudinary, enhancing the platforms multimedia capabilities, 
and graded exams and assignments.
"
 
/>

    </ul>
</div>
    </div>
  )
}

export default Experience
