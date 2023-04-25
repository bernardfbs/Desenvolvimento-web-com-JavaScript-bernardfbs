let fila = []
let opcao = ""

do {
  let produtos = ""
  for (let i = 0; i < fila.length; i++) {
    produtos += (i + 1) + "º - " + fila[i] + "\n"
  }

  opcao = prompt(
    "Produtos:\n" + produtos +
    "\nEscolha uma ação:\n1 - Novo produto\n2 - Remover produto\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      const novoProduto = prompt("Qual é o nome do produto?")
      fila.push(novoProduto)
      break
    case "2":
      const produtoConsultado = fila.shift()
      if (!produtoConsultado) {
        alert("Não há produtos no estoque!")
      } else {
        alert(produtoConsultado + " foi removido da fila.")
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3");