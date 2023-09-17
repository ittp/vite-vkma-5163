import React from "react";
import ReactDOM from "react-dom/client";
import { AdaptivityProvider, ConfigProvider, useConfigProvider } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
// import { } from "@vkontakte/vk-bridge-react";
import App from "./App";

import { AddressView } from './Addresses'

import "@vkontakte/vkui/dist/cssm/styles/themes.css";

import axios from 'axios' 


bridge.send("VKWebAppInit");








// bridge.send("VKWebAppGetConfig").then(config => console.log(config))

// const { isIframe, isStandalone, isEmbedded, isWebView, supports } = bridge

// // let platform = usePlatform()
// import { withPlatform, Platform } from '@vkontakte/vkui';

// class MyComponent extends React.Component {
//   render() {
//     const { platform } = this.props; // android или ios
//     return '...';
//   }
// }

// withPlatform(MyComponent);

// console.log([isIframe, isStandalone, isEmbedded, isWebView].map(i => i()))

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider  isWebView>
      <AdaptivityProvider>
            <App title={"Support"} />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
