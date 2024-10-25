import { FC, Fragment } from 'react'
import Pagination from '../../../components/particles/pagination/pagination'
import { Container } from './style'
import RetailerPopup from 'components/popus/retailer-popup';

import Button from 'components/particles/primary-button';
import { tableData } from 'utils/helpers/dummyData';
import NoDataFound from 'components/particles/no-data-found';
import { useNavigate } from 'react-router-dom';

import view from 'assets/images/view-icon.svg';
import { siteRoutes } from 'utils/helpers/enums/routes.enums';
import { useForm } from 'react-hook-form';
import { RetailerListSearchDTO } from 'utils/helpers/models/retailer.dto';
import { dispatch } from 'store';
import { setModalOpened } from 'store/user-slice';
import { useSelector } from 'react-redux';

const Retailer: FC = () => {
  const { isLoading } = useSelector((state:any) => state.user)
  const navigate = useNavigate()
  const { register , handleSubmit } = useForm<RetailerListSearchDTO>()

  const search = (data:RetailerListSearchDTO) => {
    console.log('Search.....', data);

  }

  const addRetailer = () => {
    dispatch(setModalOpened('Retailer'))
  }

  const limit = 10;
  function fetchNextRecords(offset: number) {
    console.log(offset);

  }

  const columns: any = [
    {
      name: 'Name',
      class: ''
    },
    {
      name: 'Email',
      class: ''
    },
    {
      name: 'Phone Number',
      class: ''
    },
    {
      name: 'Company Name',
      class: ''
    },
    {
      name: 'Address',
      class: 'th'
    },
    {
      name: 'Status',
      class: 'th'
    },
    {
      name: 'Actions',
      class: 'th'
    },
  ]

  const options = ['Status', 'Active', 'Inactive']

  return (
    <Container>
      <div className='title'>
        <h1>Retailers list</h1>
        <Button title="Add New Retailer" onclick={addRetailer} width="16.5rem" fill='true' backgroundcolor='var(--reset-button)' />

      </div>
      <div className='search-container'>
        <div className='input-fields'>
          <input
            type="text"
            placeholder='Search By Name or Email'
            {...register('nameOrEmail')}
          />
          <input
            type="text"
            placeholder='Search By Phone Number'
            {...register('phoneNumber')}
          />
          <input
            type="text"
            placeholder='Search By Company'
            {...register('companyName')}
          />
          <select {...register('status')} id="status">
            {
              options.map((option, index) => {
                return (
                  <option value={option} key={index}>{option}</option>
                )
              })
            }
          </select>
        </div>
        <div className='button-fields'>
          <Button title="Search" width="16rem" fill='true' onclick={handleSubmit(search)}/>
          <Button title="Reset" width="16rem" fill='true' backgroundcolor='var(--reset-button)' onclick={handleSubmit(search)}/>
        </div>
        {/* <Input /> */}
      </div>
      <div className='data-table'>
        <table>
          <thead>
            <tr>{
              columns.map((column: any, index: number) => {
                return <th className={column.class} key={index}>{column.name}</th>
              })
            }
            </tr>
          </thead>
          <tbody>
            {tableData?.length > 0 ? (
              tableData
                ?.map((item, index) => (
                  <tr key={index}>
                    <td ><img src={'https://picsum.photos/200'} className='img' alt="img" /> {item.recipeName}</td>
                    <td >{item.mail}</td>
                    <td>{item.phone}</td>
                    <td>{item.gender}</td>
                    <td className='th'>{item.location}</td>
                    <td className='th'><label className="toggle-button">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label></td>
                    <td className="actions th">
                      <div className='view-container' onClick={() => navigate(siteRoutes.retailerView)}>
                        <img src={view} alt='img' />
                      </div>
                    </td>
                  </tr>
                ))
            ) : (
              <NoDataFound isShow={!isLoading}/>
            )}
          </tbody>
        </table>

      </div>
      <RetailerPopup />

      <Fragment>
        <Pagination totalRecords={10} perPage={limit} handleFetchNextRecords={fetchNextRecords} />
      </Fragment>
    </Container>
  )
}


export default Retailer;