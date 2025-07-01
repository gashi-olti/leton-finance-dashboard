/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { DataTable } from "./data-table";
import { useEstimates } from "@/providers/EstimatesProvider";

const List = () => {
  const { columns, filteredData, searchValue, setSearchValue } = useEstimates();

  const handleSearch = (searchValue: string) => {
    if (setSearchValue) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div className="px-4 lg:px-6">
      <DataTable
        columns={columns as any}
        data={filteredData as any}
        value={searchValue}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default List;
