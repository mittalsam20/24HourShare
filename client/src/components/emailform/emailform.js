const EmailForm = () => {
  return (
    <>
      <p>Send Via Email</p>
      <div className="forminnercont">
        <form>
          <div className="filed">
            <label htmlFor="sender">
              Your Email
              <input type="email" name="from" id="sender" required />
            </label>
          </div>
          <div className="filed">
            <label htmlFor="reciever">
              Recivers Email
              <input type="email" name="to" id="reciever" required />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmailForm;
