let idade = +prompt("Digite sua idade:");
let cnh = prompt("Você possui CNH? Responda com sim ou não");

if (idade >= 18 && cnh == "não") {
  console.log(
    "Você não pode dirigir, mas pode fazer a CNH para poder dirigir!",
  );
  alert("Você não pode dirigir, mas pode fazer a CNH para poder dirigir!");
} else if (idade >= 18 && cnh == "sim") {
  console.log("Você pode dirigir!");
  alert("Você pode dirigir!");
} else idade < 18 && cnh == "não";
{
  console.log("Você nem pode fazer uma cnh, nem dirigir");
}
