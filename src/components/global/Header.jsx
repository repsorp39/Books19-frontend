import React, { useState } from 'react';
import Head from "./Head";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { HashLink as Link } from 'react-router-hash-link'; //hashlink is used for anchors tag 
import books19Logo from "../../assets/images/books19.png";
import { useDispatch, useSelector } from 'react-redux';
import { selectUserPseudo, signOut } from '../../store/features/userAuth/authSlice';
import RenderIfIsOnline from '../helpers/RenderIfIsOnline';

function Header() {
	const dispatch = useDispatch();
	const userPseudo = useSelector(selectUserPseudo);

	const SignIn = ()=>(
		<li className="btn-sign-in"> 
		<	Link to="/login">Sign in</Link> 
		</li>
	);
	const SignOut = ()=>(
		<li className="sign-out" title={`You are logged in as ${userPseudo}`}> 
			<button 
			onClick={()=>dispatch(signOut())}
			> Sign out </button>
		</li>
	);
	
	const [isHiddenNav,setHiddenNav] = useState(true);
	const toggleVisibility = ()=> setHiddenNav(!isHiddenNav);

	return (
		<>
			<Head title="Books19 - HomePage" />
			<header>
				<div className="logo">
					<Link to="/">
						<img src={books19Logo} alt="Books19 Logo" />
					</Link>
					<div className='close-nav-btn' onClick={toggleVisibility}> 
						{
							isHiddenNav ? <button> <RxHamburgerMenu /> </button>:<button> <IoClose /> </button>
						}
					</div>
				</div>

				<nav className="desktop-nav">
						<ul>
							<li> 
								<Link to="/collection">Explore</Link> 
							</li>
							<li> 
								<Link to="/#about">About</Link> 
							</li>
							<li> 
								<Link to="/#contact">Contact</Link> 
							</li>
							<RenderIfIsOnline
									Component={SignOut}
									Alternative={SignIn}
							/>
						</ul>
				</nav>

				{/* Mobile Nav */}
				{
					!isHiddenNav && 
					<nav>
						<ul>
							<li> 
								<Link to="/collection">Explore</Link> 
							</li>
							<li> 
								<Link to="/#about">About</Link> 
							</li>
							<li> 
								<Link to="/#contact">Contact</Link> 
							</li>
							<RenderIfIsOnline
									Component={SignOut}
									Alternative={SignIn}
							/>
						</ul>
				</nav>
				}
			</header>
		</>
	);
}

export default Header;