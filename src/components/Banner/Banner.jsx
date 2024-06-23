



import 'animate.css';

import photo from '../../assets/rk.png'
import { Element } from 'react-scroll';
import bannerImage from '../../assets/banner.png'

const Banner = () => {

    return (
        <div>

          
            <div className='mb-44'>
                <div className='text-[] md:text-3xl md:font-bold text-center text-blue-600 mb-4 flex flex-row items-center justify-center gap-2'>
                    <div>
                      
                    </div>
                </div>
            </div>

            <div className='hero max-w-[490px]  md:max-w-[540px] lg:max-w-[1540px] mx-auto  rounded-3xl mb-10 bg-no-repeat' style={{ backgroundImage: `url(${bannerImage})` }}>

                <div className='hero-overlay bg-opacity-70 rounded-3xl flex flex-col md:flex-row items-center lg:p-32 md:px-8 px-4 py-8 md:py-2'>
                    <div className='rounded-3xl w-full md:w-[70%]'>

                      
                        <div className=''>
                            <h1 class="animate__animated animate__fadeInLeft">
                                <span className='text-[40px] md:text-4xl lg:text-6xl font-bold text-white'>
                                    Hi ! I am Rakesh Biswas
                                </span>
                            </h1>
                            <p className='text-[20px] md:text-2xl lg:text-4xl  text-white'>
                                Full-Stack Developer | Competitive Programmer | Undergraduate Student
                            </p>
                        </div>
                        <div className='text-[20px] md:text-xl lg:text-2xl text-white font-bold'>

                            

                        </div>
                    </div>

                    <div className=' md:rounded-full mt-4 md:w-[30%] md:ml-[50px] lg:ml-32'>
                        <h1 class="animate__animated animate__zoomIn">
                            {/* <Link to="/allBook">
                                <button className='btn btn-outline btn-accent md:btn-lg '>
                                    <div className='flex gap-2 items-center'>
                                        <p>Explore</p> <FaArrowRightLong />
                                    </div>
                                </button>
                            </Link> */}
                            <div className='w-44 h-48 lg:w-52 border border-cyan-400 rounded-full'>
                                <img className='w-60 h-48 rounded-full' src={photo} alt="Profile Photo" />
                            </div>
                        </h1>
                    </div>
                </div>


            </div>


           




        </div>
    );
};

export default Banner;
