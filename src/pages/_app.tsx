import { type AppType } from "next/app";

import { api } from "@models/utils/api";

import "@models/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
