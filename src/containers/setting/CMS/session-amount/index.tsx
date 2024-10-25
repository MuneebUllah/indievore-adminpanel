import { useEffect, useState } from 'react'
import {
  Container
} from './style'
import AddSessionAmountPopup from 'components/popus/Settings/session-amount'
import Button from 'components/particles/primary-button'
import { useSessionAmount } from './useHook'
import { setModalOpened } from 'store/user-slice'
import { dispatch, RootState } from 'store'
import { useSelector } from 'react-redux'

export default function SessionAmount() {
  const [data, setData] = useState<any[]>([])
  const [dataById, setDataById] = useState<any>()
  const [id, setId] = useState<number>(0)
  const { getSessionAmount, getSessionAmountById } = useSessionAmount()
  const { sessionAmountModalIsOpen } = useSelector((state:RootState) => state.user)

  useEffect(() => {
    getSessionAmount(setData)
  }, [sessionAmountModalIsOpen])

  const handleChange = (id: number) => {
    dispatch(setModalOpened('Session Amount'))
    setId(id)
    if (id !== 0) {
      getSessionAmountById(id, setDataById)
    }
  }

  return (
    <Container>
      <div className='title'>
        <h1>Set Standard Session Amount</h1>
        {
          data.length >= 1 ? '' :
            <Button title="Add Amount" width="22rem" fill='true' onclick={() => handleChange(0)} backgroundcolor='var(--secondary)' />
        }

      </div>
     
      <div className='amount-container'>
        {
          data.map((session, index) => {
            return (
              <div className='amount-cart' key={index}>
                <h1>Session Amount</h1>
                <div className='amount'>
                  <h3>{session?.amount}</h3><h4>$</h4>
                </div>
                <Button title="Edit" width="16rem" fill='true' backgroundcolor='var(--medium-black)' onclick={() => handleChange(session?.id)} />
              </div>
            )
          })
        }

      </div>

      {sessionAmountModalIsOpen ? <AddSessionAmountPopup data={dataById} id={id} /> : ''}
    </Container>
  )
}
