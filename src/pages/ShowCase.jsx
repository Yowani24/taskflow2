// import {
//   Avatar,
//   Button,
//   Menu,
//   MenuHandler,
//   MenuItem,
//   MenuList,
//   Typography,
// } from "@material-tailwind/react";
// import React from "react";
// import { CgClose } from "react-icons/cg";
// import { LuMenu } from "react-icons/lu";
// import { useLang } from "../../hook/LangContext";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase";
// import { LuUser } from "react-icons/lu";
// import logo from "../assets/flexflowlogo2.png";

// // const imageUrl =
// //   "https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// const divStyle = {
//   //   backgroundImage: `url(${imageUrl})`,
//   //   backgroundSize: "cover", // Adjust as needed
//   //   backgroundPosition: "center", // Adjust as needed
//   //   // Additional styles can be added here
// };

// export default function ShowCase() {
  // const [openNav, setOpenNav] = useState(false);
  // const { language, switchLanguage, translations } = useLang();
  // const userString = localStorage.getItem("user");
  // const user = userString ? JSON.parse(userString) : null;
  // const navigate = useNavigate();

  // const handleLogout = async () => {
  //   await signOut(auth);
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");
  //   navigate("/login");
  // };
//   return (
//     <div className="w-full h-full flex flex-col bg-white">
//       <div className="flex justify-between p-5 md:px-20 md:pt-10">
//         {/* <Typography className="text-2xl font-medium">FlexFlow</Typography> */}
//         <img
//           className="object-cover object-center w-[150px] md:w-[200px]"
//           src={logo}
//           alt="nature image"
//           // width={200}
//         />
//         <div className="flex items-center gap-4">
//           <Menu>
//             <Menu />
//             <MenuHandler>
//               {/* <Avatar
//                 variant="circular"
//                 size="sm"
//                 alt="tania andrew"
                
//                 src={}
//               /> */}
//               <div className="cursor-pointer w-8 h-8 md:w-10 md:h-10 bg-gray-300 hover:bg-gray-400 transition rounded-full flex items-center justify-center">
//                 <LuUser size={20} />
//               </div>
//               {/* <FaUserCircle /> */}
//             </MenuHandler>
//             <MenuList>
//               <MenuItem className="flex items-center gap-2 bg-white">
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM10 5C10 5.53043 9.78929 6.03914 9.41421 6.41421C9.03914 6.78929 8.53043 7 8 7C7.46957 7 6.96086 6.78929 6.58579 6.41421C6.21071 6.03914 6 5.53043 6 5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5ZM8 9C7.0426 8.99981 6.10528 9.27449 5.29942 9.7914C4.49356 10.3083 3.85304 11.0457 3.454 11.916C4.01668 12.5706 4.71427 13.0958 5.49894 13.4555C6.28362 13.8152 7.13681 14.0009 8 14C8.86319 14.0009 9.71638 13.8152 10.5011 13.4555C11.2857 13.0958 11.9833 12.5706 12.546 11.916C12.147 11.0457 11.5064 10.3083 10.7006 9.7914C9.89472 9.27449 8.9574 8.99981 8 9Z"
//                     fill="#90A4AE"
//                   />
//                 </svg>

//                 <Typography variant="small" className="font-medium">
//                   {user && user.email.split("@")[0]}
//                 </Typography>
//               </MenuItem>

//               <hr className="my-2 border-blue-gray-50" />
              // <Link to="/login">
              //   <MenuItem
              //     className="flex items-center gap-2 bg-white"
              //     onClick={handleLogout}
              //   >
              //     <svg
              //       width="16"
              //       height="14"
              //       viewBox="0 0 16 14"
              //       fill="none"
              //       xmlns="http://www.w3.org/2000/svg"
              //     >
              //       <path
              //         fill-rule="evenodd"
              //         clip-rule="evenodd"
              //         d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
              //         fill="#90A4AE"
              //       />
              //     </svg>

              //     <Typography variant="small" className="font-medium">
              //       {translations.sign_out}
              //     </Typography>
              //   </MenuItem>
              // </Link>
//             </MenuList>
//           </Menu>
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-center mt-[5%] md:mt-[2%]">
//         <div className="flex items-center justify-center mb-10">
//           <Typography
//             variant="h4"
//             color="blue-gray"
//             className="text-2xl md:text-4xl"
//           >
//             {translations.hello} {user && user.email.split("@")[0]} 👋
//           </Typography>
//         </div>
//         <h1 className="text-[30px] md:text-[60px] font-medium mt-[0px] mb-10 md:mb-15 text-[#4b41dff3]">
//           {translations.welcome_to_flexflow}
//         </h1>
//         <div className="text-center flex items-center flex-col justify-center">
//           <h1 className="introFontFamily text-[30px] text-gray-900 md:text-[80px] font-semibold w-[90%] md:w-[60%]">
//             {translations.showcase_intro}
//           </h1>
          // <Link to="/taskflow">
          //   <Button className="mt-10 md:mt-20 rounded-full">
          //     {translations.get_started}
          //   </Button>
          // </Link>
//         </div>
//         <p className="pb-10 px-10 text-gray-800 mt-[20%] md:mt-[6%] text-center">
//           {translations.you_can_use_this_platform_to}{" "}
//           <Link to="/transcriptionForm">
//             <span className="text-[#4b41dff3] font-bold cursor-pointer">
//               {translations.transcribe_audio}
//             </span>
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from 'react';
import { FiUser } from "react-icons/fi";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { HiLogout, HiMail } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { IoMdCloud } from "react-icons/io";
import { BsClockFill } from "react-icons/bs";
import { HiFire } from "react-icons/hi2";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import logo from "../assets/flexflowlogo2.png";
import { useLang } from '../../hook/LangContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Showcase() {
  const [openNav, setOpenNav] = useState(false);
  const { language, switchLanguage, translations } = useLang();
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
      const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);
      
      setMousePosition({ x: mouseXpercentage, y: mouseYpercentage });
    };

    const handleClickOutsideMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);

  const handleSairClick = (event) => {
    event.stopPropagation();
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        // background: `radial-gradient(at ${mousePosition.x}% ${mousePosition.y}%, lightgray, #ffffff)`,
        // width: '100vw',
        height: '100%',
      }}
      className='bg-[#f1f3fd] px-5 md:px-36'
    >
      <div className='h-24 w-full flex justify-between items-center py-10 md:py-20'>
        <div>
          <img
            className="object-cover object-center w-[150px] md:w-[200px]"
            src={logo}
            alt="nature image"
          />
        </div>
        <div ref={menuRef} className='relative flex flex-col items-center' onClick={() => setMenuOpen(true)}>
          <div className='w-[40px] h-[40px] cursor-pointer transition bg-[#CBD5E1] rounded-full flex items-center justify-center'>
            <FiUser color='#212529' />
          </div>
          <div className={`flex flex-col items-start justify-between gap-3 md:bg-[#f1f3fd] w-40 h-28 shadow-md shadow-indigo-200 mt-2 rounded-md transition absolute p-2 top-10 right-0 ${menuOpen ? 'flex' : 'hidden'}`}>
            <span className='flex items-center w-full h-[50%] gap-2 text-[#5a5e63] transition hover:bg-slate-200 p-1 px-2 rounded-md font-medium text-xs cursor-pointer'><FaUserCircle size={16}/>{user && user.email.split("@")[0]}</span>
            <span className='border-t-2 border-t-gray-300 w-full'></span>
            <Link to="/login">
            <span className='flex items-center w-full h-[50%] gap-2 text-[#5a5e63] transition hover:text-red-400 hover:bg-slate-200 p-1 px-2 rounded-md font-medium text-xs cursor-pointer' onClick={handleLogout}><HiLogout size={16}/>{translations.sign_out}</span>
            </Link>
          </div>
        </div>
      </div>
      <p className='text-center mt-[10%] md:mt-[5%] text-[#212529] transition p-1 rounded-md font-medium md:text-3xl'>{translations.hello} {user && user.email.split("@")[0]} 👋</p>
      <div className='mt-10 md:mt-20 flex gap-5 items-center justify-center flex-wrap'>
      <div className='flex flex-col items-center px-5 w-[500px]'>
        <p className='text-[#212529] font-bold text-4xl md:text-[70px] leading-none text-left'>Innovate with FlexFlow</p>
        <p className='mt-10 text-[#212529] text-xl text-left'>Explore how our smartFlow solutions drive efficiency, enhance client collaboration, and streamline operations across your organization.</p>
        <Link to="/taskflow" className='self-start'>
        <button className='mt-5 text-[#f1f3fd]'>{translations.get_started}</button>
        </Link>
        
      </div>
      <div
        className="h-[500px] w-[400px]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      </div>
      <div className='mt-20'>
        <p className='text-[#212529] font-bold text-4xl md:text-[40px] text-center'>Trusted by Leaders</p>
        <p className='mt-5 text-[#212529] text-xl md:text-center'>Our commitment to excellence is reflected in the company we keep. Discover the industry giants who rely on <b>FlexFlow</b>.</p>
      </div>
      {/* <div className='flex items-center w-full justify-center'>
        <div className="sliding-container faded flex items-center justify-center gap-8 w-[70%]">
          <div className="sliding-word text-[#212529]">Empresa A</div>
          <div className="sliding-word text-[#212529]">Empresa B</div>
          <div className="sliding-word text-[#212529]">Empresa C</div>
        </div>
      </div> */}

      <div className='mt-10 md:mt-20 flex gap-5 items-start justify-center flex-wrap'>
      <div className='flex flex-col items-center px-5 w-[500px] '>
        <h2 className='text-[#212529] font-bold text-[40px] self-start'>Core Features</h2>
        <p className='text-[#212529] text-lg mb-10'>Delve into the functionalities that set FlexFlow apart as the ultimate platform for workflow management and optimization.</p>
        <div className='flex flex-col gap-10'>
          <div className='flex items-start gap-4'>
          <MdWork size={40} className='text-[#212529] mt-[-6px]'/>
            <p className='flex flex-col text-[#212529]'>
              <span className='text-[#212529] font-medium text-lg'>Real-time Sync</span>
              Integrate seamlessly with real-time synchronization that keeps your team connected and on track.
            </p>
          </div>
          <div className='flex items-start gap-4'>
          <HiMail size={40} className='text-[#212529] mt-[-6px]'/>
            <p className='flex flex-col text-[#212529]'>
              <span className='text-[#212529] font-medium text-lg'>User Analytics</span>
              Gain insightful analytics on user behavior to enhance your workflow efficiency and team performance.
            </p>
          </div>
          <div className='flex items-start gap-4'>
          <FaBell size={40} className='text-[#212529] mt-[-6px]'/>
            <p className='flex flex-col text-[#212529]'>
              <span className='text-[#212529] font-medium text-lg'>Data Security</span>
              Experience top-tier data protection with our robust security framework ensuring your information remains safe.
            </p>
          </div>
          
        </div>
      </div>
      <div
        className="h-[400px] w-[400px]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1506729623306-b5a934d88b53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      </div>

      <section className='mt-28 mb-40 flex flex-col items-center w-fit mx-auto'>
        <h2 className='text-[#212529] font-bold text-[40px] self-start'>Why FlexFlow</h2>
        <p className='text-[#212529] text-lg mb-5 font-normal self-start'><b>FlexFlow</b> is the partner you need for simplifying your processes, from automation to integration and beyond.</p>
        <div className='flex items-center gap-10 bg-[#e7ebfe] p-10 flex-wrap'>
          <div className='flex flex-col gap-4'>
          <HiFire size={25} className='text-[#212529] mt-[-6px]'/>
          <p className='flex flex-col text-[#212529] max-w-[290px]'>
            <span className='text-[#212529] font-medium text-lg'>Workflow Design</span>
            Craft bespoke workflows with our intuitive design tools that adapt to your team’s specific needs and goals.
          </p>
          </div>
          <div className='flex flex-col gap-4'>
          <BsClockFill size={22} className='text-[#212529] mt-[-6px]'/>
          <p className='flex flex-col text-[#212529] max-w-[290px]'>
            <span className='text-[#212529] font-medium text-lg'>Cloud Access</span>
            Access your workflows anywhere with our cloud-based platform, ensuring productivity on the go. 
          </p>
          </div>
          <div className='flex flex-col gap-4'>
          <IoMdCloud size={25} className='text-[#212529] mt-[-6px]'/>
          <p className='flex flex-col text-[#212529] max-w-[290px]'>
            <span className='text-[#212529] font-medium text-lg'>Support 24/7</span>
            Day or night, our dedicated support team is here to help you keep your workflows running smoothly.
          </p>
          </div>
        </div>
      </section>
    </div>
  );
}

