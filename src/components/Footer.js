import Layout from "../components/Layout"

function Footer() {
  return (
<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base '>
    <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All rights reserved.</span>
        <div className='flex items-center lg:py-2'>
&lt;/&gt; and Built With <span className='text-primary text-2xl px-1'>&#9825;</span>by&nbsp;<a href='https://github.com/christopher827' className='underline underline-offset-2' target={"_blank"} rel="noopener noreferrer">Christopher Oche</a>
        </div>
        <a href='https://github.com/christopher827' className='underline underline-offset-2' target={"_blank"} rel="noopener noreferrer">Say hello</a>
    </Layout>
</footer>
    )
}
export default Footer