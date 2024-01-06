import React, { useState, useEffect } from "react";
import "./Body.css";
import image1 from "../../Assets/carousel1.png";
import image2 from "../../Assets/carousel2.png";
import image3 from "../../Assets/carousel3.png";
import home1 from "../../Assets/home1.png";
import home2 from "../../Assets/home2.png";
import home3 from "../../Assets/home3.png";
import sale from "../../Assets/sale.svg";
import rent from "../../Assets/rent.svg";
import investment from "../../Assets/investment.svg";
import bed from "../../Assets/bed.svg";
import like from "../../Assets/like.svg";
import bath from "../../Assets/bath.svg";
import category from "../../Assets/category.svg";
import hastle from "../../Assets/Hassle-free.svg";
import custSupp from "../../Assets/Customer support.svg";
import boost from "../../Assets/Boost.svg";
import noMid from "../../Assets/No middle-men.svg";
import chat from "../../Assets/Chat 2.svg";
import verify from "../../Assets/Verified listing.svg";
import avatar from "../../Assets/Avatar.svg";
import avatar2 from "../../Assets/avatar2.svg";
import avatar3 from "../../Assets/avatar3.svg";
import blog1 from "../../Assets/blog1.png";
import blog2 from "../../Assets/blog2.png";
import blog3 from "../../Assets/blog3.png";

const Body = () => {

    const featurecard = [
        {
            img: home1,
            price: "£4,250",
            type: "Semi detached house",
            location: "Southfield Road, Oxford OX4",
            bed: 3,
            bath: 2,
            category: "furnished"
        },
        {
            img: home2,
            price: "£4,750",
            type: "Semi detached house",
            location: "Southfield Road, Oxford OX4",
            bed: 5,
            bath: 3,
            category: "Unfurnished"
        },
        {
            img: home3,
            price: "£2,250",
            type: "Semi detached house",
            location: "Southfield Road, Oxford OX4",
            bed: 2,
            bath: 1,
            category: "Unfurnished"
        }
    ]

    const choosearr = [
        {
            svg: hastle,
            title: "Hassle-Free Searching",
            desc: "Say goodbye to tedious property searches. Our intuitive platform allows effortless filtering for hassle-free results."
        },
        {
            svg: custSupp,
            title: "Direct Communication",
            desc: "Linked Bricks enables direct communication with landlords for questions, negotiations, and transparent experiences."
        },
        {
            svg: boost,
            title: "Verified Listings",
            desc: "Browse with confidence – Linked Bricks verifies all listings for your safety and quality assurance."
        },
        {
            svg: noMid,
            title: "Hassle-Free Searching",
            desc: "Say goodbye to tedious property searches. Our intuitive platform allows effortless filtering for hassle-free results."
        },
        {
            svg: chat,
            title: "Dedicated Customer Support:",
            desc: "Say goodbye to tedious property searches. Our intuitive platform allows effortless filtering for hassle-free results."
        },
        {
            svg: verify,
            title: "No Middlemen",
            desc: "Say goodbye to tedious property searches. Our intuitive platform allows effortless filtering for hassle-free results."
        },

    ]
    const reviews = [
        {
            name: "Guy Hawkins (landlord)",
            date: "Jun 21, 2021",
            avatar: avatar,
            title: "Our property sale was Professionally handled by Linked Bricks throughout the entire process...",
        },
        {
            name: "kelly Rowland (buyer)",
            date: "Jun 21, 2021",
            avatar: avatar2,
            title: "Our property sale was Professionally handled by Linked Bricks throughout the entire process...",
        },
        {
            name: "Mabel Stones (Seller)",
            date: "Jun 21, 2021",
            avatar: avatar3,
            title: "Which properties are selling best right now?",
        },
        {
            name: "Guy Hawkins",
            date: "Jun 21, 2021",
            avatar: avatar,
            title: "Which properties are selling best right now?",
        },
        {
            name: "Mabel Stones (Seller)",
            date: "Jun 21, 2021",
            avatar: avatar2,
            title: "Which properties are selling best right now?",
        }
    ]

    const blogs = [
        {
            img: blog1,
            title: "Which properties are selling best right now?",
            desc: "The demand for 3 and 4-bedroom family homes has peaked as buyers with reduced bud...",
            name: "Guy Hawkins",
            date: "Jun 21, 2021",
            avatar: avatar
        },
        {
            img: blog2,
            title: "Which properties are selling best right now?",
            desc: "The demand for 3 and 4-bedroom family homes has peaked as buyers with reduced bud...",
            name: "GMabel Stones",
            date: "Jun 21, 2021",
            avatar: avatar2
        },
        {
            img: blog3,
            title: "Which properties are selling best right now?",
            desc: "The demand for 3 and 4-bedroom family homes has peaked as buyers with reduced bud...",
            name: "kelly Rowland",
            date: "Jun 21, 2021",
            avatar: avatar3
        },
        {
            img: blog1,
            title: "Which properties are selling best right now?",
            desc: "The demand for 3 and 4-bedroom family homes has peaked as buyers with reduced bud...",
            name: "Mabel Stones ",
            date: "Jun 21, 2021",
            avatar: avatar
        },
        {
            img: blog1,
            title: "Which properties are selling best right now?",
            desc: "The demand for 3 and 4-bedroom family homes has peaked as buyers with reduced bud...",
            name: "kelly Rowland",
            date: "Jun 21, 2021",
            avatar: avatar2
        }
    ]
    const [selectedSection, setSelectedSection] = useState("forSale");

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };
    const images = [image1, image2, image3];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex, images.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="container">
            <div className="carousel">
                <div className="searchblock">
                    <div
                        className={`nav-itemm ${selectedSection === "forSale" && "activ"}`}
                        onClick={() => handleSectionClick("forSale")}
                    >
                        <img src={sale} alt="sale" />
                        For Sale
                    </div>
                    <div
                        className={`nav-itemm ${selectedSection === "forRent" && "activ"}`}
                        onClick={() => handleSectionClick("forRent")}
                    >
                        <img src={rent} alt="rent" />
                        For Rent
                    </div>
                    <div
                        className={`nav-itemm ${selectedSection === "forInvestment" && "activ"}`}
                        onClick={() => handleSectionClick("forInvestment")}
                    >
                        <img src={investment} alt="investment" />
                        For Investment
                    </div>
                    <input className="searchbox" placeholder="Search..."></input>
                    <div className="searchbtn">&#128269; Seach</div>
                </div>
                <div className="carouseltext">
                    <div className="chead">Discover Your Dream Home </div>
                    <div className="cdesc">Your one-stop real estate destination for buying, renting, and selling properties.</div>
                </div>
                <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentIndex ? "active" : ""}`}
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>
                    ))}
                </div>
                <div className="dots">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="feature">
                <div className="featuretitle">Featured Properties</div>
                <div className="featurecards">
                    {
                        featurecard.map((item) => {
                            return (
                                <div className="featurecard">
                                    <div className="for"><Dot /> For Sale</div>
                                    <div className="like" ><img src={like} alt=""></img></div>
                                    <img src={item.img} alt="feature" />
                                    <div className="price">{item.price}</div>
                                    <div className="type">{item.type}</div>
                                    <div className="loc">{item.location}</div>
                                    <div className="facility">
                                        <div className="beds">
                                            <img src={bed} alt="" />
                                            &nbsp; {item.bed}</div>
                                        <div className="bath">
                                            <img src={bath} alt="" />
                                            &nbsp;{item.bath}</div>
                                        <div className="category">
                                            <img src={category} alt="" />
                                            &nbsp;{item.category}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="choose">
                <div className="choosetitle">Why Choose Us</div>
                <div className="choosecards">
                    {
                        choosearr.map((i) => {
                            return (
                                <div className="choosecard">
                                    <div className="choosesvg">
                                        <img src={i.svg} alt=""></img>
                                    </div>
                                    <div className="cardbox">
                                        <div className="boxtitle">{i.title}</div>
                                        <div className="boxdesc">{i.desc}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="blogs">
                <div className="blogtitle">Blog</div>
                <div className="blogcards">
                    {
                        blogs.map((i) => {
                            return (
                                <div className="blogcard">
                                    <img src={i.img} alt="" />
                                    <div className="blogques">{i.title}</div>
                                    <div className="blogdesc">{i.desc}</div>
                                    <div className="avatarbox">
                                        <div className="avatarimg">
                                            <img src={i.avatar} alt="" />
                                        </div>
                                        <div className="avatarright">
                                            <div className="avatarname">{i.name}</div>
                                            <div className="avatardate">{i.date}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="numberbox">
                <div className="box">
                    <div className="num">13,000+</div>
                    <div className="numcon">Properties Listed</div>
                </div>
                <div className="box">
                    <div className="num">8,782+</div>
                    <div className="numcon">Property Sales</div>
                </div>
                <div className="box">
                    <div className="num">5,014+</div>
                    <div className="numcon">Property Rented</div>
                </div>
                <div className="box">
                    <div className="num">95.7%</div>
                    <div className="numcon">Satisfied Clients</div>
                </div>
            </div>
            <div className="review">
                <div className="reviewhead">
                    <div className="reviewtitle">Customer Reviews</div>
                    <div className="reviewbtn">See all reviews &gt; </div>
                </div>
                <div className="reviewcontent">See what our client’s are saying</div>
                <div className="scroll">
                    <div className="scrollgrp">
                        {
                            reviews.map((i) => {
                                return (
                                    <div className="cardgrp">
                                        <div className="reviewtop">
                                            <img src={i.avatar} alt="" />
                                            <div className="reviewleft">
                                                <div className="reviewname">{i.name}</div>
                                                <div className="reviewdate">{i.date}</div>
                                            </div>
                                        </div>
                                        <div className="reviewdesc">{i.title}</div>
                                        <div className="ratingbox">
                                            <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                                            <Arrowup />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="scrollgrp">
                        {
                            reviews.map((i) => {
                                return (
                                    <div className="cardgrp">
                                        <div className="reviewtop">
                                            <img src={i.avatar} alt="" />
                                            <div className="reviewleft">
                                                <div className="reviewname">{i.name}</div>
                                                <div className="reviewdate">{i.date}</div>
                                            </div>
                                        </div>
                                        <div className="reviewdesc">{i.title}</div>
                                        <div className="ratingbox">
                                            <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                                            <Arrowup />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

const Dot = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="4" fill="#01B8C6" />
        </svg>
    );
}
const Arrowup = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14.7915 5V10C14.7915 10.345 14.5115 10.625 14.1665 10.625C13.8215 10.625 13.5415 10.345 13.5415 10V6.5092L5.44151 14.6092C5.31984 14.7308 5.15982 14.7925 4.99982 14.7925C4.83982 14.7925 4.67979 14.7317 4.55813 14.6092C4.31396 14.365 4.31396 13.9691 4.55813 13.725L12.6581 5.625H9.16648C8.82148 5.625 8.54148 5.345 8.54148 5C8.54148 4.655 8.82148 4.375 9.16648 4.375H14.1665C14.2481 4.375 14.3291 4.39175 14.4057 4.42342C14.5582 4.48675 14.6799 4.60843 14.7441 4.76176C14.7749 4.83759 14.7915 4.91833 14.7915 5Z" fill="#0D0E0F" />
        </svg>
    )
}

export default Body;
