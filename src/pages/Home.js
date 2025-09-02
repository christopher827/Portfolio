import React from 'react'
// import DevPic from "../assets/Images/developer-pic-1.png"
import chrisImg from "../assets/Images/chrisImage.webp"
import chrisImg2 from "../assets/Images/chrisImage2.png"


import AnimatedText from '../components/AnimatedText'
import Resume from "../assets/Resume/ChristopherOche.pdf"
import { LinkArrow } from '../assets/Icons/Icons'
import HireMe from '../components/HireMe'
import Bulb from "../assets/Icons/miscellaneous_icons_1.svg"
import TransitionEffect from '../components/TransitionEffect'
import Layout from '../components/Layout'

function Home() {
  return (
    <>
    <TransitionEffect/>
  <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
<Layout className='pt-0 md:p-16 sm:pt-8'>
<div className='flex items-center justify-between w-full lg:flex-col'>
<div className='w-1/2 md:w-full'>
  <img src={chrisImg2} alt='Christopher Oche' className='w-full h-auto lg:hidden md:inline-block md:w-full' sizes="{max-width:768px } 100vw, {max-width:1200px} 50vw, 50vw"/>
</div>

<div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center '>
<AnimatedText text="Turning Vision Into Reality With Code And Thoughts." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl '/>
<p className='my-4 text-base font-medium md:text-sm sm:text-xs '>As a skilled software engineer, I turn ideas into innovative web, AI, and Power Platform solutions. Explore my latest projects and articles showcasing expertise in Software Engineering, Artificial Intelligence, and Microsoft Power Platform.</p>

<div className='flex items-center self-start mt-2 lg:self-center'>
  <a href={Resume} target={"_blank"} rel="noopener noreferrer" download={true}><button className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base '>Resume <LinkArrow className={"w-6 ml-1"}/></button></a>
  <a href='mailto:Christopheroche827@gmail.com' target={"_blank"} rel="noopener noreferrer"><button className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base  ml-1'>Contact</button></a>
</div>
</div>
</div>
<div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
  <img src={Bulb} className='w-full h-auto' alt='Christopher Oche'/>
</div>
</Layout>
    </main>
    </>
  )
}

export default Home
