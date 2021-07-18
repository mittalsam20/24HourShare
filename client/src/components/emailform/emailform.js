const EmailForm = () => {
  return (
    <>
      <p>Send Via Email</p>
      <div className="forminnercont">
        <form>
          <label htmlFor="sender">
            Your Email
            <input type="email" name="from" id="sender" required />
          </label>
          <br />
          <label htmlFor="reciever">
            Recivers Email
            <input type="email" name="to" id="reciever" required />
          </label>
        </form>
      </div>
    </>
  );
};

export default EmailForm;
