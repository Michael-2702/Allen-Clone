import { Link } from "react-router-dom";

function Neet (){
     

    return <div className="absolute w-screen h-screen overflow-clip top-20 text-white bg-[#0f1825]">
        <div className="flex gap-4 relative left-44 top-12 lg:left-[20rem] 2xl:left-[23rem]  xl:left-[7.7rem] ">
            <Link to={"/"}>
                <span className="font-thin"> Home </span> 
            </Link>
            <span className="font-thin"> {">"} </span> 
            <Link to={"/programs/online-programs"}>
                <span className="font-thin"> Online Programs </span> 
            </Link>
            <span className="font-thin"> {">"} </span> 
            <span className="font-thin">Neet</span>
        </div>
        <div className="w-[1080px] h-[450px] relative text-white mx-auto my-0 flex flex-col lg:flex-row xl:flex-row 2xl:flex-row md:relative md:left-[8rem] sm:relative sm:left-[6rem] ">
            
            <div className="w-[570px] flex flex-col gap-8 relative top-20 ">
                <h3 className="text-4xl font-bold">
                NEET Online Coaching
                </h3>
                <div >
                    <p className="leading-9">
                    Our NEET Online coaching programs prioritize the NCERT syllabus, a 
                    cornerstone for NEET success. You get access to exclusive study tools 
                    and techniques to enhance memory retention and boost your speed, 
                    two crucial factors in acing the NEET exam
                    </p>
                   
                </div>
               
            </div>
            <div className="w-[470px] relative left-28 top-24">
                     <img className="w-72" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081871/200_neet_nd7zeb.webp" />
            </div>
       </div>
    </div>
}

export default Neet;