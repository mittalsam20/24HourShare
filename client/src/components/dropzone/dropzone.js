import { useEffect, useRef, useState } from "react";
import ProgressBar from "../progressbar/progressbar";

const DropZone = () => {
  const [percent, setPercent] = useState(0);

  const dropzone = useRef();
  const fileinputref = useRef();
  const browsebtn = useRef();
  const host = "https://innshare.herokuapp.com/";
  const uploadURL = `${host}api/files`;

  const updateProgress = (e) => {
    setPercent(Math.round((e.loaded / e.total) * 100));
    console.log(percent);
    console.log(e);
  };

  const upload_file = () => {
    const file = fileinputref.current.files[0];
    const form_data = new FormData();
    form_data.append("myfile", file);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);
        console.log(xhr.readyState);
      }
    };

    // xhr.upload.onprogress = updateProgress();
    xhr.open("POST", uploadURL);
    xhr.send(form_data);
  };

  useEffect(() => {
    console.log(dropzone.current);
    console.log(dropzone.current);
    console.log(dropzone.current);

    dropzone.current.addEventListener("dragover", (e) => {
      e.preventDefault();
      // console.log("its wokring");
      dropzone.current.classList.add("dragged");
    });
    dropzone.current.addEventListener("dragleave", (e) => {
      dropzone.current.classList.remove("dragged");
    });
    dropzone.current.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.current.classList.remove("dragged");
      // console.log(e.dataTransfer.files);
      const files = e.dataTransfer.files;
      if (files.length) {
        fileinputref.current.files = files;
        upload_file();
      }
    });

    browsebtn.current.addEventListener("click", (e) => {
      e.preventDefault();
      fileinputref.current.click();
    });

    fileinputref.current.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.current.classList.remove("dragged");
    });
  }, [dropzone, browsebtn, fileinputref]);

  useEffect(() => {}, [percent]);

  return (
    <>
      <section className="uploadcontainer">
        <div className="dropzone" ref={dropzone}>
          <div className="iconcontainer">
            <img
              src="file.svg"
              alt="File-icon"
              className="center"
              draggable="false"
            />
            <img
              src="file.svg"
              alt="File-icon"
              className="left"
              draggable="false"
            />
            <img
              src="file.svg"
              alt="File-icon"
              className="right"
              draggable="false"
            />
          </div>
          <input type="file" id="fileinput" ref={fileinputref} />

          <div className="title">
            Drop your Files here or ,
            <span className="browsebutton" ref={browsebtn}>
              browse
            </span>
          </div>
        </div>
        <ProgressBar percent={percent} setPercent={setPercent} />
      </section>
    </>
  );
};

export default DropZone;
