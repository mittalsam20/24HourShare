import { useEffect, useRef, useState } from "react";
import LinkCont from "../linkcont/linkcont";
import ProgressBar from "../progressbar/progressbar";
import EmailForm from "../emailform/emailform";

const DropZone = () => {
  const [percent, setPercent] = useState(0);
  const [data, setData] = useState({});

  const linkcont = useRef();
  const emailcont = useRef();
  const dropzone = useRef();
  const fileinputref = useRef();
  const browsebtn = useRef();
  const bgbarcont = useRef();

  const host = "https://innshare.herokuapp.com/";
  const uploadURL = `${host}api/files`;

  const updateProgress = (e) => {
    console.log(e);
    // setPercent(Math.round((e.loaded / e.total) * 100));
    console.log(percent);
  };

  const upload_file = () => {

    if(fileinputref.current.files.length>1){
console.log("only one file")
return;
    }
if(file.size[0]>100*1024*1024){

  console.log("cant upload more than 100 mb");
  return;
}

    bgbarcont.current.style.display = "inline";

    console.log("upload file func ke andar", bgbarcont.current);

    const file = fileinputref.current.files[0];
    const form_data = new FormData();
    form_data.append("myfile", file);

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);
        console.log(xhr.readyState);
        // showlink(JSON.parse(xhr.response));
        setData(JSON.parse(xhr.response));
        showlink("hello");
      }
    };

    xhr.upload.onprogress = updateProgress();
    xhr.open("POST", uploadURL);
    xhr.send(form_data);
    // bgbarcont.current.style.display = "none";
  };

  const showlink = ({ file: url }) => {
    console.log(url);
    linkcont.current.style.display = "inline";
    bgbarcont.current.style.display = "none";
    emailcont.current.style.display = "inline";
  };

  useEffect(() => {
    console.log(dropzone.current);

    dropzone.current.addEventListener("dragover", (e) => {
      e.preventDefault();
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
  }, [dropzone, browsebtn, fileinputref, bgbarcont, emailcont, linkcont]);

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
        <div className="linkcont" ref={linkcont}>
          <LinkCont data={data} />
        </div>
        <div className="emailcont" ref={emailcont}>
          <EmailForm data={data} />
        </div>
      </section>

<div className="backimage">  

</div>

    </>
  );
};

export default DropZone;
