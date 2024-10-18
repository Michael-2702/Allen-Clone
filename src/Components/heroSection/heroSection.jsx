import './styles.css'
import { Link } from 'react-router-dom'

function HeroSection(){

    return <div className="absolute w-full h-full top-14 text-white bg-[#0f1825]">
        <div className="w-[1050px] h-[180px] mx-auto my-0 relative top-16">
            <a href="https://www.tallentex.com/tex2025/userpanel/register?utm_source=AD&utm_medium=referral&utm_campaign=txreg_ADweb" target="_blank">
                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1729019503/sg9nmeh16atrkgv9tb7k.png?_upload_ref=ic_img_tool" />
            </a>
        </div>
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
                        <div className="mt-5">
                            <Link to="/exam/neet">
                                <button className="border-2 border-blue-300 px-4 py-2 rounded-3xl mr-3 text-base">NEET</button>
                            </Link>
                            <Link to="/exam/jee">
                                <button className="border-2 border-blue-300 px-4 py-2 rounded-3xl mr-3 text-base">JEE</button>
                            </Link>
                            <Link to="/exam/classes-6-10">
                                <button className="border-2 border-blue-300 px-4 py-2 rounded-3xl text-base">Grade 6-10</button>
                            </Link>
                        </div>
                    </div>
                </div>
               
            </div>
            <section className="container">
                <div className="slider-wrapper">
                    <div class="slider">
                        <img id="slide-1" className='w-2' src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249760%2Fu_c_1_t79muq.webp&w=828&q=75" />
                        <img id="slide-2" src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249954%2Fu_c_2_tjpr1s.webp&w=828&q=75" />
                        <img id="slide-3" src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249955%2Fu_c_3_jqpb6o.webp&w=828&q=75" />
                        <img id="slide-4" src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249955%2Fu_c_3_jqpb6o.webp&w=828&q=75" />
                    </div>
                    <div className="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                        <a href="#slide-4"></a>
                    </div>
                </div>
            </section>
       </div>
    </div>
}

export default HeroSection