import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    usersForDiscountList:[]
}

const usersForDiscountSlice = createSlice({
    name: 'usersForDiscount',
    initialState,
    reducers: {
        addUser: (state, action)=> {
            state.usersForDiscountList.push(action.payload)
        }
    }
})
export const {addUser} = usersForDiscountSlice.actions
export default usersForDiscountSlice.reducer