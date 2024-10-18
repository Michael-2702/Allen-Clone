import { Link } from "react-router-dom";

function Class (){
     

    return <div className="absolute w-full h-full top-20 text-white bg-[#0f1825]">
        <div className="flex gap-4 relative left-44 top-12">
            <Link to={"/"}>
                <span className="font-thin"> Home </span> 
            </Link>
            <span className="font-thin"> {">"} </span> 
            <span className="font-thin">Grade 6-10</span>
        </div>
        <div className="w-[1080px] h-[450px]  text-white mx-auto my-0 flex">
            <div className="w-[570px] flex flex-col gap-8 relative top-20">
                <h3 className="text-4xl font-bold">
                Grade 6-10
                </h3>
                <div >
                    <p className="leading-9">
                    Our programs for Grades 6-10 ensure success in school exams, <br />
                    Olympiads and other competitive tests. Focused on key NCERT <br />
                    subjects, we nurture fundamentals, problem-solving and scientific <br />
                    thinking, equipping students for a competitive edge and a promising <br />
                    future.
                    </p>
                   
                </div>
               
            </div>
            <div className="w-[470px] relative left-20 top-24">
                     <img className="w-[19rem]" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081870/200_grade_6_10_lakdfs.webp" />
            </div>
       </div>
    </div>
}

export default Class