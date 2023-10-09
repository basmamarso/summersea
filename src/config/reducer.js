const initialState = []
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ajoutercommande":
           const  menu=state.find((m)=>m.id==action.payload.menu.id)
            if(menu==undefined){
                const newc={idc:state.length+1,...action.payload.menu,q:Number(action.payload.q)}
                return [...state,newc]
            }
            else{
                menu.q=Number(menu.q)+Number(action.payload.q)
                return state
            }
            case "modifierqte":
                const  cmd=state.find((m)=>m.idc==action.payload.idc)
                 if(cmd){
                    cmd.q=action.payload.q
                      
                 }
                 return state
            
          
        case "supprimercommande":
            
            return state.filter((s)=>s.idc!=action.payload.idc)
        }
    
    return state
}
export default reducer