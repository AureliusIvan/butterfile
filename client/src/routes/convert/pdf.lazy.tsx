import {useState} from "react";
import {createLazyFileRoute} from '@tanstack/react-router'
import axiosInstance from "@/libs/axios.config.ts";
import UploadFileComponent from "@/components/upload-file/upload-file.component.tsx";
import {ActionButton as Button} from "@/components/button/action-button.tsx";
import {toast} from 'react-toastify'


export const Route = createLazyFileRoute('/convert/pdf')({
  component: ConvertPdfPdf
})

const submitFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', 'test');
  formData.append('type', 'jpg');
  return axiosInstance.post('/api/convert/pdf/jpg', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
      .then((res) => {
        console.log(res.data.message)
        return res.data
      }).catch((err) => {
        console.error(err)
        return err as string
      })
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

        <div>
          <Button onClick={() => {
            if (!file) {
              toast.error('Please upload a file')
              return
            }

            submitFile(file as File)
                .then(r => {
                  toast.success('File converted successfully')
                  console.log(r)
                  window.open(
                      import.meta.env.VITE_BACKEND_URL + "/" + r.path,
                      '_blank'
                  )
                })
                .catch(e => {
                  console.error(e)
                  toast.error('Error converting file')
                })
          }}> Convert to JPG
          </Button>
        </div>
      </main>
  )
}