import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import { formatPrice } from '../../utils'
import Button from '../Button'

import { Overlay } from '../../styles'
import * as S from './styles'

const Checkout = () => {
  const { isOpen, items, total } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [isCart, setIsCart] = useState(true)
  const [isDeliveryForm, setIsDeliveryForm] = useState(false)
  const [isPaymentForm, setIsPaymentForm] = useState(false)
  const [
    purchase,
    {
      data: purchaseData,
      isSuccess: purchaseIsSuccess,
      isLoading: purchaseIsLoading
    }
  ] = usePurchaseMutation()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleCart = () => {
    setIsCart(true)
    setIsPaymentForm(false)
    setIsDeliveryForm(false)
  }

  const handleDelivery = () => {
    setIsDeliveryForm(true)
    setIsPaymentForm(false)
    setIsCart(false)
  }

  const handlePayment = () => {
    setIsPaymentForm(true)
    setIsDeliveryForm(false)
    setIsCart(false)
  }

  const handleClearCart = () => {
    dispatch(clear())
    setIsCart(true)
    setIsPaymentForm(false)
    setIsDeliveryForm(false)
  }

  useEffect(() => {
    if (purchaseIsSuccess) {
      setIsPaymentForm(false)
      setIsDeliveryForm(false)
      setIsCart(false)
    }
  }, [purchaseIsSuccess])

  const checkedInputError = (field: string) => {
    const fieldError = field in formik.errors
    const fieldTouched = field in formik.touched
    return fieldError && fieldTouched
  }

  const formik = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      name: '',
      numberCode: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object().shape({
      receiver: Yup.string().required('Campo obrigatório'),
      description: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O campo precisa ter 8 dígitos')
        .max(9, 'O campo precisa ter 8 dígitos')
        .required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      complement: Yup.string(),
      name: Yup.string().required('Campo obrigatório'),
      numberCode: Yup.string()
        .min(19, 'O campo precisa ter 16 dígitos')
        .max(19, 'O campo precisa ter 16 dígitos')
        .required('Campo obrigatório'),
      code: Yup.string()
        .min(3, 'O campo precisa ter 3 dígitos')
        .max(3, 'O campo precisa ter 3 dígitos')
        .required('Campo obrigatório'),
      month: Yup.string()
        .min(2, 'O campo precisa ter 2 dígitos')
        .max(2, 'O campo precisa ter 2 dígitos')
        .required('Campo obrigatório'),
      year: Yup.string()
        .min(4, 'O campo precisa ter 4 dígitos')
        .max(4, 'O campo precisa ter 4 dígitos')
        .required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.name,
            number: values.numberCode,
            code: Number(values.code),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        }
      })
    }
  })
  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <S.SidebarContainer onSubmit={formik.handleSubmit}>
        {/* Renderização do Cart */}
        {isCart && !isDeliveryForm && !isPaymentForm && (
          <>
            {items.length > 0 ? (
              <>
                <S.ItensContainer>
                  {items.map((item) => (
                    <S.Item>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h4>{item.nome}</h4>
                        <span>{formatPrice(item.preco)}</span>
                      </div>
                      <S.RemoveItem onClick={() => removeItem(item.id)} />
                    </S.Item>
                  ))}
                </S.ItensContainer>
                <p>
                  Valor total <span>{formatPrice(total)}</span>
                </p>

                <Button
                  type="button"
                  width="100%"
                  background="light"
                  onClick={handleDelivery}
                >
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <p>
                O carrinho está vazio, adicione pelo menos um produto para
                continuar com a compra
              </p>
            )}
          </>
        )}

        {/* Renderização do Formulario de endereço */}
        {isDeliveryForm && !isPaymentForm && !isCart && (
          <>
            <S.Form>
              <h4>Entrega</h4>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    type="text"
                    id="receiver"
                    name="receiver"
                    value={formik.values.receiver}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkedInputError('receiver') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.FormRow>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="description">Endereço</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkedInputError('description') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.FormRow>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkedInputError('city') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.FormRow>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <IMaskInput
                    mask="00000-000"
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkedInputError('zipCode') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkedInputError('number') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.FormRow>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opicional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={formik.values.complement}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkedInputError('complement') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.FormRow>
            </S.Form>

            <Button
              type="button"
              width="100%"
              background="light"
              onClick={handlePayment}
            >
              Continuar com o pagamento
            </Button>
            <Button
              type="button"
              width="100%"
              background="light"
              onClick={handleCart}
            >
              Voltar para o carrinho
            </Button>
          </>
        )}

        {/* Renderização do Formulario de pagamento */}
        {isPaymentForm && !isDeliveryForm && !isCart && (
          <>
            <S.Form>
              <h4>Pagamento - Valor a pagar {formatPrice(total)}</h4>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="name">Nome no cartão</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkedInputError('name') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.FormRow>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="numberCode">Número do cartão</label>
                  <IMaskInput
                    mask="0000 0000 0000 0000"
                    type="text"
                    id="numberCode"
                    name="numberCode"
                    value={formik.values.numberCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkedInputError('numberCode') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup maxWidth="87px">
                  <label htmlFor="code">CVV</label>
                  <IMaskInput
                    mask="000"
                    type="text"
                    id="code"
                    name="code"
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkedInputError('code') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.FormRow>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="month">Mes de vencimento</label>
                  <IMaskInput
                    mask="00"
                    type="text"
                    id="month"
                    name="month"
                    value={formik.values.month}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkedInputError('month') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="year">Ano de vencimento</label>
                  <IMaskInput
                    mask="0000"
                    type="text"
                    id="year"
                    name="year"
                    value={formik.values.year}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkedInputError('year') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.FormRow>
            </S.Form>

            <Button
              type="submit"
              width="100%"
              background="light"
              onClick={formik.handleSubmit}
            >
              {purchaseIsLoading ? 'Finalizando compra...' : 'Finalizar compra'}
            </Button>
            <Button
              type="button"
              width="100%"
              background="light"
              onClick={handleDelivery}
            >
              Voltar para a edição de endereço
            </Button>
          </>
        )}

        {/* Renderização do Pedido realizado */}
        {purchaseIsSuccess && !isPaymentForm && !isCart && !isDeliveryForm && (
          <>
            <S.Form>
              <h4>Pedido realizado - {purchaseData?.orderId}</h4>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br /> <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br />
                <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
                <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </S.Form>

            <Button
              type="button"
              width="100%"
              background="light"
              onClick={handleClearCart}
            >
              Concluir
            </Button>
          </>
        )}
      </S.SidebarContainer>
    </S.Container>
  )
}

export default Checkout
