function gameObject() {
    const ball = {}
    
    ball.home = {teamName:'Brooklyn Nets', colors: ['Black', 'White']}
    ball.away = {teamName:'Charlotte Hornets', colors: ['Turquoise', 'Purple']}
  
    ball.home.players = {'Alan Anderson': {}, 'Reggie Evans': {},	'Brook Lopez': {}, 'Mason Plumlee': {}, 'Jason Terry': {}}
    ball.away.players = {'Jeff Adrien': {}, 'Bismak Biyombo': {},	'DeSagna Diop': {}, 'Ben Gordon':{}, 'Brendan Haywood': {}}
    
    ball.home.players['Alan Anderson'] = {"number": 0, "shoe": 16, "points": 22, "rebounds": 12, "assists": 12, "steals": 3, "blocks": 1, "slamDunks": 1}
    ball.home.players['Reggie Evans'] = {"number": 30, "shoe": 14, "points": 12, "rebounds": 12, "assists": 12, "steals": 12, "blocks": 12, "slamDunks": 7}
    ball.home.players['Brook Lopez'] = {"number": 11, "shoe": 17, "points": 17, "rebounds": 19, "assists": 6, "steals": 3, "blocks": 1, "slamDunks": 15}
    ball.home.players['Mason Plumlee'] = {"number": 1, "shoe": 19, "points": 26, "rebounds": 12, "assists": 6, "steals": 3, "blocks": 8, "slamDunks": 5}
    ball.home.players['Jason Terry'] = {"number": 31, "shoe": 15, "points": 19, "rebounds": 2, "assists": 2, "steals": 4, "blocks": 11, "slamDunks": 1}

    ball.away.players['Jeff Adrien'] = {"number": 4, "shoe": 18, "points": 10, "rebounds": 1, "assists": 1, "steals": 2, "blocks": 7, "slamDunks": 2}
    ball.away.players['Bismak Biyombo'] = {"number": 0, "shoe": 16, "points": 12, "rebounds": 4, "assists": 7, "steals": 7, "blocks": 15, "slamDunks": 10}
    ball.away.players['DeSagna Diop'] = {"number": 2, "shoe": 14, "points": 24, "rebounds": 12, "assists": 12, "steals": 4, "blocks": 5, "slamDunks": 5}
    ball.away.players['Ben Gordon'] = {"number": 8, "shoe": 15, "points": 33, "rebounds": 3, "assists": 2, "steals": 1, "blocks": 1, "slamDunks": 0}
    ball.away.players['Brendan Haywood'] = {"number": 33, "shoe": 15, "points": 6, "rebounds": 12, "assists": 12, "steals": 22, "blocks": 5, "slamDunks": 12}

    return ball
}
//generating the ball

function numPointsScored(name) {
    const ball = gameObject()

    for (const team in ball) {
        let teamObj = ball[team]
        for (const player in teamObj.players) {
            let playerObj = teamObj.players[player]
            if (name === player) {
                return playerObj["points"]
            }
        }
    }
}

function shoeSize(name) {
    const ball = gameObject()

    for (const team in ball) {
        let teamObj = ball[team]
        for (const player in teamObj.players) {
            let playerObj = teamObj.players[player]
            if (name === player) {
                return playerObj["shoe"]
            }
        }
    }
}

function teamColors(tName) {
    const ball = gameObject()

    for (const team in ball) {
        if (tName === ball[team].teamName) {
            return ball[team].colors
        }
    }
}

function teamNames() {
    const ball = gameObject()

    const arr = []
    for (const team in ball) {
        arr.push(ball[team].teamName)
    }
    return arr
}

function playerNumbers(tName) {
    const ball = gameObject()

    arr = []
    for (const team in ball) {
        let teamObj = ball[team]
        if (tName === teamObj.teamName) {
            for (const player in teamObj.players) {
                let playerObj = teamObj.players[player]
                arr.push(playerObj["number"])
            }
            return arr
        }
    }
}

function playerStats(name) {
    const ball = gameObject()

    for (const team in ball) {
        let teamObj = ball[team]
        for (const player in teamObj.players) {
            let playerObj = teamObj.players[player]
            if (name === player) {
                return playerObj
            }
        }
    }
}

function bigShoeRebounds() {
    const ball = gameObject()

    let biggestShoe = 0
    let biggestTeam
    let biggestPlayer
    for (const team in ball) {
        let teamObj = ball[team]
        for (const player in teamObj.players) {
            let playerObj = teamObj.players[player]
            if (playerObj["shoe"] > biggestShoe) {
                biggestShoe = playerObj["shoe"]
                biggestTeam = team
                biggestPlayer = player
            }
        }
    }
    return ball[biggestTeam].players[biggestPlayer]["rebounds"]
}

function mostPointsScored() {
    const ball = gameObject()

    let mostPoints = 0
    let mostTeam
    let mostPlayer
    for (const team in ball) {
        let teamObj = ball[team]
        for (const player in teamObj.players) {
            let playerObj = teamObj.players[player]
            if (playerObj["points"] > mostPoints) {
                mostPoints = playerObj["points"]
                mostPlayer = player
            }
        }
    }
    return mostPlayer
}

function winningTeam() {
    const ball = gameObject()

    let leadTeamPoints = 0
    let leadTeam = ''
    for (const team in ball) {
        let teamTotal = 0
        let teamObj = ball[team]
        for (const player in teamObj.players) {
            teamTotal += teamObj.players[player]["points"]
        }
        if (teamTotal > leadTeamPoints) {
            leadTeamPoints = teamTotal
            leadTeam = teamObj.teamName
        }
    }
    return leadTeam
}

function playerWithLongestName() {
    const ball = gameObject()

    let longestName = ''
    let mostChars = 0
    for (const team in ball) {
        for (const player in ball[team].players) {
            if (player.length > mostChars) {
                mostChars = player.length
                longestName = player
            }    
        }
    }
    return longestName
}

function doesLongNameStealATon() {
    const ball = gameObject()

    let longestName = ''
    let mostChars = 0
    let bigStealer = ''
    let mostSteals = 0
    
    for (const team in ball) {
        let teamObj = ball[team]
        for (const player in teamObj.players) {
            let playerObj = teamObj.players[player]
            if (player.length > mostChars) {
                mostChars = player.length
                longestName = player
            }  
            if (playerObj["steals"] > mostSteals) {
                bigStealer = player
                mostSteals = playerObj["steals"]
            }  
        }
    }
    return longestName === bigStealer
}