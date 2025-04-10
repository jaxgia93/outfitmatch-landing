import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderStyleWrapper from "./Header.style";
import Data from "../../assets/data/header/headerHomeMenu";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./mobileMenu/MobileMenu";
import MenuImg from "../../assets/images/icons/menu.svg";

const Header = ({ variant, darkMode, ...props }) => {
	// handle mobile menu
	const [isMobileMenu, setIsMobileMenu] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const handleMobileMenu = () => {
		const bodySection = document.body;

		if (isMobileMenu) {
			setIsAnimating(true);
			bodySection.classList.remove("nav-expanded");

			setTimeout(() => {
				setIsMobileMenu(false);
				setIsAnimating(false);
			}, 400);
		} else {
			setIsMobileMenu(true);
			bodySection.classList.add("nav-expanded");
		}
	};

	// handle sticky header
	const HeaderSectionRef = useRef(null);
	let lastScroll = 0;

	const handleScroll = () => {
		const bodySection = document.body;

		let currentScroll =
			document.documentElement.scrollTop || document.body.scrollTop;
		let diffScroll = currentScroll - lastScroll;

		if (diffScroll > 0 || currentScroll == 0) {
			HeaderSectionRef.current.classList.remove("sticky");
			bodySection.classList.remove("nav-expanded");
			setIsMobileMenu(false);
		} else {
			HeaderSectionRef.current.classList.add("sticky");
		}
		lastScroll = currentScroll;
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<HeaderStyleWrapper
				ref={HeaderSectionRef}
				className={`header-section ${variant} ${
					isMobileMenu ? "mobile-menu-opened" : ""
				}`}
				variant={variant}
				{...props}
			>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<nav className='navbar navbar-expand-lg'>
								<div className='container header-navbar-container'>
									{/* header logo area start */}
									<NavLink
										className='navbar-brand header-logo'
										to={"/"}
									>
										<span
											style={{
												fontSize: "28px",
												fontWeight: "800",
												color: "#fff",
											}}
										>
											Outfit<span style={{ color: "#FF3E6C" }}>Match</span>
										</span>
									</NavLink>
									{/* header logo area end */}

									{/* menu toggler */}
									<div className='menu-toggler'>
										{/* Button to toggle the Offcanvas */}
										<button
											className='btn'
											type='button'
											data-bs-toggle='offcanvas'
											data-bs-target='#offcanvasStaco'
											aria-controls='offcanvasStaco'
										>
											<img
												src={MenuImg}
												alt='menu'
											/>
										</button>
									</div>

									<div className='collapse navbar-collapse header-navbar-content'>
										{/* main menu */}
										<ul className='navbar-nav main-menu'>
											{Data?.map((menuItem, i) => (
												<li
													key={i}
													className={
														menuItem.hasMegaMenu
															? "nav-item home-nav"
															: "nav-item"
													}
												>
													<NavLink
														className={` ${
															menuItem.hasMegaMenu
																? "nav-link megaTablinks"
																: "nav-link"
														}  ${
															menuItem.subMenus?.length > 0 ? "has-submenu" : ""
														}`}
														to={menuItem.url}
													>
														{menuItem.title}
													</NavLink>

													{/* megamenu */}
													{menuItem?.hasMegaMenu && <MegaMenu />}

													{menuItem.subMenus?.length > 0 && (
														<div className='submenu-box'>
															<ul className='submenu'>
																{menuItem.subMenus?.map((subMenuItem, i) => {
																	let hasSubMenuChild = false;
																	if (subMenuItem.subMenuChilds?.length > 0) {
																		hasSubMenuChild = true;
																	}
																	return (
																		<li
																			key={i}
																			className={
																				hasSubMenuChild
																					? "submenu-has-submenu"
																					: ""
																			}
																		>
																			<NavLink
																				className='dropdown-item'
																				to={subMenuItem.url}
																			>
																				{subMenuItem.title}
																			</NavLink>

																			{subMenuItem.subMenuChilds?.length >
																				0 && (
																				<div className='submenu-box2'>
																					<ul className='submenu submenu-submenu'>
																						{subMenuItem.subMenuChilds?.map(
																							(subMenuChild, i) => (
																								<li key={i}>
																									<NavLink
																										to={subMenuChild.url}
																									>
																										{subMenuChild.title}
																									</NavLink>
																								</li>
																							)
																						)}
																					</ul>
																				</div>
																			)}
																		</li>
																	);
																})}
															</ul>
														</div>
													)}
												</li>
											))}
										</ul>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</HeaderStyleWrapper>

			{/* mobile menu */}
			<MobileMenu />
		</>
	);
};

export default Header;