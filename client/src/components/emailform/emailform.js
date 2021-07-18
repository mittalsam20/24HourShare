import { useState, useEffect } from "react";

const EmailForm = ({ data }) => {
  const [sender, setSender] = useState("");
  const [reciver, setReciver] = useState("");
  const emailURL = "api/files/send";
  useEffect(() => {}, [reciver, sender]);

  return (
    <>
      <p>Send Via Email</p>
      <div className="forminnercont">
        <form>
          <div className="filed">
            <label htmlFor="sender">Your Email</label>
            <input
              type="email"
              name="from"
              id="sender"
              required
              value={sender}
              onChange={(e) => {
                setSender(e.target.value);
              }}
            />
          </div>
          <div className="filed">
            <label htmlFor="reciever">Recivers Email</label>
            <input
              type="email"
              name="to"
              id="reciever"
              required
              value={reciver}
              onChange={(e) => {
                setReciver(e.target.value);
              }}
            />
          </div>
          <div class="send-btn-container">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log("submit form");

                // uuid: data.split("/").splice(-1, 1)[0],
                const formdata = {
                  emailTo: reciver,
                  emailFrom: sender,
                };
                console.log(formdata);


                fetch(emailURL,{
method:"POST",
headers:{
"Content-Type":"application/json",
},
body:JSON.stringify(formdata),                   

                }).then(res=>res.json()).then(data=>{console.log(data)
                
//                 if(success){
// setReciver("");
// setSender("");
//                 }
                
                }).catch(err=>console.log(err));
              }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmailForm;
