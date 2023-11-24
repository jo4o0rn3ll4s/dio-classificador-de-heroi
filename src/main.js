const nome_heroi = ["Hugo", "Claudio", "José", "Mario", "Joana", "Maria"];
const xp_heroi   = [3000   , 10      , 1500  , 15000  , 6500   , 8999   ];

let   nivel;

for(let j = 0; j < nome_heroi.length; j++){
  
  if(xp_heroi[j] <= 1000) nivel = "ferro"
  else if(xp_heroi[j] <= 2000) nivel = "bronze"
  else if(xp_heroi[j] <= 5000) nivel = "prata"
  else if(xp_heroi[j] <= 7000) nivel = "ouro"
  else if(xp_heroi[j] <= 8000) nivel = "platina"
  else if(xp_heroi[j] <= 9000) nivel = "ascendente"
  else if(xp_heroi[j] <= 10000) nivel = "imortal"
  else nivel = "radiante"

  console.log(`O Herói de nome ${nome_heroi[j].toUpperCase()} está no nível de ${nivel.toUpperCase()}`);
  
}
