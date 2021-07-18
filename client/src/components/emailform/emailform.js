const EmailForm = () => {
  return (
    <>
      <p>Send Via Email</p>
      <div className="forminnercont">
        <form>
          <div className="filed">
            <label htmlFor="sender">Your Email</label>
            <input type="email" name="from" id="sender" required />
          </div>
          <div className="filed">
            <label htmlFor="reciever">Recivers Email</label>
            <input type="email" name="to" id="reciever" required />
          </div>
        </form>
      </div>
    </>
  );
};

export default EmailForm;
