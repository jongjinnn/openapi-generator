import { Configuration, DefaultApi } from "../server";

const config = new Configuration({
  basePath: "https://api.example.com",
});

export const instance = new DefaultApi(config);
