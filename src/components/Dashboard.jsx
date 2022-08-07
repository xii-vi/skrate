import { useAuth } from "../context/AuthContext"

export const Dashboard =()=>{
    const {userData} = useAuth();
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4">
            <div className="lg:grid-cols-2">
                <div className="border outline-2 m-2 p-2">
                    <p className="text-xl font-medium py-2">Overview</p>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center">
                        <div className="p-4 bg-[#F6F7FF] border outline-2 rounded-lg font-semibold flex items-center">Profile Views <span className="text-[#4F65F6] text-3xl font-medium ml-2">{userData.dashboard_stats.profile_views}</span></div>
                        <div className="p-4 bg-[#F6F7FF] border outline-2 rounded-lg font-semibold flex">Mentorship Session <span className="text-[#4F65F6] text-3xl font-medium ml-2">{userData.dashboard_stats.mentorship_sessions}</span></div>
                        <div className="p-4 bg-[#F6F7FF] border outline-2 rounded-lg font-semibold flex">Jobs Applied <span className="text-[#4F65F6] text-3xl font-medium ml-4">{userData.dashboard_stats.jobs_applied}</span></div>
                        <div className="p-4 bg-[#F6F7FF] border outline-2 rounded-lg font-semibold flex">Skills Verified <span className="text-[#4F65F6] text-3xl font-medium ml-4">{userData.dashboard_stats.skills_verified}</span></div>

                    </div>
                </div>
                <div className="border outline-2 m-2 p-2">
                    <p className="text-xl font-medium py-2" >Upcoming Session</p>
                    {userData.upcoming_sessions.map(item=>{
                    return (
                    <div className="flex p-4 border outline-4 m-2 justify-around items-center flex-wrap">
                    <img className="w-12 h-12 rounded-full" src="https://re-ui.netlify.app/assets/avatar/avatar-1.png" alt="userAvatar" />
                    <div>{item.mentor_name}</div>
                    <div>{item.timings}</div>
                    <div>{item.date}</div>
                    <div className="py-2 px-4 bg-blue-200 ">{item.session_type}</div>
                    </div>)
                    })
                    }
                    <div>
                    </div>
                </div>
            </div>
            <div className="border outline-2 m-2 p-2">
            <p className="text-xl font-medium py-2" >New Jobs</p>
            {userData.job_postings.map(item=>{
                return(<>
                <div className="flex p-4 border outline-4 m-2 justify-around items-center flex-wrap">
                <img className="w-12 h-12 rounded-full" src="https://re-ui.netlify.app/assets/avatar/avatar-1.png" alt="userAvatar" />
                <div>
                    <p>{item.role}</p>
                    <p>{item.organization_name}</p>
                    <p>{item.location}</p>
                </div>
                <div>
                    {item.date_posted}
                </div>
                </div>
                </>
                )
            })}
            </div>
        </div>
    )
}