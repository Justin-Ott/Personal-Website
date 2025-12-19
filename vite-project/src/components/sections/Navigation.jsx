import { useNavigate, useLocation } from 'react-router'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
// Tailwind lets u even customize the color of the text like hover:text-blue-100
const buttonClass = "px-4 py-2 hover:bg-gray-200  rounded-md transition-colors";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait a moment for the page to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="sticky top-0 z-50 flex justify-center bg-white/90 backdrop-blur-md shadow-md">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <button
            onClick={() => scrollToSection('home')}
            className={buttonClass}
          >
            Home
          </button>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <button
            onClick={() => scrollToSection('experience')}
            className={buttonClass}
          >
            Experience
          </button>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <button
            onClick={() => scrollToSection('skills')}
            className={buttonClass}
          >
            Skills
          </button>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <button
            onClick={() => scrollToSection('projects')}
            className={buttonClass}
          >
            Projects
          </button>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <button
            onClick={() => scrollToSection('aboutme')}
            className={buttonClass}
          >
            About Me
          </button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}