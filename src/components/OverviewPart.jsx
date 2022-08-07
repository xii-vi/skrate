import { useAuth } from "../context/AuthContext";

export const Overview = () => {
  const { shuffledData } = useAuth();
  return (
    <div className="border outline-2 m-2 p-2 px-6">
      <p className="text-2xl font-medium py-2">Overview</p>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center">
        <div className="p-4 bg-[#F6F7FF] border outline-2 rounded-lg font-semibold flex items-center">
          Profile Views{" "}
          <span className="text-[#4F65F6] text-3xl font-medium ml-2">
            {shuffledData?.dashboard_stats?.profile_views}
          </span>
        </div>
        <div className="p-4 bg-[#F6F7FF] border outline-2 rounded-lg font-semibold flex items-center">
          Mentorship Session{" "}
          <span className="text-[#4F65F6] text-3xl font-medium ml-2">
            {shuffledData?.dashboard_stats?.mentorship_sessions}
          </span>
        </div>
        <div className="p-4 bg-[#F6F7FF] border outline-2 rounded-lg font-semibold flex items-center">
          Jobs Applied{" "}
          <span className="text-[#4F65F6] text-3xl font-medium ml-4">
            {shuffledData?.dashboard_stats?.jobs_applied}
          </span>
        </div>
        <div className="p-4 bg-[#F6F7FF] border outline-2 rounded-lg font-semibold flex items-center">
          Skills Verified{" "}
          <span className="text-[#4F65F6] text-3xl font-medium ml-4 ">
            {shuffledData?.dashboard_stats?.skills_verified}
          </span>
        </div>
      </div>
    </div>
  );
};
