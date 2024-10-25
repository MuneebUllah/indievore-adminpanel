import { ChangeEvent, useEffect, useState } from 'react'
import { AllManageStateContainer, Cart, Container } from './style'
import AddFAQPopup from 'components/popus/Settings/FAQ'
import Button from 'components/particles/primary-button'
import { useFaqs } from './useHook'
import { dispatch } from 'store'
import { setModalOpened } from 'store/user-slice'
import { useSelector } from 'react-redux'

export default function FAQ() {
  const [data, setData] = useState([])
  const [dataById, setDataById] = useState<any>()
  const [id, setId] = useState<number>(0)
  const { getFaqs, getFaqsById } = useFaqs()
  const { FaqModalIsOpen } = useSelector((state:any) => state.user)

  const handleChangeFAQ = (id: number) => {
    setId(id)
    if(id !== 0){
      getFaqsById(id, setDataById)
    }
    dispatch(setModalOpened('Faq'))
  }

  useEffect(() => {
    getFaqs(setData)
  }, [ FaqModalIsOpen ])

  return (
    <Container>
      <div className='title'>
        <h1>FAQ’s Managements</h1>
        <Button title="Add  FAQ" width="22rem" fill='true' backgroundcolor='var(--secondary)' onclick={() => handleChangeFAQ(0)} />

      </div>

      <AllManageStateContainer>
        {
          data.map((item: any, index: number) => {
            return (
              <Cart key={index}>
                <div className='banner-img-title'>
                  <div className='banner-title'>
                    <h1>{item?.question}</h1>
                    <div dangerouslySetInnerHTML={{__html:item?.answer}}></div>
                  </div>
                </div>
                <Button title="Edit" width="16rem" fill='true' onclick={() => handleChangeFAQ(item?.id)} backgroundcolor='var(--medium-black)' />
              </Cart>

            )
          })
        }
      </AllManageStateContainer>
      {FaqModalIsOpen ? <AddFAQPopup id={id} data={dataById} /> : ''}
    </Container>
  )
}
