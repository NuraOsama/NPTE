
// progress circule
window.addEventListener('DOMContentLoaded', () => {
    let circle = new CircularProgressBar('pie');

    setInterval(() => {
        const options = {
          percent: Math.floor((Math.random() * 100))
        }
        circle.animationTo(options);
      }, 2000);

     
  });

