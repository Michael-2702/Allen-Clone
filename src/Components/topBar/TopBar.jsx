import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuPhoneCall } from 'react-icons/lu';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

function TopBar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    return <div className="lg:flex overflow-hidden h-[30rem] xl:w-full 2xl:w-full lg:justify-center w-full bg-[#0f1825] text-white ">
        <div className="h-[5rem] bg-[#0f1825] lg:w-[73.5rem]  flex gap-6 items-center">
                <h1 className="text-4xl font-black hover:cursor-pointer ml-14 lg:mr-5 md:ml-16 sm:ml-16">
                    <Link to="/">Allen</Link>
                </h1>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden absolute ml-6 mr-6 text-2xl"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? <IoMdClose /> : <HiMenuAlt3 />}
                </button>

                {/* Sidebar for mobile */}
                <div className={`lg:hidden fixed top-0 left-0 h-full w-[18rem] bg-[#0f1825] transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? '-translate-x-0' : '-translate-x-full'} z-50`}>
                    <div className="flex justify-end p-4">
                        <button 
                            onClick={() => setIsSidebarOpen(false)}
                            className="text-2xl"
                        >
                         <span className='absolute left-4 text-3xl font-bold'>Allen</span>   <IoMdClose />
                        </button>
                    </div>
                    
                    <div className="flex flex-col px-4 gap-4">
                        {/* Exams */}
                        <div className="relative group">
                            <div className="py-2 font-medium">Exams</div>
                            <div className="pl-4 flex flex-col gap-2 mt-1">
                                <Link to="/exam/neet" className="text-gray-300 hover:text-blue-300">Neet</Link>
                                <Link to="/exam/jee" className="text-gray-300 hover:text-blue-300">Jee</Link>
                                <Link to="/exam/classes-6-10" className="text-gray-300 hover:text-blue-300">Class 6-10</Link>
                            </div>
                        </div>

                        {/* Programs */}
                        <div className="relative group">
                            <div className="py-2 font-medium">Programs</div>
                            <div className="pl-4 flex flex-col gap-2 mt-1">
                                <Link to="/programs/online-programs" className="text-gray-300 hover:text-blue-300">Online Programs</Link>
                                <a href="https://www.allen.ac.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300">Classroom Programs</a>
                                <a href="https://dlp.allen.ac.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300">Distance Learning</a>
                            </div>
                        </div>

                        {/* Scholarships */}
                        <div className="relative group">
                            <div className="py-2 font-medium">Scholarships</div>
                            <div className="pl-4 flex flex-col gap-2 mt-1">
                                <Link to="/scholarships" className="text-gray-300 hover:text-blue-300">ADSAT</Link>
                                <a href="https://studyonline.tallentex.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300">TALENTEX</a>
                            </div>
                        </div>

                        {/* Test Series */}
                        <div className="relative group">
                            <div className="py-2 font-medium">Test Series</div>
                            <div className="pl-4 flex flex-col gap-2 mt-1">
                                <Link to="/exam/neet" className="text-gray-300 hover:text-blue-300">Neet</Link>
                                <Link to="/exam/jee" className="text-gray-300 hover:text-blue-300">Jee(Main + Advance)</Link>
                                <Link to="/exam/jee" className="text-gray-300 hover:text-blue-300">Jee Main</Link>
                            </div>
                        </div>

                        {/* Study Materials */}
                        <div className="relative group">
                            <div className="py-2 font-medium">Study Materials</div>
                            <div className="pl-4 flex flex-col gap-2 mt-1">
                                <Link to="/exam/jee" className="text-gray-300 hover:text-blue-300">Jee Main</Link>
                                <Link to="/exam/jee" className="text-gray-300 hover:text-blue-300">Jee Advance</Link>
                                <Link to="/exam/neet" className="text-gray-300 hover:text-blue-300">Neet</Link>
                                <Link to="/exam/jee" className="text-gray-300 hover:text-blue-300">Ncert Solution</Link>
                                <Link to="/exam/neet" className="text-gray-300 hover:text-blue-300">CBSE</Link>
                                <Link to="/exam/jee" className="text-gray-300 hover:text-blue-300">Olympiad</Link>
                            </div>
                        </div>

                        {/* Contact buttons */}
                        <div className="mt-6 flex flex-col gap-4">
                            <div className="bg-white text-[#0f1825] py-2 px-4 rounded-full text-center">
                                <LuPhoneCall className="inline mr-2" /> Talk to us
                            </div>
                            <div className="border py-2 px-4 rounded-full text-center hover:bg-[#6b7c8c]">
                                Login
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:flex hidden gap-6 md:hidden sm:hidden">

                    
                    <div className="hover:cursor-pointer relative group">

                            <div className='border-box py-7'> Exams </div>


                        
                        <span className="hidden bg-blue-300 w-[3.2rem] h-[0.25rem] rounded-full absolute top-14 left-[-2px] group-hover:inline-block"></span>

                        <div className="hidden group-hover:flex absolute top-[4.9rem] left-[-0.6rem] w-[14rem] lg h-36 bg-[#245190] rounded-2xl flex-col items-start p-4 gap-4 z-48 group-hover:cursor-pointer">
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

                <div className="lg:flex sm:flex md:flex xl:flex hidden relative lg:right-[7rem]  lg:left-[8rem] xl:left-[15rem] md:right-[10rem] sm:left-[17rem] gap-6">
                    <div className="bg-white text-[#0f1825] py-2 px-5 rounded-full hover:cursor-pointer md:relative md:left-16 xl:  ">
                      <span className='absolute lg:right-24 lg:top-3' > <LuPhoneCall /> </span> <span className='text-white'>all</span> Talk to us 
                    </div>
                    <div className="border py-2 px-4 rounded-full hover:cursor-pointer hover:bg-[#6b7c8c] md:relative md:left-16 lg:relative lg:right-36">
                        Login
                    </div>
                </div>
                
        </div>
    </div>
}

export default TopBar