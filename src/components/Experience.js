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
<Details position="Software Engineer" company="WinResponse" companyLink="https:winresponse.io" time="2024-2025" address="Rotterdam, Netherlands"
work="Developed CI/CD pipelines, Integrated AI features, and enhanced video conferencing capabilities, optimizing performance and streamlining deployment for WinResponse."
 
/>
<Details position="Software Developer" company="Chrisland University" companyLink="www.microsoft.com" time="2021-2022" address="Ogun state, Nigeria."
work="Implemented real time geolocation tracking to automatically mark students as present or absent, enhancing accuracy and efficiency in attendance management"
 
/>
<Details position="Software Developer" company="Lawma" companyLink="www.mit.com" time="2022-2024" address="Lagos,Nigeria."
work="Developed a scalable waste bin purchase platform that enabled millions of lagos state government to order government issued-bin online."
 
/>

    </ul>
</div>
    </div>
  )
}

export default Experience
