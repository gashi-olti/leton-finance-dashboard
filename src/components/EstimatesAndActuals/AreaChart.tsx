import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { actualsData, estimatesData } from "@/config/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const getChartData = () => {
  const actualsMap = Object.fromEntries(
    actualsData.map((item) => [item.item, item])
  );
  const estimatesMap = Object.fromEntries(
    estimatesData.map((item) => [item.item, item])
  );

  const allLabels = Array.from(
    new Set([
      ...actualsData.map((item) => item.item),
      ...estimatesData.map((item) => item.item),
    ])
  );

  return allLabels.map((label) => ({
    label,
    actualInflow: actualsMap[label]?.actRev ?? null,
    actualOutflow: actualsMap[label]?.actCost ?? null,
    estimateInflow: estimatesMap[label]?.estRev ?? null,
    estimateOutflow: estimatesMap[label]?.estCost ?? null,
  }));
};

const AreaChartComponent = () => {
  const data = getChartData();

  return (
    <div className="px-4 lg:px-6">
      <Card className="@container/card">
        <CardHeader>
          <CardTitle>Cash Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="inflow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="outflow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="actualInflow"
                name="Actual Inflow (Revenue)"
                stroke="#22c55e"
                fill="url(#inflow)"
                isAnimationActive={false}
              />
              <Area
                type="monotone"
                dataKey="actualOutflow"
                name="Actual Outflow (Cost)"
                stroke="#ef4444"
                fill="url(#outflow)"
                isAnimationActive={false}
              />
              <Area
                type="monotone"
                dataKey="estimateInflow"
                name="Estimate Inflow (Revenue)"
                stroke="#16a34a"
                fill="url(#inflow)"
                strokeDasharray="5 5"
                isAnimationActive={false}
              />
              <Area
                type="monotone"
                dataKey="estimateOutflow"
                name="Estimate Outflow (Cost)"
                stroke="#b91c1c"
                fill="url(#outflow)"
                strokeDasharray="5 5"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AreaChartComponent;
