const initialState = []
const reducer2 = (state = initialState, action) => {
    switch (action.type) {
        case "ajoutercommandefinal":
                const newc={idcf:state.length+1,
                    commands:[...action.payload.commande],
                    client:{name:action.payload.name,lastname:action.payload.lastname,
                        adrss:action.payload.adrss,tele:action.payload.tele}}
                        console.log(newc)
                return [...state,newc]
                
            }
    
    return state
}
export default reducer2