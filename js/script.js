requestAnimationFrame(function () {
  particlesJS('particles', {
    'particles': {
      'number': {
        'value': 50,
        'density': {
          'enable': true,
          'value_area': 900
        }
      },
      'color': {
        'value': '#9aa7ba'
      },
      'opacity': {
        'value': 0.5,
        'anim': {
          'enable': false,
          'speed': 1,
          'opacity_min': 0.1,
          'sync': false
        }
      },
      'size': {
        'value': 3,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 40,
          'size_min': 0.1,
          'sync': false
        }
      },
      'line_linked': {
        'enable': true,
        'distance': 150,
        'color': '#9aa7ba',
        'opacity': 0.4,
        'width': 1
      },
      'move': {
        'enable': true,
        'speed': 5,
        'direction': 'none',
        'random': false,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
          'enable': false,
          'rotateX': 600,
          'rotateY': 1200
        }
      }
    },
    'retina_detect': true
  });
});
