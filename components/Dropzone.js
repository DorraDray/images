"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  console.log(getRootProps(), getInputProps());
  function removeFile(name) {
    setFiles((file) => files.filter((file) => file.name !== name));
  }

  return (
    <>
      <div {...getRootProps()} className="div">
        <input {...getInputProps()} id="image" value={files.map} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag and drop some files here, or click to select files</p>
        )}
      </div>

      <h4>Preview </h4>

      <ul>
        {files.length === 0 ? (
          <li>No files yet</li>
        ) : (
          files.map((file) => (
            <li key={file.name}>
              {file.name}
              <Image src={file.preview} alt="" width={100} height={100} />
              <button onClick={() => removeFile(file.name)}>Delete</button>
            </li>
          ))
        )}
      </ul>
      {/*Previews files by mapping through them, returning its name and the image preview, created in setFiles via Object.assign
    If no files, returns no files yet */}
    </>
  );
}
