const detectFileExtension = (file: File): string => {
    const filename = file.name
    return <string>filename.split('.').pop()
}

export default { detectFileExtension}