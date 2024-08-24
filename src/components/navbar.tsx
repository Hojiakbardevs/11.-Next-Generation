import LogoLight from "@/assets/logo_light.svg";
import LogoNight from "@/assets/logo_night.svg";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "@/components/theme-provider"; // Import the useTheme hook

export const Navbar = () => {
  const { theme } = useTheme(); // Destructure the theme from useTheme hook

  return (
    <div className="container">
      <div className="flex items-center justify-between">
        {/* Conditionally render the logo based on the current theme */}
        {theme === "dark" ? (
          <img src={LogoNight} alt="Logo for Dark Mode" />
        ) : (
          <img src={LogoLight} alt="Logo for Light Mode" />
        )}
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
