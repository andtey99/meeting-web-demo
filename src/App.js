import React, { useState, useEffect } from "react";
import SearchStatus from "./components/searchStatus";
import Users from './components/users'
import api from './api/index'
import Pagination from "./components/pagination";
import Filtration from './components/filtration';
import _ from 'lodash'

const App = () => {
    const [profession, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({iter: "name", order: "asc"})
    let startPosition = 0;
    let endPositions = 2;
    const inheritUsers = api.users.fetchAll();
    const [users, setUsers] = useState(_.orderBy(api.users.fetchAll(), [sortBy.iter], [sortBy.order]));
    const [paginated, setPagination] = useState(users.slice(startPosition, endPositions));
    const [page, setPage] = useState(0);
    let pageCount = Math.ceil(users.length / 2);
    const pageElementsCount = 2;

    useEffect(() => {
      api.professions.fetchAll().then(response => setProfession(response));
    }, [])
    useEffect(() => {
      setPagination(users.slice(startPosition, endPositions));
    }, [users])
    
    const handleDelete = (userId) => {
        setUsers(users.filter( user => user._id !== userId));
    }
    
    const handleFavorite = id => {
      let updatedState = Array.from(users);
      for (let elem of updatedState) {
        if (elem._id === id && elem.bookmark === true) elem.bookmark = false;
        else if (elem._id === id && elem.bookmark === false) elem.bookmark = true;
      }
      setUsers(updatedState);
    }

    const handlePagination = pageNumber => {
      startPosition = pageElementsCount * (pageNumber - 1);
      endPositions = startPosition + pageElementsCount;
      setPagination(users.slice(startPosition, endPositions));
      setPage(pageNumber-1);
    }

    const handleSelect = (param) => {
      if (selectedProf != param) {
        setUsers(inheritUsers.filter( item => item.profession === param ));
        setSelectedProf(param);
      }
      else {
      setSelectedProf(param);
      setUsers(users.filter( item => item.profession === param ));
      setPage(0);
      }
    }

    const handleClean = () => {
      setUsers(inheritUsers);
      setSelectedProf();
    }

    const handleSort = item => {
      if (sortBy.iter == item) {
        if (sortBy.order == "desc") {
          setSortBy({iter: item, order: "asc"});
          setUsers(_.orderBy(users, [sortBy.iter], [sortBy.order]));
        }
        else {
          setSortBy({iter: item, order: "desc"});
          setUsers(_.orderBy(users, [sortBy.iter], [sortBy.order]));
        }
      }
      else {
        setSortBy({iter: item, order: "asc"});
        setUsers(_.orderBy(users, [sortBy.iter], [sortBy.order]));
      }
    }

    return (
      <div className="d-flex justify-content-center m-10">
        {profession && <Filtration profession={profession} onSelected={handleSelect} selectedItem={selectedProf} onClean={handleClean} />}
        <div className="d-flex flex-column justify-content-center p-5">
          <SearchStatus length={users.length} />
          <Users onDelete={handleDelete} onFavorite={handleFavorite} onSort={handleSort} users={paginated} />
          <Pagination users={users} pages={pageCount} onPage={handlePagination} currentPage={page}/>
        </div>
      </div>
    );
}
    

export default App;