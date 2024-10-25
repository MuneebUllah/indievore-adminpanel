import phone from 'assets/images/user-phone.svg'
import mail from 'assets/images/user-mail.svg'
import Location from 'assets/images/location.svg'
import clock from 'assets/images/clock.svg'
import lang from 'assets/images/user-lang.svg'

import orderIcon from 'assets/images/order-white-icon.svg'
import sessionDarkIcon from 'assets/images/session-dark-icon.svg'
import orderDarkIcon from 'assets/images/order-dark-icon.svg'
import sessionIcon from 'assets/images/session-white-icon.svg'
import dietary from 'assets/images/dietary-white-icon.svg'

import { Container, CardContainer, TabeContainer, TabeCart, StatusTabeContainer } from './styled'
import { dispatch } from 'store'
import { setUserActiveButton, setUserStatusActiveButton } from 'store/user-slice'
import { useSelector } from 'react-redux'
import { Fragment, useState } from 'react'

import Pagination from 'components/particles/pagination/pagination'
import Button from 'components/particles/primary-button'
import NoDataFound from 'components/particles/no-data-found'
import { siteRoutes } from 'utils/helpers/enums/routes.enums'
import { tableData } from 'utils/helpers/dummyData'

import { useNavigate } from 'react-router-dom'
import view from 'assets/images/view-icon.svg';
import DietaryChoisePopup from 'components/popus/dietary-choise'
import rating from 'assets/images/RatingStar.svg'
import StatusTabe from 'components/particles/status-tabe'

import { Status } from 'containers/home-chefs/view/styled'
import { useForm } from 'react-hook-form'
import { UsersViewOrdersSearchDTO, UsersViewSessionSearchDTO } from 'utils/helpers/models/users.dto'

export default function View() {
  const { userActiveButton, userStatusActiveButton , isLoading } = useSelector((state: any) => state.user)
  const [modalIsOpen, setIsOpen] = useState(false)
  const {register , handleSubmit} = useForm<UsersViewOrdersSearchDTO | UsersViewSessionSearchDTO>()

  const navigate = useNavigate()
  const search = (data:UsersViewOrdersSearchDTO | UsersViewSessionSearchDTO) => {
    console.log('Search.....', data);
  }

  const limit = 10;
  function fetchNextRecords(offset: number) {
    console.log(offset);
  }

  function dietaryModalOpen() {
    setIsOpen(true)
  }

  return (
    <Container>
      <div className='title'>
        <h1>User Profile</h1>
      </div>
      <CardContainer>
        <img src={'https://picsum.photos/300'} alt="img" className='profile-img' />
        <div className='profile'>
          <h1>{'Yasmany B'}</h1>
          <p>Passionate about food and life is
            most important </p>
        </div>
        <div className='user-info'>
          <div className='info-row'>
            <img src={mail} alt="mail" />
            <p>{'email@builtinsoft.com'}</p>
          </div>
          <div className='info-row'>
            <img src={phone} alt="phone" />
            <p>{'+91233345433'}</p>
          </div>
          <div className='info-row'>
            <img src={clock} alt="weightScale" />
            <p>{'12 mar 1999'}</p>
          </div>
          <div className='info-row'>
            <img src={lang} alt="height" />
            <p>{'English'}</p>
          </div>
          <div className='info-row'>
            <img src={Location} alt="calendar" />
            <p>{'new area of india'}</p>
          </div>
        </div>
        <div onClick={dietaryModalOpen}>
          <button>
            <div className='dietary-icon'>
              <img src={dietary} alt="" />
            </div>
            <h3>Dietary Choices</h3>
          </button>
        </div>
      </CardContainer>
      <TabeContainer >
        <TabeCart active={userActiveButton === 'Order Details'} onClick={() => { dispatch(setUserActiveButton('Order Details')) }}>
          <div className='categories-tab-img'>
            <img src={userActiveButton === 'Order Details' ? orderIcon : orderDarkIcon} alt="img" />
          </div>
          <h1>
            Order Details
          </h1>
        </TabeCart>
        <TabeCart active={userActiveButton === 'Session Details'} onClick={() => { dispatch(setUserActiveButton('Session Details')) }}>
          <div className='categories-tab-img'>
            <img src={userActiveButton === 'Session Details' ? sessionIcon : sessionDarkIcon} alt="img" />
          </div>
          <h1>
            Session Details
          </h1>
        </TabeCart>
      </TabeContainer>
      <StatusTabeContainer >
        {/* {statusTabs.map((tab: string, index: number) => { */}
          {/* return  */}
          <StatusTabe active={userStatusActiveButton === 'All'} onclick={() => { dispatch(setUserStatusActiveButton('All')) }} title={'All'} />
         {userActiveButton === 'Session Details' ? <StatusTabe active={userStatusActiveButton === 'Completed'} onclick={() => { dispatch(setUserStatusActiveButton('Completed')) }} title={'Completed'} /> :<StatusTabe active={userStatusActiveButton === 'Pickup'} onclick={() => { dispatch(setUserStatusActiveButton('Pickup')) }} title={'Pickup'} />}
          <StatusTabe active={userStatusActiveButton === 'Pending'} onclick={() => { dispatch(setUserStatusActiveButton('Pending')) }} title={'Pending'} />
          <StatusTabe active={userStatusActiveButton === 'Declined'} onclick={() => { dispatch(setUserStatusActiveButton('Declined')) }} title={'Declined'} />
          <StatusTabe active={userStatusActiveButton === 'Expired'} onclick={() => { dispatch(setUserStatusActiveButton('Expired')) }} title={'Expired'} />
        {/* })} */}
      </StatusTabeContainer>
      <div className='search-container' >
        <div className='input-fields'>
          {
            userActiveButton === 'Order Details' ?
              <>
                <input
                  type="text"
                  placeholder='Search By Order id'
                  {...register('id')}
                />
                {/* <input type="date" name="date" id="date" /> */}
                <div className="custom-date-input-container">
                  <input type="date" className="custom-date-input" placeholder="Search by Date" {...register('date')} />
                </div>
                <input
                  type="text"
                  placeholder='Search By Retailer'
                  {...register('retailer')}
                />
              </>
              :
              userActiveButton === 'Session Details' ?
                <>
                  <input
                    type="text"
                    placeholder='Search By Session Id'
                    {...register('id')}
                  />
                  <input
                    type="text"
                    placeholder='Search By Dishes Name'
                    {...register('name')}
                  />
                  {/* <input type="date" name="date" id="date" /> */}
                  <div className="custom-date-input-container">
                  <input type="date" className="custom-date-input" placeholder="Search by Date" {...register('date')} />
                </div>
                  <input
                    type="text"
                    placeholder='Search By Home Cook'
                    {...register('cook')}
                  />
                </>
                : ''
          }

        </div>
        <div className='button-fields'>

          <Button title="search" width="16rem" fill='true' onclick={handleSubmit(search)}/>
          <Button title="Reset" width="16rem" fill='true' backgroundcolor='var(--reset-button)' onclick={handleSubmit(search)} />
        </div>
      </div>
      <div className='data-table'>
        <table>
          <thead>
            <tr>
              <th className='th'>{userActiveButton === 'Order Details' ? 'Order Id' : 'Session Id'}</th>
              {userActiveButton === 'Order Details' ? <th className='th'>Items</th> : <th>Dish Name</th>}
              <th>Date</th>
              <th className='th'>Amount</th>
              <th>{userActiveButton === 'Order Details' ? 'Retailer Name' : 'Home Cook'}</th>
              {userActiveButton === 'Order Details' ? null : <th className='th'>Duration</th>}
              {userActiveButton === 'Order Details' ? null : <th className='th'>Rating</th>}
              {userStatusActiveButton === 'All' ? <th className='th'>Status</th> : null}
              <th className='th'>Actions</th>

            </tr>
          </thead>
          <tbody>
            {tableData?.length > 0 ? (
              tableData
                ?.map((item, index) => (
                  <tr key={index}>
                    <td className='th'>{item.id}</td>
                    {userActiveButton === 'Order Details' ? <td className='th'>{item.quentity}</td> : <td><img className='img' src='http://picsum.photos/400' alt='img' /> {item.recipeName}</td>}
                    <td>{item.dateAndTime}</td>
                    <td className='th'>{item.price}</td>
                    <td>{item.chefname}</td>
                    {userActiveButton === 'Order Details' ? null : <td className='th'>{item.duration}</td>}
                    {userActiveButton === 'Order Details' ? null : <td className='th'><img src={rating} alt="img" /> {item.rating}</td>}
                    {userStatusActiveButton === 'All' ? (
                      <td className='th'>
                        <Status active={item.status}>{item.status}</Status>
                      </td>
                    ) : null}
                    <td className="actions th">
                      <div className='view-container' onClick={() => navigate(userActiveButton === 'Order Details' ? siteRoutes.usersViewPrint : siteRoutes.usersViewDetail)}>
                      <img src={view} alt='img'  />
                      </div>
                      {/* <img src={print} alt='img' onClick={() => navigate(siteRoutes.usersViewPrint)} /> */}
                    </td>
                  </tr>
                ))
            ) : (
              <NoDataFound isShow={!isLoading} />
            )}
          </tbody>
        </table>
        {/* )} */}
      </div>
      <DietaryChoisePopup modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <Fragment>
        <Pagination totalRecords={100} perPage={limit} handleFetchNextRecords={fetchNextRecords} />
      </Fragment>
    </Container>
  )
}
