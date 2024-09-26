const draggableLI = document.querySelectorAll('.li_todo');
const droppableUL = document.querySelector('#ul-done');

droppableUL.ondragover = (event) => event.preventDefault(); 

draggableLI.forEach((element)=>{
    element.ondragstart = function(event){
        let id = this.getAttribute('id');
        event.dataTransfer.setData('id', id);
    }
})

droppableUL.ondrop = function(event){
    const myElementId = event.dataTransfer.getData('id');
    const element = document.getElementById(myElementId);
    this.append(element);
}