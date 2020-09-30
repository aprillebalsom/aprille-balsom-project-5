import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <div className='footer-flex wrapper'>
        <div className='footer-text' id='about'>

          <p>
            Created at <a target='_blank' 
           rel="noopener noreferrer" href='https://junocollege.com/'>Juno College</a>
          </p>

          <p>
            Design + wallpapers by 
            <a target='_blank' 
           rel="noopener noreferrer" href='https://apesfilmdiary.com/' id='blog'> Aprille Balsom</a>
          </p>

        </div>

        <div className='footer-icons' id='contact'>

          <p>join us on social</p>

          <div className='icons'>
            <a className='icon-button' target='_blank' 
           rel="noopener noreferrer" href='https://github.com/aprillebalsom'>
              <FontAwesomeIcon icon='code-branch' />
            </a>

            <a className='icon-button' target='_blank' 
           rel="noopener noreferrer" href='https://instagram.com/apesfilmdiary'>
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>

            <a className='icon-button' target='_blank' 
           rel="noopener noreferrer" href='https://twitter.com/apebalsom'>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
} 

export default Footer;