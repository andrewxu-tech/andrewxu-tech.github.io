document.addEventListener('scroll', () => {
  titleScroll();
  fadeUpAndIn();
});

let untouched = true;

document.addEventListener('scroll', () => {
  if (untouched) {
    unHideAll();
  }
});

let counter = 1;
setInterval(() => {
  const displayJobs = [
    '<h1><span class="type-of-developer">web</span><br /><span class="fade-in">developer</span></h1>',
    '<h1><span class="type-of-developer">JavaScript</span><br />developer</h1>',
    '<h1><span class="type-of-developer">full-stack</span><br />developer</h1>',
    '<h1><span class="type-of-developer">ReactJS</span><br />developer</h1>',
    '<h1><span class="type-of-developer">Node.js</span><br /><span class="fade-after-4-secs">developer</span></h1>',
    '<h1><span class="type-of-developer">composer,</span><br /><span class="type-of-developer">violinist</span></h1>'
  ];
  document.getElementsByClassName('job')[0].innerHTML = displayJobs[counter % displayJobs.length];
  counter++;
}, 4000);

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

[...document.getElementsByClassName('nav-arrow')].forEach(element => {
  element.addEventListener('click', () => {
    untouched = false;
    [...document.getElementsByTagName('section')].forEach(element => {
      element.setAttribute('hidden', true);
    });
    document.getElementsByClassName(element.classList[1])[1].removeAttribute('hidden');
  });
});

function titleScroll() {
  const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const distanceFromTop = Math.abs(document.getElementsByTagName('header')[0].getBoundingClientRect().top);
  const distanceToScroll = (windowHeight - distanceFromTop) / windowHeight;
  document.getElementsByClassName('logo')[0].style.top = `${(1 - (distanceToScroll / 2)) * 100}%`;
  document.getElementsByClassName('logo')[0].style.opacity = ((distanceToScroll * 2) - 0.5);
}
