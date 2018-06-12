document.addEventListener('scroll', () => {
  titleScroll();
  bioScroll();
  unHideAll();
  fadeUpAndIn();
});

function fadeUpAndIn() {
  [...document.getElementsByClassName('fade-up-and-in')].forEach(element => {
    element.currentlyInView = false;
    if (element.getBoundingClientRect().top <= window.innerHeight && !element.currentlyInView) {
      element.classList.add('fade-up-and-in-animation');
      element.currentlyInView = true;
    } else if (element.getBoundingClientRect().top > window.innerHeight + 100 && !element.currentlyInView) {
      element.classList.remove('fade-up-and-in-animation');
      element.currentlyInView = true;
    }
  });
}

function unHideAll() {
  [...document.getElementsByTagName('section')].forEach(element => {
    element.removeAttribute('hidden');
  });
}

function titleScroll() {
  const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const distanceFromTop = Math.abs(document.getElementsByTagName('header')[0].getBoundingClientRect().top);
  const distanceToScroll = (windowHeight - distanceFromTop) / windowHeight;
  document.getElementsByClassName('logo')[0].style.top = `${ (1 - (distanceToScroll / 2)) * 100}%`;
  document.getElementsByClassName('logo')[0].style.opacity = ((distanceToScroll * 2) - 0.5);
}

function bioScroll() {
  const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const distanceFromTop = document.getElementsByClassName('short-bio-box')[0].getBoundingClientRect().top;
  const distanceToScroll = (windowHeight - distanceFromTop) / windowHeight;
  document.getElementsByClassName('short-bio-box')[0].style.top = `${ (1 - (distanceToScroll / 4)) * 100 - 50 }%`;
  document.getElementsByClassName('short-bio-box')[0].style.opacity = ((distanceToScroll * 2) - 0.05);
}

let counter = 1;
setInterval(() => {
  const displayJobs = [
    '<h1>web<br />developer</h1>',
    '<h1>composer,<br />violinist</h1>'
  ];
  document.getElementsByClassName('job')[0].innerHTML = displayJobs[counter % displayJobs.length];
  counter++;
}, 4000);
