import React from "react";
import building from "../../Assets/building.svg"
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer" style={{ backgroundImage: `url(${building})` }}>
            {/* <img src={building} alt="" /> */}
            <div className="subbox">
                <input placeholder="Subscribe to our newsLetter"/>
                <div className="subbtn">Subscribe &gt;</div>
            </div>
            <div className="footercontent">
                <div className="links">
                    <div className="linkgrp">
                        <div className="link">Sell your property</div>
                        <div className="link">Let your property</div>
                        <div className="link">Invest your property</div>
                    </div>
                    <div className="linkgrp">
                        <div className="link">Rent a property</div>
                        <div className="link">Buy a property</div>
                        <div className="link">Invest in a property</div>
                    </div>
                    <div className="linkgrp">
                    <div className="link">About us</div>
                        <div className="link">Contact us</div>
                    </div>
                    <div className="linkgrp">
                    <div className="link">Privacy policy</div>
                        <div className="link">Terms of use</div>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="iconbox">
                        <div className="circle">
                            <Facebook />
                        </div>
                        <div className="circle">
                            <Linkedin />
                        </div>
                        <div className="circle">
                            <Youtube/>
                        </div>
                        <div className="circle">
                            <Insta/>
                        </div>
                    </div>
                    <div className="copyright">© 2023 Linked Bricks Limited. All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}

const Facebook = () =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M14.0311 13.7899V23H9.64439V13.7899H6V10.0555H9.64439V8.69675C9.64439 3.65237 11.8293 1 16.4523 1C17.8696 1 18.2239 1.21967 19 1.39867V5.09246C18.1311 4.94601 17.8864 4.86465 16.9838 4.86465C15.9124 4.86465 15.3387 5.15754 14.8157 5.73521C14.2927 6.31287 14.0311 7.31361 14.0311 8.74556V10.0636H19L17.6671 13.7981H14.0311V13.7899Z" stroke="#0D0E0F" stroke-width="1.5"/>
</svg>
    )
}
const Insta = () =>{
    return(
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.3228 23H4.67721C2.65339 23 1 21.3466 1 19.3228V4.67721C1 2.65339 2.65339 1 4.67721 1H19.3228C21.3466 1 23 2.65339 23 4.67721V19.3228C23 21.3556 21.3556 23 19.3228 23Z" stroke="#0D0E0F" stroke-width="1.5"/>
  <path d="M8.01105 15.9977C9.07717 17.0638 10.4957 17.6511 12.0045 17.6511C13.5133 17.6511 14.9228 17.0638 15.9979 15.9977C17.064 14.9315 17.6513 13.5131 17.6513 12.0042C17.6513 10.4954 17.064 9.07693 15.9979 8.01081C14.9318 6.94469 13.5133 6.35742 12.0045 6.35742C10.4957 6.35742 9.07717 6.94469 8.01105 8.01081C6.94493 9.07693 6.35767 10.4954 6.35767 12.0042C6.35767 13.5131 6.94493 14.9315 8.01105 15.9977Z" stroke="#0D0E0F" stroke-width="1.5"/>
  <path d="M18.7521 6.17234C19.3509 6.17234 19.8363 5.68692 19.8363 5.08812C19.8363 4.48933 19.3509 4.00391 18.7521 4.00391C18.1533 4.00391 17.6678 4.48933 17.6678 5.08812C17.6678 5.68692 18.1533 6.17234 18.7521 6.17234Z" stroke="#0D0E0F" stroke-width="1.5"/>
</svg>
    )
}
const Youtube = () =>{
    return(
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
  <path d="M19.4163 17H4.58364C2.59898 17 1 15.1065 1 12.7775V5.22249C1 2.88402 2.60702 1 4.58364 1H19.4163C21.401 1 23 2.89349 23 5.22249V12.7775C23.008 15.116 21.401 17 19.4163 17Z" stroke="#0D0E0F" stroke-width="1.5"/>
  <path d="M15.8911 8.88166L9.65138 5V12.7633L15.8911 8.88166Z" stroke="#0D0E0F" stroke-width="1.5"/>
</svg>
    )
}
const Linkedin = () =>{
    return(
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5.96795 8.23438H1.37086V22.8942H5.96795V8.23438Z" stroke="#0D0E0F" stroke-width="1.5"/>
  <path d="M18.4028 7.91676C18.2333 7.89557 18.0532 7.88498 17.8732 7.87439C15.2992 7.76846 13.8481 9.29376 13.3396 9.95049C13.2019 10.1306 13.1384 10.2365 13.1384 10.2365V8.2769H8.74255V22.9367H13.1384H13.3396C13.3396 21.4432 13.3396 19.9603 13.3396 18.4667C13.3396 17.6617 13.3396 16.8567 13.3396 16.0517C13.3396 15.056 13.2655 13.9968 13.7633 13.0858C14.187 12.3232 14.9497 11.9419 15.8077 11.9419C18.3498 11.9419 18.4028 14.2404 18.4028 14.4522C18.4028 14.4628 18.4028 14.4734 18.4028 14.4734V23.0003H22.9999V13.4354C22.9999 10.1623 21.3369 8.23453 18.4028 7.91676Z" stroke="#0D0E0F" stroke-width="1.5"/>
  <path d="M3.66927 6.33855C5.14347 6.33855 6.33855 5.14348 6.33855 3.66928C6.33855 2.19508 5.14347 1 3.66927 1C2.19507 1 1 2.19508 1 3.66928C1 5.14348 2.19507 6.33855 3.66927 6.33855Z" stroke="#0D0E0F" stroke-width="1.5"/>
</svg>
    )
}

export default Footer;