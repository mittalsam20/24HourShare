import { useEffect, useRef } from "react";
const LinkCont = ({ data }) => {
  const urlinput = useRef();

  useEffect(() => {
    urlinput.current.select();
    document.execCommand("copy");
  }, [urlinput]);

  return (
    <>
      <div className="linkshare">
        <p className="expire">Link expires in 24 hours </p>
        <div className="input">
          <input
            type="text"
            id="fileurl"
            readOnly
            value="hellllo"
            // value={data.url}
            ref={urlinput}
          />
          <img
            src="copy.svg"
            alt="copy-icon"
            onClick={() => {
              urlinput.current.select();
              document.execCommand("copy");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LinkCont;
