import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../index";
import { ProfileDTO } from "utils/helpers/models/profile.dto";

interface UserState {
  isLoading: boolean;
  isSidebarExpanded: boolean;
  name: string;
  email: string;
  categoriesActiveButton: string;
  addCategoriesModalIsOpen:boolean
  addDietariesModalIsOpen:boolean
  selectIngredientModalIsOpen:boolean
  dietariesSelectIngredientModalIsOpen:boolean
  addIngredientModalIsOpen:boolean
  addIngredientDetailModalIsOpen:boolean
  linkedIngredientModalIsOpen:boolean
  dietariesLinkedIngredientModalIsOpen:boolean
  userActiveButton:string
  manageStateActiveButton:string
  chefActiveButton:string
  chefStatusActiveButton:string
  userStatusActiveButton:string
  addRetailerModalIsOpen:boolean
  retailerStatusActiveButton:string
  addBannerModalIsOpen:boolean
  dishStatusActiveButton:string
  CMSActiveButton:String
  privacyPolicyModalIsOpen:boolean
  dietaryChoiceModalIsOpen:boolean
  FaqModalIsOpen:boolean
  onBoardingModalIsOpen:boolean
  sessionAmountModalIsOpen:boolean
  termAndConditionModalIsOpen:boolean
  profileModalIsOpen:boolean
}

const initialState: UserState = {
  isLoading: false,
  isSidebarExpanded: true,
  name: localStorage.getItem('name') || '',
  email: 'admin@gmail.com',
  categoriesActiveButton: 'Categories',
  addCategoriesModalIsOpen:false,
  addDietariesModalIsOpen:false,
  addIngredientModalIsOpen:false,
  addIngredientDetailModalIsOpen:false,
  selectIngredientModalIsOpen:false,
  linkedIngredientModalIsOpen:false,
  dietariesSelectIngredientModalIsOpen:false,
  dietariesLinkedIngredientModalIsOpen:false,
  userActiveButton:'Order Details',
  chefActiveButton:'Session',
  chefStatusActiveButton:'All',
  userStatusActiveButton:'All',
  dishStatusActiveButton:'Overview',
  addRetailerModalIsOpen:false,
  retailerStatusActiveButton:'All',
  addBannerModalIsOpen:false,
  manageStateActiveButton:'Order Details',
  CMSActiveButton:'Set Standard Session Amount',
  sessionAmountModalIsOpen:false,
  privacyPolicyModalIsOpen:false,
  dietaryChoiceModalIsOpen:false,
  FaqModalIsOpen:false,
  onBoardingModalIsOpen:false,
  termAndConditionModalIsOpen:false,
  profileModalIsOpen:false

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    expandSidebar(state) {
      state.isSidebarExpanded = true;
      
    },
    unexpandSidebar(state) {
      state.isSidebarExpanded = false;    
    },
    expandModal(state , payload:any) {
      if(payload.payload === 'Privacy Policy'){
        state.privacyPolicyModalIsOpen = true
      }
      if(payload.payload === 'Dietary Choice'){
        state.dietaryChoiceModalIsOpen = true
      }
      if(payload.payload === 'Select Ingredient'){
        state.selectIngredientModalIsOpen = true
      }
      if(payload.payload === 'Dietaries Select Ingredient'){
        state.dietariesSelectIngredientModalIsOpen = true
      }
      if(payload.payload === 'Faq'){
        state.FaqModalIsOpen = true
      }
      if(payload.payload === 'Profile'){
        state.profileModalIsOpen = true
      }
      if(payload.payload === 'Linked Ingredient'){
        state.linkedIngredientModalIsOpen = true
      }
      if(payload.payload === 'Dietaries Linked Ingredient'){
        state.dietariesLinkedIngredientModalIsOpen = true
      }
      if(payload.payload === 'OnBoarding Screen'){
        state.onBoardingModalIsOpen = true
      }
      if(payload.payload === 'Session Amount'){
        state.sessionAmountModalIsOpen = true
      }
      if(payload.payload === 'Term And Condition'){
        state.termAndConditionModalIsOpen = true
      }
      if(payload.payload === 'Categories'){
        state.addCategoriesModalIsOpen = true
      }
      if(payload.payload === 'Dietaries'){
        state.addDietariesModalIsOpen = true
      }
      if(payload.payload === 'Ingredient'){
        state.addIngredientModalIsOpen = true
      }
      if(payload.payload === 'Ingredient Detail'){
        state.addIngredientDetailModalIsOpen = true
      }
      if(payload.payload === 'Retailer'){
        state.addRetailerModalIsOpen = true
      }
      if(payload.payload === 'Banner'){
        state.addBannerModalIsOpen = true
      }
      
    },
    unexpandModal(state , payload:any) {
      if(payload.payload === 'Privacy Policy'){
        state.privacyPolicyModalIsOpen = false
      }
      if(payload.payload === 'Dietary Choice'){
        state.dietaryChoiceModalIsOpen = false
      }
      if(payload.payload === 'Select Ingredient'){
        state.selectIngredientModalIsOpen = false
      }
      if(payload.payload === 'Dietaries Select Ingredient'){
        state.dietariesSelectIngredientModalIsOpen = false
      }
      if(payload.payload === 'Faq'){
        state.FaqModalIsOpen = false
      }
      if(payload.payload === 'Profile'){
        state.profileModalIsOpen = false
      }
      if(payload.payload === 'Linked Ingredient'){
        state.linkedIngredientModalIsOpen = false
      }
      if(payload.payload === 'Dietaries Linked Ingredient'){
        state.dietariesLinkedIngredientModalIsOpen = false
      }
      if(payload.payload === 'OnBoarding Screen'){
        state.onBoardingModalIsOpen = false
      }
      if(payload.payload === 'Session Amount'){
        state.sessionAmountModalIsOpen = false
      }
      if(payload.payload === 'Term And Condition'){
        state.termAndConditionModalIsOpen = false
      }
      if(payload.payload === 'Categories'){
        state.addCategoriesModalIsOpen = false
      }
      if(payload.payload === 'Dietaries'){
        state.addDietariesModalIsOpen = false
      }
      if(payload.payload === 'Ingredient'){
        state.addIngredientModalIsOpen = false
      }
      if(payload.payload === 'Ingredient Detail'){
        state.addIngredientDetailModalIsOpen = false
      }
      if(payload.payload === 'Retailer'){
        state.addRetailerModalIsOpen = false
      }
      if(payload.payload === 'Banner'){
        state.addBannerModalIsOpen = false
      }
      

    },
    updateProfile(state, action: PayloadAction<{ name: string; email: string }>) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setCategoriesActiveButton(state, action: PayloadAction<string>) {
      state.categoriesActiveButton = action.payload;
    },
    setUserActiveButton(state, action: PayloadAction<string>) {
      state.userActiveButton = action.payload;
    },
    setChefActiveButton(state, action: PayloadAction<string>) {
      state.chefActiveButton = action.payload;
    },
    setChefStatusActiveButton(state, action: PayloadAction<string>) {
      state.chefStatusActiveButton = action.payload;
    },
    setUserStatusActiveButton(state, action: PayloadAction<string>) {
      state.userStatusActiveButton = action.payload;
    },
    setRetailerStatusActiveButton(state, action: PayloadAction<string>) {
      state.retailerStatusActiveButton = action.payload;
      
    },
    setDishStatusActiveButton(state, action: PayloadAction<string>) {
      state.dishStatusActiveButton = action.payload;
    },
    setManageStatusActiveButton(state, action: PayloadAction<string>) {
      state.manageStateActiveButton = action.payload;
    },
    setCMSActiveButton(state, action: PayloadAction<string>) {
      state.CMSActiveButton = action.payload;
    },
    setShowPrivacyPolicyPopup(state){
      state.privacyPolicyModalIsOpen = true
    },
    setHidePrivacyPolicyPopup(state){
      state.privacyPolicyModalIsOpen = false
    }
  },
});

export const {
  startLoading,
  stopLoading,
  expandSidebar,
  unexpandSidebar,
  expandModal,
  unexpandModal,
  updateProfile,
  setCategoriesActiveButton,
  setUserActiveButton,
  setChefActiveButton,
  setChefStatusActiveButton,
  setUserStatusActiveButton,
  setDishStatusActiveButton,
  setRetailerStatusActiveButton,
  setManageStatusActiveButton,
  setCMSActiveButton,
  setShowPrivacyPolicyPopup,
  setHidePrivacyPolicyPopup
} = userSlice.actions;

export const setSideBarOpened = (): AppThunk => async (dispatch) => {
  dispatch(expandSidebar());
};

export const setSideBarClosed = (): AppThunk => async (dispatch) => {
  dispatch(unexpandSidebar());
};
export const setModalOpened = (name:any): AppThunk => async (dispatch) => {
  dispatch(expandModal(name));
};

export const setModalClosed = (name:any): AppThunk => async (dispatch) => {
  dispatch(unexpandModal(name));
};

export const updateProfileAsync = (profile: { name: string; email: string }): AppThunk => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(updateProfile(profile));
    }, 1000);
  };
};

export default userSlice.reducer;