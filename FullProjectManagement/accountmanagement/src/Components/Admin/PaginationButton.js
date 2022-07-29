import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function PaginationButton(props) {
  let { onhandleChangePage, pageFillterCurrent } = props;

  // console.log("pageFillterCurrent: ", pageFillterCurrent);
  let handleChangePage = (page) => {
    // console.log("clicked!!", page);
    onhandleChangePage(page);
  };

  let page = [];
  for (let index = 1; index <= pageFillterCurrent.totalPages; index++) {
    page.push(
      <PaginationItem active={pageFillterCurrent.page === index}>
        <PaginationLink onClick={() => handleChangePage(index)}>{index}</PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <Pagination>
      <PaginationItem disabled={pageFillterCurrent.page === 1}>
        <PaginationLink first onClick={() => handleChangePage(1)} />
      </PaginationItem>

      <PaginationItem disabled={pageFillterCurrent.page === 1}>
        <PaginationLink onClick={() => handleChangePage(pageFillterCurrent.page - 1)} previous />
      </PaginationItem>
      {page}
      {/* <PaginationItem>
        <PaginationLink onClick={() => handleChangePage(1)}>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => handleChangePage(2)}>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => handleChangePage(3)}>3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => handleChangePage(4)}>4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => handleChangePage(5)}>5</PaginationLink>
      </PaginationItem> */}

      <PaginationItem disabled={pageFillterCurrent.page === pageFillterCurrent.totalPages}>
        <PaginationLink onClick={() => handleChangePage(pageFillterCurrent.page + 1)} next />
      </PaginationItem>

      <PaginationItem disabled={pageFillterCurrent.page === pageFillterCurrent.totalPages}>
        <PaginationLink last onClick={() => handleChangePage(pageFillterCurrent.totalPages)} />
      </PaginationItem>
    </Pagination>
  );
}

export default PaginationButton;
