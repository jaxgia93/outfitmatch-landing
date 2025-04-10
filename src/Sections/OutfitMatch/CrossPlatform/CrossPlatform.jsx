import React from "react";
import CrossPlatformStyle from "./CrossPlatform.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

// Placeholder images - replace with actual images
import AppIosAndroidImg from "../../../assets/images/app/stay-connect-mockup.png";
import AppStoreIcon from "../../../assets/images/app/app-features-icon1.svg";
import PlayStoreIcon from "../../../assets/images/app/app-features-icon2.svg";
import WebAppIcon from "../../../assets/images/app/app-features-icon3.svg";
import CloudSyncIcon from "../../../assets/images/app/app-features-icon4.svg";

const CrossPlatform = ({ darkMode }) => {
	return (
		<CrossPlatformStyle darkMode={darkMode}>
			<div className='container'>
				<div className='platform-wrapper'>
					<ScrollAnimate>
						<div className='platform-content'>
							<h2 id='piattaforme'>
								Disponibile su <span>tutte le piattaforme</span>
							</h2>
							<p>
								Outfit Match è disponibile su iOS, Android e web. Sincronizza il
								tuo guardaroba su tutti i tuoi dispositivi e accedi da qualsiasi
								luogo.
							</p>

							<div className='platform-boxes'>
								<div className='platform-box'>
									<img
										src={AppStoreIcon}
										alt='iOS App'
									/>
									<h4>iOS App</h4>
									<p>Disponibile su iPhone e iPad</p>
								</div>

								<div className='platform-box'>
									<img
										src={PlayStoreIcon}
										alt='Android App'
									/>
									<h4>Android App</h4>
									<p>Compatibile con tutti i dispositivi Android</p>
								</div>
							</div>

							{/* 	<div className='app-buttons'>
								<a
									href='#'
									className='app-button'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										fill='currentColor'
										viewBox='0 0 16 16'
									>
										<path d='M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z' />
										<path d='M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z' />
									</svg>
									<div className='button-text'>
										<span>Scarica su</span>
										<span>App Store</span>
									</div>
								</a>

								<a
									href='#'
									className='app-button'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										fill='currentColor'
										viewBox='0 0 16 16'
									>
										<path d='M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201.202.45.304.713.304.265 0 .533-.108.729-.327l8.155-3.217Zm-3.657-4.998L3.823 3.275C3.628 3.057 3.36 2.948 3.095 2.948c-.263 0-.512.103-.713.304l6.553 6.05 3.044-2.81Zm7.308-3.193c.18-.519.249-1.11.19-1.871-.181.261-.41.52-.647.73L11.52 4.344 8.313 7.304l3.207 2.96 3.097-1.818a22.4 22.4 0 0 0-.141-3.147Z' />
									</svg>
									<div className='button-text'>
										<span>Scarica su</span>
										<span>Google Play</span>
									</div>
								</a>
							</div> */}
						</div>
					</ScrollAnimate>

					<ScrollAnimate delay={100}>
						<div className='platform-image'>
							<div className='platform-decoration decoration-1'></div>
							<div className='platform-decoration decoration-2'></div>

							<div className='devices-mockup'>
								<img
									src={AppIosAndroidImg}
									alt='App su vari dispositivi'
								/>
							</div>
						</div>
					</ScrollAnimate>
				</div>
			</div>
		</CrossPlatformStyle>
	);
};

export default CrossPlatform;
