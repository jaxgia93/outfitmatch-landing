import styled from "styled-components";

const VirtualTryOnStyle = styled.section`
	padding: 120px 0;
	position: relative;
	transition: background-color 0.3s ease;
	background: ${(props) => (props.darkMode ? "#232323" : "#ffffff")};
	overflow: hidden;

	.container {
		position: relative;
		z-index: 2;
	}

	.tryon-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media (max-width: 991px) {
			flex-direction: column;
		}
	}

	.tryon-content {
		width: 100%;

		@media (max-width: 991px) {
			width: 100%;
			text-align: center;
			margin-bottom: 60px;
		}

		h2 {
			font-size: 42px;
			font-weight: 800;
			margin-bottom: 20px;
			color: ${(props) => (props.darkMode ? "#ffffff" : "#111111")};
			transition: color 0.3s ease;

			@media (max-width: 767px) {
				font-size: 32px;
			}

			span {
				color: #ff3e6c;
				display: inline-block;
			}
		}

		p {
			font-size: 18px;
			line-height: 1.7;
			color: ${(props) => (props.darkMode ? "#cccccc" : "#555555")};
			margin-bottom: 30px;
			transition: color 0.3s ease;
		}

		.steps-list {
			margin-bottom: 35px;
			counter-reset: step-counter;

			@media (max-width: 991px) {
				display: inline-block;
				text-align: left;
			}

			li {
				display: flex;
				margin-bottom: 20px;
				position: relative;
				color: ${(props) => (props.darkMode ? "#cccccc" : "#555555")};
				transition: color 0.3s ease;

				&:before {
					counter-increment: step-counter;
					content: counter(step-counter);
					width: 28px;
					height: 28px;
					border-radius: 50%;
					background: #ff3e6c;
					color: #ffffff;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 15px;
					font-weight: 700;
					font-size: 14px;
					flex-shrink: 0;
					margin-top: 2px;
				}

				.step-content {
					h4 {
						font-size: 18px;
						font-weight: 700;
						margin-bottom: 5px;
						color: ${(props) => (props.darkMode ? "#ffffff" : "#111111")};
						transition: color 0.3s ease;
					}

					p {
						font-size: 16px;
						margin-bottom: 0;
					}
				}
			}
		}

		.tryon-btn {
			display: inline-block;
			background: #ff3e6c;
			color: #ffffff;
			font-size: 16px;
			font-weight: 700;
			padding: 14px 30px;
			border-radius: 8px;
			transition: all 0.3s ease;

			&:hover {
				background: #e93060;
				transform: translateY(-3px);
				box-shadow: 0 10px 20px rgba(255, 62, 108, 0.3);
			}
		}
	}

	.tryon-image {
		width: 50%;
		position: relative;

		@media (max-width: 991px) {
			width: 100%;
			max-width: 500px;
			margin: 0 auto;
		}

		.image-wrapper {
			position: relative;
			border-radius: 16px;
			overflow: hidden;
			box-shadow: 0 30px 60px
				rgba(0, 0, 0, ${(props) => (props.darkMode ? "0.3" : "0.15")});
			transition: box-shadow 0.3s ease;

			img {
				width: 100%;
				display: block;
				transform: scale(1);
				transition: transform 0.5s ease;
			}

			&:hover img {
				transform: scale(1.05);
			}
		}

		.overlay-graphics {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			pointer-events: none;

			.circle {
				position: absolute;
				border-radius: 50%;

				&.circle-1 {
					top: -5%;
					right: -10%;
					width: 150px;
					height: 150px;
					background: ${(props) =>
						props.darkMode
							? "radial-gradient(circle, rgba(255, 62, 108, 0.2) 0%, rgba(0, 0, 0, 0) 70%)"
							: "radial-gradient(circle, rgba(255, 62, 108, 0.15) 0%, rgba(255, 255, 255, 0) 70%)"};
					transition: background 0.3s ease;
				}

				&.circle-2 {
					bottom: 10%;
					left: -5%;
					width: 100px;
					height: 100px;
					background: ${(props) =>
						props.darkMode
							? "radial-gradient(circle, rgba(255, 159, 10, 0.2) 0%, rgba(0, 0, 0, 0) 70%)"
							: "radial-gradient(circle, rgba(255, 159, 10, 0.15) 0%, rgba(255, 255, 255, 0) 70%)"};
					transition: background 0.3s ease;
				}
			}
		}
	}

	.decoration {
		position: absolute;
		z-index: 0;

		&.decoration-top {
			top: 0;
			right: 0;
			width: 300px;
			height: 300px;
			background: ${(props) =>
				props.darkMode
					? "radial-gradient(circle, rgba(255, 62, 108, 0.05) 0%, rgba(0, 0, 0, 0) 70%)"
					: "radial-gradient(circle, rgba(255, 62, 108, 0.05) 0%, rgba(255, 255, 255, 0) 70%)"};
			border-radius: 0 0 0 300px;
			transition: background 0.3s ease;
		}

		&.decoration-bottom {
			bottom: 0;
			left: 0;
			width: 300px;
			height: 300px;
			background: ${(props) =>
				props.darkMode
					? "radial-gradient(circle, rgba(255, 159, 10, 0.05) 0%, rgba(0, 0, 0, 0) 70%)"
					: "radial-gradient(circle, rgba(255, 159, 10, 0.05) 0%, rgba(255, 255, 255, 0) 70%)"};
			border-radius: 0 300px 0 0;
			transition: background 0.3s ease;
		}
	}
`;

export default VirtualTryOnStyle;
