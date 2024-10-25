import { ChangeEvent, FC, Fragment, useEffect, useState } from 'react'
import { Container, TabeContainer, TabeCart, Tbody } from './style';
import Pagination from 'components/particles/pagination/pagination';
import categoriesDarkIcon from 'assets/images/categories-tab-dark-icon.svg'
import categoriesIcon from 'assets/images/categories-tab-icon.svg'

import dietaryIcon from 'assets/images/dietary-white-icon.svg'
import dietaryDarkIcon from 'assets/images/diteryIcon.svg'
import { useSelector } from 'react-redux';
import { setCategoriesActiveButton, setModalOpened } from 'store/user-slice';
import AddCategoryModal from 'components/popus/categories-popup/add-category';

import SelectIngredientModel from 'components/popus/categories-popup/select-ingredients';
import link from 'assets/images/link.svg'
import NoDataFound from 'components/particles/no-data-found'
import edit from 'assets/images/edit.svg'
import Button from 'components/particles/primary-button';

import useCategories from './useHook';
import { useForm } from 'react-hook-form';
import { categoriesSearchDTO, CategoryDTO } from 'utils/helpers/models/categories.dto';
import view from 'assets/images/view-icon.svg';
import LinkedIngredientModal from 'components/popus/categories-popup/linked-ingredient';

import { dispatch } from 'store';
import AddDietariesModal from 'components/popus/dietaries-popup/add-dietaries';
import DietariesSelectIngredientModel from 'components/popus/dietaries-popup/select-ingredients';
import DietariesLinkedIngredientModal from 'components/popus/dietaries-popup/linked-ingredient';
import { DietariesDTO, dietarySearchDTO } from 'utils/helpers/models/dietaries.dto';

const Categories: FC = () => {
  const [categoryId, setCategoryId] = useState<number>(0)
  const [categoriesData, setCategoriesData] = useState<any[]>([])
  const [categoriesDataById, setCategoriesDataById] = useState<any>()
  const [linkedIngredientData, setLinkedIngredientData] = useState<any[]>([])
  const [selectIngredientData, setSelectedIngredientData] = useState<any[]>([])
  const [status, setStatus] = useState<string>()

  const [dietaryId, setDietaryId] = useState<number>(0)
  const [dietariesData, setDietariesData] = useState<any[]>([])
  const [dietariesDataById, setDietariesDataById] = useState<any>()
  const [dietariesSelectIngredientData, setDietariesSelectedIngredientData] = useState<any[]>([])
  const [dietaryLinkedData, setDietaryLinkedData] = useState<any[]>([])
  const [dietariesStatus, setDietariesStatus] = useState<string>()

  const {
    categoriesActiveButton,
    addCategoriesModalIsOpen,
    addDietariesModalIsOpen,
    selectIngredientModalIsOpen,
    linkedIngredientModalIsOpen,
    dietariesSelectIngredientModalIsOpen,
    dietariesLinkedIngredientModalIsOpen,
    isLoading
  } = useSelector((state: any) => state.user);

  const {
    getCategories,
    getDietaries,
    getUnLinkedCategoriesIngredients,
    getDietariesLinkedIngredientById,
    putCategoryById,
    putDietaries,
    getunLinkedDietariesIngredients,
    searchCategoriesIngredients,
    searchDietaries
  } = useCategories()

  const { register, handleSubmit, setValue, getValues } = useForm<any>()

  useEffect(() => {
    getCategories(setCategoriesData)
  }, [
    addCategoriesModalIsOpen,
    selectIngredientModalIsOpen,
    linkedIngredientModalIsOpen
  ])

  useEffect(() => {
    getDietaries(setDietariesData)
  }, [addDietariesModalIsOpen,
    dietariesSelectIngredientModalIsOpen,
    dietariesLinkedIngredientModalIsOpen
  ])

  const searchCategories = (type: string, data: categoriesSearchDTO) => {
    if (type === 'search') {
      searchCategoriesIngredients(data, setCategoriesData)
    }
    else {
      getCategories(setCategoriesData)
    }
  }

  const dietariesSearch = (type: string, data: dietarySearchDTO) => {
    if (type === 'search') {
      searchDietaries(data, setDietariesData)
    }
    else {
      getDietaries(setDietariesData)
    }
  }

  const addCategories = (category?: CategoryDTO) => {
    if (category) {
      setCategoriesDataById(category)
    } else {
      setCategoriesDataById(null);
    }
    dispatch(setModalOpened('Categories'))
  }

  const openIngredientPopupForLink = (id: number) => {
    setCategoryId(id)
    dispatch(setModalOpened('Select Ingredient'))
    getUnLinkedCategoriesIngredients(setSelectedIngredientData)
  }

  const openIngredientPopupForUnLinked = (category: any) => {
    setCategoryId(category?.id)
    dispatch(setModalOpened('Linked Ingredient'))
    if (category?.id) {
      setLinkedIngredientData(category?.ingredients)

    }
  }

  const addDietaries = (id: number, data?: DietariesDTO) => {
    setDietaryId(id)
    dispatch(setModalOpened('Dietaries'))
    if (data) {
      setDietariesDataById(data)
    }
  }

  const openDietariesIngredientPopupForLink = (id: number) => {
    setDietaryId(id)
    dispatch(setModalOpened('Dietaries Select Ingredient'))
    getunLinkedDietariesIngredients(id, setDietariesSelectedIngredientData)
  }

  const openDietariesIngredientPopupForUnLink = (id: number) => {
    setDietaryId(id)
    dispatch(setModalOpened('Dietaries Linked Ingredient'))
    getDietariesLinkedIngredientById(id, setDietaryLinkedData)
  }

  const limit = 10;
  function fetchNextRecords(offset: number) {
    console.log(offset);
  }

  const toggleCategoryStatus = (data: CategoryDTO, index: number, category: any) => {
    const newStatus = categoriesData[index]?.category?.status === 'true' ? 'false' : 'true';

    Object.keys(data).forEach((key) => {
      const typedKey = key as keyof CategoryDTO;
      const categoryValue = category?.category[typedKey];

      if (typedKey === 'status') {
        setValue(typedKey, newStatus);
      } else if (categoryValue !== undefined) {
        setValue(typedKey, categoryValue);
      }
    });

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const typedKey = key as keyof CategoryDTO;
      if (typedKey === 'status') {
        formData.append(typedKey, newStatus);
      } else {
        formData.append(typedKey, getValues(typedKey) as any); // Get values from form state
      }
    });

    putCategoryById(data.id, setCategoriesData, categoriesData, data, formData);
  };

  const toggleDietaryStatus = (dietary: DietariesDTO, index: number, data: any) => {
    const newStatus = dietariesData[index]?.status === 'true' ? 'false' : 'true';

    Object.keys(dietary).forEach((key) => {
      const typedKey = key as keyof DietariesDTO
      const dietaryValue = data[typedKey]
      if (typedKey === 'status') {
        setValue(typedKey, newStatus)
      }
      else if (dietaryValue) {
        setValue(typedKey, dietaryValue)
      }
    })

    const formData = new FormData()
    Object.keys(dietary).forEach((key) => {
      const typedKey = key as keyof DietariesDTO
      if (typedKey === 'status') {
        formData.append(typedKey, newStatus)
      }
      else {
        formData.append(typedKey, getValues(typedKey) as any)
      }
    })
    putDietaries(dietary.id, formData, dietariesData, setDietariesData, dietary)
  };

  const columns: string[] = [
    'Image',
    'Name',
    'No. of ingredients',
    'Status',
    'Actions'
  ]

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value
    setStatus(newStatus)
    setValue('status', newStatus)
  }
  const handleDietariesStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value
    setDietariesStatus(newStatus)
    setValue('dietariesStatus', newStatus)
  }

  return (
    <>

      <Container>
        <div className='categories-title'>
          <h1>Categories Type</h1>
          <Button title={categoriesActiveButton === 'Categories' ? "Add Categories" : 'Add Dietaries'} width="16rem" fill='true' backgroundcolor='var(--reset-button)' onclick={categoriesActiveButton === 'Categories' ? () => addCategories() : () => addDietaries(0)} />

        </div>

        <TabeContainer >
          <TabeCart active={categoriesActiveButton === 'Categories'} onClick={() => { dispatch(setCategoriesActiveButton('Categories')) }}>
            <div className='categories-tab-img'>
              <img src={categoriesActiveButton === 'Categories' ? categoriesIcon : categoriesDarkIcon} alt="img" />
            </div>
            <h1>
              Categories
            </h1>
          </TabeCart>
          <TabeCart active={categoriesActiveButton === 'Dietary'} onClick={() => { dispatch(setCategoriesActiveButton('Dietary')) }}>
            <div className='categories-tab-img'>
              <img src={categoriesActiveButton === 'Dietary' ? dietaryIcon : dietaryDarkIcon} alt="img" />
            </div>
            <h1>
              Dietary
            </h1>
          </TabeCart>
        </TabeContainer>
        <div className='search-container' >
          <div className='input-fields'>
            {
              categoriesActiveButton === 'Categories' ?
                <>
                  <input
                    type="text"
                    placeholder='Search By Name'
                    {...register('categoryName')}
                  />
                  <select
                    id="status"
                    {...register('status')}
                    value={status}
                    onChange={handleStatusChange}
                  >
                    <option value="">Status</option>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </>
                :
                <>
                  <input
                    type="text"
                    placeholder='Search By Name'
                    {...register('diateryName')}
                  />
                  <select
                    id="status"
                    {...register('dietariesStatus')}
                    value={dietariesStatus}
                    onChange={handleDietariesStatusChange}
                  >
                    <option value="">Status</option>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </>

            }
          </div>
          <div className='button-fields'>
            <Button title="Search" width="16rem" fill='true' onclick={categoriesActiveButton === 'Categories' ? handleSubmit((data) => searchCategories('search', data)) : handleSubmit((data) => dietariesSearch('search', data))} />
            <Button title="Reset" width="16rem" fill='true' backgroundcolor='var(--reset-button)' onclick={categoriesActiveButton === 'Categories' ? handleSubmit((data) => searchCategories('reset', data)) : handleSubmit((data) => dietariesSearch('reset', data))} />
          </div>
        </div>
        <div className='data-table'>
          <table>
            <thead>
              <tr>
                {columns.map((column: string, index: number) => {
                  return <th scope='col' key={index}>{column}</th>
                })}

              </tr>
            </thead>
            <Tbody>
              {categoriesActiveButton === 'Categories' ? (
                categoriesData?.length > 0 ? (
                  categoriesData
                    ?.map((category, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img src={category?.category?.image ? category?.category?.image : 'https://picsum.photos/300'} alt="img" width={60} height={60} style={{ borderRadius: '50%' }} />
                          </td>
                          <td>{category?.category?.name}</td>
                          <td>{category?.category?.ingredientsCount}</td>
                          <td><label className="toggle-button">
                            <input type='checkbox' checked={category?.category?.status} onChange={(e) => toggleCategoryStatus({ ...category?.category, status: e.target.checked }, index, category)} />
                            <span className="slider round"></span>
                          </label></td>
                          <td className="actions">
                            <div className='view-container' onClick={() => openIngredientPopupForUnLinked(category?.category)}>
                              <img src={view} alt='img' />
                            </div>
                            <button onClick={() => openIngredientPopupForLink(category?.category?.id)}
                              className="tooltip link-button"
                            >
                              <img src={link} alt='img' />
                              <span className='tooltiptext'>Link Ingredient</span>
                            </button>
                            <div className='edit-container'>
                              <img src={edit} alt='img' onClick={() => addCategories(category?.category)} />
                            </div>
                          </td>
                        </tr>
                      )
                    })
                ) : (
                  <NoDataFound isShow={!isLoading} />
                )) :
                (
                  dietariesData?.length > 0 ? (
                    dietariesData
                      ?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td >
                              <div className="flex gap-4 items-center">
                                <img src={item?.image ? item?.image : 'https://picsum.photos/300'} alt="img" width={60} height={60} style={{ borderRadius: '50%' }} />
                              </div>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.ingredientsCount}</td>
                            <td><label className="toggle-button">
                              <input type="checkbox" checked={item?.status} onChange={(e) => toggleDietaryStatus({ ...item, status: e.target.checked }, index, item)} />
                              <span className="slider round"></span>
                            </label></td>
                            <td className="actions">
                              <div className='view-container' onClick={() => openDietariesIngredientPopupForUnLink(item?.id)}>
                                <img src={view} alt='img' />
                              </div>
                              <button
                                onClick={() => openDietariesIngredientPopupForLink(item?.id)}
                                className="tooltip link-button"
                              >
                                <img src={link} alt='img' />
                                <span className='tooltiptext'>Link Ingredient</span>
                              </button>
                              <div className='edit-container' onClick={() => addDietaries(item.id, item)}>
                                <img src={edit} alt='img' />
                              </div>
                            </td>
                          </tr>
                        )
                      })
                  ) : (
                    <NoDataFound isShow={!isLoading} />
                  ))}
            </Tbody>
          </table>
        </div>
        <Fragment>
          <Pagination totalRecords={10} perPage={limit} handleFetchNextRecords={fetchNextRecords} />
        </Fragment>

        {addCategoriesModalIsOpen ? <AddCategoryModal data={categoriesDataById} categoriesData={categoriesData} setCategoriesData={setCategoriesData} /> : ''}
        {selectIngredientModalIsOpen ? <SelectIngredientModel id={categoryId} data={selectIngredientData} /> : ''}
        {linkedIngredientModalIsOpen ? <LinkedIngredientModal id={categoryId} data={linkedIngredientData} setData={setCategoriesData} /> : ''}
        {addDietariesModalIsOpen ? <AddDietariesModal id={dietaryId} data={dietariesDataById} dietariesData={dietariesData} setDietariesData={setDietariesData} /> : ''}
        {dietariesSelectIngredientModalIsOpen ? <DietariesSelectIngredientModel id={dietaryId} data={dietariesSelectIngredientData} /> : ''}
        {dietariesLinkedIngredientModalIsOpen ? <DietariesLinkedIngredientModal id={dietaryId} data={dietaryLinkedData} setData={setDietaryLinkedData} /> : ''}
      </Container>

    </>
  )
}


export default Categories;