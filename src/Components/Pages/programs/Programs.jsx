import { Link } from "react-router-dom"

function Programs (){
     

    return <div className="absolute w-full h-full top-20 text-white bg-[#0f1825]">
            <div className="w-[1080px] h-[450px]  text-white mx-auto my-0 flex">
                <div className="w-[570px] flex flex-col justify-evenly">
                    <h3 className="text-4xl font-bold">
                    Online Programs
                    </h3>
                    <div >
                        <p>
                        To get the full ALLEN Learning Experience explore the Ultimate Series of 
                        Programs for JEE, NEET and Olympiads. The Ultimate Programs are Allen
                        Recommended. They provide a fully structured curriculum with a week-
                        by-week plan and foster meaningful teacher-student interaction. 
                        These programs offer a personalized study experience, guiding you 
                        throughout your journey on where to concentrate your efforts.
                        </p>
                       
                    </div>
                
                </div>
                <div className="w-[470px] relative left-28 top-24">
                     <img className="w-72" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1712148519/online_ultimate_programs_1_oummbv.webp" />
            </div>
        </div>
    </div>
}

export default Programs