import React, { useEffect, useRef } from 'react'
import AnimatedText from "../components/AnimatedText"
import Me from "../assets/Images/chrisImage.webp"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Layout from "../components/Layout"
import TransitionEffect from '../components/TransitionEffect'

const AnimatedNumbers=({value})=>{
  const ref =useRef(null);
const motionValue=useMotionValue(0);
const springValue=useSpring(motionValue,{duration:3000})
const isInView=useInView(ref,{once:true})

useEffect(()=>{
if (isInView) {
  motionValue.set(value);
}
},[isInView,value,motionValue])

useEffect(()=>{
  springValue.on("change",(latest)=>{
if (ref.current && latest.toFixed(0) <=value) {
  ref.current.textContent=latest.toFixed(0);
}
  })
},[springValue,value])

return <span ref={ref}></span>
} 

function About() {
  return (
    <>
<TransitionEffect/>
<div className='flex w-full flex-col items-center justify-center dark:text-light'>
<Layout className='pt-16'>
<AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 ' />
<div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
<div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
<h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 '>Biography</h2>
<p className='font-medium'>Hi, I'm Christopher Oche, a software and AI developer with a passion for creating beautiful, functional,
and user-centered digital experiences. With 4 years of experience, I specialize in backend
development, AI-driven solutions, Microsoft Power Platform, and intuitive user interfaces.
 I’m always looking for innovative ways to bring my clients' visions to life.

I believe programming is about more than just making things look pretty – it's about solving complex problems and creating seamless, enjoyable experiences. Whether I'm working on a website, mobile app, enterprise application, or AI-powered system, I bring my commitment to excellent, user-centered thinking to every project I tackle. I look forward to bringing my skills and passion to your next project.

</p>
<p className='my-4 font-medium'>I believe that programming is about more than just making things look pretty – it's about solving problems and 
creating intuitive, enjoyable experiences for users. 
</p>
</div>

<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light '/>
  
<img src={Me} alt='Christopher Oche' className='w-full h-auto rounded-2xl' sizes="{max-width:768px} 100vw, (max-width:1200px) 50vw, 33vw"/>
</div>

<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
  <div className='flex flex-col items-end justify-center xl:items-center'>
    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
      <AnimatedNumbers value={25}/>+
    </span>
    <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light'>Satisfied Clients</h2>
  </div>

  <div className='flex flex-col items-end justify-center xl:items-center'>
    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl '>
    <AnimatedNumbers value={55}/>+
    </span>
    <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light'>Project Completed</h2>

  </div>

  <div className='flex flex-col items-end justify-center xl:items-center'>
    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
    <AnimatedNumbers value={4}/>+
    </span>
    <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light'>Years Of Experience</h2>

  </div>

</div>
</div>
<Skills/>
<Experience/>
{/* <Skill/> */}
<Education/>
</Layout>
    </div>
    </>

  )
}

export default About
