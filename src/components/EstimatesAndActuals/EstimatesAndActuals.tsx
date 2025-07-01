"use client";
import React from "react";

import SummaryCards from "./SummaryCards";
import List from "./List";
import AreaChartComponent from "./AreaChart";

export type DataType = "estimates" | "actuals";

const EstimatesAndActuals = () => {
  return (
    <div className="grid grid-cols-1 gap-y-12">
      <div>
        <SummaryCards />
      </div>
      <div>
        <List />
      </div>
      <div>
        <AreaChartComponent />
      </div>
    </div>
  );
};

export default EstimatesAndActuals;
