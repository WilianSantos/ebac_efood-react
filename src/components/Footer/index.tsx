import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTwitter,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'

import {
  FooterContainer,
  FooterDescription,
  SocialMedia,
  SocialMediaItem
} from './styles'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} alt="Logo" />

      <SocialMedia>
        <SocialMediaItem>
          <FontAwesomeIcon icon={faInstagram} className="fa-social-media" />
        </SocialMediaItem>
        <SocialMediaItem>
          <FontAwesomeIcon icon={faFacebookF} className="fa-social-media" />
        </SocialMediaItem>
        <SocialMediaItem>
          <FontAwesomeIcon icon={faTwitter} className="fa-social-media" />
        </SocialMediaItem>
      </SocialMedia>

      <FooterDescription>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterDescription>
    </FooterContainer>
  )
}

export default Footer
