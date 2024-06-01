import axiosInstance from "@/libs/axios.config.ts";

const convertPdftoImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return axiosInstance.post('/api/convert/pdf/jpg', formData);
}

export {
    convertPdftoImage
}