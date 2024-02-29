const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    // Create players using for loop
    for (let i = 0; i < players.length; i++) {
        let player = {
            name: players[i],
            strength: getRandomStrength(),
            image: `images/super-${i + 1}.png`,
            type: (i % 2 === 0) ? 'hero' : 'villain' // Alternating between hero and villain
        };
        detailedPlayers.push(player);
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100);
};

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    // Loop through players and accumulate HTML template
    for (let player of players) {
        if (player.type === type) {
            fragment += `
            <div class="player">
           <img src="${player.image}" alt="${player.name}">
           <div class="name">${player.name}</div>
           <div class="strength">${player.strength}</div>
           </div> `;
        }
    }
    return fragment;
}
//  <div class="player">
//    <img src="${players[i].image}">
//    <div class="name">${players[i].name}</div>
//    <div class="strength">${players[i].strength}</div>
// </div> 

//   '<div class="player">
//  <img src="${player.image}" alt="${player.name}">
//  <div class="name">${player.name}</div>
//  <div class="strength">${player.strength}</div>
//  </div>' 

// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
