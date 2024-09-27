import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound__container">
        <h1 className="notfound__h1"><strong>UH OH! You're lost</strong></h1>
        <h2 className="notfound__h2">404 - PAGE NOT FOUND</h2>
        <p className="notfound__p">
            The page you are looking for does not exist. How you got here is a mystery.
        </p>

        <p className="notfound__p">
            But you can click the button below to go back to the homepage.
        </p>

        <p className="notfound__p"><button class="notfound__button">HOME</button></p>
    </div>
  );
};

export default NotFound;