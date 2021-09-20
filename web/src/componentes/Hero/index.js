import React from "react";

const Hero = ({ filme }) => {
  return (
    <div
      id="hero"
      class="container-fluid"
      style={{
        backgroundImage: `url(${filme.capa})`,
      }}
    >
      <div class="container">
        <div class="row" id="hero_infos">
          <div class="col-6">
            <img class="logo" src={filme.logo} />
            <h1 class="text-white">
              <img src={require("../../assets/badge-top-10.png")} />
              Top 1 hoje no Brail.
            </h1>
            <p class="text-white">{filme.descricao?.substr(0, 190)}...</p>
            <br />
            <button class="btn btn-lg btn-custom-white">
              <span class="mdi mdi-play"></span> Assistir
            </button>
            <button class="btn btn-lg btn-custom-translucent">
              <span class="mdi mdi-information-outline"></span> Mais Informações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
