
import { FC , useState } from 'react';
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import Button from 'components/particles/primary-button';
import { Container, Tbody } from './style';

import unlink from 'assets/images/unlink.svg'
import NoDataFound from 'components/particles/no-data-found';
import { dispatch } from 'store';
import { setModalClosed } from 'store/user-slice';
import { useSelector } from 'react-redux';
import useCategories from 'containers/categories/useHook';
import Swal from 'sweetalert2';


interface LinkedIngredientModelProps {
  id:number
  data:any[]
  setData:Function
}

const DietariesLinkedIngredientModal: FC<LinkedIngredientModelProps> = ({id , data , setData}) => {
  const { dietariesLinkedIngredientModalIsOpen } = useSelector((state: any) => state.user)
  const { unLinkedDietaryIngredients } = useCategories()
  const { isLoading } = useSelector((state:any) => state.user)

  function closeModal() {
    dispatch(setModalClosed('Dietaries Linked Ingredient'))
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
      width: '105.6rem',
      height: '76.5rem',
      borderRadius: '2rem'
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

  const handleUnLinkedIngredient = (id:number) => {
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
          unLinkedDietaryIngredients(id , data , setData)
      }
  });
  }

  const handleChange = (field: any, value: any) => {
    setSearchQuery({
      ...searchQuery,
      [field]: value
    });
  };

  const columns: any[] = [
    {
      name:'Sr No.',
      class:'th'
    },
    {
      name:'Image',
      class:'th'
    },
    {
      name:'Ingredient Name',
    class:'th'
  },
    {
      name:'Actions',
      class:'th'
    }
  ]
  
  return (
    <Modal
      isOpen={dietariesLinkedIngredientModalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Container>
        <div className='close-button' onClick={closeModal}>
          <img src={close} alt="img" />
        </div>
        <div className='popup-title'>
          <h1>Linked Ingredients</h1>
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
        <div className='inner-container'>         
        <div className='categories-model-ingredient-container p-custom-scrollbar-8 custom-scrollbar'>
          <div className='data-table'>
            <table>
              <thead>
                <tr>
                  {columns.map((column: any, index: number) => {
                    return <th key={index} className={column.class}>{column?.name}</th>
                  })}

                </tr>
              </thead>
              <Tbody>
                {
                  data?.length > 0 ? (
                    data
                      ?.map((ingredient, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td >
                            <img src={ingredient?.image} alt="img" width={30} style={{ borderRadius: '50%' }} />
                          </td>
                          <td>{ingredient?.name}</td>
                          <td className="actions">
                            <button
                            onClick={() => handleUnLinkedIngredient(ingredient?.associationId)}
                              className="tooltip link-button"
                            >
                              <img src={unlink} alt='img' />
                              <p>Unlink</p>
                            </button>
                          </td>
                        </tr>
                      ))
                  ) : (
                    <NoDataFound isShow={!isLoading} />
                  )}
              </Tbody>
            </table>
          </div>
        </div>       
        </div>
      </Container>
    </Modal>
  )
}
export default DietariesLinkedIngredientModal