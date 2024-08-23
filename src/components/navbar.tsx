import Logo from "@/assets/logo.svg";
import { ModeToggle } from "./mode-toggle";
export const Navbar = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <img src={Logo} alt="Logo icons"/>
        <ul className="flex items-center gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ModeToggle />
      </div>
    </div>
  );
};
