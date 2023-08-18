import Link from "next/link";

export default function Navigation() {
  const links = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "About",
      route: "/about",
    },
  ];

  return (
    <header>
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
