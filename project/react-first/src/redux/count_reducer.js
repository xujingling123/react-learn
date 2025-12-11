function countReducer(preState,action){
    const {type,data} = action
    //根据type决定如何加工数据
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }

}