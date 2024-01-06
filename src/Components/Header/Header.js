import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.svg";
import addbtn from "../../Assets/addbtn.svg"
import { useState } from "react";
import home from "../../Assets/home.svg";
import sale from "../../Assets/sale.svg";
import rent from "../../Assets/rent.svg";
import investment from "../../Assets/investment.svg";

const Header = () => {

    const [selectedSection, setSelectedSection] = useState("home");
    const [menu,setMenu] = useState(false);

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };
    const handleicon =()=>{
        setMenu(true);
    }
    const closeicon=()=>{
        setMenu(false)
    }
    return (
        <>
        {
                menu &&(
                    <div className="menucontainer">
                        <div className="closeicon" onClick={closeicon} >&#10006;</div>
                        <div className="menubar">
                    <div
                        className={`nav-item ${selectedSection === "home" && "active"}`}
                        onClick={() => handleSectionClick("home")}
                    >
                        <img src={home} alt="home" />
                        Home
                    </div>
                    <div
                        className={`nav-item ${selectedSection === "forSale" && "active"}`}
                        onClick={() => handleSectionClick("forSale")}
                    >
                        <img src={sale} alt="sale" />
                        For Sale
                    </div>
                    <div
                        className={`nav-item ${selectedSection === "forRent" && "active"}`}
                        onClick={() => handleSectionClick("forRent")}
                    >
                        <img src={rent} alt="rent" />
                        For Rent
                    </div>
                    <div
                        className={`nav-item ${selectedSection === "forInvestment" && "active"}`}
                        onClick={() => handleSectionClick("forInvestment")}
                    >
                        <img src={investment} alt="investment" />
                        For Investment
                    </div>
                    <div
                        className={`nav-item ${selectedSection === "blog" && "active"}`}
                        onClick={() => handleSectionClick("blog")}
                    >
                        Blog
                    </div>
                    <div
                        className={`nav-item ${selectedSection === "signIn" && "active"}`}
                        onClick={() => handleSectionClick("signIn")}
                    >
                        Sign In
                    </div>
                    <div className="addbt">
                    <img src={addbtn} alt="btn"></img>
                    Add Listing
                </div>
                </div>
                    </div>
                )
            }
            {
               !menu &&(
                <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menuicon" onClick={handleicon}>&#9776;</div>
                <div className="navbar">
                    <div
                        className={`nav-item ${selectedSection === "home" && "active"}`}
                        onClick={() => handleSectionClick("home")}
                    >
                        <img src={home} alt="home" />
                        Home
                    </div>
                    <div
                        className={`nav-item ${selectedSection === "forSale" && "active"}`}
                        onClick={() => handleSectionClick("forSale")}
                    >
                        <img src={sale} alt="sale" />
                        For Sale
                    </div>
                    <div
                        className={`nav-item ${selectedSection === "forRent" && "active"}`}
                        onClick={() => handleSectionClick("forRent")}
                    >
                        <img src={rent} alt="rent" />
                        For Rent
                    </div>
                    <div
                        className={`nav-item ${selectedSection === "forInvestment" && "active"}`}
                        onClick={() => handleSectionClick("forInvestment")}
                    >
                        <img src={investment} alt="investment" />
                        For Investment
                    </div>
                    <div
                        className={`nav-item ${selectedSection === "blog" && "active"}`}
                        onClick={() => handleSectionClick("blog")}
                    >
                        Blog
                    </div>
                    <div
                        className={`nav-item ${selectedSection === "signIn" && "active"}`}
                        onClick={() => handleSectionClick("signIn")}
                    >
                        Sign In
                    </div>
                </div>
                <div className="addbtn">
                    <img src={addbtn} alt="btn"></img>
                    Add Listing
                </div>
            </div>
                )
            }
        
        </>
    );
}

export default Header;