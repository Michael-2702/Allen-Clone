import { useNavigate } from 'react-router-dom'

function TopBar(){

    function examToggle(){

        return (
            <div>
                <div>Neet</div>
                <div>Jee</div>
                <div>Class 6-10</div>
            </div>
        )
    }

    return <div className="flex justify-center bg-[#0f1825] text-white">
        <div className="h-[5rem] bg-[#0f1825] w-[73.5rem] flex gap-6 items-center">
                <h1 className="text-4xl font-black hover:cursor-pointer">
                    Allen
                </h1>

                <div className="flex gap-6">
                    <div className="hover:cursor-pointer relative group">
                        Exams
                        <span className='hidden bg-blue-300  w-[3.2rem] h-[0.25rem] rounded-full absolute top-7 left-[-2px] group-hover:inline-block'></span>
                    </div>
                    <div className="hover:cursor-pointer relative group">
                        Programs
                        <span className='hidden bg-blue-300  w-[4.6rem] h-[0.25rem] rounded-full absolute top-7 left-[-2px] group-hover:inline-block'></span>
                    </div>
                    <div className="hover:cursor-pointer relative group">
                        Scholarships
                        <span className='hidden bg-blue-300  w-[6rem] h-[0.25rem] rounded-full absolute top-7 left-[-2px] group-hover:inline-block'></span>
                    </div>
                    <div className="hover:cursor-pointer relative group">
                        Test Series
                        <span className='hidden bg-blue-300  w-[5.3rem] h-[0.25rem] rounded-full absolute top-7 left-[-2px] group-hover:inline-block'></span>
                    </div>
                    <div className="hover:cursor-pointer relative group">
                        Study Materials
                        <span className='hidden bg-blue-300 w-[7.4rem] h-[0.25rem] rounded-full absolute top-7 left-[-2px] group-hover:inline-block'></span>
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