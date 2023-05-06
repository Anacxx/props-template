import React from "react";
import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = 'Ana'
  function apresentaGaragem(nome){
    alert(`Bem vindo à garagem de ${nome}`)
  }
  const fusca = {
    nome: "Fusca",
    cor: "pink",
    ano: "1982",
    flex: "Não"
  }
  const gol = {
    nome: "Gol",
    cor: "verde",
    ano: "2010",
    flex: "não"
  };
  const palio = {
    nome: "palio",
    cor: "cinza",
    ano: "2010",
    flex: "Sim"
  };
  const nome2 = "Ana C"
  const fiatMobi = {
    nome: "mobi",
    cor: "cinza",
    ano: "2014",
    flex: "Sim"
  };
  const fiatArgo  = {
    nome: "Fiat Argo",
    cor: "preto",
    ano: "2023",
    flex: "Sim"
  };
  const polo  = {
    nome: "Fiat polo",
    cor: "preto",
    ano: "2023",
    flex: "Sim"
  };
  return (
    <div>
      <Garagem 
      nomeDaGaragem ={nome} 
      apresentaGaragem = {apresentaGaragem}
      carro = {fusca}
      carro2 = {gol}
      carro3 = {palio}
      />
      <Garagem 
      nomeDaGaragem ={nome2} 
      apresentaGaragem = {apresentaGaragem}
      carro = {fiatMobi}
      carro2 = {fiatArgo}
      carro3 = {polo}
      />
    </div>

  );
}
