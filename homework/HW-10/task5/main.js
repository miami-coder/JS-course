let sessionsList = JSON.parse(localStorage.getItem('sessions')) || [];
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));