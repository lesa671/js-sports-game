

let teamone_shot_count = 0
const teamone_numshots = document.querySelector('#teamone_numshots')
const teamone_numgoals = document.querySelector('#teamone_numgoals')
const teamone_shoot_button = document.querySelector('#teamone_shoot_button')
teamone_shoot_button.addEventListener('click', function () {
    console.log('teamone_shoot_button clicked')
    teamone_shot_count = teamone_shot_count + 1
    teamone_numshots.innerText =  teamone_shot_count
    let teamone_goal_result = parseInt(teamone_numgoals.innerText) + Math.floor(Math.random() * 2)
    teamone_numgoals.innerText = teamone_goal_result
})

let teamtwo_shot_count = 0
const teamtwo_numshots = document.querySelector('#teamtwo_numshots')
const teamtwo_numgoals = document.querySelector('#teamtwo_numgoals')
const teamtwo_shoot_button = document.querySelector('#teamtwo_shoot_button')
teamtwo_shoot_button.addEventListener('click', function () {
    console.log('teamtwo_shoot_button clicked')
    teamtwo_shot_count = teamtwo_shot_count + 1
    teamtwo_numshots.innerText =  teamtwo_shot_count
    let teamtwo_goal_result = parseInt(teamtwo_numgoals.innerText) + Math.floor(Math.random() * 2)
    teamtwo_numgoals.innerText = teamtwo_goal_result  
})

const reset_button = document.querySelector('#reset_button')
const num_resets = document.querySelector('#num_resets')
reset_button.addEventListener('click', function () {
    console.log('reset_button was clicked')

    if (parseInt(teamone_numgoals.innerText) > parseInt(teamtwo_numgoals.innerText)) {
        alert('Team 1 is the winner!')
    } else if (parseInt(teamtwo_numgoals.innerText) > parseInt(teamone_numgoals.innerText)) {
        alert('Team 2 is the winner!')
    } else {
        alert('It\'s a tie!')
    } 
    
    teamone_numshots.innerText = 0 
    teamone_shot_count = 0
    teamone_numgoals.innerText = 0 
    teamtwo_numshots.innerText = 0
    teamtwo_shot_count = 0 
    teamtwo_numgoals.innerText = 0
     
    num_resets.innerHTML = parseInt(num_resets.innerText) + 1
})
