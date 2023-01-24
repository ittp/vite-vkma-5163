import React from "react";
import ReactDOM from "react-dom/client";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import "@vkontakte/vkui/dist/cssm/styles/themes.css";

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
