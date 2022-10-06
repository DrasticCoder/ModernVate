import React, { useState } from 'react';
import bgpic from '../assets/lrBg.png';
import modernVate from '../assets/Group 27.png';
import welcome from '../assets/Mobile login-cuate 1.png';
import googleLogo from '../assets/google.png';
import fbLogo from '../assets/fb.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const url = "http://localhost:9000/api/user/login";
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleData = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    };

    const submitForm = (e) => {
        e.preventDefault();
        axios.post(url, {
            email: data.email,
            password: data.password,
        }).then((res) => {
            console.log(res);
            alert(res.data.message);
        }).catch((err) => {
            // console.log(err);
            alert(err);
        });
    };
    // const PostData = async(e) => {
    //   e.preventDefault();
    //   const {email, password} = allEntry;
    //   const res = await fetch("/api/user/login",{     //error here 
    //     method:"POST",
    //     headers:{
    //       "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify({
    //       email, password
    //     })
    //   });
    //   const data = await res.json();
    //   if(data.status === 422 || !data){
    //     window.alert("Invalid Registration");
    //     console.log("Invalid Registration");
    //   }else{
    //     window.alert("Login Successful");
    //     console.log("Login Successful");
    //   }
    // }
    return (
        <div className="bg-cover h-screen" style={{ backgroundImage: `url(${bgpic})` }}>
            <span>
                <Link to='/'>
                    <img className="ml-4 w-52 h-auto" src={modernVate} alt="img desc" />
                </Link>
            </span>
            <div className="flow-root flex-col items-end justify-center mx-12 w-auto h-auto">
                <div className="float-right flex flex-col items-center justify-center w-1/2 h-[43rem] bg-white/30 rounded-[5rem] border-2 border-offwhite shadow-lg">
                    <h1 className="text-4xl font-bold poppins mt-[6rem] text-orange">Login Account</h1>
                    <div className="flex gap-8">
                        <button className="items-center justify-center flex p-2 w-auto border-[0.2rem] border-grey border-solid hover:bg-offwhite/30 rounded-[0.8rem] my-[4rem]">
                            <img className="w-6 m-1" src={googleLogo} alt="img desc" />
                            <span className="m-1 text-grey">Sign in with Google</span>
                        </button>
                        <button className="items-center justify-center flex p-2 w-auto border-[0.2rem] border-grey border-solid hover:bg-offwhite/30 rounded-[0.8rem] my-[4rem]">
                            <img className="w-6 m-1" src={fbLogo} alt="img desc" />
                            <span className="m-1 text-grey ">Sign in with Facebook</span>
                        </button>
                    </div>
                    <div className="flex">
                        <span className=" items-center text-grey tracking-[0.3em] py-4 font-poppins">-OR-</span>
                    </div>
                    <form onSubmit={submitForm} method='POST' className="flex flex-col items-center justify-center w-full h-full gap-4">
                        <div className="relative w-full px-10" id='form'>
                            <input type="email" name="email" id="email" value={data.email} onChange={handleData} className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer" placeholder='Username' autoComplete="off" required pattern="\S+.*" />
                        </div>
                        <div className="relative w-full px-10">
                            <input type="password" name="password" id="password" value={data.password} onChange={handleData} className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer" autoComplete="off" placeholder='Password' required pattern="\S+.*" />
                        </div>
                        <div className='relative w-full px-10'>
                            <button className="w-full h-12 px-4 my-4 font-extrabold font-poppins text-2xl text-white bg-blue rounded-[0.3rem] hover:bg-lb focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">LOGIN ACCOUNT</button>
                        </div>
                        <Link to='/register'>
                            <p className="font-poppins text-sm items-center">
                                <span className=" text-grey hover:underline hover:decoration-grey">Don't have an account?</span>
                                <span className=" text-orange hover:underline hover:decoration-orange"> Sign Up</span>
                            </p>
                        </Link>
                    </form>
                </div>
                <div className="font-cambria text-blue ml-6 mt-12 text-5xl tracking-wider">
                    Getting
                </div>
                <div className="font-cambria text-blue ml-6 text-5xl tracking-wider"> Started With </div>
                <div className="font-cambria ml-6 text-6xl text-orange tracking-wider"> Big Thing</div>
                <img className="float-left w-[40rem] h-[32rem] object-bottom" src={welcome} alt="img desc" />
            </div>
        </div >

    )
}

export default Login