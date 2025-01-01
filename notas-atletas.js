let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   atletas.forEach(atletaAtual => {
    atletaAtual.notas.sort((a, b) => a - b);
    
    let notasComputadas = atletaAtual.notas.slice(1, atletaAtual.notas.length - 1);

    let soma = 0
    notasComputadas.forEach(notaAtual => {
        soma = soma + notaAtual;
        
    });
    let denominador = atletaAtual.notas.length - 2;
    let media = soma / denominador;
    console.log(`Atleta: ${atletaAtual.nome}`);
    console.log(`Notas Obtidas: ${atletaAtual.notas}`)
    console.log(`Média Válida: ${media}`)
    console.log();
   });
