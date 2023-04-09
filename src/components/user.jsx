import React from "react";

const User = ({
    _id,
    name,
    profession,
    qualities,
    completedMeetings,
    rate,
    bookmark,
    onDelete,
    onFavorite,
}) => {
    return (
        <>
            <tr key={_id}>
            <td>{name}</td>
            <td>{qualities.map( item => (<span className={"badge m-1 bg-" + item.color} key={item._id}>{item.name}</span>) ) }</td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}/5</td>
            <td><button className={"btn btn-" + (bookmark == true ? "secondary" : "success")} onClick={() => onFavorite(_id)}>{bookmark == true ? "Dislike" : "Like"}</button></td>
            <td><button className={"btn btn-danger"} onClick={() => onDelete(_id)}>Удалить</button></td>
            </tr>
        </>
    )
}

export default User;