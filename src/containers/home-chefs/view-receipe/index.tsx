import { useSelector } from 'react-redux'
import { CardContainer, Container, StatusTabeContainer, StatusTabeCart } from './style'
import { dispatch } from 'store'
import { setDishStatusActiveButton } from 'store/user-slice'
import ReceipeOverview from './overview'
import Ingredients from './ingredients'
import Nutrition from './nutrition'
import Reviews from './reviews'
import NoDataFound from 'components/particles/no-data-found'
import Button from 'components/particles/primary-button'
export default function ViewReceipe() {
  const { dishStatusActiveButton , isLoading } = useSelector((state: any) => state.user)

 
  return (
    <Container>
      <h1>Dish</h1>
      <CardContainer>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <div className='user-profile'>
            {/* <div> */}
            <img src={'https://picsum.photos/300'} alt="img" height={170} width={260} style={{ borderRadius: '10px' }} />
            {/* </div> */}
            <div className='user-detail'>
              <div className='receipe-title'>
                <div>
                  <h1>{'Special Butter Chicken'}</h1>
                  <p>By Mark Robert </p>
                </div>
                <div>
                  <Button title="Preparation Details" width="19rem" fill='true' backgroundcolor='var(--reset-button)'/>                   
                </div>
              </div>
              <div className='date-rate'>
                <div className='date'>
                  <p>Date</p>
                  <h2>Mar 4, 2024</h2>
                </div>
                <div className='rate'>
                  <p>Rate</p>
                  <h2>4.5</h2>
                </div>
              </div>
            </div>
          </div>

        </div>
      </CardContainer>
      <StatusTabeContainer >
        <StatusTabeCart active={dishStatusActiveButton === 'Overview'} onClick={() => { dispatch(setDishStatusActiveButton('Overview')) }}>
          <h2>
            Overview
          </h2>
        </StatusTabeCart>
        <StatusTabeCart active={dishStatusActiveButton === 'Ingredients'} onClick={() => { dispatch(setDishStatusActiveButton('Ingredients')) }}>
          <h2>
            Ingredients
          </h2>
        </StatusTabeCart>
        <StatusTabeCart active={dishStatusActiveButton === 'Nutrition'} onClick={() => { dispatch(setDishStatusActiveButton('Nutrition')) }}>
          <h2>
            Nutrition
          </h2>
        </StatusTabeCart>
        <StatusTabeCart active={dishStatusActiveButton === 'Reviews'} onClick={() => { dispatch(setDishStatusActiveButton('Reviews')) }}>
          <h2>
            Reviews
          </h2>
        </StatusTabeCart>
      </StatusTabeContainer>
      {
        dishStatusActiveButton === 'Overview' ?
          <ReceipeOverview /> : (
            dishStatusActiveButton === 'Ingredients' ?
              <Ingredients /> : (
                dishStatusActiveButton === 'Nutrition' ?
                  <Nutrition /> :
                  (dishStatusActiveButton === 'Reviews' ?

                    <Reviews /> :
                    <NoDataFound isShow={!isLoading} />
                  )

              )

          )

      }
    </Container>
  )
}
