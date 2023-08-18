import React from 'react';
import Image from 'next/image';
import img from "../public/assets/img/logo.svg"

const Header = () => {
  return (
    
 <div className="w-full z-50 top-0 py-3 sm:py-5  absolute  ">
  <div className="container flex items-center justify-between">
    <div>
      <a href="/">
        <Image src={img} width={30} height={30} alt="logo image" />
      </a>
    </div>
    <div className="hidden flex lg:block">
      <ul className=" items-center">
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >About</span >
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Services</span  >
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Portfolio</span  >
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
            Clients</span>
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Work</span>
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Statistics</span >
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Blog</span>
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Contact</span>
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
      </ul>
    </div>
    <div className="block lg:hidden">
      <button >
        <i className="bx bx-menu text-4xl text-white"></i>
      </button>
    </div>
  </div>
</div>
    
  );
};

export default Header;
