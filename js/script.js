let alimento1 = prompt("ingrese un alimento")
let alimento2 = prompt("ingrese otro alimento")
let alimento3 = prompt("ingrese uno más")

const alimentos = [alimento1,alimento2,alimento3]

console.log("Lista de compras:")
for(var i = 0; i < alimentos.length; i++)
{
console.log(alimentos[i])
}