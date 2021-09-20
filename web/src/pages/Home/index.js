import React, { useEffect, useState } from "react";
import ModalFilme from "../../componentes/ModalFilme";
import Header from "../../componentes/Header";
import Hero from "../../componentes/Hero";
import Secao from "../../componentes/Secao";

import api from "../../services/api";
const Home = () => {
  const [principal, setPrincipal] = useState({});
  const [secoes, setSecoes] = useState([]);

  const getHome = async () => {
    try {
      const response = await api.get("/home");
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }

      setPrincipal(res.principal);
      setSecoes(res.secoes);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <>
      <ModalFilme />

      <div class="container-fluid">
        <Header />
      </div>

      <Hero hideMenu={false} filme={principal} />

      <div id="main-content">
        {secoes.map((secao) => (
          <Secao secao={secao} />
        ))}
        ;
      </div>
    </>
  );
};

export default Home;
