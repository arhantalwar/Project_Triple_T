function traffic(){

  var signal_change = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1200
  });
  
  signal_change
  
  .add({
    targets: document.getElementById('color_green'),
    opacity: 1,
  } , 100)

  .add({
    targets: document.getElementById('color_green'),
    opacity: 0.2,
  })

  .add({
    targets: document.getElementById('color_red'),
    opacity: 1,
  });

  anime({
    targets: '.road .road_1_car',
    translateY: -650,
    delay: anime.stagger(45),
    duration: 3500,
    easing: 'easeInOutExpo',
  });
  
  anime({
    targets: '.road .road_3_car',
    translateY: -370,
    delay: anime.stagger(45),
    duration: 1800,
    delay: 2500,
    easing: 'easeInOutExpo'
  });
  
}

function paramedic(){

  anime({
    targets: '.road .road_1_car',
    translateX: -15,
    delay: anime.stagger(100)
  });

  anime({
    targets: '.road .road_3_car',
    translateX: -15,
    delay: anime.stagger(100)
  });

  anime({
    targets: '.road .road_2_car',
    keyframes: [
      {translateX: -15},
      {translateY: 273},
      {rotateZ: 90},
      {translateX: -318},
      {rotateZ: 180},
      {translateY: -200}
    ],
    duration: 4000,
    easing: 'easeInOutExpo',
  });

  anime({
    targets: document.getElementById('signal_box_emergency'),
    rotateZ: '0deg',
  });

}