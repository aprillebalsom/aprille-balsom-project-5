import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
		<footer>
			<div className='footer-flex wrapper'>
				<div className='footer-text' id='about'>
					<p>
						Created at
						<a
							className='footer-link'
							target='_blank'
							rel='noopener noreferrer'
							href='https://junocollege.com/'
						>
							Juno College
						</a>
					</p>

					<p>
						Design + wallpapers by
						<a
							className='footer-link'
							target='_blank'
							rel='noopener noreferrer'
							href='https://apesfilmdiary.com/'
							id='blog'
						>
							Aprille Balsom
						</a>
					</p>
				</div>

				<div className='footer-icons' id='contact'>
					<p>Join us on Social</p>

					<div className='icons'>
						<a
							className='icon-button'
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/aprillebalsom'
						>
							<span className='sr-only'>
								GitHub will open in a new window.
							</span>
							<FontAwesomeIcon icon='code-branch' title='GitHub' />
						</a>

						<a
							className='icon-button'
							target='_blank'
							rel='noopener noreferrer'
							href='https://instagram.com/apesfilmdiary'
						>
							<span className='sr-only'>
								Instagram will open in a new window.
							</span>
							<FontAwesomeIcon icon={['fab', 'instagram']} title='Instagram' />
						</a>

						<a
							className='icon-button'
							target='_blank'
							rel='noopener noreferrer'
							href='https://twitter.com/apebalsom'
						>
							<span className='sr-only'>
								Twitter will open in a new window.
							</span>
							<FontAwesomeIcon icon={['fab', 'twitter']} title='Twitter' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
} 

export default Footer;