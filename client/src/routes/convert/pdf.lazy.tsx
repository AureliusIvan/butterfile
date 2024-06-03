import {useState} from "react";
import {createLazyFileRoute} from '@tanstack/react-router'
import axiosInstance from "@/libs/axios.config.ts";
import UploadFileComponent from "@/components/upload-file/upload-file.component.tsx";
import {ActionButton as Button} from "@/components/button/action-button.tsx";
import {toast} from 'react-toastify'
import {downloadFile} from "@/libs/downloadjs.config.ts";

export const Route = createLazyFileRoute('/convert/pdf')({
  component: ConvertPdfPdf
})

const submitFile = async (file: File,
                          convertTo: string = "jpg"): Promise<void> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', file.name);
  formData.append('type', convertTo);

  try {
    const res = await axiosInstance.post('/api/convert/pdf/img',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
    console.log(res.data);
    toast.success(res.data.message);
    downloadFile(res.data.path);
  } catch (error) {
    console.error(error);
    toast.error('Error converting file');
  }
}

function ConvertPdfPdf() {
  const [file, setFile] = useState<File | null>(null)

  return (
      <main
          className={'flex flex-col items-center justify-center h-full p-4 space-y-4'}
      >

        <h1 className={'text-4xl font-bold'}>
          Convert your PDF!
        </h1>

        {UploadFileComponent({
          callback: (file) => {
            setFile(file)
          },
          fileTypes: ['application/pdf']
        })}

        <div
        className={'flex gap-4'}
        >
          <Button onClick={() => {
            if (!file) {
              toast.error('Please upload a file')
            }

            submitFile(file as File, 'jpg')
                .catch((err) => console.error(err))
          }}>
            Convert to JPG
          </Button>

          <Button onClick={() => {
            if (!file) {
              toast.error('Please upload a file')
            }

            submitFile(file as File, 'png')
                .catch((err) => console.error(err))
          }}>
            Convert to PNG
          </Button>
        </div>
      </main>
  )
}