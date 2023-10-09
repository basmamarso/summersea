const initialState = []
const reducer3= (state = initialState, action) => {
    switch (action.type) {
        case "ajouterreservation":
                const newc={idr:state.length+1,
                    resevation:{name:action.payload.name,email:action.payload.email,
                        date:action.payload.adrss,time:action.payload.tele,
                    partysize:action.payload.partysize},}
                        console.log(newc)
                return [...state,newc]
                
            }
    
    return state
}
export default reducer3