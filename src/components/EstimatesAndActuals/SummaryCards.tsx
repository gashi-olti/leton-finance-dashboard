import React from "react";

import { cn } from "lib/utils";
import { useEstimates } from "@/providers/EstimatesProvider";
import { actualsData, estimatesData } from "@/config/data";

import Typography from "../Common/Typography";
import { Card } from "../ui/card";

import { DataType } from "./EstimatesAndActuals";

const SummaryCards = () => {
  const { setActiveType } = useEstimates();

  const estTotal = estimatesData.reduce(
    (acc, item) => acc + (item.total || 0),
    0
  );
  const actTotal = actualsData.reduce(
    (acc, item) => acc + (item.total || 0),
    0
  );

  const formattedEstTotal = new Intl.NumberFormat("en-US").format(estTotal);
  const formattedActTotal = new Intl.NumberFormat("en-US").format(actTotal);

  const handleCardClick = (type: DataType) => {
    if (setActiveType) {
      setActiveType(type);
    }
  };

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2">
      <Card
        className={cn(
          "@container/card hover:cursor-pointer transition-transform duration-200 hover:scale-[1.025]"
        )}
        onClick={() => handleCardClick("estimates")}
      >
        <div className="flex flex-col space-y-2 text-center">
          <Typography variant="h5" className="text-typography/80">
            Estimates
          </Typography>
          <Typography
            variant="h1"
            className="text-5xl font-medium text-typography/85"
          >
            €{formattedEstTotal}
          </Typography>
        </div>
      </Card>
      <Card
        className="@container/card hover:cursor-pointer transition-transform duration-200 hover:scale-[1.025]"
        onClick={() => handleCardClick("actuals")}
      >
        <div className="flex flex-col space-y-2 text-center">
          <Typography variant="h5" className="text-typography/80">
            Actuals
          </Typography>
          <Typography
            variant="h1"
            className="text-5xl font-medium text-typography/85"
          >
            €{formattedActTotal}
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default SummaryCards;
