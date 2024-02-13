import {FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/francisco-filipe-contratem/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/FranciscoFil" },
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/_francisco_filipe/" },
  ];
  
  const SocialNetworkContainer = () => {
    return (
      <section id="social-networks">
        {socialNetworks.map((network) => (
          <a href={network.link} className="social-btn" id={network.name} key={network.name}>
            {network.icon}
          </a>
        ))}
      </section>
    );
  };
  
  export default SocialNetworkContainer;

