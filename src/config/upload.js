import axios from "axios";
import { uploadUrl, api_key, api_secret, cloud_name } from "./url";

export const upload = async (file) => {
  try {
    const fd = new FormData();
    const timestamp = Date.now();
    fd.append("file", file);
    fd.append("api_key", api_key);
    fd.append('timestamp', timestamp);

    axios
      .post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, fd, {
        headers: {
          "Custom-Header": "value",
          "Content-Type": "multipart/form-data",
          "access-control-allow-origin": "*",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        // setMsg("Upload failed");
        console.error(err);
      });
  } catch (err) {
    console.log(err?.message);
  }
};
