import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.backgroundDark};
  color: ${colors.primary};
  padding: 40px 0;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SocialMedia = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 80px;
`

export const SocialMediaItem = styled.li`
  background-color: ${colors.primary};
  border-radius: 50%;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  .fa-social-media {
    color: ${colors.white};
  }
`

export const FooterDescription = styled.p`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  width: 480px;
`
