import './styles.css'
import { Link } from 'react-router-dom'

function HeroSection(){

    return <div className="absolute w-full h-full overflow-hidden lg:w-full lg:h-full md:w-screen sm:w-screen sm:h-screen md:h-screen top-14 text-white bg-[#0f1825]">
        <div className="lg:w-[67rem] md:w-[650px] mt-8 w-[300px] sm:w-[550px] lg:h-[180px]  mx-auto my-0 relative lg:top-16 md:top-6 sm:top-6">
            <a href="https://www.tallentex.com/tex2025/userpanel/register?utm_source=AD&utm_medium=referral&utm_campaign=txreg_ADweb" target="_blank">
                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1729019503/sg9nmeh16atrkgv9tb7k.png?_upload_ref=ic_img_tool" />
            </a>
        </div>
       <div className="lg:w-[1180px] lg:h-[500px] md:h-full md:w-[40rem] sm:mt-36 sm:w-full sm:h-full text-white mx-auto my-0 lg:flex lg:flex-row lg:gap-[12rem] lg:relative lg:right-28  lg:bottom-54 md:flex-col md:justify-center md:mt-0 sm:flex-col xl:top-8">
            <div className="lg:w-[440px] w-fit h-[200px] overflow-hidden flex flex-col justify-evenly  md:h-[350px] md:ml-48 sm:ml-52 lg:mt-[-2rem] ml-16">
                <h3 className="text-4xl font-bold">
                    Your Dream. Our<br></br>
                     Expertise.
                </h3>
                <div >
                    <p>
                        What brings you to us today?
                    </p>
                    <div className="mt-5">
                        <div className="mt-5">
                            <Link to="/exam/neet">
                                <span className="border-2 border-blue-300 px-4 py-2 rounded-3xl mr-3 text-base">NEET</span>
                            </Link>
                            <Link to="/exam/jee">
                                <span className="border-2 border-blue-300 px-4 py-2 rounded-3xl mr-3 text-base">JEE</span>
                            </Link>
                            <Link to="/exam/classes-6-10">
                                <span className="border-2 border-blue-300 px-4 py-2 rounded-3xl text-base">Grade 6-10</span>
                            </Link>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="container overflow-hidden lg:w-[550px] md:bottom-20 xl:mt-0 w-fit relative right-8 sm:ml-32 lg:right-36 lg:top-8">
                <div className="slider-wrapper lg:mr-[25rem]  md:mr-48 sm:mr-40 lg:mt-[-2rem] mr-36 w-[300px]">
                    <div class="slider">
                        <img id="slide-1" className='w-2' src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249760%2Fu_c_1_t79muq.webp&w=828&q=75" />
                        <img id="slide-2" src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249954%2Fu_c_2_tjpr1s.webp&w=828&q=75" />
                        <img id="slide-3" src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249955%2Fu_c_3_jqpb6o.webp&w=828&q=75" />
                        <img id="slide-4" src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249955%2Fu_c_3_jqpb6o.webp&w=828&q=75" />
                    </div>
                    <div className="slider-nav ">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                        <a href="#slide-4"></a>
                    </div>
                </div>
            </div>
       </div>
    </div>
}

export default HeroSection