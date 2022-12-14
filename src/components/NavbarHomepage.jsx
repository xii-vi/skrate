import logo from "../assest/logo.png";
import { useAuth } from "../context/AuthContext";
export const NavbarHomepage = () => {
  const { logOut, userData, setShuffledData } = useAuth();

  const resetDashboard = () => {
    setShuffledData(userData);
  };
  const logOutHandler = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="flex sm:justify-between ">
      <img className="w-20 h-20 lg:w-24 lg:h-24" src={logo} alt="logo" />
      <div className="flex justify-center items-center px-3 md:px-6 mx-auto sm:mx-0">
        <div className="mr-4 sm:mr-8 md:mr-16">
          <button
            className="w-full text-xs sm:text-base bg-[#4F65F6] px-1 md:px-4 py-1 text-white rounded-sm"
            onClick={logOutHandler}
          >
            Sign Out
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-12 h-12 rounded-full cursor-pointer"
            src="https://re-ui.netlify.app/assets/avatar/avatar-2.png"
            alt="userAvatar"
            onClick={resetDashboard}
          />
          <p className="text-xs sm:text-lg ml-5">{userData.full_name}</p>
        </div>
      </div>
    </nav>
  );
};
