import Link from "next/link";

export default function MobileNavigator({ options, styles }) {
  return (
    <li>
      <Link href={"/"}>
        <ul className={styles.navigation}>Home</ul>
      </Link>
      <Link href={"/new"}>
        <ul>New</ul>
      </Link>
    </li>
  );
}
