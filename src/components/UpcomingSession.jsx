import { useAuth } from "../context/AuthContext";

export const UpcomingSession = () => {
  const { shuffledData } = useAuth();
  return (
    <div className="border outline-2 m-2 p-2 px-6">
      <p className="text-2xl font-medium py-2">Upcoming Session</p>
      {shuffledData?.upcoming_sessions?.map((item) => {
        return (
          <div className="flex p-4 border outline-4 m-2 justify-between items-center flex-wrap">
            <img
              className="w-12 h-12 rounded-full"
              src="https://re-ui.netlify.app/assets/avatar/avatar-1.png"
              alt="userAvatar"
            />
            <div>
              <div className="text-lg underline font-bold underline-offset-2">
                {item.mentor_name}
              </div>
              <div className="text-sm font-serif no-underline pt-2">
                {item.timings}
              </div>
            </div>

            <div>{item.date}</div>
            <div className="py-2 px-4 bg-blue-200 w-28 text-center">
              {item.session_type}
            </div>
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
        );
      })}
      <div></div>
    </div>
  );
};
