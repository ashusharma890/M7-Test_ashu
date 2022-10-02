import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import React from 'react';
function Footer(){
    return(
    <div className="foot">
        <div className="part-frst">
           <h3>AccioJob</h3>
           <span><FaFacebook class="Fa facebook"/></span>
           <span><FaInstagram class="Fa"/></span>
           <span><FaTwitter class="Fa"/></span>
        </div>
    </div>
    )
}
export default Footer;