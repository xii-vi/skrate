import logo from "../assest/logo.png";
import navbarImg from "../assest/navbar.png";
export const NavbarSignIn = () => {
  return (
    <nav className="flex h-80">
      <img className="w-20 h-20 lg:w-24 lg:h-24" src={logo} alt="logo" />
      <div className="mx-auto">
        <img className="lg:w-screen lg:h-80" src={navbarImg} alt="nav-img" />
      </div>
    </nav>
  );
};
