import React from 'react'

const Pagination = ({
    users,
    pages,
    onPage,
    currentPage
}) => {
    if (users.length < 3) return null;
    return (
            <ul className="pagination justify-content-center">
              {[...Array(pages).keys()].map( page => <li className={"page-item"+(page === currentPage ? " active" : "")} key={page+1}><button className="page-link" onClick={() => onPage(page+1)}>{page+1}</button></li>)}
            </ul>
    )
    
}

export default Pagination;