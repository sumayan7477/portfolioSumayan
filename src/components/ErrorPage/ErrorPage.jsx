import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className=" text-center ">
      <h1 className="text-5xl ">Error 404</h1>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page Not Found</h3>
          <Link to="/">
            <button className="bg-red-500 p-3 text-white">GO back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
