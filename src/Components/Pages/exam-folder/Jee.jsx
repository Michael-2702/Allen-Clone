import { Link } from "react-router-dom";

function Jee (){
     

    return <div className="absolute w-full h-full top-20 text-white bg-[#0f1825]">
        <div className="flex gap-4 relative left-44 top-12">
            <Link to={"/"}>
                <span className="font-thin"> Home </span> 
            </Link>
            <span className="font-thin"> {">"} </span> 
            <Link to={"/programs/online-programs"}>
                <span className="font-thin"> Online Programs </span> 
            </Link>
            <span className="font-thin"> {">"} </span> 
            <span className="font-thin">JEE</span>
        </div>
        <div className="w-[1080px] h-[450px] relative top-24  text-white mx-auto my-0 flex">
            <div className="w-[570px] flex flex-col gap-8">
                <h3 className="text-4xl font-bold">
                JEE Online Coaching
                </h3>
                <div >
                    <p className="leading-8">
                    Our JEE coaching programs are expertly designed to navigate 
                    the complexity of JEE concepts. The program balances its focus on both in
                    -depth understanding and challenging problem-solving, empowering 
                    you with confidence to ace the JEE Main and Advanced exams.
                    </p>
                    
                </div>
               
            </div>
            <div className="w-[470px] relative left-20 bottom-4">
                    <img className="w-[19rem]" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081052/200_jee_pnsy0n.webp" />
            </div>
       </div>
    </div>
}

export default Jee