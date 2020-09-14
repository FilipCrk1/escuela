document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState === 'visible'){
      console.log('Ejecutar el video...');
  }
  else{
      console.log('Pausar el video...');
  }  
})