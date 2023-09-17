import Link from "next/link";

export default function WebNavigator({ options, styles }) {
  return (
    <header>
      <nav>
        <ul className={styles.navigation}>
          {options.map(({ tag, route }) => {
            return (
              <li key={route}>
                <Link href={route}>{tag}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
