var numOne = document.getElementById('num-one')
var numTwo = document.getElementById('num-two')
var addSum = document.getElementById('add-sum')

numOne.addEventListener("click", function() {
    console.log("hi")
})

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    var sum = one + two
    addSum.innerHTML = sum
}

var simon = document.getElementById("simon")
var bruce = document.getElementById("bruce")
var ben = document.getElementById("ben")


// 不符合DRY原则
// var simon_pic = document.getElementById("simon-pic")
// var bruce_pic = document.getElementById("bruce-pic")
// var ben_pic = document.getElementById("ben-pic")
// simon.addEventListener("click", function() {
//     if (simon_pic.className === 'hide') {
//         simon_pic.className = "";
//     } else {
//         simon_pic.className = "hide";
//     }
// });

// bruce.addEventListener("click", function() {
//     if (bruce_pic.className === 'hide') {
//         bruce_pic.className = "";
//     } else {
//         bruce_pic.className = "hide";
//     }
// });

// ben.addEventListener("click", function() {
//     if (ben_pic.className === 'hide') {
//         ben_pic.className = "";
//     } else {
//         ben_pic.className = "hide";
//     }
// });
simon.addEventListener("click", pic_link)
bruce.addEventListener("click", pic_link)
ben.addEventListener("click", pic_link)
function pic_link() {
    // this代表当前对象
    console.log(this, "-------", this.attributes['data-img'].value);
    var all_images = document.querySelectorAll("img")
    for (var i = 0; i<all_images.length; i++) {
        all_images[i].className = "hide"
    }
    var pic_id = this.attributes["data-img"].value;
    var pic = document.getElementById(pic_id);
    if (pic.className === 'hide') {
        pic.className = "";
    } else {
        pic.className = 'hide'
    }
}