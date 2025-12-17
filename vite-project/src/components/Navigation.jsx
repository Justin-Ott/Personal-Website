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
        <MenubarTrigger>
          <Link to="/">Home</Link>
        </MenubarTrigger>
        <MenubarTrigger>
          <Link to="/Aboutme">About Me</Link>
        </MenubarTrigger>
        <MenubarTrigger>
          <Link to="/Projects">Projects</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}