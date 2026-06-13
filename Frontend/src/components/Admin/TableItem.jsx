import React from "react";

const TableItem = (props) => {
    const {img , country ,sales, value , bounce}=props
  return (
    <div className="table_row">
      <img src={img} />
      <div className="table_row_item">
        <p class="text-xs font-weight-bold mb-0">Country:</p>
        <h6 class="text-sm mb-0">{country}</h6>
      </div>
      <div className="table_row_item">
        <p class="text-xs font-weight-bold mb-0">Sales:</p>
        <h6 class="text-sm mb-0">{sales}</h6>
      </div>
      <div className="table_row_item">
        <p class="text-xs font-weight-bold mb-0">Value:</p>
        <h6 class="text-sm mb-0">{value}</h6>
      </div>
      <div className="table_row_item">
        <p class="text-xs font-weight-bold mb-0">Bounce:</p>
        <h6 class="text-sm mb-0">{bounce}</h6>
      </div>
    </div>
  );
};

export default TableItem;
