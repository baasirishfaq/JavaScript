let chs = ['a b c d e f g h i j k l m n o'];


let chs2 = chs.map(uppercase);


function uppercase(str){
    return str.toUpperCase();
}

console.log(...chs2);