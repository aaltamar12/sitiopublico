"use client";
import CustomButton from "../components/ui/Button";
import * as faceapi from "face-api.js";
import { useEffect, useRef, useState } from "react";
import { trainer } from "../../public/lib/face";
import { Button } from "@nextui-org/react";

const getVideoStream = async (videoRef) => {
  try {
    const nav = await navigator;
    console.log(nav.mediaDevices);
    alert(nav.mediaDevices);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    videoRef.current.srcObject = stream;

    // Manejar la detección de errores y liberar recursos cuando sea necesario
    videoRef.current.oninactive = () => {
      // El flujo de video se detiene, puedes liberar recursos aquí si es necesario
      console.log("Libera Recurso");
    };
  } catch (error) {
    console.error("Error al acceder a la cámara web:", error);
    alert(error);
  }
};

//(async () => await trainer())();

const onPlay = async (video, canvas, descriptors) => {
  const detection = await faceapi
    .detectSingleFace(video.current)
    .withFaceLandmarks()
    .withFaceDescriptor()
    .withFaceExpressions();

  if (detection) {
    const faceMatcher = await new faceapi.FaceMatcher(descriptors);

    const bestMatch = faceMatcher.findBestMatch(detection.descriptor);
    console.log(bestMatch.toString());

    const dims = faceapi.matchDimensions(canvas.current, video.current, true);
    const resizedResults = faceapi.resizeResults(detection, dims);

    faceapi.draw.drawDetections(canvas.current, resizedResults);
    faceapi.draw.drawFaceLandmarks(canvas.current, resizedResults);
    faceapi.draw.drawFaceExpressions(canvas.current, detection, 0.05);
  }

  setTimeout(() => onPlay(video, canvas, descriptors), 1000);
};

export default function StartUp({ children }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [camera, setCamera] = useState(false);
  var descriptorsRef;

  useEffect(() => {
    camera && getVideoStream(videoRef);
  }, [camera]);

  useEffect(() => {
    if (videoRef.current) {
      trainer().then(async (descriptors) => {
        descriptorsRef = descriptors;
        descriptors && (await onPlay(videoRef, canvasRef, descriptors));
      });
    }
  }, [descriptorsRef]);

  return (
    <div className="absolute inset-0 flex items-center justify-center text-center bg-gray-600">
      <div className={`absolute inset-0`} style={{ zIndex: 1 }}>
        <video
          className="w-full h-full object-cover"
          style={{ position: "absolute", zIndex: 0 }}
          crossOrigin="anonymous"
          ref={videoRef}
          autoPlay
        />
      </div>

      <canvas
        className="w-full h-full object-cover"
        ref={canvasRef}
        style={{ zIndex: 1 }}
      ></canvas>

      <div className="flex justify-center items-center" style={{ zIndex: 1 }}>
        <Button
          onClick={() => {
            setCamera(true);
          }}
        >
          CLIQUEAME
        </Button>
      </div>
    </div>
  );
}
