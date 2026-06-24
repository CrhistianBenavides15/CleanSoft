import logo from "../assets/Logo.png";

function Logo() {
  return (
    <div className="flex items-center justify-center">
      <img
        src={logo}
        alt="CleanSoft Logo"
        className="w-[380px]"
      />
    </div>
  );
}

export default Logo;
