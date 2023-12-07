import React, { Component } from 'react';


  import PageContact from "./PageContact.tsx";
  import PageMesures from "./PageMesures.tsx";
  import PageFonctionLegales from "./PageFonctionLegales.tsx";
  import PageIdeesRecu from "./PageIdeesRecu.tsx";
  import { useState } from "react";
  import redirection from "react-router-dom";
  function PageAccueil () {
  
    const [redirection, setRedirection] = useState(1);

    return (
      <div className="App">
        {redirection === 1 && <PageContact redirection={setRedirection} />}
        {redirection === 2 && <PageMesures redirection={setRedirection} />}
        {redirection === 3 && <PageFonctionLegales redirection={setRedirection} />}
        {redirection === 4 && <PageIdeesRecu redirection={setRedirection} />}

        <button onClick={() => setRedirection(1)}>Contact</button>
        <button onClick={() => setRedirection(2)}>Mesures</button>
        <button onClick={() => setRedirection(3)}>Fonction légales</button>
        <button onClick={() => setRedirection(4)}>Idées reçues</button>
       

      </div>
  
    );
  }


export default PageAccueil;
