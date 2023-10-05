import * as faceapi from "face-api.js";
const MODEL_URL = "/models/";

const people = [
  { name: "Alfonso", imageUrl: "/images/alfonso.jpg" },
  { name: "Katy", imageUrl: "/images/katy.jpg" },
];

const loadModel = async () => {
  await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
  await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
  await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
  await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
};

const trainer = async () => {
  await loadModel();
  const descriptorsPromesas = people.map(async (person) => {
    return await matcher(person.name, person.imageUrl);
  });

  return await Promise.all(descriptorsPromesas);
};

const matcher = async (name, imageUrl) => {
  try {
    const image = await faceapi.fetchImage(imageUrl);

    const singleResult = await faceapi
      .detectSingleFace(image)
      .withFaceLandmarks()
      .withFaceDescriptor();

    return new faceapi.LabeledFaceDescriptors(name, [singleResult.descriptor]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { trainer };
