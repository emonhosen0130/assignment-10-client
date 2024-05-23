import Navber from "../component/Header/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import { useState } from "react";

const Root = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (

        <div className={`${darkMode ? "dark" : ""}dark:bg-[#0F172A] h-screen`}>
            <Navber setDarkMode={setDarkMode} darkMode={darkMode}></Navber>

            <div className="w-full dark:bg-[#0F172A]">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;