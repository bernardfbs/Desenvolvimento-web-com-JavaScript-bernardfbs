let clientes = ""
let contagem = 0
let novoCliente = prompt ("Deseja inserir um novo cliente?")

while (novoCliente === "Sim") {
  let cliente = prompt ("Qual é o nome do cliente?")
  clientes += " - " + cliente + "\n"
  contagem++
  novoCliente = prompt ("Gostaria de cadastrar mais algum cliente?")
}
alert (
  "Quantidade de clientes cadastrados: " + contagem + 
  "\nClientes cadastrados: \n" + clientes
)