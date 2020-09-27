import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
      <footer>
        <div className="footer-flex wrapper">
          <div className="footer-text">
            <p>
              Created at <a href="https://junocollege.com/">Juno College</a>
            </p>
            <p>
              Design + wallpapers by 
              <a href="https://apesfilmdiary.com/"> Aprille Balsom</a>
            </p>
          </div>

          <div className="footer-icons">
            <p>join us on social</p>
            <div className="icons">
              <a href="https://github.com/aprillebalsom">
                <FontAwesomeIcon icon="code-branch" />
              </a>
              <a href="https://instagram.com/apesfilmdiary">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
              <a href="https://twitter.com/apebalsom">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
} 

export default Footer;