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
        console.log(id)
        let clone = [...fighters];
        let index = clone.findIndex(x => x.id === id)
        clone.splice(index, 1);
        setFighters(clone);
        return undefined;
    }

    React.useEffect(() => {
        setFighters(fightersArr);
        axios.get('http://localhost:3000/fighter').then((response => setFighters(response.data)));
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
                    biography= {_.biography}
                    removeCard={removeFighter}
                />
            )}
    </div>
    );
}
export default FighterList;
