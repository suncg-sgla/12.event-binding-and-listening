function go(name, age){
    alert(name)
    alert(age)
}
// go('Lily', 48);

var num = 0;
while (num < 10) {
    console.log("While Loop No. " + num);
    num ++;
}

// do while循环至少先执行一次行数再判断条件
num = 10;
do {
    console.log("Do While Loop No. " + num);
    num ++;
} while (num < 10)

for (var i = 0; i < 10; i++) {
    console.log("For loop No. " + i)
    
}

var my_list = ['Apple', 'Orange', 'Banana'];
for (i=0; i<my_list.length; i++) {
    console.log(my_list[i])
}