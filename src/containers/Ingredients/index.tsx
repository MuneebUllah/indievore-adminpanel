import { ChangeEvent, FC, Fragment, useEffect, useState } from 'react'
import { Container } from './style';
import Pagination from 'components/particles/pagination/pagination';
import Button from 'components/particles/primary-button';
import AddIngredientModal from 'components/popus/ingredients-popup/add-ingredient';

import view from 'assets/images/view-icon.svg';
import deleteIcon from 'assets/images/delete.svg'
import NoDataFound from 'components/particles/no-data-found';
import Swal from 'sweetalert2';
import { useIngredient } from './useHook';

import { useSelector } from 'react-redux';
import { dispatch } from 'store';
import { setModalOpened } from 'store/user-slice';
import { useNavigate } from 'react-router-dom';
import { siteRoutes } from 'utils/helpers/enums/routes.enums';

import { IngredientDTO, IngredientSearchDTO } from 'utils/helpers/models/ingredients.dto';
import { useForm } from 'react-hook-form';

const Ingredients: FC = () => {
  const isLoading = useSelector((state: any) => state.user.isLoading);
  const [data, setData] = useState<any[]>([])
  const [dataById, setDataById] = useState<any>()
  const navigate = useNavigate()
  const [id, setId] = useState<number>(0)
  const [searchQuery, setSearchQuery] = useState({
    name: '',
    email: '',
    gender: ''
  })
  const { addIngredientModalIsOpen } = useSelector((state: any) => state.user)
  const { getIngredients, getIngredientById, deleteIngredient, putIngredient , searchIngredients} = useIngredient()
  const [status , setStatus] = useState<string>('')

  const search = (data:IngredientSearchDTO) => {
    console.log('Search.....', data);
    searchIngredients(data)
  }

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value
    setStatus(newStatus)
    setValue('status', newStatus)
  }

  const limit = 10;
  function fetchNextRecords(offset: number) {
    console.log(offset);

  }

  const addIngredient = (id: number) => {
    dispatch(setModalOpened('Ingredient'))
    setId(id)
    if (id !== 0) {
      getIngredientById(id, setDataById)
    }
  }

  const handleViewPage = (id: number) => {
    navigate(siteRoutes.ingredientDetail, { state: { id } })
  }

  const handleChange = (field: any, value: any) => {
    setSearchQuery({
      ...searchQuery,
      [field]: value
    });
  };

  const columns: any = [
    'Image',
    'Name',
    'Status',
    'Actions'
  ]


  const { register, handleSubmit, getValues, setValue } = useForm<IngredientSearchDTO>()

  const handleDelete = (id: number) => {
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
        deleteIngredient(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  useEffect(() => {
    getIngredients(setData)
  }, [addIngredientModalIsOpen])

  const toggleStatus = (ingredient: IngredientDTO, index: number) => {
    data[index] = ingredient
    setData([...data])
    putIngredient(ingredient?.id, ingredient)

  }

  return (
    <Container>
      <div className='categories-title'>
        <h1>Ingredients</h1>
        <Button title="Add Ingredients" width="16.5rem" fill='true' backgroundcolor='var(--reset-button)' onclick={() => addIngredient(0)} />

      </div>

      <div className='search-container' >
        <div className='input-fields'>
          <input
            type="text"
            placeholder='Search By Name'
            {...register('name')}
            onChange={(value) => handleChange('name', value)}
          />
          <select 
          id="status"
          {...register('status')}
          value={getValues('status')}
          onChange={handleStatusChange}
          >
            <option value=''>Status</option>
            <option value='true'>Active</option>
            <option value='false'>Inactive</option>
          </select>
        </div>
        <Button title="Search" width="16rem" fill='true' onclick={handleSubmit(search)} />
        <Button title="Reset" width="16rem" fill='true' backgroundcolor='var(--reset-button)' onclick={handleSubmit(search)} />
      </div>
      <div className='data-table'>
        <table>
          <thead>
            <tr>
              {columns.map((column: any, index: number) => {
                return <th key={index}>{column}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data
                ?.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td ><img src={item?.image ? item?.image : 'https://picsum.photos/300'} alt="img" width={60} height={60} style={{ borderRadius: '50%' }} /></td>
                      <td>{item.name}</td>
                      <td><label className="toggle-button"><input type="checkbox" checked={item?.status} onChange={(e) => toggleStatus({ ...item, status: e.target.checked }, index)} /><span className="slider round" ></span></label></td>
                      <td className="actions">
                        <div className='view-container' onClick={() => handleViewPage(item?.id)}>
                          <img src={view} alt='img' />
                        </div>
                        <div className='delete-container' onClick={() => handleDelete(item?.id)}>
                          <img src={deleteIcon} alt='img' />
                        </div>
                      </td>
                    </tr>
                  )
                })
            ) : (
              <NoDataFound isShow={!isLoading} />
            )}
          </tbody>
        </table>
      </div>
      <Fragment>
        <Pagination totalRecords={10} perPage={limit} handleFetchNextRecords={fetchNextRecords} />
      </Fragment>

     {addIngredientModalIsOpen ? <AddIngredientModal id={id} data={dataById} /> : ''}
    </Container>
  )
}


export default Ingredients;