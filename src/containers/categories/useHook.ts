import { Apis } from 'libs/apis'
import { dispatch } from 'store'
import { setModalClosed, stopLoading } from 'store/user-slice'
import Swal from 'sweetalert2'
import { categoriesSearchDTO, CategoryDTO } from 'utils/helpers/models/categories.dto'
import { CategoryLinkedIngredientDTO, DietaryLinkedIngredientDTO } from 'utils/helpers/models/category-linked-ingredient.dto'
import { DietariesDTO, dietarySearchDTO } from 'utils/helpers/models/dietaries.dto'

export default function useCategories() {

    const postCategories = async (body: any) => {

        await Apis.postCategory(body)
            .then((res) => {
                if (res.data.status) {
                    dispatch(setModalClosed('Categories'))
                }
            })
            .catch((error) => { console.log(error) })
    }

    const getCategories = async (setCategoriesData: any) => {
        await Apis.getCategories()
            .then((res) => {
                console.log(res)
                setCategoriesData(res.data.data)
            })
            .catch((error) => { console.log(error) })
            .finally(() => dispatch(stopLoading()))
    }

    const getCategoryById = async (id: number, setData: any) => {
        console.log(id);
        await Apis.getCategoryById(id)
            .then((res) => {
                console.log(res)
                setData(res.data?.category)
            })
            .catch((error) => { console.log(error) })
    }

    const putCategoryById = async (id: number, setCategoriesData: Function, categoriesData: any[], data: CategoryDTO, body?: any) => {
        await Apis.putCategoryById(id, body)
            .then((res) => {
                if (res.data.status) {
                    console.log(data);
                    dispatch(setModalClosed('Categories'))
                    const index = categoriesData.findIndex(c => c?.category?.id === id)
                    console.log(index);
                    categoriesData[index].category = data
                    setCategoriesData([...categoriesData])
                }
            })
            .catch((err) => console.log(err))
    }

    const postDietaries = async (body: any) => {
        await Apis.postDietaries(body)
            .then((res) => {
                if (res.data.status) {
                    dispatch(setModalClosed('Dietaries'))
                }
            })
            .catch((err) => console.log(err))
    }

    const getDietaries = async (setData: any) => {
        await Apis.getDietaries()
            .then((res) => {
                setData(res.data.data)
            })
            .catch((error) => console.log(error))
    }

    const getDietariesById = async (id: number, setData: any) => {
        await Apis.getDietariesById(id)
            .then((res) => {
                setData(res?.data?.response?.diatery)

            })
            .catch((err) => console.log(err))
    }

    const putDietaries = async (id: number, body: any, dietariesData: any[], setDietariesData: Function, data: DietariesDTO) => {
        await Apis.putDietaries(id, body)
            .then((res) => {
                if (res?.data?.status) {
                    dispatch(setModalClosed('Dietaries'))
                    const index = dietariesData.findIndex(d => d.id === id)
                    dietariesData[index] = data
                    setDietariesData([...dietariesData])
                }
            })
            .catch((err) => console.log(err))
    }

    const postCategoryLinkedIngredient = async (body: CategoryLinkedIngredientDTO) => {
        await Apis.postCategoryLinkedIngredient(body)
            .then((res) => {
                if (res.data.status) {
                    dispatch(setModalClosed('Select Ingredient'))
                }
            })
            .catch((err) => console.log(err))
    }


    const getCategoryLinkedIngredientById = async (id: number, setData: any) => {
        await Apis.getCategoryLinkedIngredientById(id)
            .then((res) => {
                setData(res?.data?.data?.category?.ingredients)
            })
            .catch((err) => console.log(err))
    }

    const getUnLinkedCategoriesIngredients = async (setData: any) => {
        await Apis.getUnLinkedCategoriesIngredients()
            .then((res) => {
                setData(res?.data?.data)
            })
            .catch((err) => console.log(err))
    }

    const getIngredientsForSelection = (setData: any) => {
        Apis.getIngredients()
            .then((res) => {
                setData(res.data.ingredients)
            }

            )
            .catch((err) => console.log(err))
    }

    const searchCategoriesIngredients = (data: categoriesSearchDTO, setData: Function) => {
        Apis.searchCategoriesIngredients(data)
            .then((res) => {
                setData(res?.data?.data)
            })
            .catch((err) => console.log(err))
    }

    const postDietaryLinkedIngredient = async (id: number, body: DietaryLinkedIngredientDTO) => {
        await Apis.postDietaryLinkedIngredients(id, body)
            .then((res) => {
                if (res.data.status) {
                    dispatch(setModalClosed('Dietaries Select Ingredient'))
                }
            })
            .catch((err) => console.log(err))
    }

    const getDietariesLinkedIngredientById = (id: number, setData: any) => {
        Apis.getDietariesLinkedIngredientById(id)
            .then((res) => {
                setData(res.data.data?.dietary?.ingredients)
            })
            .catch((err) => console.log(err))
    }

    const unLinkedCategoryIngredients = (id: number, data: any[], setData: Function) => {
        Apis.unLinkedCategoryIngredients(id)
            .then((res) => {
                if (res.data.status) {
                    const index = data.findIndex(c => c.id === id)
                    if (index !== -1) {
                        const updatedData = [...data];
                        updatedData.splice(index, 1);
                        setData(updatedData);
                    }
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                }
            })
            .catch((err) => console.log(err))
    }
    const unLinkedDietaryIngredients = (id: number , data:any[] , setData:Function) => {
        Apis.unLinkedDietaryIngredients(id)
            .then((res) => {
                if (res.data.status) {
                    const index = data.findIndex(c => c.associationId === id)
                    if (index !== -1) {
                        const updatedData = [...data];
                        updatedData.splice(index, 1);
                        setData(updatedData);
                    }
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                }
            })
            .catch((err) => console.log(err))
    }

    const getunLinkedDietariesIngredients = (id: number, setData: any) => {
        Apis.getunLinkedDietaries(id)
            .then((res) => {
                setData(res?.data?.data)
            })
            .catch((err) => console.log(err))
    }

    const searchDietaries = (data: dietarySearchDTO, setData: Function) => {
        Apis.searchDietaries(data)
            .then((res) => {
                if(res.data.status){
                    setData(res.data.data)
                }
            })
            .catch((err) => console.log(err))
    }



    return {
        getCategories,
        getCategoryById,
        putCategoryById,
        postDietaries,
        getDietaries,
        getDietariesById,
        putDietaries,
        getUnLinkedCategoriesIngredients,
        unLinkedCategoryIngredients,
        unLinkedDietaryIngredients,
        postCategories,
        getCategoryLinkedIngredientById,
        postCategoryLinkedIngredient,
        postDietaryLinkedIngredient,
        getIngredientsForSelection,
        getDietariesLinkedIngredientById,
        getunLinkedDietariesIngredients,
        searchCategoriesIngredients,
        searchDietaries
    }
}
