// import React from 'react';

// const Pagination = ({dataPerPage, total, paginate}) => {
//     const pageNum = [];
//     for(let i = 1; i < Math.ceil(total/dataPerPage); i++){
//         pageNum.push(i);
//     }

//     return (
//         <nav>
//             <ul className="pagination">
//                 {pageNum.map(number => (
//                     <li key={number} className="page-item">
//                         <a onClick={(e) =>{ e.preventDefault(); paginate(number)}} href="!#" className="page-link">
//                             {number}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// }

// export default Pagination;
