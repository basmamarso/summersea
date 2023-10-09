export const  ajoutercommande= (menu,q) => {
    return { type: "ajoutercommande",payload:{menu,q} }
}
export const  supprimercommande= (idc) => {
    return { type: "supprimercommande",payload:{idc} }
}
export const  modifierqte= (idc,q) => {
    return { type: "modifierqte",payload:{idc,q} }
}
export const  ajoutercommandefinal= (commande,name,lastname,adrss,tele) => {
    return { type: "ajoutercommandefinal",payload:{commande,name,lastname,adrss,tele} }
}
export const  ajouterreservation= (name,email,date,time,partySize) => {
    return { type: "ajouterreservation",payload:{name,email,date,time,partySize} }
}
