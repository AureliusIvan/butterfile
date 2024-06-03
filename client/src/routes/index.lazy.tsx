import {createLazyFileRoute} from '@tanstack/react-router'
import "./../index.css"
import axiosInstance from "@/libs/axios.config.ts";
import {useEffect, useState} from "react";

export const Route = createLazyFileRoute('/')({
  component: Index,
})

// get all
const requestData = async () => {
  return await axiosInstance.get('/api/').then((res) => {
    return res.data
  }).catch((err) => {
    console.error(err)
    return err as string
  })
}

interface Data {
  id: number,
  name: string
}


function Index() {
  const [data, setData] = useState<[]>([])
  useEffect(() => {
    requestData().then((res) => {
      console.log(res)
      setData(res.data)
    })
  }, [])

  return (
      <main
          className="p-4 space-y-4
          "
      >

        <h1
            className={'text-4xl font-bold'}
        >
          Welcome Home!
        </h1>

        <h2
            className={'text-2xl font-bold'}
        >
          Our Products
        </h2>
        {
          data ? data?.map((d: Data, i: number) => {
                return (
                    <div
                        className={'p-2 m-2 bg-gray-200 rounded-md'}
                        key={i}>
                      {d.name}
                    </div>)
              }
          ) : <div>Loading...</div>
        }

      </main>
  )
}
