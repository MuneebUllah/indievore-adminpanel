
import { FC, useEffect, useState } from 'react';
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import Button from 'components/particles/primary-button';
import { Container } from './style';

import { dispatch } from 'store';
import { setModalClosed } from 'store/user-slice';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { DietaryLinkedIngredientDTO } from 'utils/helpers/models/category-linked-ingredient.dto';
import useCategories from 'containers/categories/useHook';

interface CategoriesModelProps {
  id: number
  data: any[]
}

const DietariesSelectIngredientModel: FC<CategoriesModelProps> = ({ id, data }) => {
  const { dietariesSelectIngredientModalIsOpen } = useSelector((state: any) => state.user)
  const [selectedIngredients, setSelectedIngredients] = useState<number[]>([]);
  const { getIngredientsForSelection } = useCategories()
  const { postCategoryLinkedIngredient, postDietaryLinkedIngredient } = useCategories()
  const { setValue, getValues, handleSubmit } = useForm<DietaryLinkedIngredientDTO>(
    {
      defaultValues: {
        ingredientIds: [],
      }
    }
  )


  function closeModal() {
    dispatch(setModalClosed('Dietaries Select Ingredient'))
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '2rem',
      width: '68.5rem',
    },
  };
  const [searchQuery, setSearchQuery] = useState({
    name: '',
    email: '',
    gender: ''
  })
  const search = () => {
    console.log('Search.....', searchQuery);

  }


  const handleChange = (field: any, value: any) => {
    setSearchQuery({
      ...searchQuery,
      [field]: value
    });
  };


  const onSubmit = (data: DietaryLinkedIngredientDTO) => {
    postDietaryLinkedIngredient(id ,data)
  }

  useEffect(() => {
    // Update form ingredientIds when selectedIngredients change
    setValue('ingredientIds', selectedIngredients);
  }, [selectedIngredients]);

  const handleCheckboxChange = (ingredientId: number) => {
    setSelectedIngredients((prevSelected) =>
      prevSelected.includes(ingredientId)
        ? prevSelected.filter((id) => id !== ingredientId) // Remove ID if already selected
        : [...prevSelected, ingredientId] // Add ID if not selected
    );
  };

  return (
    <Modal
      isOpen={dietariesSelectIngredientModalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Container onSubmit={handleSubmit(onSubmit)}>
        <div className='close-button' onClick={closeModal}>
          <img src={close} alt="img" />
        </div>
        <div className='popup-title'>
          <h1>Select Ingredients</h1>
        </div>
        <div className='search-container' >
          <div className='input-fields'>
            <input
              type='text'
              placeholder='Search By Name'
              onChange={(e) => { setSearchQuery({ ...searchQuery, name: e.target.value }) }}
            />
          </div>
          <Button title="Search" width="16rem" fill='true' onclick={search} />
        </div>
        <div className='categories-model-ingredient-container p-custom-scrollbar-8 custom-scrollbar'>
          <div className='categories-container'>
            {
              data.map((item, index) => {
                return (

                  <div className='ingredient-data' key={index}>
                    <input
                      type="checkbox"
                      checked={selectedIngredients.includes(item.id)} // Check if the ingredient is selected
                      onChange={() => handleCheckboxChange(item.id)} // Handle selection/deselection
                    />
                    <img src={item.image} alt="img" />
                    <h5>{item.name}</h5>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='add-button' >
          <Button title="Add" width='51.8rem' backgroundcolor='var(--primary)' fill='true' />
        </div>
      </Container>
    </Modal>
  )
}
export default DietariesSelectIngredientModel