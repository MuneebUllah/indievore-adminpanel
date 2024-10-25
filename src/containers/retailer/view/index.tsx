import { FC, Fragment, useState } from 'react';
import { Container, StatusTabeContainer, CardContainer, Status } from './style';
import Pagination from 'components/particles/pagination/pagination';
import { setRetailerStatusActiveButton } from 'store/user-slice';
import { useSelector } from 'react-redux';

import email from 'assets/images/email.svg';
import phone from 'assets/images/phone.svg';
import globe from 'assets/images/globe.svg';
import location from 'assets/images/chef-location.svg';
import bg from 'assets/images/retailer-bg.svg';
import Button from 'components/particles/primary-button';

import NoDataFound from 'components/particles/no-data-found';
import { siteRoutes } from 'utils/helpers/enums/routes.enums';
import { useNavigate } from 'react-router-dom';
import { tableData } from 'utils/helpers/dummyData';

import view from 'assets/images/view-icon.svg';
import StatusTabe from 'components/particles/status-tabe';
import { RootState, dispatch } from 'store';
import rating from 'assets/images/RatingStar.svg'
import { useForm } from 'react-hook-form';
import { RetailerViewSearchDTO } from 'utils/helpers/models/retailer.dto';

const RetailerView: FC = () => {
  const { retailerStatusActiveButton , isLoading} = useSelector((state: RootState) => state.user);
  const {register , handleSubmit}  = useForm<RetailerViewSearchDTO>()
  const navigate = useNavigate();

  const search = (data:RetailerViewSearchDTO) => {
    console.log('Search.....', data);
  };

  const limit = 10;
  const fetchNextRecords = (offset: number) => {
    console.log(offset);
  };

  const statusTabs: string[] = [
    'All',
    'Complete',
    'InActive',
    'Rejected'

  ]

  return (
    <Container>
      <h1>Retailers list</h1>

      <CardContainer>
        <div className='retailer-bg-img'>
          <img src={bg} alt="img" />
        </div>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <div className='user-profile'>
            <img src={'https://picsum.photos/300'} alt="img" style={{ width: '200px', borderRadius: '50%', height: '200px' }} />
            <div className='user-detail'>
              <h1>{'User Name'}</h1>
              <p>Universal SuperStore ( Owner )</p>
              <div className='contect-list'>
                <div>
                  <img src={email} alt="" />
                  <p>Email</p>
                </div>
                <div>
                  <img src={phone} alt="" />
                  <p>+912344636</p>
                </div>
                <div>
                  <img src={globe} alt="" />
                  <p>indievore.com</p>
                </div>
                <div>
                  <img src={location} alt="" />
                  <p>Phoenix, AZ, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContainer>

      <StatusTabeContainer>
        {statusTabs.map((tab: string, index: number) => {
          return <StatusTabe key={index} active={retailerStatusActiveButton === tab} onclick={() => { dispatch(setRetailerStatusActiveButton(tab)) }} title={tab} />
        })}
      </StatusTabeContainer>

      <div className='search-container'>
        <div className='input-fields'>
          <input
            type="text"
            placeholder='Search By Name'
            {...register('name')}
          />
          <input
            type="text"
            placeholder='Search By Order Id'
            {...register('id')}
          />
          {/* <input
            type="date"
            name="date"
            id="date"
          /> */}
          <div className="custom-date-input-container" >
            <input type="date" className="custom-date-input" placeholder="Search by Date" {...register('date')}/>
          </div>
        </div>
        <div className='button-fields'>
          <Button title="Search" width="16rem" fill='true' onclick={handleSubmit(search)} />
          <Button title="Reset" width="16rem" fill='true' backgroundcolor='var(--reset-button)' onclick={handleSubmit(search)}/>
        </div>
      </div>

      <div className='data-table'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th className='th'>Order Id</th>
              <th className='th'>Items</th>
              <th scope="col">Date</th>
              <th className='th'>Amount</th>
              {retailerStatusActiveButton === 'All' && <th className='th'>Status</th>}
              {retailerStatusActiveButton === 'Complete' && <th className='th'>Rate</th>}
              <th className='th'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.length > 0 ? (
              tableData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={'https://picsum.photos/400'} alt="img" width={30} className='img' /> {item.recipeName}
                  </td>
                  <td className='th'>{item.id}</td>
                  <td className='th'>{item.quentity}</td>
                  <td>{item.dateAndTime}</td>
                  <td className='th'>{item.price}</td>
                  {
                    retailerStatusActiveButton === 'All' &&
                    <td className='th'>
                      <Status active={item.status}>{item.status}</Status>
                    </td>
                  }
                  {retailerStatusActiveButton === 'Complete' && <td className='th'><img src={rating} alt='img' /> {item.id}</td>}
                  <td className='th'>
                    <div className="view-container" onClick={() => navigate(siteRoutes.retailerViewPrint)}>
                      <img src={view} alt='img' />
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

      <Fragment>
        <Pagination totalRecords={10} perPage={limit} handleFetchNextRecords={fetchNextRecords} />
      </Fragment>
    </Container>
  );
};

export default RetailerView;
