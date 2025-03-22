import { ButtonContainer } from './styles'

export type ButtonProps = {
  children: string
  width?: string
  background: 'light' | 'dark'
}

const Button = ({ children, width, background }: ButtonProps) => {
  return (
    <ButtonContainer background={background} width={width}>
      {children}
    </ButtonContainer>
  )
}

export default Button
