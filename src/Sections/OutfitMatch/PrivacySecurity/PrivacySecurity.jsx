import React from "react";
import { NavLink } from "react-router-dom";
import PrivacySecurityStyle from "./PrivacySecurity.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

// Placeholder image - replace with actual image
import SecurityImg from "../../../assets/images/app/app_screen_iv.png";

const PrivacySecurity = ({ darkMode }) => {
	return (
		<PrivacySecurityStyle darkMode={darkMode}>
			<div className='shape shape-1'></div>
			<div className='shape shape-2'></div>

			<div className='container'>
				<div className='security-wrapper'>
					<ScrollAnimate delay={100}>
						<div className='security-image'>
							<div className='image-wrapper'>
								<img
									src={SecurityImg}
									alt='Privacy e sicurezza'
								/>
							</div>

							{/* 	<div className='security-badge badge-1'>
								<div className='badge-icon'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										viewBox='0 0 16 16'
									>
										<path d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z' />
									</svg>
								</div>
								<div className='badge-content'>
									<h5>Crittografia avanzata</h5>
									<p>I tuoi dati sono sempre protetti</p>
								</div>
							</div> */}

							{/*  <div className="security-badge badge-2">
                <div className="badge-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                  </svg>
                </div>
                <div className="badge-content">
                  <h5>Privacy garantita</h5>
                  <p>Controllo totale sui tuoi dati</p>
                </div>
              </div> */}
						</div>
					</ScrollAnimate>

					<ScrollAnimate>
						<div className='security-content'>
							<h2 id='privacy'>
								Privacy e <span>sicurezza</span> al primo posto
							</h2>
							<p>
								Da Outfit Match prendiamo molto seriamente la tua privacy e la
								sicurezza dei tuoi dati. Il nostro sistema è progettato per
								garantire la massima protezione delle tue informazioni
								personali.
							</p>

							<div className='security-features'>
								<div className='feature-item'>
									<div className='feature-icon'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											viewBox='0 0 16 16'
										>
											<path d='M8 2a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2zm3 5a3 3 0 0 1-6 0V4a3 3 0 1 1 6 0v3z' />
											<path d='M14 9.25a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25H2a.25.25 0 0 1-.25-.25v-3.5A.25.25 0 0 1 2 9.25h12z' />
										</svg>
									</div>
									<div className='feature-content'>
										<h4>Protezione dati</h4>
										<p>
											Tutti i tuoi dati sono criptati e conservati in modo
											sicuro sui nostri server. Nessuno può accedere alle tue
											informazioni senza autorizzazione.
										</p>
									</div>
								</div>

								<div className='feature-item'>
									<div className='feature-icon'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											viewBox='0 0 16 16'
										>
											<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
										</svg>
									</div>
									<div className='feature-content'>
										<h4>Controllo privacy</h4>
										<p>
											Hai il pieno controllo su quali informazioni condividere.
											Puoi decidere cosa tenere privato e cosa rendere pubblico
											in qualsiasi momento.
										</p>
									</div>
								</div>

								<div className='feature-item'>
									<div className='feature-icon'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											viewBox='0 0 16 16'
										>
											<path d='M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm-5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5z' />
											<path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
										</svg>
									</div>
									<div className='feature-content'>
										<h4>Gestione profilo personale</h4>
										<p>
											Controllo totale sul tuo profilo e sulle tue immagini.
											Puoi eliminare i tuoi dati in qualsiasi momento.
										</p>
									</div>
								</div>
							</div>

							<NavLink
								to='/privacy'
								className='security-btn'
							>
								Scopri di più
							</NavLink>
						</div>
					</ScrollAnimate>
				</div>
			</div>
		</PrivacySecurityStyle>
	);
};

export default PrivacySecurity;
