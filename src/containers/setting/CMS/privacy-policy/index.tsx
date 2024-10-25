import { useEffect, useState } from 'react'
import { Container } from './style'
import AddPrivacyPolicyPopup from 'components/popus/Settings/privacy-policy'
import Button from 'components/particles/primary-button'
import { useprivacyPolicy } from './useHook'
import { useSelector } from 'react-redux'
import { setModalOpened } from 'store/user-slice'
import { dispatch , RootState} from 'store';
import { PrivacyPolicyDTO } from 'utils/helpers/models/privacyPolicy.dto'

export default function PrivacyPolicy() {
  const [data, setData] = useState<any[]>([])
  const [dataById, setDataById] = useState<any>()
  const [id , setId ] = useState<number>(0)
  const { getprivacyPolicy, getprivacyPolicyById } = useprivacyPolicy()
  const {privacyPolicyModalIsOpen} = useSelector((state:RootState) => state.user)

  useEffect(() => {
    getprivacyPolicy(setData)
  }, [privacyPolicyModalIsOpen])

  const handleModalToggle = (id:number) => {
    setId(id)
    getprivacyPolicyById(id , setDataById)
    dispatch(setModalOpened('Privacy Policy'))
  }

  return (

    <Container>
      <div className='title'>
        <h1>Privacy Policy</h1>
        <Button title="Add  Privacy Policy" width="22rem" fill='true' backgroundcolor='var(--secondary)' onclick={() => dispatch(setModalOpened('Privacy Policy'))} />

      </div>

      <div className='term-and-condition-container'>
        {
          data.map((policy, index) => {
            return (
              <div className='term-and-condition-cart' key={index}>
                <h1>{policy?.name}</h1>
                <div dangerouslySetInnerHTML={{__html:policy?.description}}></div>
                <Button title="Edit" width="16rem" fill='true' backgroundcolor='var(--medium-black)' onclick={() => handleModalToggle(policy?.id)} />
              </div>
            )
          })
        }
      </div>
      {privacyPolicyModalIsOpen ?  <AddPrivacyPolicyPopup modalIsOpen={privacyPolicyModalIsOpen} id={id} data={dataById} /> : ''}
    </Container>
  )
}
