import React from 'react';
import Image from 'next/image';
import Link from 'next/link';





const Header = () => {
  return (
    
 <div className="w-full z-50 top-0 py-3 sm:py-5  absolute  ">
  <div className="container flex items-center justify-between">
    <div>
      <Link href="/">
        <Image src='/' width={30} height={30} alt="logo image" />
      </Link>
    </div>
    <div className="flex  lg:block">
      <ul className=" flex items-center">
        
        <li className="group pl-8">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-green-800"
            >About</span >
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-green-800"
            >Services</span  >
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-green-800"
            >Portfolio</span  >
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-green-800">
            Clients</span>
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-green-800"
            >Work</span>
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-green-800"
            >Statistics</span >
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-green-800"
            >Blog</span>
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li className="group pl-6">
          
          <span
            
            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-green-800"
            >Contact</span>
          
          <span
            className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
      </ul>
    </div>
    <div className="block lg:hidden">
      <button >
        <i className="bx bx-menu text-4xl text-green-800"></i>
      </button>
    </div>
  </div>
</div>
    
  );
};

export default Header;
