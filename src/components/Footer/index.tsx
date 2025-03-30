import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTwitter,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'

import * as S from './styles'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <S.FooterContainer>
      <img src={logo} alt="Logo" />

      <S.SocialMedia>
        <S.SocialMediaItem>
          <FontAwesomeIcon icon={faInstagram} className="fa-social-media" />
        </S.SocialMediaItem>
        <S.SocialMediaItem>
          <FontAwesomeIcon icon={faFacebookF} className="fa-social-media" />
        </S.SocialMediaItem>
        <S.SocialMediaItem>
          <FontAwesomeIcon icon={faTwitter} className="fa-social-media" />
        </S.SocialMediaItem>
      </S.SocialMedia>

      <S.FooterDescription>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.FooterDescription>
    </S.FooterContainer>
  )
}

export default Footer
