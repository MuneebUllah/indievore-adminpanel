import { FC, Fragment, useEffect, useState } from 'react'
import { Container } from './style';
import Pagination from 'components/particles/pagination/pagination';
import Button from 'components/particles/primary-button';
import NoDataFound from 'components/particles/no-data-found';

import { useNavigate } from 'react-router-dom';
import view from 'assets/images/view-icon.svg';
import Swal from 'sweetalert2';
import { useUsers } from './useHook';
import { useSelector } from 'react-redux';

import { siteRoutes } from 'utils/helpers/enums/routes.enums';
import { useForm } from 'react-hook-form';
import { UsersListSearchDTO } from 'utils/helpers/models/users.dto';
import { UserDTO } from 'utils/helpers/models/user.dto';


const UserList: FC = () => {
  const [data, setData] = useState<any[]>([])
  const isLoading = useSelector((state: any) => state.user.isLoading);

  const { register, handleSubmit } = useForm<UsersListSearchDTO>()
  const { getUsers } = useUsers()
  const navigate = useNavigate()
  const search = (data: UsersListSearchDTO) => {
    console.log('Search.....', data);
  }

  const limit = 10;
  function fetchNextRecords(offset: number) {
    console.log(offset);

  }

  useEffect(() => {
    getUsers(setData)
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

  const HandleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  const genderOptions = ['Gander', 'Male', 'Female']
  const satusOptions = ['Status', 'Active', 'Inactive']
  return (
    <Container>
      <h1>User List</h1>
      <div className='search-container' >
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
          <select {...register('gender')} id="gender">
            {
              genderOptions.map((option, index) => {
                return (
                  <option value={option} key={index}>{option}</option>
                )
              })
            }
          </select>
          <select {...register("status")} id="status">
            {
              satusOptions.map((option, index) => {
                return (
                  <option value={option} key={index}>{option}</option>
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
            <tr>{
              columns.map((column: any, index: number) => {
                return <th className={column.class} key={index}>{column.name}</th>
              })
            }
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data
                ?.map((user: UserDTO, index) => (
                  <tr key={index}>
                    <td >
                      <img src={user?.image ? user?.image : "https://picsum.photos/200"} alt="img" className='img' />
                      {user?.name}
                    </td>
                    <td >{user?.email}</td>
                    <td>{user?.mobileNumber}</td>
                    <td className='th'>{user.gender}</td>
                    <td className='th'>{user.location}</td>
                    <td className='th'><label className="toggle-button">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label></td>
                    <td className="th">
                      <div className=' view-container' onClick={() => navigate(siteRoutes.usersView)}>
                        <img src={view} alt='img' />
                      </div>
                      {/* <img src={deleteIcon} alt='img' onClick={HandleDelete}/> */}
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
      <Fragment>
        <Pagination totalRecords={10} perPage={limit} handleFetchNextRecords={fetchNextRecords} />
      </Fragment>
    </Container>
  )
}


export default UserList;