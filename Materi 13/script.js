let antrian = ["ray", "fiki", "fadhilla", "farah"];

antrian.push("nabila"); 
console.log(antrian); 
antrian.push("maza", "elsi"); 
console.log(antrian); 

antrian.pop(); 
console.log(antrian); 

antrian.shift();
console.log(antrian); 
antrian.shift(); 
console.log(antrian); 


antrian.unshift("tomi");
console.log(antrian);

// Menampilkan hasil antrian akhir 
document.getElementById("result").textContent = antrian.join(", ");
