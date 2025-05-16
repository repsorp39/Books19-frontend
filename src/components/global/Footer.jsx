import React from 'react';
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";

function Footer(props) {
	return (
		<footer>
				<ul>
					<li> <SlSocialFacebook /> </li>
					<li> <FaInstagram /> </li>
					<li> <FaXTwitter /> </li>
					<li> <FaDiscord /> </li>
					<li> <BsThreads /> </li>
				</ul>
				<p>©2025-All Right Reserved</p>
		</footer>
	);
}

export default Footer;