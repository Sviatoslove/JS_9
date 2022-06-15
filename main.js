function yellowCubeStep() {
  var wrapper = document.getElementById('wrapper');
  var wrapperEl = wrapper.querySelectorAll('#cube');
  document.addEventListener('keydown', function(event){
    if(event.keyCode === 39) {
      yellowRightStep();
    };
    if(event.keyCode === 37) {
      yellowLeftStep();
    };
    if(event.keyCode === 40) {
      yellowDownStep();
    };
    if(event.keyCode === 38) {
      yellowUpStep();
    };
  });
  function yellowRightStep(){
    for(var i = 0; i < wrapperEl.length; i++){
      if(wrapperEl[i].classList.contains('yellow')){
        wrapperEl[i].classList.remove('yellow');
        wrapperEl[i + 1].classList.add('yellow');
        break;
      };
      if(i === (wrapperEl.length - 2)){
        break
      };
    };
  };
  function yellowLeftStep(){
    for(var i = 1; i < wrapperEl.length; i++){
      if(wrapperEl[i].classList.contains('yellow')){
        wrapperEl[i].classList.remove('yellow');
        wrapperEl[i - 1].classList.add('yellow');
        break
      };
    };
  };
  function yellowDownStep(){
    for(var i = 0; i < wrapperEl.length; i++){
      if(wrapperEl[i].classList.contains('yellow')){
        wrapperEl[i].classList.remove('yellow');
        wrapperEl[i + 4].classList.add('yellow');
        break;
      };
      if(i + 4 > (wrapperEl.length - 2 )){
        break
      };
    };
  };
  function yellowUpStep(){
    for(var i = 4; i < wrapperEl.length; i++){
      if(wrapperEl[i].classList.contains('yellow')){
        wrapperEl[i].classList.remove('yellow');
        wrapperEl[i - 4].classList.add('yellow');
        break;
      };
    };
  };
};

yellowCubeStep();