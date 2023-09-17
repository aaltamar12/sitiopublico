import { isMobile } from "is-mobile";
import WebNavigator from "./WebNavigatorTailwind";
import MobileNavigator from "./MobileNavigator";
import styles from "./Navigation.module.css";

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

const navigatorType = !isMobile() ? (
  <WebNavigator options={options} styles={styles} />
) : (
  <MobileNavigator options={options} styles={styles} />
);

export default function Navigator() {
  return navigatorType;
}
