import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
  return (
    <footer className="bg-customGray text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-lg font-bold"> CodeStore MARKET</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Licenses</a></li>
              <li><a href="#">Market API</a></li>
              <li><a href="#">Become an affiliate</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Cookie Settings</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-lg font-bold">HELP</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Authors</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-lg font-bold">OUR COMMUNITY</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#">Community</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Forums</a></li>
              <li><a href="#">Meetups</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-lg font-bold">MEET CodeStore</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>Price is in US dollars and excludes tax and handling fees</p>
            <p>© 2024 CodeStore Pty Ltd. Trademarks and brands are the property of their respective owners.</p>
          </div>
          <div className="text-center flex justify-center items-center text-sm md:text-right font-bold space-x-4">
  <div className="text-center grid grid-rows-1 justify-items-center text-sm md:text-right font-bold">
    <div><p>75,521,539</p></div>
    <div><p className="text-gray-400"  >items sold</p></div>
  </div>

  <div className="text-center grid grid-rows-1 justify-items-center text-sm md:text-right font-bold">
        <div><p>$1,168,572,713</p></div>
        <div><p className="text-gray-400">community earnings</p></div>
        </div>
</div>
        </div>
        <div className="mt-8 flex justify-center md:justify-end space-x-4">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;