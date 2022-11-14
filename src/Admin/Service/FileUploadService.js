import axios from "axios";
import AuthHeader2 from "../../Authentication/Service/AuthHeader2";

class UploadFilesService {

    upload(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);
        return axios.post("http://localhost:9991/fitness/file/food_items", formData, {
            headers: AuthHeader2(),
            onUploadProgress,

        });
    }

    getFiles() {
        return axios.get("http://localhost:9991/fitness/file/food_items");
    }
}

export default new UploadFilesService();