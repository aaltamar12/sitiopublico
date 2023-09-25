import { isMobile } from "is-mobile";
import WebNavigator from "./WebNavigatorTailwind";
import styles from "../styles/Navigation/Navigation.module.css";

const options = [
  {
    tag: "Inicio",
    route: "/",
  },
  {
    tag: "Nuevo Anuncio",
    route: "/new",
  },
];

export default function Navigator({ signOutAction }) {
  return (
    <WebNavigator
      options={options}
      styles={styles}
      signOutAction={signOutAction}
    />
  );
}
