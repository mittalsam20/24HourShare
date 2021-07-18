import { useEffect, useRef, useState } from "react";
import ProgressBar from "../progressbar/progressbar";

const DropZone = () => {
  const [percent, setPercent] = useState(0);

  const dropzone = useRef();
  const fileinputref = useRef();
  const browsebtn = useRef();
  const bgbarcont = useRef();
  const host = "https://innshare.herokuapp.com/";
  const uploadURL = `${host}api/files`;

  const updateProgress = (e) => {
    setPercent(Math.round((e.loaded / e.total) * 100));
    console.log(percent);
    console.log(e);
  };

  const upload_file = () => {
    bgbarcont.current.style.display = "inline";

    console.log("upload file func ke andar", bgbarcont.current);

    const file = fileinputref.current.files[0];
    const form_data = new FormData();
    form_data.append("myfile", file);

    // const xhr = new XMLHttpRequest();

    //
    // xhr.onreadystatechange = () => {
    // if (xhr.readyState === XMLHttpRequest.DONE) {
    if (true) {
      // console.log(xhr.response);
      // console.log(xhr.readyState);
      // showlink(JSON.parse(xhr.response));
      showlink("hello");
    }
    // };

    // xhr.upload.onprogress = updateProgress();
    // xhr.open("POST", uploadURL);
    // xhr.send(form_data);
  };

  const showlink = (file) => {
    console.log(file);
    bgbarcont.current.style.display = "none";
  };

  useEffect(() => {
    console.log(dropzone.current);
    console.log(dropzone.current);
    console.log(dropzone.current);

    dropzone.current.addEventListener("dragover", (e) => {
      e.preventDefault();
      bgbarcont.current.style.display = "inline";
      console.log("its working");
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
  }, [dropzone, browsebtn, fileinputref, bgbarcont]);

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
        <div ref={bgbarcont} className="showhide">
          <ProgressBar percent={percent} setPercent={setPercent} />
        </div>
      </section>
    </>
  );
};

export default DropZone;
