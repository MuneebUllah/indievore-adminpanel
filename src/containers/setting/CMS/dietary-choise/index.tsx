import { useEffect, useState } from 'react'
import { Container, Status } from './style'
import Button from 'components/particles/primary-button'
import DietaryChoicePopup from 'components/popus/Settings/dietary-choice'

import { useDietaryChoice } from './useHook'
import { useSelector } from 'react-redux'
import { dispatch, RootState } from 'store'
import { setModalOpened } from 'store/user-slice'

export default function DietaryChoise() {
  const [data, setData] = useState<any[]>([])
  const [dataById, setDataById] = useState<any>()

  const [id, setId] = useState<number>(0)
  const { getDietaryChoice, getDietaryChoiceById } = useDietaryChoice()
  const { dietaryChoiceModalIsOpen } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    getDietaryChoice(setData)
  }, [dietaryChoiceModalIsOpen])

  const handlePopup = (id: number) => {
    setId(id)
    dispatch(setModalOpened('Dietary Choice'))
    if (id) {
      getDietaryChoiceById(id, setDataById)
    }
  }  

  return (
    <Container>
      <div className='title'>
        <h1>Dietary Choices</h1>
        {data?.length < 4 ?
          <Button title="Add  Question" width="22rem" fill='true' backgroundcolor='var(--secondary)' onclick={() => handlePopup(0)} /> : null
        }
      </div>
      
      {
        data?.map((item, index) => {
          return (
            <div className='cart' key={index}>
              <div className='dietaries-cart'>
                <p>Question no {index + 1}</p>
                <h1>{item?.question}</h1>
                <p>Answer</p>
                <div className='dietaries'>
                {
              // Check if item.options is an array before mapping
              Array.isArray(item?.options) ? (
                item?.options?.map((option: any, index: number) => {
                  return (
                    <Status key={index}>{option}</Status>
                  )
                })
              ) : (
                <p>No options available</p> // Fallback when options is not an array
              )
            }
                </div>
              </div>
              <Button title="Edit" width="11rem" fill='true' onclick={() => handlePopup(item?.id)} backgroundcolor='var(--medium-black)' />
            </div>
          )
        })
      }
     {dietaryChoiceModalIsOpen ?  <DietaryChoicePopup id={id} data={dataById} /> : ''}
    </Container>
  )
}
