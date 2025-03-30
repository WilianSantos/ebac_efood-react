export function limitingString(string: string) {
  if (string.length > 250) {
    return string.slice(0, 250) + '...'
  }
  return string
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
