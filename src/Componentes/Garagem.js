import React from "react";

import Carro from "./Carro";

function Garagem(props) {
  console.log("Na garagem", props);
  return (
    <div>
      <h1>Garagem de {props.nomeDaGaragem}</h1>
      <button onClick={() => props.apresentaGaragem(props.nomeDaGaragem)}>Boas vindas</button>
      <Carro carro = {props.carro}/>
      <Carro carro = {props.carro2} />
      <Carro carro = {props.carro3} />
    </div>
  );
}

export default Garagem;
