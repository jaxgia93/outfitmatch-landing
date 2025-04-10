import styled from "styled-components";

const OutfitMatchBannerStyle = styled.section`
	position: relative;
	padding: 180px 0 100px;
	overflow: hidden;
	transition: background-color 0.3s ease;
	background: ${(props) => (props.darkMode ? "#181818" : "#F8F9FA")};

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 0;

		.banner-vector {
			position: absolute;
			top: 0;
			right: 0;
			z-index: -1;
			max-width: 60%;
			opacity: ${(props) => (props.darkMode ? 0.2 : 0.6)};
			transition: opacity 0.3s ease;
		}

		.banner-grad {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
			height: 100%;
			object-fit: cover;
			opacity: ${(props) => (props.darkMode ? 0.1 : 0.2)};
			transition: opacity 0.3s ease;
		}
	}

	.container {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;

		@media (max-width: 991px) {
			flex-direction: column;
		}
	}

	.outfit-hero-section-text {
		width: 62%;
		margin-right: 5%;

		@media (max-width: 991px) {
			width: 100%;
			margin-right: 0;
			margin-bottom: 60px;
			text-align: center;
		}

		.banner-animation {
			display: inline-flex;
			align-items: center;
			background: ${(props) =>
				props.darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"};
			border-radius: 30px;
			padding: 8px 16px;
			margin-bottom: 25px;
			transition: background-color 0.3s ease;

			.new {
				background: #ff3e6c;
				color: #ffffff;
				font-size: 12px;
				padding: 4px 12px;
				border-radius: 20px;
				margin-right: 10px;
				font-weight: 700;
			}

			p {
				margin: 0;
				font-size: 14px;
				font-weight: 500;
				color: ${(props) => (props.darkMode ? "#ffffff" : "#333333")};
				transition: color 0.3s ease;
			}

			span {
				margin-left: 10px;
				display: flex;
				align-items: center;

				img {
					width: 16px;
					height: 16px;
					filter: ${(props) => (props.darkMode ? "brightness(10)" : "none")};
					transition: filter 0.3s ease;
				}
			}
		}

		h1 {
			font-size: 60px;
			color: ${(props) => (props.darkMode ? "#ffffff" : "#111111")};
			font-weight: 800;
			line-height: 1.2;
			margin-bottom: 20px;
			transition: color 0.3s ease;

			@media (max-width: 767px) {
				font-size: 36px;
			}

			span {
				color: #ff3e6c;
				display: inline-block;
			}
		}

		.banner-text {
			font-size: 18px;
			color: ${(props) => (props.darkMode ? "#cccccc" : "#555555")};
			font-weight: 400;
			margin-bottom: 35px;
			max-width: 500px;
			transition: color 0.3s ease;

			@media (max-width: 991px) {
				margin: 0 auto 35px;
			}
		}

		.outfit-glow-btn {
			display: inline-block;
			position: relative;

			.btn-inner {
				position: relative;
				display: inline-block;
				background: #ff3e6c;
				color: #ffffff;
				font-size: 16px;
				font-weight: 700;
				border-radius: 8px;
				padding: 16px 32px;
				overflow: hidden;
				z-index: 1;
				transition: all 0.3s ease;

				&:hover {
					transform: translateY(-3px);
					box-shadow: 0 10px 25px rgba(255, 62, 108, 0.4);
				}

				.btn-normal-text,
				.btn-hover-text {
					position: relative;
					z-index: 2;
				}

				&:before {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: linear-gradient(45deg, #ff3e6c, #ff9f0a);
					z-index: -1;
					transition: opacity 0.3s ease;
					opacity: 0;
				}

				&:hover:before {
					opacity: 1;
				}
			}
		}
	}

	.outfit-hero-img {
		width: 50%;
		position: relative;
		transition: transform 0.5s ease;

		@media (max-width: 991px) {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 40px;
		}

		.wardrobe-img {
			max-width: 100%;
			box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
			border-radius: 12px;
			overflow: hidden;
			position: relative;
			z-index: 2;

			img {
				width: 100%;
				height: auto;
				display: block;
				transition: transform 0.5s ease;
			}

			@media (max-width: 576px) {
				max-width: 90%;
				margin: 0 auto;
			}
		}

		.mobile-img {
			position: absolute;
			bottom: -30px;
			right: -15%;
			width: 40%;
			z-index: 3;
			filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
			transition: transform 0.5s ease;

			@media (max-width: 991px) {
				position: relative;
				bottom: 0;
				right: 0;
				width: 50%;
				max-width: 220px;
				margin-top: -50px;
				margin-left: 0;
				align-self: center;
			}

			@media (max-width: 576px) {
				width: 60%;
				margin-top: -40px;
			}

			img {
				width: 100%;
				height: auto;
			}
		}
	}
`;

export default OutfitMatchBannerStyle;
