var ButTwo = document.querySelector('.btn-down');

function animate() {
    window.scrollTo({
    top: window.innerHeight / 1,
    behavior: 'smooth',
  
  });
  
    };

ButTwo.addEventListener('click', animate);