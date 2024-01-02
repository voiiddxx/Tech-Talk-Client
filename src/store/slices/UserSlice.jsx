import { createSlice } from "@reduxjs/toolkit"


const userSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        registerUser(state , action){
            state.push(action.payload);
        },
        loginUser(state , action){
            state.push(action.payload);
        },
        getCurruser(state , action){}
    }
});

export default userSlice.reducer;
export const {registerUser , loginUser} = userSlice.actions;