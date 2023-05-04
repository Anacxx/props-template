import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  // exercício 1.1 - Em nosso componente principal, o App, vamos criar uma variável nome, que deve ter o seu nome como valor e será passada para a garagem através de props.
  const nome = "Faruqi";

  // Exercício 2.1 - Crie no componente App uma função apresentaGaragem. Esta função recebe o nome como parâmetro e exibe um alert, dizendo “Boas vindas à garagem de seu-nome”.
  function apresentaGaragem(nome) {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  // Exercício 3.1 - Em nosso componente App, vamos criar uma variável com as propriedades do carro (nome, cor, ano e flex) e passá-la por props até o componente Carro.
  const fusca = {
    nome: "Fusca",
    cor: "preto",
    ano: 1972,
    flex: "sim"
  };

  const gol = {
    nome: "Gol",
    cor: "verde",
    ano: 2010,
    flex: "não"
  };

  const uno = {
    nome: "Uno",
    cor: "azul",
    ano: 1991,
    flex: "não"
  };

  const outroFusca = {
    ...fusca,
    ano: 1983,
    cor: "rosa bebê"
  };

  const novoNome = "Labenu";
  const fiesta = {
    nome: "fiesta",
    ano: 2001,
    cor: "branco",
    flex: "não"
  };
  const opala = {
    nome: "opala",
    ano: 1988,
    cor: "preto",
    flex: "não"
  };
  const celta = {
    nome: "celta",
    ano: 2001,
    cor: "azul",
    flex: "não"
  };

  return (
    <div className="App">
      <Garagem
        nomeGaragem={nome}
        // Exercício 2.2 - Passe a função apresentaGaragem por props para o componente Garagem;
        apresentaGaragem={apresentaGaragem}
        // Exercício 3 - passando os carros pra dentro da garagem por props
        carro={fusca}
        carro2={gol}
        carro3={uno}
        carro4={outroFusca}
      />
      {/* Exercício final - criar uma nova garagem com novo nome e novos carros */}
      <Garagem
        nomeGaragem={novoNome}
        apresentaGaragem={apresentaGaragem}
        carro={fiesta}
        carro2={celta}
        carro3={opala}
        carro4={uno}
      />
      {/* ! ATENÇÃO !: 
        por enquanto, a garagem (ou os componentes reutilizáveis) precisam sempre ter o mesmo numero de componentes filhos!
        */}
    </div>
  );
}
