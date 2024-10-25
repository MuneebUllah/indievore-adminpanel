import { useEffect, useState } from 'react'
import { Container } from './style'
import AddTermAndConditionsPopup from 'components/popus/Settings/term-conditions'
import Button from 'components/particles/primary-button'
import { useTermAndConditions } from './useHook'
import { dispatch, RootState } from 'store'
import { setModalOpened } from 'store/user-slice'
import { useSelector } from 'react-redux'

interface DataByIdProps {
  title: string
  description: string
}

export default function TermAndConditions() {
  const [id, setId] = useState<number>(0)
  const [data, setData] = useState<any>([])
  const { termAndConditionModalIsOpen } = useSelector((state: RootState) => state.user)
  const [dataById, setDataById] = useState<DataByIdProps>({
    title: '',
    description: ''
  })
  const { getTermAndConditions, getTermAndConditionsById } = useTermAndConditions()

  useEffect(() => {
    getTermAndConditions(setData)
  }, [termAndConditionModalIsOpen])

  const handleChange = (id: number) => {
    dispatch(setModalOpened('Term And Condition'))
    setId(id)
    if (id !== 0) {
      getTermAndConditionsById(id, setDataById)
    }
  }

  return (
    <Container>
      <div className='title'>
        <h1>Terms & Conditions</h1>
        <Button title="Add  Terms and Condition" width="22rem" backgroundcolor='var(--secondary)' fill='true' onclick={() => handleChange(0)} />
      </div>


      {
        data?.map((item: any, index: number) => {
          return (
            <div className='term-and-condition-container' key={index}>
              <h1>{item?.title || 'Term And Condition '}</h1>
              <div dangerouslySetInnerHTML={{ __html: item?.description }}></div>
              <Button title="Edit" width="16rem" backgroundcolor='var(--medium-black)' fill='true' onclick={() => handleChange(item?.id)} />
            </div>
          )
        })
      }

      {termAndConditionModalIsOpen ? <AddTermAndConditionsPopup data={dataById} id={id} /> : ''}
    </Container>
  )
}
