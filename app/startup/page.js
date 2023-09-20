import { Kanit } from "next/font/google";
import CustomButton from "../components/ui/Button";
import style from "../styles/Startup/Startup.module.css";
import Link from "next/link";

const kanitItalic200 = Kanit({
  weight: "200",
  style: "italic",
  subsets: ["latin"],
});
const kanit200 = Kanit({ weight: "200", subsets: ["latin"] });
const kanit500 = Kanit({ weight: "500", subsets: ["latin"] });
const kanit800 = Kanit({ weight: "800", subsets: ["latin"] });

export default function StartUp({ inter, provider }) {
  return (
    <body>
      <provider>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
          <div className={`absolute inset-0 ${style.backgroundAdMedia}`}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={style.videoBackground}
              src="./video_background.mp4"
            >
              Tu navegador no soporta videos en HTML5.
            </video>
          </div>

          <div
            className="grid grid-rows-2 text-center items-center justify-center"
            style={{ zIndex: 1 }}
          >
            <div
              className="flex h-72 justify-center"
              style={{ paddingTop: "100px" }}
            >
              <div className="container">
                <h1
                  className={`p-2 text-white text-startup-h1 ${kanit800.className}`}
                >
                  AdMedia
                </h1>

                <small
                  className={`p-1 text-slate-200 text-startup-small ${kanitItalic200.className}`}
                >
                  Anunciar nunca fue tan facil
                </small>
              </div>
            </div>

            <div className="flex" style={{ paddingTop: "100px" }}>
              <div className="container w-64 lg:w-96">
                <CustomButton
                  className={`text-xl text-white bg-gradient-to-tr from-pink-500 to-orange-400 shadow-md rounded-full h-14 ${kanit200.className}`}
                  size="lg"
                  fullWidth="true"
                  text="Empezar"
                />
                <div className="p-2">
                  <Link href={"#"}>
                    <small
                      className={`text-white ${kanit500.className} underline`}
                    >
                      ¿Eres nuevo? Registrate
                    </small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </provider>
    </body>
  );
}
