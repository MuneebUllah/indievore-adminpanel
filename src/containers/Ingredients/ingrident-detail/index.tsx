import Button from "components/particles/primary-button";
import { CardContainer, Container } from "./style";
import NoDataFound from "components/particles/no-data-found";
import edit from 'assets/images/edit.svg'
import deleteIcon from 'assets/images/delete.svg'

import { useEffect, useState } from "react";
import { useIngredientDetail } from "./useHook";
import { useLocation } from "react-router-dom";
import IngredientDetailPopup from "components/popus/ingredients-popup/ingredient-detail";
import { dispatch } from "store";

import { setModalOpened } from "store/user-slice";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { IngredientDetailDTO } from "utils/helpers/models/ingredient-detail.dto";

const IngredientDetail = () => {
  const [data, setData] = useState<any[]>([])
  const [dataById, setDatabyId] = useState<any>()
  const location = useLocation()
  const [id, setId] = useState<any>(0)
  const { state } = location

  const { getIngredientDetailById, deleteIngredientDetail , putIngredientDetail} = useIngredientDetail()
  const { addIngredientDetailModalIsOpen } = useSelector((state: any) => state.user)
  const { isLoading } = useSelector((state:any) => state.user)

  const columns: any = [
    {
      name: 'Sr',
      class: ''
    },
    {
      name: 'Price',
      class: 'th'
    },
    {
      name: 'Quantity',
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

  useEffect(() => {
    getIngredientDetailById(state?.id, setData)
  }, [state, addIngredientDetailModalIsOpen])

  const toggleStatus = (ingredient: IngredientDetailDTO, index: number) => {
    data[0].IngredientsDetails[index] = ingredient
    setData([...data])
    // putIngredient(ingredient?.id, ingredient)
    putIngredientDetail(ingredient?.id , ingredient)

  }

  const openEditDialogue = (data?:IngredientDetailDTO) => {
    setId(data?.ingredientId)
    dispatch(setModalOpened('Ingredient Detail'))
    setDatabyId(data)
  }

  const handleDeleteIngredientDetail = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--reset-button)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteIngredientDetail(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }


  return (
    <Container>
      <div className='categories-title'>
        <h1>Ingredient Detail</h1>
        <Button title="Add Ingredient Detail" width="18.5rem" fill='true' backgroundcolor='var(--reset-button)' onclick={() => openEditDialogue()} />
      </div>
      <CardContainer>
        <img src={data[0]?.image ? data[0]?.image : 'https://picsum.photos/300'} alt="img" className='profile-img' />
        <div className='profile'>
          <h1>{data[0]?.name}</h1>
        </div>
      </CardContainer>
      <div className='data-table'>
        <table>
          <thead>
            <tr>
              {columns.map((column: any, index: number) => {
                return <th className={column.class} key={index}>{column.name}</th>
              })}
            </tr>
          </thead>

          <tbody>
            {data?.length > 0 ? (
              data[0]?.IngredientsDetails
                ?.map((ingredient: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td >
                        {ingredient.id}
                      </td>
                      <td className='th'>{ingredient?.price}</td>
                      <td className='th'>{ingredient?.quantity} {ingredient?.unit}</td>
                      <td><label className="toggle-button"><input type="checkbox" checked={ingredient?.status} onChange={(e) => toggleStatus({ ...ingredient, status: e.target.checked }, index)} /><span className="slider round" ></span></label></td>
                      <td className="actions th">
                        <div className='view-container' onClick={() => openEditDialogue(ingredient)}>
                          <img src={edit} alt='img' />
                        </div>
                        <div className='delete-container' onClick={() => handleDeleteIngredientDetail(ingredient?.id)} >
                          <img src={deleteIcon} alt='img' />
                        </div>
                      </td>
                    </tr>
                  )
                })
            ) : (
              <NoDataFound isShow={isLoading} />
            )}
          </tbody>


        </table>
      </div>
      {addIngredientDetailModalIsOpen ? <IngredientDetailPopup id={id} ingredientId={state?.id} data={data} /> : ''}
    </Container>
  )
}

export default IngredientDetail;