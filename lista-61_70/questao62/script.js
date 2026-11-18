function verificarAprovacao(media) {
  let situacao = {
    Aprovado: media >= 7,
    Recuperacao: media >= 5,
    Reprovado: media < 5,
  };
  return Object.keys(situacao).find((chave) => situacao[chave]);
  /* if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
    */
}
console.log(verificarAprovacao(8.5));
console.log(verificarAprovacao(6));
console.log(verificarAprovacao(4));
