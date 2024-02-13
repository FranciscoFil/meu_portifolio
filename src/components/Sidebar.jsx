import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/eu-sem-fundo.jpeg'
import Curriculo from '../img/FranciscoBarbosa.pdf'

import "../styles/components/sidebar.sass"

const sidebar = () => {
  return (
    <aside id="sidebar">sdff
     <img src={Avatar} alt="Francisco Barbosa" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={Curriculo} className="btn">
        Donwload currículo 
      </a>
    </aside>
  )
}

export default sidebar