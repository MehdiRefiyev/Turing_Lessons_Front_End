// let div= document.querySelector('div')



const draggableBox = document.querySelectorAll('.draggableBox');
const droppableBox = document.querySelector('.droppableBox');

// let myElement = {};

droppableBox.ondragover = (event) => event.preventDefault(); // access verir tullamagha


draggableBox.forEach((element)=>{
  element.ondragstart = function(event){
  let id = this.getAttribute('id');
  event.dataTransfer.setData('id', id);
  }
})


// draggableBox.ondragstart = function(event){
//  let id = this.getAttribute('id');
//  event.dataTransfer.setData('id', id);
// }

// draggableBox.ondragend = function(){
//  console.log('ondragend')
// }

droppableBox.ondrop = function(event){
  const myElementId = event.dataTransfer.getData('id');

  const element = document.getElementById(myElementId);
  this.append(element);
}



// draggableBox.onclick = function(){
//   console.log('onclick')
// }

// draggableBox.addEventListener('click',function(){
//     alert('2-ci 1')
//   });
//   draggableBox.onclick = function(){
//       alert('3')
//       // let text = this.innerText;
//       // document.querySelector('body').append(text);
//     }
    


// draggableBox.onclick = function(){
//  alert('2')
//  // let text = this.innerText;
//  // document.querySelector('body').append(text);
// }


// draggableBox.onclick = function(){
//  alert('3')
//  // let text = this.innerText;
//  // document.querySelector('body').append(text);
// }


// draggableBox.onclick = function(){
//  alert('4')
//  // let text = this.innerText;
//  // document.querySelector('body').append(text);
// }
// draggableBox.addEventListener('click',function(){
//  alert('2-ci 1')
// })
// draggableBox.addEventListener('click',function(){
//  alert('2')
// })
// draggableBox.addEventListener('click',function(){
//  alert('3')
// })
// draggableBox.addEventListener('click',function(){
//  alert('4')
// })
// draggableBox.onclick = function(){
//  alert('1-ci 1')
//  // let text = this.innerText;
//  // document.querySelector('body').append(text);
// }