

function HeroSection(){

    return <div className="absolute w-full h-full top-20 text-white bg-[#0f1825]">
       <div className="w-[940px] h-[450px]  text-white mx-auto my-0 flex">
            <div className="w-[470px] flex flex-col justify-evenly">
                <h3 className="text-4xl font-bold">
                    Your Dream. <br></br>
                    Our Expertise.
                </h3>
                <div >
                    <p>
                        What brings you to us today?
                    </p>
                    <div className="mt-5">
                        <button className="border-2 border-blue-300 px-4 py-2 rounded-3xl mr-3 text-base">NEET</button>
                        <button className="border-2 border-blue-300 px-4 py-2 rounded-3xl mr-3 text-base">JEE</button>
                        <button className="border-2 border-blue-300 px-4 py-2 rounded-3xl text-base">Grade 6-10</button>
                    </div>
                </div>
               
            </div>
            <div className="w-[470px]">

            </div>
       </div>
    </div>
}

export default HeroSection