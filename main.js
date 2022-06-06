let place = document.getElementById('place');
let area = document.getElementById('area');
let add = document.getElementById('add');

let speedReading = 500;
speedView.innerHTML = speedReading;

speed.onclick = function () {
    speedView.innerHTML = this.value;
    speedReading = this.value;
}

add.onclick = () => {
    if (area.value) {
        formTrigger(1);

        let txt = area.value;
        console.log(txt);
        let arr = txt.split(' ');
        console.log
    



    let n = 0;
    let x = setInterval(function () {
        place.innerHTML = arr[n];
        if (n < arr.length) {
            n++;
        } else {
            clearInterval(x);
            place.innerHTML = ''
            formTrigger(0);
        }
    }, speedReading)
}

}






function clear(arr) {
    let clearArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '') {
            clearArr.push(arr[i]);
        }
    }
    return clearArr
}









function formTrigger(state) {
    if (state === 1) {
        place.style.display = 'flex';
        add.style.display = 'none';
        area.style.display = 'none';
        speed.style.display = 'none';
        speedView.style.display = 'none';
    } else {
        place.style.display = 'none';
        add.style.display = 'block';
        area.style.display = 'block';
        speed.style.display = 'block';
        speedView.style.display = 'block';

    }

}
function nightTrigger(state){
    if(state === 1){
        document.body.style.backgroundColor = '#fff';
        area.style.border = '1px solid #333'
        area.style.color = '#333'
        place.style.color = '#333'
        add.style.backgroundColor = 'rgba(0,0,0,0.2)';
        add.style.color = '#333'
        add.style.border = '1px solid #333'
    }else{ 
        document.body.style.backgroundColor = '#333';
        area.style.border = '1px solid #000'
        area.style.color = '#000'
        place.style.color = '#fff'
        add.style.backgroundColor = 'rgba(0,0,0.1)';
        add.style.color = '#bfbfbf'
        add.style.border = '1px solid #333'
        
    }
}
