import { ButtonContainer } from './styles'

export type ButtonProps = {
  children: string
  width?: string
  background: 'light' | 'dark'
  type?: 'button' | 'submit'
  onClick?: () => void
}

const Button = ({ children, width, background, onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} background={background} width={width}>
      {children}
    </ButtonContainer>
  )
}

export default Button
