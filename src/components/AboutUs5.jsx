
import Profile from '../assets/pfp.png';
import Founder1 from '../assets/Founder1.png';
import fbg from '../assets/fbackground.png';


function AboutUs5() {
    return (
        <div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${fbg})` }}>
            <main className="mx-auto pt-10 h-auto w-auto">
                <h1 className="text-2xl text-center font-bold text-[#0139B5] tracking-tight sm:text-3xl md:text-4xl">
                    <span className="block xl:inline">Founders of ModernVate</span> </h1>
                <div className="flex justify-end items-right">
                    <div className="grid grid-rows-2 gap-4 ml-10 mr-10">
                        <div className="mt-10 flex justify-left items-center">
                            <span className="text-base font-bold text-[#EF4A37]">MR. ANIKET MHALA
                                <p className="text-sm font-bold text-black">Global Technology Expert & Innovation Leader</p>
                                <div className="mt-5 flex justify-left items-center">
                                    <img
                                        className="object-scale-down h-32 w-32 mr-5"
                                        src={Profile}
                                        alt="Profile" />
                                    <p className="text-sm font-bold text-slate-500 tracking-wide leading-relaxed mr-10">A Strategic & Achievement-oriented
                                        passionate leader, offering 27 years of rich
                                        & multi-functional experience with strong technology & business development
                                        skills and broad multinational experience in delivering IT solutions across
                                        the enterprise by leveraging deep Technology, Innovation, IT advisory
                                        and Hands-On experience.</p>
                                </div>
                            </span>
                        </div>
                        <div className="mt-5 flex justify-right items-center text-right">
                            <span className="text-base font-bold text-[#EF4A37]">MR. RANDOM EXPOSES
                                <p className="text-sm font-bold text-black">Global Technology Expert & Innovation Leader</p>
                                <div className="mt-5 flex justify-left items-center text-left">
                                    <p className="text-sm font-bold text-slate-500 tracking-wide leading-relaxed ml-10">A Strategic & Achievement-oriented
                                        passionate leader, offering 27 years of rich
                                        & multi-functional experience with strong technology & business development
                                        skills and broad multinational experience in delivering IT solutions across
                                        the enterprise by leveraging deep Technology, Innovation, IT advisory
                                        and Hands-On experience.</p>
                                    <img
                                        className="object-scale-down h-32 w-32 ml-5"
                                        src={Profile}
                                        alt="Profile" />
                                </div>
                            </span>
                        </div>
                    </div>
                    <img
                        className="mr-10 h-96 w-96 sm:h-full md:h-full "
                        src={Founder1}
                        alt="IT Expert"
                    />
                </div>


                {/* Icons */}

                <p className="mt-5 text-xs ml-10 text-gray-400 text-align-left">&#169; All rights reserved to ModernVate</p>
                <div className="flex items-center justify-end mr-10 grid-cols-5 gap-2 pb-10">
                    <svg className="fill-blue-700 text-white w-8 h-8 transform motion-safe:hover:scale-90" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50">
                        <path
                            d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z">
                        </path>
                    </svg>

                    <svg className="fill-blue-400 w-8 h-8 transform motion-safe:hover:scale-90" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50">
                        <path
                            d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z">
                        </path>
                    </svg>

                    <svg className="fill-blue-600 w-8 h-8 transform motion-safe:hover:scale-90" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50">
                        <path
                            d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z">
                        </path>
                    </svg>

                    <svg className="fill-purple-800 w-8 h-8 transform motion-safe:hover:scale-90" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z">
                        </path>
                    </svg>

                    <svg className="fill-blue-800 w-8 h-8 transform motion-safe:hover:scale-90" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17 17">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" fill="blue">
                        </path>
                    </svg>

                </div>
            </main>
        </div>
    )
}

export default AboutUs5;