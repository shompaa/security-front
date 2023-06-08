import { useState, Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Navbar, Sidebar } from "../";

export const Layout = ({children}) => {
    const [showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const handleSize = () => {
        if (window.innerWidth < 640) {
            setIsMobile(true);
            setShowNav(false);
        } else {
            setIsMobile(false);
            setShowNav(true);
        }
    };

    useEffect(() => {
      if(typeof window !== 'undefined') {
        addEventListener("resize", handleSize);
      }
    
      return () => {
        removeEventListener("resize", handleSize);
      }
    }, []);


    
  return (
    <>
        <Navbar showNav={showNav} setShowNav={setShowNav} />
        <Transition
            as={Fragment}
            show={showNav}
            enter="transform transition duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition duration-300 ease-in-out"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <Sidebar showNav={showNav} />
        </Transition>
        <main className={`pt-16 transition-all duration-300 ${showNav && !isMobile ? "pl-56" : ""}`}>
            <div className="px-4 md:px-8">
                {children}
            </div>
        </main>
    </>
  )
}
