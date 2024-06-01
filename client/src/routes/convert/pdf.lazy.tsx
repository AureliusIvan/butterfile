import {useEffect, useState} from "react";
import {createLazyFileRoute} from '@tanstack/react-router'
import axiosInstance from "@/libs/axios.config.ts";
import UploadFileComponent from "@/components/upload-file/upload-file.component.tsx";
import {ActionButton as Button} from "@/components/button/action-button.tsx";
import {toast} from 'react-toastify';

export const Route = createLazyFileRoute('/convert/pdf')({
  component: ConvertPdfPdf
})

const requestData = async (): Promise<string> => {
  return await axiosInstance.get('/api/convert/')
      .then((res) => {
        console.log(res.data.message)
        return res.data.message
      })
      .catch((err) => {
        console.log(err)
        return err as string
      })
}

const submitFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return axiosInstance.post('/api/convert/pdf/jpg', formData).then((res) => {
    console.log(res.data.message)
    return res.data.message
  }).catch((err) => {
    console.log(err)
    return err as string
  })
}

function ConvertPdfPdf() {
  const data = requestData()
  const [, setResponse] = useState('Loading...')
  useEffect(() => {
    data.then((res) => {
      setResponse(res)
    })
  }, [data])
  return (
      <main>
        <h1>Convert your PDF!</h1>
        {UploadFileComponent({
          callback: () => {
            console.log('file uploaded')
          },
          fileTypes: ['application/pdf']
        })}

        <div>
          <Button onClick={() => {
            console.log('clicked')
            submitFile(new File([''], '')).then(r => console.log(r))
            toast.success('File converted successfully')
          }}>
            Convert to Image
          </Button>
        </div>
      </main>
  )
}