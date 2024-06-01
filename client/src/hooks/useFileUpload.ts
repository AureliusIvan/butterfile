import { useState, useEffect, ChangeEvent } from "react";

/**
 * Custom hook to handle file upload logic
 * @param {() => void} callback - Function to be called when a file is uploaded
 * @param fileTypes
 * @returns {[File | null, (e: ChangeEvent<HTMLInputElement>) => void]} - The file and the change handler
 */
const useFileUpload = (callback: () => void,
                       fileTypes: string[] = [],
                       ): [File | null, (e: ChangeEvent<HTMLInputElement>) => void] => {
    const [file, setFile] = useState<File | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Check if a file was uploaded
        if (!(e.target.files && e.target.files.length > 0)) {
            return;
        }
        // Check if the file type is allowed
        if (fileTypes.length > 0 && !fileTypes.includes(e.target.files[0].type)) {
            return;
        }

        setFile(e.target.files[0]);
    };

    useEffect(() => {
        if (file) {
            callback();
        }
    }, [file, callback]);

    return [file, handleChange];
};

export default useFileUpload;
