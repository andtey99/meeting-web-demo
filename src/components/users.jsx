import React from 'react'
import User from './user'

const Users = ({users, onSort, ...rest}) => {
    return (
      <>
        {users.length > 0 &&
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => onSort("name")} scope="col" role="button">Имя</th>
              <th scope="col">Качества</th>
              <th onClick={() => onSort("profession.name")} scope="col" role="button">Профессия</th>
              <th onClick={() => onSort("completedMeetings")} scope="col" role="button">Кол-во встреч</th>
              <th onClick={() => onSort("rate")} scope="col" role="button">Рейтинг</th>
              <th onClick={() => onSort("bookmark")} scope="col" role="button">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map( user => 
              <User key={user._id} {...rest} {...user} />
            )}
          </tbody>
        </table>}
      </>
    );
};

export default Users;