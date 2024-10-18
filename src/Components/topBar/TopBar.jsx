import { Link } from 'react-router-dom'

function TopBar(){
    


    
    return <div className="flex justify-center bg-[#0f1825] text-white">
        <div className="h-[5rem] bg-[#0f1825] w-[73.5rem] flex gap-6 items-center">
                <h1 className="text-4xl font-black hover:cursor-pointer mr-5">
                    <Link to="/">Allen</Link>
                </h1>

                <div className="flex gap-6">

                    
                    <div className="hover:cursor-pointer relative group">
                        <Link to="/exam" className="relative z-10">
                            <div className='border-box py-7'> Exams </div>
                        </Link>

                        
                        <span className="hidden bg-blue-300 w-[3.2rem] h-[0.25rem] rounded-full absolute top-14 left-[-2px] group-hover:inline-block"></span>

                        <div className="hidden group-hover:flex  absolute top-[4.9rem] left-[-0.6rem] w-[14rem] h-36 bg-[#245190] rounded-2xl flex-col items-start p-4 gap-4 z-20">
                        <Link to="/exam" className="text-white hover:text-blue-300 ">
                            <p className='hover:cursor-pointer'>Neet</p> 
                        </Link>
                        <Link to="/exam" className="text-white hover:text-blue-300">
                            Jee
                        </Link>
                        <Link to="/exam" className="text-white hover:text-blue-300">
                            Class 6-10
                        </Link>
                        </div>
                    </div>


                    <div className="hover:cursor-pointer relative group">
                        <Link to="/programs">
                           <div className='border-box py-7'> Programs </div>
                        </Link>
                       
                        <span className='hidden bg-blue-300  w-[4.6rem] h-[0.25rem] rounded-full absolute top-14 left-[-2px] group-hover:inline-block'></span>
                        <div className='hidden bg-[#245190] w-[14rem] h-36 absolute top-[4.9rem] left-[-0.6rem] group-hover:inline-block rounded-2xl' >
                            <div className='flex flex-col items-start p-4 gap-4'>
                            <Link to="/programs" className="text-white hover:text-blue-300">
                                Online Programs
                            </Link>
                            <Link to="/programs" className="text-white hover:text-blue-300">
                                Classroom Programs
                            </Link>
                            <Link to="/programs" className="text-white hover:text-blue-300">
                                Distance Learning
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hover:cursor-pointer relative group">
                        <Link to="/scholarships">
                            <div className='border-box py-7'> Scholarships </div>
                        </Link>
                        <span className='hidden bg-blue-300  w-[6rem] h-[0.25rem] rounded-full absolute top-14 left-[-2px] group-hover:inline-block'></span>
                        <div className='hidden bg-[#245190] w-[14rem] h-26 absolute top-[4.9rem] left-[-0.6rem] group-hover:inline-block rounded-2xl' >
                            <div className='flex flex-col items-start p-4 gap-4'>
                            <Link to="/scholarships" className="text-white hover:text-blue-300">
                                OADSAT
                            </Link>
                            <Link to="/scholarships" className="text-white hover:text-blue-300">
                                TALENTEX
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hover:cursor-pointer relative group">
                        <Link to="/test-series">
                            <div className='border-box py-7'>Test Series </div>
                        </Link>
                        <span className='hidden bg-blue-300  w-[5.3rem] h-[0.25rem] rounded-full absolute top-14 left-[-2px] group-hover:inline-block'></span>
                        <div className='hidden bg-[#245190] w-[14rem] h-36 absolute top-[4.9rem] left-[-0.6rem] group-hover:inline-block rounded-2xl' >
                            <div className='flex flex-col items-start p-4 gap-4'>
                            <Link to="/test-series" className="text-white hover:text-blue-300">
                                Neet
                            </Link>
                            <Link to="/test-series" className="text-white hover:text-blue-300">
                                Jee(Main + Advance)
                            </Link>
                            <Link to="/test-series" className="text-white hover:text-blue-300">
                                Jee Main
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hover:cursor-pointer relative group">
                        <Link to="study-materials">
                            <div className='border-box py-7'> Study Materials </div>
                        </Link>
                        <span className='hidden bg-blue-300 w-[7.4rem] h-[0.25rem] rounded-full absolute top-14 left-[-2px] group-hover:inline-block'></span>
                        <div className='hidden bg-[#245190] w-[14rem] h-64 absolute top-[4.9rem] left-[-0.6rem] group-hover:inline-block rounded-2xl' >
                            <div className='flex flex-col items-start p-4 gap-4'>
                                <Link to="/study-materials" className="text-white hover:text-blue-300">
                                    Jee Main
                                </Link>
                                <Link to="/study-materials" className="text-white hover:text-blue-300">
                                    Jee Advance
                                </Link>
                                <Link to="/study-materials" className="text-white hover:text-blue-300">
                                    Neet
                                </Link>
                                <Link to="/study-materials" className="text-white hover:text-blue-300">
                                    Ncert Solution
                                </Link>
                                <Link to="/study-materials" className="text-white hover:text-blue-300">
                                    CBSE
                                </Link>
                                <Link to="/study-materials" className="text-white hover:text-blue-300">
                                    Olympiad
                                </Link>
                                
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex relative left-[23rem] gap-6">
                    <div className="bg-white text-[#0f1825] py-2 px-3 rounded-full hover:cursor-pointer ">
                        Talk to us
                    </div>
                    <div className="border py-2 px-4 rounded-full hover:cursor-pointer hover:bg-[#6b7c8c] ">
                        Login
                    </div>
                </div>
                
        </div>
    </div>
}

export default TopBar