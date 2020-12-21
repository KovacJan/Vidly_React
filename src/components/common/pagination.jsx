import React from "react";
import PropTypes from 'prop-types';
import _ from "lodash";

const Pagination = ({ pageSize, itemsCount, currentPage, onPageChange }) => {  
  const pagesCount =  Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item' }>
            <a onClick={() => onPageChange(page)} className="page-link" href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired, 
  itemsCount: PropTypes.number.isRequired, 
  currentPage: PropTypes.number.isRequired, 
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
