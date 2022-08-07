import { Jobs } from "./Jobs";
import { Overview } from "./OverviewPart";
import { UpcomingSession } from "./UpcomingSession";

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-4">
      <div className="lg:grid-cols-2">
        <Overview />
        <div className="lg:mt-20">
        <UpcomingSession />
        </div>
      </div>
      <Jobs />
    </div>
  );
};
