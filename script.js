let player = document.querySelectorAll('.player-area img');
let comp = document.querySelector('.comp');
let status = document.querySelector('.status');

let comPick = function(){
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        comp.setAttribute('src', 'img/rock.png')
        return 'rock';
    } else if (num == 2) {
        comp.setAttribute('src', 'img/paper.png')
        return 'paper';
    }else{
        comp.setAttribute('src', 'img/scissors.png')
        return 'scissors';
    }
}

let check = function (player,comp) {    
    if(player === comp) return 'SERI';
    if (player === 'rock') return (comp === 'scissors') ? 'MENANG' : 'KALAH';
    if (player === 'paper') return (comp === 'rock') ? 'MENANG' : 'KALAH';
    if (player === 'scissors') return (comp === 'paper') ? 'MENANG' : 'KALAH';
}

let putar = function () {
    let pic = ['rock','paper','scissors'];
    let i = 0;
    const timeStart = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - timeStart > 1000) {
            clearInterval;
            return;
        }
        comp.setAttribute('src', 'img/'+ pic[i++]+'.png');
        if (i == pic.length) i = 0;
    }, 100);
}

player.forEach(

        function (e) {
            e.addEventListener('click',
            function(){
                let tampung = e.classList[0];
                                
                putar();
                setTimeout(function () {
                    let tampungComp = comPick();
                    let hasil = check(tampung, tampungComp);
                    status.innerHTML = hasil;
                },1000);
                
            }
            )
        }

);

