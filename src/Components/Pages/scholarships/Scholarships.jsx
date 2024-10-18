import { Link } from "react-router-dom"


function Scholarships (){
     

    return <div className="absolute w-full h-full top-20 text-white bg-[#0f1825]">
         <div>
                <img className="h-[230px]" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1718962329/FAQs/adsat_dark_mode_web_em8fmq.png" />
        </div>
        <h2 className="text-3xl m-10 relative left-[8.4rem]">Discover the perfect online program</h2>
        <div className="w-[1080px] h-[450px]  text-white mx-auto my-0 flex gap-8">
            <Link to="/exam/jee">
                <div className="bg-[#1a2439] text-3xl w-[320px] h-[240px] rounded-2xl p-[20px]  relative">
                    JEE
                    <div className="text-blue-300 text-xl absolute bottom-8">                       
                        View {"->"}                        
                    </div>
                    <div>
                        <img className="w-[14rem] absolute bottom-0 right-[-1rem]" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081052/200_jee_pnsy0n.webp"/>                        
                    </div>
                </div>
            </Link>
            <Link to="/exam/neet">
                <div className="bg-[#1a2439] text-3xl w-[320px] h-[240px] rounded-2xl p-[20px]  relative overflow-hidden">
                    Neet
                    <div className="text-blue-300 text-xl absolute bottom-8">
                        View {"->"}
                    </div>
                    <div className="overflow-hidden">
                        <img className="w-[14rem] absolute bottom-[-2.5rem] right-[-1rem] object-cover" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081871/200_neet_nd7zeb.webp" />
                    </div>
                </div>
            </Link>
            <Link to="/exam/classes-6-10">
                <div className="bg-[#1a2439] text-3xl w-[320px] h-[240px] rounded-2xl p-[20px]  relative">
                    Grade 6-10
                    <div className="text-blue-300 text-xl absolute bottom-8">
                        View {"->"}
                    </div>
                    <div>
                        <img className="w-[14rem] absolute bottom-0 right-0" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081870/200_grade_6_10_lakdfs.webp" />
                    </div>
                </div>
            </Link>
        </div>
</div>
}

export default Scholarships