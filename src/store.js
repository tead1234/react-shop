import { configureStore, createSlice  } from "@reduxjs/toolkit";

// let [user] = useState('kim')
let user = createSlice({
    name: 'user',
    initialState: 'kim'
})
let stock = createSlice({
    name: 'stock',
    initialState: [10,11,12]
})
let SavedItem = createSlice({
    name : 'SavedItem',
    initialState : [
        {id : 3, name : 'White and Black', count : 2},
        {id : 4, name : 'Grey Yordan', count : 1}
      ], 
    reducers : {changeCount(state , i){
        // object나 리스트 수정할떄 return 안써야 됨
        // 파라미터 추가시 payload추가
         state[i.payload].count += 1
     },
     addCart(state, n){
        state.push(n.payload)
     }
    }
})
export let {changeCount, addCart} = SavedItem.actions
export default configureStore({
    reducer:{
        user : user.reducer,
        stock : stock.reducer,
        SavedItem : SavedItem.reducer
    }

})