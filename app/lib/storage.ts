import { createStorage } from "unstorage";
import denoKVdriver from "unstorage/drivers/deno-kv";

const storage =
  import.meta.env.MODE === "development"
    ? createStorage()
    : createStorage({
        driver: denoKVdriver({
          base: "website-start",
        }),
      });
export default storage;
