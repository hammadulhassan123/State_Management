import { atom,selector } from "recoil";


export const recoilCount = atom ({
    key: "count",
    default:0
})

export const modifier = atom({
    key:"modifier",
    default:0
})

export const recoilSelector= selector({
    key:"count-modifier",
    get: ({get})=>{
        const count= get(recoilCount);
        const modCount= get(modifier);    
        return count *modCount;
    }
})