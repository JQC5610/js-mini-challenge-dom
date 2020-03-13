/***** Deliverable 1 *****/
    const header = document.getElementById("header");
    console.log("Here's your header:", header);
    const playerContainer = document.getElementsByClassName("player-container")[0];






/***** Deliverable 2 *****/

header.style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

PLAYERS.forEach(element => {
    let playerDiv = document.createElement("div");
    playerDiv.innerHTML = `
        <div class="player" data-number='${element.number}'>
        <h3>
            ${element.name} (<em>${element.nickname}</em>)
        </h3>
        <img src="${element.photo}" alt="${element.name}">
        </div>`;
    playerContainer.appendChild(playerDiv);
})


/***** Deliverable 4 *****/

document.querySelector('[data-number="7"]').remove()
