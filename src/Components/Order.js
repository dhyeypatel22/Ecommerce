import React from 'react';
import "../Style.css";
import { useNavigate } from 'react-router-dom';


function Order() {

    const Main = useNavigate();
    const goToMain = () => {
      Main("/");
    };

  return (
    <>
    <div id="notfound">
  <div className="notfound">
    <div className="notfound-404">
      <h1>:(</h1>
    </div>
    <h2>404 - Page not found</h2>
    <p>
      The page you are looking for might have been removed or is temporarily
      unavailable.
    </p>
    <button onClick={goToMain}>home page</button>
  </div>
</div>

    </>
  )
}

export default Order