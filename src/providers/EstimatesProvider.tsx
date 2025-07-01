/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { createContext, useContext, useState } from "react";

import { DataType } from "@/components/EstimatesAndActuals/EstimatesAndActuals";
import {
  actColumns,
  estColumns,
} from "@/components/EstimatesAndActuals/columns";
import { actualsData, estimatesData } from "@/config/data";

interface EstimatesContextProps {
  activeType: DataType;
  setActiveType: (type: DataType) => void;
  searchValue?: string;
  setSearchValue?: (value: string) => void;
  columns?: any[];
  filteredData?: any[];
}

const EstimatesContext = createContext<EstimatesContextProps | undefined>(
  undefined
);

export const EstimatesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeType, setActiveType] = useState<DataType>("estimates");
  const [searchValue, setSearchValue] = React.useState("");

  const columns = activeType === "estimates" ? estColumns : actColumns;
  const data = activeType === "estimates" ? estimatesData : actualsData;

  const filteredData = data.filter((row: any) =>
    Object.values(row)
      .filter((v) => typeof v === "string" || typeof v === "number")
      .some((v) =>
        v.toString().toLowerCase().includes(searchValue.toLowerCase())
      )
  );

  const value = {
    activeType,
    setActiveType,
    searchValue,
    setSearchValue,
    columns,
    filteredData,
  };

  return (
    <EstimatesContext.Provider value={value}>
      {children}
    </EstimatesContext.Provider>
  );
};

export const useEstimates = () => {
  const context = useContext(EstimatesContext);
  if (!context) {
    throw new Error("useEstimates must be used within an EstimatesProvider");
  }
  return context;
};
