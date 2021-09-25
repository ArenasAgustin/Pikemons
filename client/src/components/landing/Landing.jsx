import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing(){
	return(
		<div className='imgLandingBack'>
			<div className='fakeNavBar'>
				<img 
					src='https://fontmeme.com/permalink/210920/2236f4bb095596eb7570e41e89d19354.png' 
					alt='Pikémon' 
					className='imgLogo'
				/>
			</div>

			<div className='landingBackground'>
				<img 
					src='https://cn.i.cdn.ti-platform.com/content/1144/showpage/pokemon-sol-y-luna-ultraleyendas/ar/showpano.png'
					alt='Pokémon img'
					className='landingImg'
				/>

				<div className='landingDivBtn'>
					<Link to={'/home'} className='landingLink'>
						<div className='landingBtn'>
							<p>
								START
							</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

