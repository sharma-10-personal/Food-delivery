import cat from "../../cat404.png";

const ErrorPage = () => {
  return (
    <div>
      <div className="error-cat">
        <img src={cat} />
      </div>
      <div className="error-cat">
        <h1>Oops!!!! Something Went Wrong..</h1>
      </div>
    </div>
  );
};

export default ErrorPage;
