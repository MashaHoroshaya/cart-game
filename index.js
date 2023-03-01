APP = document.querySelector('.app');

window.application = {
    blocks: {},
    screens: {},
    timers: [],

    renderScreen: function(screenName) {
        
         window.application.timers.forEach(id => {
           clearInterval(id);
         });


        if (window.application.screens[screenName]) {
          APP.innerHTML = '';
            window.application.screens[screenName]()
        } else {
            console.log('Такого экрана блока не существует');
        }
       
    },

    renderBlock: function(blockName, container) {
        if (window.application.blocks[blockName]) {
             
            window.application.blocks[blockName](container);  
            // Вот тут не понимаю строчку 
        } else {
            console.log('Такого блока не существует');
        }
        
    },
   
  };
