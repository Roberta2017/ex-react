import { useMemo } from "react";
const users = [
    {
        id: 0,
        name: 'Gino',
        age: 20
    },
    {
        id: 1,
        name: 'Nino',
        age: 17
    },
    {
        id: 2,
        name: 'Angelica',
        age: 34
    },
    {
        id: 3,
        name: 'Gianfranco',
        age: 15
    },
    {
        id: 4,
        name: 'Piero',
        age: 52
    },
    {
        id: 5,
        name: 'Roberta',
        age: 29
    },

]
export function FilterList(){
    const memo = useMemo(()=> users.map(filterUser => filterUser.age > 18 && <li>{filterUser.name}</li>),[])
    return(memo)

}