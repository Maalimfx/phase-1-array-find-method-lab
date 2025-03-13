// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.team === "Denver Broncos" && game.result === "W");
    return win ? win.year : undefined;
}

function superbowlWin(record){
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

let superbowlRecords = [
    { year: "2015", team: "Denver Broncos", result: "W" },
    { year: "2014", team: "Seattle Seahawks", result: "W" },
    { year: "2013", team: "Baltimore Ravens", result: "W" }
];

console.log(superbowlWin(superbowlRecords)); // Output: "2015"


// function superbowlWin(record){
//     const win = record.find(game => game.result === "W");
//     return win ? win.year : undefined;
// }

// console.log(superbowlWin(win))




