// function renderLobbyListBlock(container) {
//   const div_block = document.createElement('div')
//   div_block.classList.add('div_block')
//   container.appendChild(div_block)

//   // request({
//   //     params: {
//   //         token: window.application.token,
//   //     },
//   //     url: 'https://skypro-rock-scissors-paper.herokuapp.com/player-list',
//   //     onSuccess: (data) => {
//   //         ul.textContent= '';
//   //       data.list.forEach(e => {
//   //          const li = document.createElement('li');
//   //          li.textContent= e.login;
//   //           ul.appendChild(li);
//   //       });

//   //             } } );
// }

// function renderLobbyButtonBlock(container) {
//   const button = document.createElement('button')
//   button.textContent = 'Играть'
//   button.classList.add('button-login')

//   button.addEventListener('click', () => {
//     request({
//       params: {
//         token: window.application.token,
//       },
//       url: 'https://skypro-rock-scissors-paper.herokuapp.com/start',
//       onSuccess: (data) => {
//         if (data.status === 'ok') {
//           window.application.gameId = data['player-status'].game.id
//           // console.log(data['player-status'].game.id);
//           window.application.renderScreen('waiting')
//         } else {
//           console.log(data.status)
//         }
//       },
//     })
//   })
//   container.appendChild(button)
// }

// window.application.blocks['playerlist'] = renderLobbyListBlock
// window.application.blocks['lobbyGame'] = renderLobbyButtonBlock

// function renderLobbyScreen() {
//   const h1 = document.createElement('h1')
//   h1.textContent = 'Лобби'
//   APP.appendChild(h1)

//   const div = document.createElement('div')
//   APP.appendChild(div)
//   window.application.renderBlock('playerlist', div)
//   window.application.renderBlock('lobbyGame', div)
// }

// window.application.screens['lobby'] = renderLobbyScreen
