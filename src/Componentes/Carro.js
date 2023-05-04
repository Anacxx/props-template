function Carro(props) {
  console.log("Dentro do carro", props);
  return (
    <div>
      {/* Exercício 3 - Acessando o carro recebido por props da Garagem */}
      <h2>{props.carro.nome}</h2>
      <ul>
        <li>Cor: {props.carro.cor} </li>
        <li>Ano: {props.carro.ano} </li>
        <li>Flex: {props.carro.flex}</li>
      </ul>
    </div>
  );
}

export default Carro;