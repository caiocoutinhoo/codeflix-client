import React from "react";

export default function Header() {
  return (
  <header
  className="fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 lg:px-10 lg:py-6 transition-all">
    <div className="flex items-center space-x-4 md:space-x-8">
      <img src="/logo_netflix.png" alt="netflix" width={120} height={120}/>

      <ul className="hidden md:flex md:space-x-4">
        <li>home</li>
        <li>TV Shows</li>
        <li>Movies</li>
      </ul>
    </div>

    <div className="flex items-center space-x-4">
      <p className="hidden cursor-not-allowed lg:inline">Kids</p>
      <img src="/kids_profile.png" alt="kids" width={30} height={30} />
    </div>
  </header>   
  )
}