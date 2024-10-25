import React, { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  CardContainer,
  TabeContainer,
  TabeCart,
  StatusTabeContainer,
  Status
} from './styled';

import {
  setChefActiveButton,
  setChefStatusActiveButton
} from 'store/user-slice';

import Pagination from 'components/particles/pagination/pagination';
import NoDataFound from 'components/particles/no-data-found';
import Reviews from '../view-receipe/reviews';
import { tableData } from 'utils/helpers/dummyData';
import Button from 'components/particles/primary-button';

import user from 'assets/images/chef-user.svg';
import location from 'assets/images/chef-location.svg';
import bag from 'assets/images/chef-bag.svg';
import lang from 'assets/images/language.svg';

import sessionDarkIcon from 'assets/images/session-dark-icon.svg';
import sessionIcon from 'assets/images/session-white-icon.svg';
import dishesIcon from 'assets/images/dishes-icon.svg';
import dishesDarkIcon from 'assets/images/dishes-dark-icon.svg';
import reviewsIcon from 'assets/images/reviews-white-icon.svg';

import reviewsDarkIcon from 'assets/images/reviews-dark-icon.svg';
import premium from 'assets/images/premium.svg';
import rating from 'assets/images/RatingStar.svg';
import view from 'assets/images/view-icon.svg';
import { siteRoutes } from 'utils/helpers/enums/routes.enums';

import StatusTabe from 'components/particles/status-tabe';
import { useHomeChefById } from './useHook';
import { useForm } from 'react-hook-form';
import { HomeChefViewReceipeSearchDTO, HomeChefViewSessionSearchDTO } from 'utils/helpers/models/homeChef.dto';

const HomeChefView: React.FC = () => {
  const { isLoading } = useSelector((state:any) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { chefActiveButton, chefStatusActiveButton } = useSelector((state: any) => state.user);
  const { getHomeChefById } = useHomeChefById()
  const [data, setData] = useState<any[]>()

  const {register , handleSubmit } = useForm<HomeChefViewReceipeSearchDTO | HomeChefViewSessionSearchDTO>()
  const search = (data:HomeChefViewReceipeSearchDTO | HomeChefViewSessionSearchDTO) => {
    console.log('Search.....', data);
  };

  const limit = 10;
  const offset = 1;
  const id = 'd15aa6c0-13a8-4a41-a5ae-eafa68099ddc'

  const fetchNextRecords = (offset: number) => {
    console.log(offset);
  };


  useEffect(() => { getHomeChefById(id, setData, offset, limit) }, [])

  const statusTabs: string[] = [
    'All',
    'Complete',
    'Pending',
    'Declined',
    'Expired'
  ]

 const options=['Dietary', 'Meet' , 'Fruit']
  return (
    <Container>
      <div className='title'>
        <h1>Home Cook</h1>
        <div>
          <button>
            <img src={premium} alt="img" />
            <p>Upgrade as Premium</p>
          </button>
        </div>
      </div>

      <CardContainer>
        <div className='user-profile'>
          <img src={'https://picsum.photos/300'} alt="img" />
          <div className='user-detail'>
            <h1>{'User Name'}</h1>
            <p>Premium Home Cook </p>
          </div>
        </div>
        <div className='user-info'>
          <div className='info-row'>
            <img src={bag} alt="calendar" />
            <p>{'Cook'}</p>
          </div>
          <div className='info-row'>
            <img src={lang} alt="weightScale" />
            <p>{'English'}</p>
          </div>
          <div className='info-row'>
            <img src={location} alt="phone" />
            <p>{'Phoenix, AZ, USA'}</p>
          </div>
          <div className='info-row'>
            <img src={user} alt="height" />
            <p>{'Passionate about food and life 🥘🍲🍝🍱'}</p>
          </div>
        </div>
        <div className='info-detail'>
          <div>
            <p>Dishes</p>
            <h1>4</h1>
          </div>
          <div>
            <p>Following</p>
            <h1>259</h1>
          </div>
          <div>
            <p>Rating</p>
            <h1>2.22k</h1>
          </div>
        </div>
      </CardContainer>

      <TabeContainer>
        <TabeCart active={chefActiveButton === 'Session'} onClick={() => dispatch(setChefActiveButton('Session'))}>
          <div className='categories-tab-img'>

            <img src={chefActiveButton === 'Session' ? sessionIcon : sessionDarkIcon} alt="img" />
          </div>
          <h1>Session</h1>
        </TabeCart>
        <TabeCart active={chefActiveButton === 'Recipes'} onClick={() => dispatch(setChefActiveButton('Recipes'))}>
          <div className='categories-tab-img'>
            <img src={chefActiveButton === 'Recipes' ? dishesIcon : dishesDarkIcon} alt="img" />
          </div>
          <h1>Dishes</h1>
        </TabeCart>
        <TabeCart active={chefActiveButton === 'Reviews'} onClick={() => dispatch(setChefActiveButton('Reviews'))}>
          <div className='categories-tab-img'>
            <img src={chefActiveButton === 'Reviews' ? reviewsIcon : reviewsDarkIcon} alt="img" />
          </div>
          <h1>Reviews</h1>
        </TabeCart>
      </TabeContainer>

      {chefActiveButton === 'Session' && (
        <StatusTabeContainer>
          {statusTabs.map((tab: string, index: number) => {
            return <StatusTabe key={index} active={chefStatusActiveButton === tab} onclick={() => { dispatch(setChefStatusActiveButton(tab)) }} title={tab} />
          })}
        </StatusTabeContainer>
      )}

      {chefActiveButton === 'Session' ? (
        <div className='search-container'>
          <div className='input-fields'>
            <input
              type="text"
              placeholder='Search by Dish Name'
              {...register('dishName')}
            />
            {/* <input type="date" name="date" id="date" /> */}
            <div className="custom-date-input-container">
              <input type="date" className="custom-date-input" placeholder="Search by Date" />
            </div>
            <input
              type="text"
              placeholder='Search by Users'
              {...register('users')}
            />
          </div>
          <div className='button-fields'>
            <Button title="Search" width="16rem" fill='true' onclick={handleSubmit(search)} />
            <Button title="Reset" width="16rem" fill='true' backgroundcolor='var(--reset-button)' onclick={handleSubmit(search)}/>
          </div>
        </div>
      ) : chefActiveButton === 'Recipes' ? (
        <div className='search-container'>
          <div className='input-fields'>
            <input
              type="text"
              placeholder='Search By Dish Name'
              {...register('dishName')}
            />
            <select id='dietaries' {...register('dietaries')}>
              {
                options.map((option , index) => {
                  return(
                    <option value={option} key={index}>{option}</option>
                  )
                })
              }
            </select>
            <input
              type="text"
              placeholder='Search By State'
              {...register('state')}
            />
          </div>
          <div className='button-fields'>
            <Button title="Search" width="16rem" fill='true' onclick={handleSubmit(search)} />
            <Button title="Reset" width="16rem" fill='true' backgroundcolor='var(--reset-button)' onclick={handleSubmit(search)}/>
          </div>
        </div>
      ) : ''}

      <div className="data-table">
        {chefActiveButton === 'Session' && (
          <div className='data-table'>
            <table>
              <thead>
                <tr>
                  <th>Dish</th>
                  <th>Date</th>
                  <th className='th'>Amount</th>
                  <th>Username</th>
                  <th className='th'>Duration</th>
                  {chefStatusActiveButton === 'All' || chefStatusActiveButton === 'Complete' ? <th className='th'>Rating</th> : null}
                  {chefStatusActiveButton === 'All' ? <th className='th'>Status</th> : null}
                  <th className='th'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData?.length > 0 ? (
                  tableData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img src={'https://picsum.photos/200'} alt='img' style={{ width: '40px', height: '40px', borderRadius: '50%' }} /> {item.recipeName}
                      </td>
                      <td>{item.dateAndTime}</td>
                      <td className='th'>{item.price}</td>
                      <td>{item.chefname}</td>
                      <td className='th'>{item.id}</td>
                      {chefStatusActiveButton === 'All' || chefStatusActiveButton === 'Complete' ? (
                        <td className='th'>
                          <img src={rating} alt="img" /> {item.rating}
                        </td>
                      ) : null}
                      {chefStatusActiveButton === 'All' ? (
                        <td className='th'>
                          <Status active={item.status}>{item.status}</Status>
                        </td>
                      ) : null}
                      <td className="actions th">
                        <div className='view-container' onClick={() => navigate(siteRoutes.homeChefViewDetail)}>
                          <img src={view} alt='img'  />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <NoDataFound isShow={!isLoading} />
                )}
              </tbody>
            </table>
          </div>
        )}
        {chefActiveButton === 'Recipes' && (
          <div className='data-table'>
            <table>
              <thead>
                <tr>
                  <th>Dish</th>
                  <th className='th'>Serving size</th>
                  <th className='th'>Prep Time</th>
                  <th>Dietary</th>
                  <th className='th'>State</th>
                  <th className='th'>Ingredients</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData?.length > 0 ? (
                  tableData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img src={'https://picsum.photos/200'} alt='img' style={{ width: '40px', height: '40px', borderRadius: '50%' }} /> {item.recipeName}
                      </td>
                      <td className='th'>{item.serving}</td>
                      <td className='th'>{item.duration}</td>
                      <td>{item.categories}</td>
                      <td className='th'>{item.location}</td>
                      <td className='th'>{item.quentity}</td>
                      <td className="actions">
                        <Button title="View Dish" width="16rem" fill='true' backgroundcolor='var(--reset-button)' onclick={() => navigate(siteRoutes.homeChefViewReceipe)} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <NoDataFound isShow={!isLoading} />
                )}
              </tbody>
            </table>
          </div>
        )}
        {chefActiveButton === 'Reviews' && <Reviews />}
      </div>
{
  chefActiveButton !== 'Reviews' && 
      <Fragment>
        <Pagination totalRecords={100} perPage={limit} handleFetchNextRecords={fetchNextRecords} />
      </Fragment>
}
    </Container>
  );
};

export default HomeChefView;
