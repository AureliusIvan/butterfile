import {FC} from "react";
import useFileUpload from "@/hooks/useFileUpload.ts";

/**
 * Props for the UploadFileComponent
 */
interface UploadFileComponentProps {
    callback: () => void;
    fileTypes: string[];
}

/**
 * UploadFileComponent - A component for uploading files
 * @param {UploadFileComponentProps} props - Props for the component
 * @param {() => void} props.callback - Function to be called when a file is uploaded
 * @returns {JSX.Element} The rendered component
 */
const UploadFileComponent: FC<UploadFileComponentProps> = ({callback, fileTypes}) => {
    const defaultAllowedFileTypes = ['application/pdf'];

    const [, handleChange] = useFileUpload(callback, fileTypes || defaultAllowedFileTypes);
    return (
        <div
            className="upload-file dropzone bg-gray-200 border-dashed border-2 border-gray-300 p-4 rounded-lg text-center">
            <input
                type="file"
                onChange={handleChange}
                className="file-input"
            />
        </div>
    );
};

export default UploadFileComponent;
