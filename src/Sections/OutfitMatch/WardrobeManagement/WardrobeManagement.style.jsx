import styled from "styled-components";

const WardrobeManagementStyle = styled.section`
	padding: 120px 0;
	position: relative;
	transition: background-color 0.3s ease;
	background: ${(props) => (props.darkMode ? "#181818" : "#f8f9fa")};
	overflow: hidden;

	.container {
		position: relative;
		z-index: 2;
	}

	.wardrobe-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media (max-width: 991px) {
			flex-direction: column-reverse;
		}
	}

	.wardrobe-content {
		width: 80%;

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

		.category-list {
			margin-bottom: 35px;

			@media (max-width: 991px) {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				gap: 10px;
			}

			li {
				display: flex;
				align-items: center;
				margin-bottom: 15px;
				color: ${(props) => (props.darkMode ? "#cccccc" : "#555555")};
				transition: color 0.3s ease;

				@media (max-width: 991px) {
					margin-right: 15px;
				}

				.icon {
					width: 24px;
					height: 24px;
					border-radius: 50%;
					background: #ff3e6c;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 12px;

					svg {
						width: 14px;
						height: 14px;
						color: #ffffff;
					}
				}
			}
		}

		.wardrobe-btn {
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

	.wardrobe-image {
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
						? "linear-gradient(to bottom right, rgba(255, 62, 108, 0.2), rgba(0, 0, 0, 0))"
						: "linear-gradient(to bottom right, rgba(255, 62, 108, 0.1), rgba(255, 255, 255, 0))"};
				z-index: 1;
				transition: background 0.3s ease;
			}
		}

		.category-tag {
			position: absolute;
			padding: 10px 20px;
			border-radius: 8px;
			background: ${(props) => (props.darkMode ? "#2d2d2d" : "#ffffff")};
			box-shadow: 0 10px 30px
				rgba(0, 0, 0, ${(props) => (props.darkMode ? "0.3" : "0.1")});
			display: flex;
			align-items: center;
			font-weight: 600;
			font-size: 14px;
			color: ${(props) => (props.darkMode ? "#ffffff" : "#333333")};
			transition: all 0.3s ease;

			&:nth-of-type(1) {
				top: 20%;
				left: -5%;
				z-index: 2;
			}

			&:nth-of-type(2) {
				top: 40%;
				right: -5%;
				z-index: 2;
			}

			&:nth-of-type(3) {
				bottom: 15%;
				left: 10%;
				z-index: 2;
			}

			.tag-icon {
				width: 30px;
				height: 30px;
				border-radius: 50%;
				background: #fff0f5;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 10px;

				img {
					width: 18px;
					height: 18px;
					object-fit: contain;
				}
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
		}
	}
`;

export default WardrobeManagementStyle;
