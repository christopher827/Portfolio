import React from 'react'
import AnimatedText from "../components/AnimatedText"
import {GithubIcon} from "../assets/Icons/Icons"
import project1 from "../assets/ProjectImages/project1.png"
import project2 from "../assets/ProjectImages/nft.jpg"
import project3 from "../assets/ProjectImages/fashion.jpg"
import project4 from "../assets/ProjectImages/project4.png"
import project5 from "../assets/ProjectImages/agency.jpg"
import project6 from "../assets/ProjectImages/devdream.jpg"
import Layout from "../components/Layout"
import TransitionEffect from '../components/TransitionEffect'

const FeaturedProject=({type,title,summary,img,link,github})=>{
  return(
<article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light  lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>
<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>

<a href={link} target='_blank' rel="noreferrer" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
<img src={img} alt={title} className='w-full h-auto'/>
</a>

<div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>

<span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
<a href={link} target='_blank' rel="noreferrer" className='hover:underline underline-offset-2'>
<h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
            </a>

<p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
<div className='mt-2 flex items-center'>
<a href={github} target='_blank' rel="noreferrer" className='w-10'><GithubIcon/></a>
<a href={link} target='_blank' rel="noreferrer" className='ml-4 rounded bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>Visit Project</a>
    </div>
        </div>
    </article>
  )
}

const Project=({title,type, img,link,github})=>{

return(
<article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>

<a href={link} target='_blank' rel="noreferrer" className='w-full cursor-pointer overflow-hidden rounded-lg'>
<img src={img} alt={title} className='w-full h-auto'/>
</a>

<div className='w-full flex flex-col items-start justify-between mt-4'>
<span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
 <a href={link} target='_blank'  className='hover:underline underline-offset-2' rel="noreferrer">
<h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
            </a>

<div className='w-full mt-2 flex items-center justify-between'>
<a href={link} target='_blank' rel="noreferrer" className='text-lg font-semibold hover:underline underline-offset-2 md:text-base'>Visit</a>
<a href={github} target='_blank' rel="noreferrer" className='w-8 md:w-6'><GithubIcon/></a>
            </div>
        </div>
        </article>
  )
}

function Projects() {
  return (
    <>
    <TransitionEffect/>
<main className='w-full mb-16 flex flex-col items-center justify-center'> 
<Layout className='pt-16'>
  <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
  <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
<div className='col-span-12 dark:text-light'>
<FeaturedProject title="Buy LawmaBin"
img={project1} summary="Developed a digital platform for Lagos residents to purchase waste bins, integrating secure payment via Wema Bank's virtual accounts. Simplified the process, enabling efficient waste management for millions across the city."
link="https://buylawmabin.com"
github="https://github.com/Patrick-Oche/buylawmabin"
type="Featured Project"
/>
</div>

<div className='col-span-6 sm:col-span-12 dark:text-light'>
<Project 
title="NFT Collection website"
img={project2} 
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="https://github.com/christopher827"
type="Website Template"
/>
</div>

<div className='col-span-6 sm:col-span-12 dark:text-light'>
<Project 
title="Fashion Studio Website"
img={project3} 
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="https://github.com/christopher827"
type="Website Template"
/>
</div>

<div className='col-span-12 dark:text-light'>
<FeaturedProject title="WinResponse"
img={project4} summary="Developed and integrated CI/CD pipelines, AI-powered solutions, and enhanced video conference features for WinResponse, optimizing system performance and streamlining deployment processes.
"
link="https://winresponse.io"
github="https://github.AngleQuest/version-v1-ade.git/"
type="Featured Project"
/>
</div>

<div className='col-span-6 sm:col-span-12 dark:text-light'>
<Project 
title="Agency Website Template"
img={project5} 
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="https://github.com/christopher827"
type="Website Template"
/>
</div>

<div className='col-span-6 sm:col-span-12 dark:text-light'>
<Project 
title="DevDreaming"
img={project6} 
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="https://github.com/christopher827"
type="Website Template"
/>
</div>
  </div>
</Layout>
</main>
</>
    )
}

export default Projects
