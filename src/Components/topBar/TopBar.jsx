import { Link } from 'react-router-dom'
import { LuPhoneCall } from "react-icons/lu";

function TopBar(){
    


    
    return <div className="flex justify-center bg-[#0f1825] text-white">
        <div className="h-[5rem] bg-[#0f1825] w-[73.5rem] flex gap-6 items-center">
                <h1 className="text-4xl font-black hover:cursor-pointer mr-5">
                    <Link to="/">Allen</Link>
                </h1>

                <div className="flex gap-6">

                    
                    <div className="hover:cursor-pointer relative group">

                            <div className='border-box py-7'> Exams </div>


                        
                        <span className="hidden bg-blue-300 w-[3.2rem] h-[0.25rem] rounded-full absolute top-14 left-[-2px] group-hover:inline-block"></span>

                        <div className="hidden group-hover:flex  absolute top-[4.9rem] left-[-0.6rem] w-[14rem] h-36 bg-[#245190] rounded-2xl flex-col items-start p-4 gap-4 z-20 group-hover:cursor-pointer">
                            <Link to="/exam/neet" className="text-white hover:text-blue-300 hover:cursor-pointer">
                                <p>Neet</p> 
                            </Link>
                            <Link to="/exam/jee" className="text-white hover:text-blue-300">
                                Jee
                            </Link>
                            <Link to="/exam/classes-6-10" className="text-white hover:text-blue-300">
                                Class 6-10
                            </Link>
                        </div>
                    </div>


                    <div className="hover:cursor-pointer relative group">

                           <div className='border-box py-7'> Programs </div>

                       
                        <span className='hidden bg-blue-300  w-[4.6rem] h-[0.25rem] rounded-full absolute top-14 left-[-2px] group-hover:inline-block'></span>
                        <div className='hidden bg-[#245190] w-[14rem] h-36 absolute top-[4.9rem] left-[-0.6rem] group-hover:inline-block rounded-2xl group-hover:cursor-pointer' >
                            <div className='flex flex-col items-start p-4 gap-4'>
                            <Link to="/programs/online-programs" className="text-white hover:text-blue-300">
                                Online Programs
                            </Link>
                            <a href="https://www.allen.ac.in/" target='_blank' className="text-white hover:text-blue-300">
                                Classroom Programs
                            </a>
                            <a href="https://dlp.allen.ac.in/" target='_blank' className="text-white hover:text-blue-300">
                                Distance Learning
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="hover:cursor-pointer relative group">

                            <div className='border-box py-7'> Scholarships </div>

                        <span className='hidden bg-blue-300  w-[6rem] h-[0.25rem] rounded-full absolute top-14 left-[-2px] group-hover:inline-block '></span>
                        <div className='hidden bg-[#245190] w-[14rem] h-26 absolute top-[4.9rem] left-[-0.6rem] group-hover:inline-block rounded-2xl group-hover:cursor-pointer' >
                            <div className='flex flex-col items-start p-4 gap-4'>
                            <Link to="/scholarships" className="text-white hover:text-blue-300">
                                ADSAT
                            </Link>
                            <a href="https://studyonline.tallentex.com/" target='_blank' className="text-white hover:text-blue-300">
                                TALENTEX
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="hover:cursor-pointer relative group">

                            <div className='border-box py-7'>Test Series </div>

                        <span className='hidden bg-blue-300  w-[5.3rem] h-[0.25rem] rounded-full absolute top-14 left-[-2px] group-hover:inline-block'></span>
                        <div className='hidden bg-[#245190] w-[14rem] h-36 absolute top-[4.9rem] left-[-0.6rem] group-hover:inline-block rounded-2xl group-hover:cursor-pointer' >
                            <div className='flex flex-col items-start p-4 gap-4'>
                            <Link to="/exam/neet" className="text-white hover:text-blue-300">
                                Neet
                            </Link>
                            <Link to="/exam/jee" className="text-white hover:text-blue-300">
                                Jee(Main + Advance)
                            </Link>
                            <Link to="/exam/jee" className="text-white hover:text-blue-300">
                                Jee Main
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hover:cursor-pointer relative group">

                            <div className='border-box py-7'> Study Materials </div>

                        <span className='hidden bg-blue-300 w-[7.4rem] h-[0.25rem] rounded-full absolute top-14 left-[-2px] group-hover:inline-block'></span>
                        <div className='hidden bg-[#245190] w-[14rem] h-64 absolute top-[4.9rem] left-[-0.6rem] group-hover:inline-block rounded-2xl group-hover:cursor-pointer' >
                            <div className='flex flex-col items-start p-4 gap-4'>
                                <Link to="/exam/jee" className="text-white hover:text-blue-300">
                                    Jee Main
                                </Link>
                                <Link to="/exam/jee" className="text-white hover:text-blue-300">
                                    Jee Advance
                                </Link>
                                <Link to="/exam/neet" className="text-white hover:text-blue-300">
                                    Neet
                                </Link>
                                <Link to="/exam/jee" className="text-white hover:text-blue-300">
                                    Ncert Solution
                                </Link>
                                <Link to="/exam/neet" className="text-white hover:text-blue-300">
                                    CBSE
                                </Link>
                                <Link to="/exam/jee" className="text-white hover:text-blue-300">
                                    Olympiad
                                </Link>
                                
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex relative left-[23rem] gap-6">
                    <div className="bg-white text-[#0f1825] py-2 px-5 rounded-full hover:cursor-pointer relative">
                      <span className='absolute right-24 top-3' > <LuPhoneCall /> </span> <span className='text-white'>all</span> Talk to us 
                    </div>
                    <div className="border py-2 px-4 rounded-full hover:cursor-pointer hover:bg-[#6b7c8c] ">
                        Login
                    </div>
                </div>
                
        </div>
    </div>
}

export default TopBar