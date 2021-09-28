import React from 'react';
import './errorPage.css'

export default function ErrorPage({errMsg}){
	return(
		<div className='divErr'>
			<div>
				<h3 className='errText'>{errMsg ? errMsg : 'Error 404'}</h3>
			</div>

			<div>
				<img 
					src='https://cdn141.picsart.com/301025102194211.png?type=webp&to=min&r=640' 
					alt='ErrorPage image'
					className='errImg'
				/>
			</div>
		</div>
	)
}