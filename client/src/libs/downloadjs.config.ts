import download from 'downloadjs';
/*
* @param path: string
* @return void
* */
const downloadFile = (path: string) => {
  const URL = import.meta.env.VITE_BACKEND_URL + "/"

  if (!path) {
    throw new Error('Path is required')
  }

  if (!URL) {
    throw new Error('URL is required')
  }

  fetch(
      URL + path)
      .then((res) => res.blob())
      .then((blob) => {
        download(blob, path)
      })
}

export {downloadFile}