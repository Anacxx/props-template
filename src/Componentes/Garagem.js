import Carro from "./Carro";
// exercício 1.2 - Altere o componente Garagem para que agora seu nome seja recebido por props, ao invés de ser escrito diretamente no elemento JSX.

function Garagem(props) {
  console.log("Na garagem", props);
  return (
    <div>
      <h1>Garagem de {props.nomeGaragem}</h1>

      {/* Exercício 2.3 - Adicione no componente Garagem, um elemento de botão. Iremos adicionar um evento de clique no botão no próximo passo; */}
      <button
        // Exercício 2.4 - Adicione a chamada da função ao evento de clique no botão que foi criado.
        onClick={() => props.apresentaGaragem(props.nomeGaragem)}
      >
        Apresentar a garagem
      </button>
      {/* Exercício 3 - passando cada carro recebido pela Garagem para dentro do componente Carro por props */}
      <Carro carro={props.carro} />
      <Carro carro={props.carro2} />
      <Carro carro={props.carro3} />
      <Carro carro={props.carro4} />
    </div>
  );
}

export default Garagem;
