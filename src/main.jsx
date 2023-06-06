import i18next from "i18next";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";

// --------------------------------------------------------------------

import { Loader } from "./components";
import { DataProvider } from "./context/useContext";
import global_en from "./locales/en/global.json";
import global_es from "./locales/es/global.json";
import { routes } from "./routes/AllRoutes.jsx";

// CSS
import "./main.css";

// --------------------------------------------------------------------

const currentLang = localStorage.getItem("i18nextLng") || "es";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: currentLang,
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <I18nextProvider i18n={i18next}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={routes} />
        </Suspense>
      </I18nextProvider>
    </DataProvider>
  </React.StrictMode>
);
