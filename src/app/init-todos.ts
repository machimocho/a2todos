export class Init{
  load(){
    if (localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
      console.log('No hay Todos, se procede a crearlos');
      var todos = [
        {text: 'Cena con esposa'},
        {text: 'Sacar la basura'}
      ];

      localStorage.setItem('todos',JSON.stringify(todos));
      return
    }else{
      console.log('Todos encontrados');
    }
  }
}
