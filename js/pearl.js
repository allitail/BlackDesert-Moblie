const cash = document.querySelector('.cashpearl');
// const cashlevel = document.getElementsByTagName('h2');
const cashpearls = document.getElementById('cashpearl');



// const searchEl = document.querySelector('.search');
// const searchInputEl = searchEl.querySelector('input');



// let number = [[1 + '~' + 20], [21 + '~' + 29], 30];

// for(let i=0; i<=number.length; i++) {
//     cash[0].innerHTML = number[0];
// }

/*pearlimg*/
//  window.onload = function() {
  
const pearlimg = cash.querySelector('img');
// const pearlsimg = cashpearls.querySelector('img');
// var  c = 0;
const cashimg = ['0_level.png', '1_level.png', '2_level.png'];

// Array.from(pearlimg).forEach(()=> {
//     pearlimg.src ="./image/" +
//     cashimg[c%cashimg.length];
//     c = c+1;
// });

cashimg.forEach((c, index)=> {
    
    pearlimg.src ="./image/" +
   c;
  
if(index==0) {
  pearlimg.src = "./image/" + c;
}

   console.log(pearlimg.src);

  // return pearlimg.src;
})


// $img = document.querySelector(".cashrepeat > img");
// $img.src = '1_level.png';
// for()



// for(const c=0; c<=4; c++){
//   pearlimg.src ="./image/" +
//    c + '_level.png';
//    return pearlimg.src;
// }

// function(g) {
//     pearlimg.src ="./image/" +
//     cashimg[c%cashimg.length];
//     c =c+1;
// }

// let pearlimg = ['pearl.png'];

// pearlimg.forEach(item=>{
//     item =pearlimg[0];
// })


/*level*/
const pearl = document.getElementsByClassName('cashpearl');
const level = document.getElementsByTagName("h2");

for(let i=1; i<=1; i++){

     for(let j=20; j<=50; j++){

        if(j%10==0) {
            // console.log(i+'~'+j);
            
              // const result = (i+'~'+j);
              level[0].innerHTML = ('<h2>레벨달성 ' + i+'~'+j + '</h2>');
              // console.log(result);
              //  pearl[0].innerHTML += result.innerHTML;
              // var h = level.item(i+'~'+j);
             
        
              
              
              // level.appendChild(result);
            i=j+1;
    
            
    
            continue;
        }


       
     }
 }



/*cash*/
for(let n=0; n<cashimg.length; n++) {
    // var game = cash.item(n);
    // cash[n].innerHTML = 'a';
   
    // console.log(cash[0].innerHTML);
    console.log(n);
   
}




// if(cash) {
//     // alert(number[0]);
//     [...cashlevel].forEach(function(item, index, arrary){
//         let n;
//         for(let n=0; n<=cash; n++) {
//             if(cash) {
//         item.innerHTML = "<h2>레벨달성</h2>" + number[0];
//             }
//         }
//     })
// }
// Array.from(cash).forEach((list) => {
//     // number.forEach(n=> {

//     // if(cash.length > 0) {
//     //     cash[0].innerHTML ="<h2>á</h2>"
//     // }

//     for(let n=0; n < number.length; n++) {
//         console.log(cash[n]);
        
//             Array.from(cashlevel).forEach((value)=> {
//                 if(cash[n] = number[n]) {
//              let result = value.innerHTML = number[n];
//                 // result = n++;
//                 return result;
//                 }
//             })
        
//     }
// })
// // })


Array.from(cash).forEach((list, index, arrary) => {
    
  for(let n=0; n<=cashimg.length; n++){
    console.log(list, index, arrary);
    // console.log(n);
    // console.log(n==list);
    // cashlevel = list;
    // list = number[n];
    // return list;
    cash[0].innerHTML = cash[n++];
   
}


})





// const searchEl = document.querySelector('.search');
// const searchInputEl = searchEl.querySelector('input');


// const text = document.querySelectorAll("h3");

// for(let t=0; t<=5; t++) {
//   console.log(t);
//   text.innerHTML ="<h3>가문당 구매 1/1</h3>";
//   console.log(text); 
// }

const dollar = document.getElementsByClassName('dollar');

const  cashPearl = document.getElementById('cashPearl');

// const cashpearls = document.createElement('div');


for(let p=0; p<=3; p++) {
  cashPearl.innerHTML += dollar[0].innerHTML;
  

}

// document.body.appendChild(cashpearls);


// const repeat = document.getElementById('repeat');



const text = document.getElementsByTagName('h3');

const h = document.createElement('h3');
for(let t=0; t<=3; t++) {
  h.innerHTML += text[0].innerHTML;
}

document.body.appendChild(h);


const pearlimgs = document.getElementsByTagName('img');

const pearls = document.createElement('img');

for(let i=0; i<=3; i++) {
  pearls.innerHTML += pearlimgs[0].innerHTML;

  pearls.src = "./image/"+i+'_level.png';
  var src = document.getElementById("cashrepeat");
// pearls[0].innerHTML=("./image/"+i+'_level.png');
//  console.log(pearls);
}

document.body.appendChild(pearls);