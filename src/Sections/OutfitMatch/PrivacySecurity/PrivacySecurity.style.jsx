import styled from "styled-components";

const PrivacySecurityStyle = styled.section`
	padding: 120px 0;
	position: relative;
	overflow: hidden;
	transition: background-color 0.3s ease;
	background: ${(props) => (props.darkMode ? "#181818" : "#f8f9fa")};

	.security-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media (max-width: 991px) {
			flex-direction: column-reverse;
		}
	}

	.security-content {
		width: 100%;

		@media (max-width: 991px) {
			width: 100%;
			text-align: center;
			margin-top: 60px;
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

		.security-features {
			margin-bottom: 35px;

			@media (max-width: 991px) {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.feature-item {
				display: flex;
				align-items: flex-start;
				margin-bottom: 25px;

				.feature-icon {
					flex-shrink: 0;
					width: 50px;
					height: 50px;
					border-radius: 50%;
					background: ${(props) => (props.darkMode ? "#2d2d2d" : "#fff")};
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 15px;
					box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
					transition: background-color 0.3s ease;

					svg {
						width: 24px;
						height: 24px;
						color: #ff3e6c;
					}
				}

				.feature-content {
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
						color: ${(props) => (props.darkMode ? "#cccccc" : "#666666")};
						transition: color 0.3s ease;

						@media (max-width: 991px) {
							text-align: left;
						}
					}
				}
			}
		}

		.security-btn {
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

	.security-image {
		width: 50%;
		position: relative;

		@media (max-width: 991px) {
			width: 100%;
			max-width: 500px;
			margin: 0 auto;
		}

		.image-wrapper {
			position: relative;
			z-index: 2;

			img {
				width: 100%;
				border-radius: 16px;
				box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
			}

			&:before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: ${(props) =>
					props.darkMode
						? "linear-gradient(135deg, rgba(255, 62, 108, 0.3), rgba(0, 0, 0, 0))"
						: "linear-gradient(135deg, rgba(255, 62, 108, 0.2), rgba(255, 255, 255, 0))"};
				border-radius: 16px;
				z-index: 1;
				transition: background 0.3s ease;
			}
		}

		.security-badge {
			position: absolute;
			z-index: 3;
			display: flex;
			align-items: center;
			background: ${(props) => (props.darkMode ? "#2d2d2d" : "#ffffff")};
			padding: 15px;
			border-radius: 12px;
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
			transition: background-color 0.3s ease;

			.badge-icon {
				margin-right: 12px;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background: #fff0f5;
				display: flex;
				align-items: center;
				justify-content: center;

				svg {
					width: 20px;
					height: 20px;
					color: #ff3e6c;
				}
			}

			.badge-content {
				h5 {
					font-size: 16px;
					font-weight: 700;
					margin-bottom: 2px;
					color: ${(props) => (props.darkMode ? "#ffffff" : "#111111")};
					transition: color 0.3s ease;
				}

				p {
					font-size: 12px;
					margin-bottom: 0;
					color: ${(props) => (props.darkMode ? "#cccccc" : "#666666")};
					transition: color 0.3s ease;
				}
			}

			&.badge-1 {
				top: 20px;
				right: -30px;
			}

			&.badge-2 {
				bottom: 40px;
				left: -20px;
			}
		}
	}

	.shape {
		position: absolute;

		&.shape-1 {
			top: 15%;
			left: 5%;
			width: 100px;
			height: 100px;
			border-radius: 50%;
			background: ${(props) =>
				props.darkMode
					? "radial-gradient(circle, rgba(255, 62, 108, 0.1) 0%, rgba(0, 0, 0, 0) 70%)"
					: "radial-gradient(circle, rgba(255, 62, 108, 0.1) 0%, rgba(255, 255, 255, 0) 70%)"};
			transition: background 0.3s ease;
		}

		&.shape-2 {
			bottom: 10%;
			right: 10%;
			width: 150px;
			height: 150px;
			border-radius: 50%;
			background: ${(props) =>
				props.darkMode
					? "radial-gradient(circle, rgba(255, 159, 10, 0.1) 0%, rgba(0, 0, 0, 0) 70%)"
					: "radial-gradient(circle, rgba(255, 159, 10, 0.1) 0%, rgba(255, 255, 255, 0) 70%)"};
			transition: background 0.3s ease;
		}
	}
`;

export default PrivacySecurityStyle;
