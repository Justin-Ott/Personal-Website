import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Link } from 'react-router'

export default function Navigation() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Navigate</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link to="/">Home</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link to="/Aboutme">About Me</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link to="/Projects">Projects</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}