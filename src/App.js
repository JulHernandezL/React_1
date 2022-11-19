import "./App.css";
import ReactDOM from "react-dom/client";
import React from "react";

/**
 * It takes a city name, an offset time, and a language code, and returns a string with the current
 * time in that city
 * @param city - The name of the city.
 * @param offTime - The offset time in hours.
 * @param languageCode - The language code of the language you want to use.
 * @returns the string "Hora en " + city + ": " + utc.toLocaleTimeString(languageCode);
 */
function calcTime(city, offTime, languageCode) {
  let date = new Date();
  let utc = new Date(date.getTime() + 3600000 * offTime);
  return "Hora en " + city + ": " + utc.toLocaleTimeString(languageCode);
}
const root = ReactDOM.createRoot(document.getElementById("root"));

/* A function that returns a div element with the className "App" and the encabezado element inside. */
function App() {
  /* Creating a h1 element with the text "La Hora Local Es:". */
  const titulo = React.createElement("h1", {}, "La Hora Local Es:");

  /* Creating a h2 element with the text "Hora en Colombia: " and the time in Colombia. */
  const subtituloCo = React.createElement(
    "h2",
    {},
    calcTime("Colombia", 0, "es-co")
  );

  /* Creating a h2 element with the text "Hora en Mexico: " and the time in Mexico. */
  const subtituloMx = React.createElement(
    "h2",
    {},
    calcTime("Mexico", -1, "es-mx")
  );

  /* Creating a h2 element with the text "Hora en Estados Unidos: " and the time in Estados Unidos. */
  const subtituloUs = React.createElement(
    "h2",
    {},
    calcTime("Estados Unidos", 0, "es-us")
  );

  /* Creating a h2 element with the text "Hora en Corea: " and the time in Corea. */
  const subtituloKr = React.createElement(
    "h2",
    {},
    calcTime("Corea", 14, "es-kr")
  );

  /* Creating a h2 element with the text "Hora en Qatar: " and the time in Qatar. */
  const subtituloQa = React.createElement(
    "h2",
    {},
    calcTime("Qatar", 8, "es-qa")
  );

  /* Creating a header element with the className "App-header" and the titulo, subtituloCo, subtituloMx,
 subtituloUs, subtituloKr, subtituloQa elements inside. */
  const encabezado = React.createElement(
    "header",
    { className: "App-header" },
    titulo,
    subtituloCo,
    subtituloMx,
    subtituloUs,
    subtituloKr,
    subtituloQa
  );

  /* Creating a div element with the className "App" and the encabezado element inside. */
  const div = React.createElement("div", { className: "App" }, encabezado);

  /* A comment. */
  /*
  const element = (
    <div className="App">
      <header className="App-header">
        <h2>{calcTime("Colombia", 0, "es-co")}</h2>
        <h2>{calcTime("Mexico", -1, "es-mx")}</h2>
        <h2> {calcTime("Estados Unidos", 0, "es-us")}</h2>
        <h2> {calcTime("Corea", 14, "es-kr")}</h2>
        <h2> {calcTime("Qatar", 8, "es-qa")}</h2>
      </header>
    </div>
  );
  */

  /* Rendering the div element in the root element. */
  root.render(div);
}

/* Exporting the App function. */
export default App;
