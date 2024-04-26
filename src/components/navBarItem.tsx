import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBarItem() {
    const navigation = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
      ];
      const pathname = usePathname();

    return (
        <ul className="xl:flex block">
        {navigation.map((item) => (
          <li key={item.name} className={`xl:inline-block flex items-center p-2 text-lg`}>
             {pathname === item.href && (
              <div className="xl:hidden flex mr-2 justify-center transition ease-in-out duration-500 delay-500">
                <div className="h-2 w-2  rounded-full bg-blue-800"></div>
              </div>
            )}
            <Link href={item.href} className={`${pathname === item.href && "font-bold "}`}>{item.name}</Link>
            {pathname === item.href && (
              <div className="xl:flex hidden justify-center transition ease-in-out duration-500 delay-500">
                <div className="h-2 w-2  rounded-full bg-blue-800"></div>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
}

export default NavBarItem;