import React, { useState } from 'react';
import Select from 'react-select';
import bgpic from '../assets/lrBg.png';
import modernVate from '../assets/Group 27.png';
import welcome from '../assets/registerImg.png';
import googleLogo from '../assets/google.png';
import fbLogo from '../assets/fb.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const options = [
        {value:'student', label:'Student'},
        {value:'faculty', label:'Faculty'},
        {value:'organization', label:'Organization'},
        {value:'institure', label:'Institure'},
        {value:'startup', label:'Start-up'},
        {value:'itexpert', label:'IT Expert'},
    ]
    const url = "http://localhost:9000/api/user/register";
    const temp = "http://localhost:9000/";
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [category,ddlData] = useState(options.value);
    const ddlHandler = (e) => {
        ddlData(e.value);
    }

    const handleData = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    };

    const submitForm = (e) => {
        e.preventDefault();
        axios.post(url, {
            category: category,
            name: data.name,
            email: data.email,
            password: data.password,
        }).then((res) => {
            console.log(res.mes);
            alert(res.mes);
        }).catch((err) => {
            console.log(err.status);   
        });

    };


    const customStyles = {
        menu: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color: 'grey',
          padding: 10,
          margin:0,
          backgroundColor: '#D9E4FA',
          borderRadius: '0px 0px 20px 20px',
        }),
        control: (provided, style) => ({
            ...provided,
            backgroundColor: 'white/0',
            borderRadius: '0px 0px 0px 0px',
            border: '2px solid #7587A4',
            // : 'border: 2px solid blue',
        }),
      }

      function customTheme(theme) {
        return {
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#F5F5F5',
            primary: '#013BBA',
          },
        }
      }
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
        <div className="bg-cover h-full" style={{ backgroundImage: `url(${bgpic})` }}>
            <span>
                <Link to='/' className='dislay-inline'>
                    <img className="ml-4 w-52 h-auto" src={modernVate} alt="img desc" />
                </Link>
            </span>
            <div className="flow-root flex-col items-end justify-center mx-12 w-auto h-auto">
                <div className="float-right flex flex-col items-center justify-center w-1/2 h-[43rem] bg-white/30 rounded-[5rem] border-2 border-offwhite shadow-lg">
                    <h1 className="text-4xl font-bold poppins mt-[6rem] text-orange">Register Account</h1>
                    <div className="flex gap-16">
                        <button className="items-center justify-center flex p-2 w-auto border-[0.2rem] border-grey border-solid hover:bg-offwhite/30 rounded-[0.8rem] mt-[4rem]">
                            <img className="w-6 m-1" src={googleLogo} alt="img desc" />
                            <span className="m-1 text-grey">Sign in with Google</span>
                        </button>
                        <button className="items-center justify-center flex p-2 w-auto border-[0.2rem] border-grey border-solid hover:bg-offwhite/30 rounded-[0.8rem] mt-[4rem]">
                            <img className="w-6 m-1" src={fbLogo} alt="img desc" />
                            <span className="m-1 text-grey ">Sign in with Facebook</span>
                        </button>
                    </div>
                    <div className="flex">
                        <span className=" items-center text-grey tracking-[0.3em] font-poppins py-4">-OR-</span>
                    </div>
                    <form onSubmit={submitForm} method='POST' className="flex flex-col items-center justify-center w-full h-full gap-4">
                        <div className="relative w-full px-10">
                            <Select theme={customTheme} id="category" options={options} styles={customStyles} onChange={ddlHandler}/>
                        </div>
                        <div className="relative w-full px-10" id='form'>
                            <input type="text" name="name" id="name" value={data.name} onChange={handleData} className=" border-b-2 border-grey shadow-sm bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors" placeholder='Full Name' autoComplete="on" required pattern="\S+.*" />
                        </div>
                        <div className="relative w-full px-10" id='form'>
                            <input type="email" name="email" id="email" value={data.email} onChange={handleData} className="border-b-2 border-grey shadow-sm bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors" placeholder='Email' autoComplete="on" required pattern="\S+.*" />
                        </div>
                        <div className="relative w-full px-10">
                            <input type="password" name="password" id="password" value={data.password} onChange={handleData} className=" border-b-2 border-grey shadow-sm bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors" autoComplete="on" placeholder='Password' required pattern="\S+.*" />
                        </div>
                        <div className='relative w-full px-10'>
                            <button className="w-full h-12 px-4 mt-4 font-extrabold font-poppins text-2xl text-white bg-blue rounded-[0.3rem] hover:bg-lb focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">REGISTER ACCOUNT</button>
                        </div>
                        <Link to="/login">
                            <p className="font-poppins text-sm items-center">
                                <span className=" text-grey hover:underline hover:decoration-grey">Already have an account?</span>
                                <span className=" text-orange hover:underline hover:decoration-orange"> Sign In</span>
                            </p>
                        </Link>
                    </form>
                </div>
                <div className="font-cambria text-blue ml-6 mt-12 text-5xl tracking-wider">
                    It's too early to
                </div>
                <div className="font-cambria text-blue ml-6 text-5xl tracking-wider"> become an </div>
                <div className="font-cambria ml-6 text-6xl text-orange tracking-wider">Entrepreneur</div>
                <img className="float-left w-[40rem] h-[32rem] object-bottom" src={welcome} alt="img desc" />
            </div>
        </div >

    )
}

export default Register