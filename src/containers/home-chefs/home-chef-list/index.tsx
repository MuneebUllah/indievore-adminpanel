import { FC, Fragment, useEffect, useState } from 'react'
import { Container } from './style';
import Pagination from 'components/particles/pagination/pagination';
import NoDataFound from 'components/particles/no-data-found';
import view from 'assets/images/view-icon.svg';

import { useNavigate } from 'react-router-dom';
import { siteRoutes } from 'utils/helpers/enums/routes.enums';
import Button from 'components/particles/primary-button';
import { useHomeChef } from './useHook';
import { useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import { HomeChefListSearchDTO } from 'utils/helpers/models/homeChef.dto';


const HomeChef: FC = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<any[]>([])
  const { register, handleSubmit } = useForm<HomeChefListSearchDTO>()
  const isLoading = useSelector((state: any) => state.user.isLoading);

  const search = (data: HomeChefListSearchDTO) => {
    console.log('Search.....', data);
  }

  const limit = 10;
  function fetchNextRecords(offset: number) {
    console.log(offset);

  }

  const { getHomeChef } = useHomeChef()

  useEffect(() => {
    getHomeChef(setData, limit)
  }, [])

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
      name: 'Gender',
      class: 'th'
    },
    {
      name: 'Location',
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

  const genderOptions = ['Gender', 'Male', 'Female']
  const statusOptions = ['Status', 'Active', 'Inactive']

  return (
    <Container>

      <h1>Home cook List</h1>
      <div className='search-container' >
        <div className='input-fields'>
          <input
            type="text"
            placeholder='Search By Name or Email'
            {...register('nameOremail')}
          />
          <input
            type="text"
            placeholder='Search by Phone Number'
            {...register('phoneNumer')}
          />
          <select id='gender' {...register('gender')}>
            {
              genderOptions.map((item, index) => {
                return (
                  <option value={item} key={index}>{item}</option>
                )
              })
            }
          </select>
          <select id='status' {...register('status')}>
            {
              statusOptions.map((item, index) => {
                return (
                  <option value={item} key={index}>{item}</option>
                )
              })
            }
          </select>
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
              {
                columns.map((column: any, index: number) => {
                  return <th className={column.class} key={index}>{column.name}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              data?.length > 0 ? (
                data
                  ?.map((chef, index) => (
                    <tr key={index}>
                      <td ><img src={chef?.image ? chef?.image : 'https://picsum.photos/200'} alt='img' height={40} width={40} style={{ borderRadius: '50%' }} /> {chef.name}</td>
                      <td >{chef?.email}</td>
                      <td>{chef?.mobileNumber}</td>
                      <td className='th'>{chef?.gender}</td>
                      <td className='th'>{chef?.location ? chef?.location : 'Pakistan'}</td>
                      <td className='th'><label className="toggle-button">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label></td>
                      <td className="actions th">
                        <div className='view-container' onClick={() => navigate(siteRoutes.homeChefView)}>
                          <img src={view} alt='img' />
                        </div>
                        {/* <img src={deleteIcon} alt='img' onClick={handleDelete}/> */}
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
        <Pagination totalRecords={100} perPage={limit} handleFetchNextRecords={fetchNextRecords} />
      </Fragment>

    </Container>
  )
}


export default HomeChef;