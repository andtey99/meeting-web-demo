import React from 'react'

const Filtration = ({
    profession,
    onSelected,
    selectedItem,
    onClean
}) => {
    return (
        <ul className="list-group">
            <h5 className="m-2">Фильтрация</h5>
             {Object.keys(profession).map( item => <li
             key={profession[item]._id}
             className={"list-group-item" + (profession[item] == selectedItem? " active" : "")}
             role="button"
             onClick={() => onSelected(profession[item])}
             >{profession[item].name}</li> )}
             <button className="btn btn-sm btn-secondary m-2" onClick={onClean}>Очистить</button>
        </ul>
    )
}

export default Filtration;