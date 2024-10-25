import { FC, Fragment, useState } from 'react'
import { Container, TabeContainer, TabeCart } from './style';
import Pagination from 'components/particles/pagination/pagination';

import orderIcon from 'assets/images/order-white-icon.svg'
import sessionDarkIcon from 'assets/images/session-dark-icon.svg'
import orderDarkIcon from 'assets/images/order-dark-icon.svg'
import sessionIcon from 'assets/images/session-white-icon.svg'
import { useDispatch, useSelector } from 'react-redux';

import { setManageStatusActiveButton } from 'store/user-slice';
import Button from 'components/particles/primary-button';
import { tableData } from 'utils/helpers/dummyData';
import NoDataFound from 'components/particles/no-data-found';

import view from 'assets/images/view-icon.svg';
import { Status } from 'containers/home-chefs/view/styled';
import rating from 'assets/images/RatingStar.svg';
import { useNavigate } from 'react-router-dom';
import { siteRoutes } from 'utils/helpers/enums/routes.enums';
import { useForm } from 'react-hook-form';
import { manageStateOrderSearchDTO, manageStateSessionSearchDTO } from 'utils/helpers/models/manageState.dto';

interface ManageStateProps {

}

interface SearchQuery {
  name: string;
  email: string;
  gender: string;
}

const ManageState: FC<ManageStateProps> = () => {
  
  const { manageStateActiveButton , isLoading } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {register , handleSubmit} = useForm<manageStateOrderSearchDTO | manageStateSessionSearchDTO>()

  const search = (data:manageStateOrderSearchDTO | manageStateSessionSearchDTO) => {
    console.log('Search.....', data);

  }

  const limit = 10;
  function fetchNextRecords(offset: number) {
    console.log(offset);

  }

  const option = ['Status', 'Complete', 'All', 'Pending', 'Cancel']

  return (
    <Container>
      <div className='title'>
        <h1>States list</h1>
      </div>

      <TabeContainer >
        <TabeCart active={manageStateActiveButton === 'Order Details'} onClick={() => { dispatch(setManageStatusActiveButton('Order Details')) }}>
          <div className='categories-tab-img'>
            <img src={manageStateActiveButton === 'Order Details' ? orderIcon : orderDarkIcon} alt="img" />
          </div>
          <h1>
            Order Details
          </h1>
        </TabeCart>
        <TabeCart active={manageStateActiveButton === 'Session Details'} onClick={() => { dispatch(setManageStatusActiveButton('Session Details')) }}>
          <div className='categories-tab-img'>
            <img src={manageStateActiveButton === 'Session Details' ? sessionIcon : sessionDarkIcon} alt="img" />
          </div>
          <h1>
            Session Details
          </h1>
        </TabeCart>
      </TabeContainer>

      <div className='search-container' >
        <div className='input-fields'>
          {manageStateActiveButton === 'Order Details' ?
            <>
              <input
                type="text"
                placeholder='Search by Order id'
                {...register('id')}
              />
              <div className="custom-date-input-container">
                <input type="date" className="custom-date-input" placeholder="Search by Date" />
              </div>
              <input
                type="text"
                placeholder='Search By Retailer'
                {...register('retailer')}
              />

            </>
            :
            <>
              <input
                type="text"
                placeholder='Search by Session id'
                {...register('id')}
              />
              <div className="custom-date-input-container">
                <input type="date" className="custom-date-input" placeholder="Search by Date" {...register('date')}/>
              </div>
              <input
                type="text"
                placeholder='Search By Home Cook'
                {...register('cook')}
              />
              <select id="satus" {...register('status')}>
                {option.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </>
          }
        </div>
        <div className='button-fields'>
          <Button title="Search" width="16rem" fill='true' onclick={handleSubmit(search)} />
          <Button title="Reset" width="16rem" fill='true' backgroundcolor='var(--reset-button)' onclick={handleSubmit(search)} />

        </div>
      </div>
      <div className='data-table'>
        <table>
          <thead>
            <tr>
              <th className='th'>{manageStateActiveButton === 'Order Details' ? 'Order ID' : 'Session ID'}</th>
              <th scope="col">Date</th>
              <th scope="col">Placed by</th>
              <th scope="col">{manageStateActiveButton === 'Order Details' ? 'Retailer' : 'Home Cook'}</th>
              <th className='th'>Amount</th>
              <th className='th'>{manageStateActiveButton === 'Order Details' ? 'Items' : 'Duration'}</th>
              {manageStateActiveButton === 'Order Details' ? '' : <th className='th'>Rating</th>}
              <th className='th'>{manageStateActiveButton === 'Order Details' ? 'Actions' : 'Status'}</th>

            </tr>
          </thead>
          <tbody>
            {tableData?.length > 0 ? (
              tableData
                ?.map((item, index) => (
                  <tr key={index}>
                    <td className='th'>
                      {item.id}
                    </td>
                    <td >{item.placedOn}</td>
                    <td >{item.recipeName}</td>
                    <td>{item.placedBy}</td>
                    <td className='th'>{item.price}</td>
                    <td className='th'>{manageStateActiveButton === 'Order Details' ? item.quentity : item.duration}</td>
                    {manageStateActiveButton === 'Session Details' &&
                      <td className='th'>
                        <img src={rating} alt="img" /> {item.rating}
                      </td>
                    }
                    <td className="actions th">
                      {manageStateActiveButton === 'Order Details' ?
                        <div className='view-container' onClick={() => navigate(siteRoutes.manageStatePrint)}>
                          <img src={view} alt='img' />
                        </div>
                        : <Status active={item.status}>{item.status}</Status>}
                    </td>
                  </tr>
                ))
            ) : (
              <NoDataFound isShow={!isLoading} />
            )}
          </tbody>
        </table>
      </div>
      <Fragment>
        <Pagination totalRecords={10} perPage={limit} handleFetchNextRecords={fetchNextRecords} />
      </Fragment>
    </Container>
  )
}


export default ManageState;