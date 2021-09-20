import React from "react";

const Filme = ({ filme }) => {
  const selecFilme = () => {
    const event = new CustomEvent("selectFilme", {
      detail: filme,
    });
    window.dispatchEvent(event);
  };

  return (
    <li
      class="filme"
      onClick={selecFilme}
      data-toggle="modal"
      data-target="#modal-filme"
    >
      <img class="img-fluid" src={filme.thumb} />
      <div class="filme_info">
        <div class="col-12">
          <a href="#" class="btn-custom-round btn btn-light rounded-circle">
            <span class="mdi mdi-play"></span>
          </a>
          <a
            href="#"
            class="btn-custom-round border-white btn rounded-circle opacity-50"
          >
            <span class="mdi mdi-thumb-up text-white"></span>
          </a>
          <a
            href="#"
            class="btn-custom-round border-white btn rounded-circle opacity-50"
          >
            <span class="mdi mdi-thumb-down text-white"></span>
          </a>
          <a
            href="#"
            class="btn-custom-round border-white btn rounded-circle opacity-50"
          >
            <span class="mdi mdi-plus text-white"></span>
          </a>
        </div>
        <p>
          T8 EP12 <text>O mundo sombrio</text>{" "}
        </p>
      </div>
    </li>
  );
};

export default Filme;
