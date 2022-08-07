import { useAuth } from "../context/AuthContext";
export const Jobs = () => {
  const { shuffledData } = useAuth();
  return (
    <div className="border outline-2 m-2 p-2 px-6">
      <p className="text-2xl font-medium py-2">New Jobs</p>
      {shuffledData?.job_postings?.map((item) => {
        return (
          <>
            <div className="flex p-4 border outline-4 m-2 justify-between items-center flex-wrap">
              <img
                className="w-12 h-12 rounded-full"
                src="https://re-ui.netlify.app/assets/avatar/avatar-1.png"
                alt="userAvatar"
              />
              <div>
                <p className="text-xl font-semibold">{item.role}</p>
                <p className="font-mono">{item.organization_name}</p>
                <p>{item.location}</p>
              </div>
              <div>{item.date_posted}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </>
        );
      })}
    </div>
  );
};
