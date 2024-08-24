import LogoLight from "@/assets/logo_light.svg";
import LogoNight from "@/assets/logo_night.svg";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "@/components/theme-provider"; // Import the useTheme hook

export const Navbar = () => {
  const { theme } = useTheme(); // Destructure the theme from useTheme hook
  const appliedTheme =
  theme === "system"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    : theme;
  return (
    <div className="container">
      <div className="flex items-center justify-between mt-4">
        {/* Conditionally render the logo based on the applied theme */}
        {appliedTheme === "dark" ? (
          <img src={LogoNight} alt="Logo for Dark Mode" />
        ) : (
          <img src={LogoLight} alt="Logo for Light Mode" />
        )}
        <ul className="flex items-center gap-10">
          <li>Product</li>
          <li>Plans</li>
          <li>Blog</li>
          <li>
            <a
              href="#"
              className="btn bg-gray-400 text-black font-medium p-3 rounded-lg">
              Get Updates
            </a>
          </li>
          <li>
            {" "}
            <ModeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};
