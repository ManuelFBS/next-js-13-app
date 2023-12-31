import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation () {
  const links = [
    {
      label: 'Home',
      route: '/'
    },
    {
      label: 'Dashboard',
      route: '/dashboard'
    },
    {
      label: 'Posts',
      route: '/posts'
    },
    {
      label: 'About',
      route: '/about'
    }
  ]

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
