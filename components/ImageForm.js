"use client";

import Dropzone from "@/components/Dropzone";
import { useState } from "react";

export function ImageForm() {
  const [files, setFiles] = useState([]);

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   let formData = new formData();
  //   files.map((file) => {
  //     formData.append("fiels[]", file.preview);
  //   });
  //   await fetch("api/images/create?a=v", {
  //     body: formData,
  //     headers: {},
  //     method: "post",
  //   });
  // }

  return (
    <form>
      {/* <Dropzone />
      <button type="submit">Add</button> */}
    </form>
  );
}
