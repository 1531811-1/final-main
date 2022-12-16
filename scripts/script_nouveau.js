const lutins = 'https://5dd00936d5f1a500149a8305.mockapi.io/heros/lutins'

async function getLutins(lutins){
    const response = await fetch(lutins);
    var data = await response.json();
    console.log(data);
}

