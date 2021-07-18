import { useRef, useEffect } from "react";

const ProgressBar = ({ percent, setPercent }) => {
  const bgbar = useRef();
  const smallbgbar = useRef();
  setPercent(100);

  useEffect(() => {
    bgbar.current.addEventListener("", () => {});
    bgbar.current.style.width = `${percent}%`;
    smallbgbar.current.style.transform = `scaleX(${percent / 100})`;
    console.log(percent);
  }, [bgbar, smallbgbar, percent]);

  useEffect(() => {}, [percent]);

  return (
    <>
      <div className="progresscontainer">
        <div className="bgprogress" ref={bgbar}></div>

        <div className="innerall">
          <div className="title"> Uploading... </div>
          {/* <div className="percentcontainer"> */}
          <span className="percent">{`${percent}%`}</span>
          {/* </div> */}
          <div className="smallpbbar" ref={smallbgbar}></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
