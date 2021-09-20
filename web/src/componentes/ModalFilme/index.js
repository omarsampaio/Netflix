import React, { useState, useEffect } from "react";
import Episodio from "../Episodio";
import api from "../../services/api";

const ModalFilme = () => {
  const [filme, setFilme] = useState({});
  const [episodeos, setEpisodeos] = useState([]);

  const selectFilmeListener = () => {
    window.addEventListener("selectFilme", (data) => {
      setFilme(data.detail);
    });
  };

  const getEpisodeos = async (temporada_id) => {
    try {
      const response = await api.get(`/episodeo/temporada/${temporada_id}`);
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }
      setEpisodeos(res.episodeos);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    selectFilmeListener();
  }, []);

  useEffect(() => {
    if (filme.tipo == "serie") {
      getEpisodeos(filme.temporadas[0]?._id);
    }
  }, [filme]);

  return (
    <div class="modal fade" id="modal-filme">
      <div class="modal-dialog">
        <div class="modal-content">
          <div
            class="modal-hero"
            style={{ backgroundImage: `url(${filme.capa})` }}
          >
            <img src={filme.logo} />
            <div class="modal-hero-infos">
              <button class="btn btn-lg btn-custom-white">
                <span class="mdi mdi-play">Assistir</span>
              </button>
              <a
                href="#"
                class="btn-custom-round btn btn-light btn-lg rounded-circle"
              >
                <span class="mdi mdi-play"></span>
              </a>
              <a
                href="#"
                class="btn-custom-round btn-lg border-white btn rounded-circle opacity-50"
              >
                <span class="mdi mdi-thumb-up text-white"></span>
              </a>
              <a
                href="#"
                class="btn-custom-round btn-lg border-white btn rounded-circle opacity-50"
              >
                <span class="mdi mdi-thumb-down text-white"></span>
              </a>
            </div>
          </div>
          <div class="modal-infos">
            <div class="container">
              <div class="row">
                <div class="col-7">
                  <p class="filme_descricao">{filme?.descricao}</p>
                </div>
                <div class="col-5">
                  <p class="filme_elenco">
                    Elenco: <text>{filme.elenco?.join(", ")}</text>
                    <br />
                    <br />
                    Gêneros: <text>{filme.generos?.join(", ")}</text>
                    <br />
                    <br />
                    Cenas e momentos:{" "}
                    <text>{filme.cenas_momentos?.join(", ")}</text>
                  </p>
                </div>
              </div>
              <br />

              {filme.tipo == "serie" && (
                <>
                  <div class="row">
                    <div class="col-7">
                      <h3 class="text-white">Episódios</h3>
                    </div>
                    <div class="col-5 text-right">
                      <select
                        onChange={(e) => {
                          getEpisodeos(e.target.value);
                        }}
                        class="form-control"
                      >
                        {filme.temporada?.map((temporada) => (
                          <option value={temporada._id}>
                            {temporada.titulo}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <ul id="lista_episodios">
                      {episodeos.map((episodeo) => (
                        <Episodio episodeo={episodeo} />
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFilme;
