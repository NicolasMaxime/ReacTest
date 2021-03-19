import DeletableCard from "../../card/deletableCard";
import React from 'react';
import {FighterInterface} from "./FighterInterface";
import './FighterList.css'
import axios from "axios";

const FighterList = ({
    fightersArr = [] as FighterInterface[],
}) => {
    const [fighters, setFighters] = React.useState(fightersArr)

    function removeFighter(id: string){
        let clone = [...fighters];
        let index = clone.findIndex(x => x.id === id)
        clone.splice(index, 1);
        setFighters(clone);
        axios.delete<void>('http://localhost:3000/'+id)
            .then(response => {})
            .catch(e => {console.log('Impossible to delete element '+id+' : '+e)})
        return undefined;
    }

    React.useEffect(() => {
        setFighters(fightersArr);
        axios.get<FighterInterface[]>('http://localhost:3000/fighter')
            .then((response => setFighters(response.data)))
            .catch(e => {console.log('GetAll failed : '+e)});
        }
        , [setFighters]);

    return (
        <div className={'fighterList'}>
            {fighters.map((_: FighterInterface) =>
                <DeletableCard
                    key={_.id}
                    id = {_.id}
                    title={_.type}
                    subtitle={`${_.firstname} ${_.name}`}
                    text= {_.biography}
                    removeCard={removeFighter}
                />
            )}
    </div>
    );
}
export default FighterList;
