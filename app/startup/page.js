import { Kanit } from "next/font/google";
import CustomButton from "../components/ui/Button";
import style from "../styles/Startup/Startup.module.css";

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
    <body className={inter.className}>
      <provider>
        <div
          className={`absolute inset-0 text-center ${style.backgroundRadial}`}
        >
          <div className="mt-10 mb-10 pt-20 pb-20">
            <div className="grid grid-rows-2 mt-10 mb-10 pt-10 pb-10">
              <div
                className={`p-2 text-white text-startup-h1 ${kanit800.className}`}
              >
                <h1>AdMedia</h1>
              </div>
              <div
                className={`p-2 text-slate-200 text-startup-small ${kanitItalic200.className}`}
              >
                <small>Anunciar nunca fue tan facil</small>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 pt-5 pb-5 items-center">
            <div className="p-3 w-64 mx-auto">
              <CustomButton
                className={`text-xl text-gray-950 bg-white rounded-full h-14 ${kanit200.className}`}
                size="lg"
                fullWidth="true"
                text="Empezar"
              />
            </div>
            <div className="p-3 w-64 mx-auto">
              <CustomButton
                className={`text-xl text-white bg-gradient-to-tr from-pink-500 to-orange-400 shadow-md rounded-full h-14 ${kanit200.className}`}
                size="lg"
                fullWidth="true"
                text="Registrarse"
              />
            </div>
          </div>
        </div>
      </provider>
    </body>
  );
}
