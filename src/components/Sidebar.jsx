import { useAuth } from "../context/AuthContext";
export const Sidebar = () => {
  const { setShuffledData } = useAuth();

  const shuffleHandler = () => {
    setShuffledData((shuffledData) => {
      const randomValues = Object.values(shuffledData.dashboard_stats).sort(
        () => Math.random() - Math.random()
      );

      const newDashBoardStats = Object.keys(shuffledData.dashboard_stats).reduce(
        (newStats, key, i) => ({ ...newStats, [key]: randomValues[i] }),
        {}
      );

      return {
        ...shuffledData,
        dashboard_stats: newDashBoardStats,
        upcoming_sessions: [...shuffledData.upcoming_sessions].reverse(),
        job_postings: [...shuffledData.job_postings].sort(
          () => Math.random() - Math.random()
        ),
      };
    });
  };
  return (
    <div className="flex fixed bottom-0 mx-0 bg-slate-100 w-screen lg:flex-col sm:mx-8 sm:static sm:bg-transparent justify-around sm:justify-center items-center lg:justify-start lg:items-start sm:w-auto">
      <div className="flex my-5 cursor-pointer hover:underline">
        <span className="pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </span>
        Home
      </div>
      <div className="flex cursor-pointer px-4 lg:px-0 hover:underline" onClick={shuffleHandler}>
        <span className="pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
        </span>
        Shuffle
      </div>
    </div>
  );
};
