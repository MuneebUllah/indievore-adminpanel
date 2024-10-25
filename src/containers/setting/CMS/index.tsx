import { useDispatch, useSelector } from 'react-redux'
import {
  TabeContainer,
  TabeCart,
  Container
} from './style'

import sessionAmount from 'assets/images/session-amount.svg'
import termCondition from 'assets/images/term & Conditions.svg'
import privacyPolicy from 'assets/images/privacy-policy.svg'
import onBoarding from 'assets/images/on-board.svg'
import dietary from 'assets/images/dietary-choise.svg'
import faq from 'assets/images/faq.svg'

import { setCMSActiveButton } from 'store/user-slice'
import SessionAmount from './session-amount'
import TermAndConditions from './term-and-conditions'
import OnBoarding from './onboarding'
import PrivacyPolicy from './privacy-policy'

import DietaryChoise from './dietary-choise'
import FAQ from './faq'
import NoDataFound from 'components/particles/no-data-found'
import { RootState } from 'store'

export default function CMS() {
  const { CMSActiveButton , isLoading } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  
  return (
    <Container>
      {
          <>
            <div className='title'>
              <h1>CMS Settings</h1>
            </div>
            <TabeContainer >
              <TabeCart active={CMSActiveButton === 'Set Standard Session Amount'} onClick={() => { dispatch(setCMSActiveButton('Set Standard Session Amount')) }}>
                <div className='categories-tab-img'>

                  <img src={CMSActiveButton === 'Set Standard Session Amount' ? sessionAmount : sessionAmount} alt="img" width={30} />
                </div>
                <h1>
                  Set Standard Session Amount
                </h1>
              </TabeCart>
              <TabeCart active={CMSActiveButton === 'Terms & Conditions'} onClick={() => { dispatch(setCMSActiveButton('Terms & Conditions')) }}>
                <div className='categories-tab-img'>
                  <img src={CMSActiveButton === 'Terms & Conditions' ? termCondition : termCondition} alt="img" width={30} />
                </div>
                <h1>
                  Terms & Conditions
                </h1>
              </TabeCart>
              <TabeCart active={CMSActiveButton === 'Onboarding Screen'} onClick={() => { dispatch(setCMSActiveButton('Onboarding Screen')) }}>
                <div className='categories-tab-img'>
                  <img src={CMSActiveButton === 'Onboarding Screen' ? onBoarding : onBoarding} alt="img" width={30} />
                </div>
                <h1>
                  Onboarding Screen
                </h1>
              </TabeCart>
              <TabeCart active={CMSActiveButton === 'Privacy Policy'} onClick={() => { dispatch(setCMSActiveButton('Privacy Policy')) }}>
                <div className='categories-tab-img'>
                  <img src={CMSActiveButton === 'Privacy Policy' ? privacyPolicy : privacyPolicy} alt="img" width={30} />
                </div>
                <h1>
                  Privacy Policy
                </h1>
              </TabeCart>
              <TabeCart active={CMSActiveButton === 'Dietary Choices'} onClick={() => { dispatch(setCMSActiveButton('Dietary Choices')) }}>
                <div className='categories-tab-img'>
                  <img src={CMSActiveButton === 'Dietary Choices' ? dietary : dietary} alt="img" width={30} />
                </div>
                <h1>
                  Dietary Choices
                </h1>
              </TabeCart>
              <TabeCart active={CMSActiveButton === 'FAQ’s Management'} onClick={() => { dispatch(setCMSActiveButton('FAQ’s Management')) }}>
                <div className='categories-tab-img'>
                  <img src={CMSActiveButton === 'FAQ’s Management' ? faq : faq} alt="img" width={30} />
                </div>
                <h1>
                  FAQ’s Management
                </h1>
              </TabeCart>
            </TabeContainer>
            {
              CMSActiveButton === 'Set Standard Session Amount' ? <SessionAmount /> : (
                CMSActiveButton === 'Terms & Conditions' ? <TermAndConditions /> : (
                  CMSActiveButton === 'Onboarding Screen' ? <OnBoarding /> : (
                    CMSActiveButton === 'Privacy Policy' ? <PrivacyPolicy /> : (
                      CMSActiveButton === 'Dietary Choices' ? <DietaryChoise /> : (
                        CMSActiveButton === 'FAQ’s Management' ? <FAQ /> : <NoDataFound isShow={!isLoading} />
                      )
                    )
                  )
                )
              )
            }
          </>
      }
    </Container>
  )
}
