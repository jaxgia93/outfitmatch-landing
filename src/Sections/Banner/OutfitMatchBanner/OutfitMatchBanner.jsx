import { useEffect, useState } from "react";
import Slider from "react-slick";
import OutfitMatchBannerStyle from "./OutfitMatchBanner.style";
import { NavLink } from "react-router-dom";
import ScrollAnimate from "../../../Components/ScrollAnimate";

// Placeholder images - replace with your actual images
import BannerGraphicsImg from "../../../assets/images/app/app-banner-shape1.svg";
import MeshGradImg from "../../../assets/images/app/card-glow.png";
import ArrowRightIcon from "../../../assets/images/crypto/arrow-right.svg";
import WardrobeScreenImg from "../../../assets/images/app/banner-mockup.png";
import PhoneScreenImg from "../../../assets/images/app/app_screen_i.png";

const OutfitMatchBanner = ({ darkMode }) => {
	const [animationValue, setAnimationValue] = useState(1);

	useEffect(() => {
		const handleScroll = () => {
			const bannerElements = document.querySelectorAll(
				".mobile-img, .banner-grad"
			);

			bannerElements.forEach((outfitBannerImg) => {
				const y = window.scrollY;
				let x = outfitBannerImg.offsetTop;
				x = x - 400;

				let newAnimationValue = (y - x) / 6;

				const animationStop = 100;

				newAnimationValue = newAnimationValue < 0 ? 0 : newAnimationValue;
				newAnimationValue =
					newAnimationValue > animationStop ? animationStop : newAnimationValue;

				outfitBannerImg.style.transform = `translateY(${newAnimationValue}px)`;
			});
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [animationValue]);

	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: false,
	};

	return (
		<OutfitMatchBannerStyle
			className='outfit-match-hero-section'
			darkMode={darkMode}
		>
			<div className='hero-overlay'>
				<ScrollAnimate delay={300}>
					<img
						src={BannerGraphicsImg}
						alt='pattern'
						className='banner-vector'
					/>
				</ScrollAnimate>
				<img
					src={MeshGradImg}
					alt='gradient'
					className='banner-grad'
				/>
			</div>
			<div className='container'>
				<ScrollAnimate delay={200}>
					<div className='outfit-hero-section-text'>
						<h1>
							Outfit <span>Match</span> - Indossa la migliore versione di te
						</h1>
						<p className='banner-text'>
							Crea, organizza e prova virtualmente il tuo guardaroba personale.
							Scatta una foto e vedi come ti sta qualsiasi vestito in pochi
							secondi.
						</p>
						<NavLink
							to={"/sign-up"}
							className='outfit-glow-btn'
						>
							<span className='btn-inner'>
								<span className='btn-hover-text'>Prova ora</span>
							</span>
						</NavLink>
					</div>
				</ScrollAnimate>
				{/* <ScrollAnimate delay={250}>
					<div className='outfit-hero-img'>
						<div
							className='wardrobe-img'
							style={{
								display: "flex",
								justifyContent: "center",
								flexDirection: "row",
							}}
						>
							<img
								src={WardrobeScreenImg}
								alt='wardrobe app'
							/>
						</div>
						<div className='mobile-img'>
							<Slider
								{...settings}
								className='mobile-slider'
							>
								<div>
									<img
										src={PhoneScreenImg}
										alt='mobile app'
									/>
								</div>
								<div>
									<img
										src={PhoneScreenImg}
										alt='mobile app'
									/>
								</div>
								<div>
									<img
										src={PhoneScreenImg}
										alt='mobile app'
									/>
								</div>
							</Slider>
						</div>
					</div>
				</ScrollAnimate> */}
			</div>
		</OutfitMatchBannerStyle>
	);
};

export default OutfitMatchBanner;
