document.addEventListener('scroll', () => {
  titleScroll();
  fadeUpAndIn();
});

window.onbeforeunload = function () {
  window.scrollTo(0,0);
};

let counter = 1;
setInterval(() => {
  const displayJobs = [
    '<h1><span class="type-of-developer">web</span><br /><span class="fade-in">developer</span></h1>',
    '<h1><span class="type-of-developer">JavaScript</span><br />developer</h1>',
    '<h1><span class="type-of-developer">full-stack</span><br />developer</h1>',
    '<h1><span class="type-of-developer">ReactJS</span><br />developer</h1>',
    '<h1><span class="type-of-developer">Node.js</span><br />developer</h1>',
    '<h1><span class="type-of-developer">HTML5<br />& CSS3</span><br /><span class="fade-after-4-secs">developer</span></h1>',
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

[...document.getElementsByClassName('nav-arrow')].forEach(element => {
  element.addEventListener('click', () => {
    if (element.classList[1] === 'back-to-top') {
      window.smoothScrollTo(0, 0, 1500);
    } else if (!window.scrollY) {
      [...document.getElementsByTagName('section')].forEach(sectionElement => {
        sectionElement.classList.add('hidden');
      });
      document.getElementsByClassName(element.classList[1])[1].classList.remove('hidden');
      window.smoothScrollTo(0, 1000, 1500);
    } else {
      [...document.getElementsByTagName('section')].forEach(sectionElement => {
        sectionElement.classList.add('fade-out');
      });
      window.setTimeout(() => {
        [...document.getElementsByTagName('section')].forEach(sectionElement => {
          sectionElement.classList.remove('fade-out');
          sectionElement.classList.add('hidden');
        });
        document.getElementsByClassName(element.classList[1])[1].classList.remove('hidden');
        document.getElementsByClassName(element.classList[1])[1].classList.add('fade-in');
        window.smoothScrollTo(0, 1000, 1500);
      }, 490);
      window.setTimeout(() => {
        document.getElementsByClassName(element.classList[1])[1].classList.remove('fade-in');
      }, 990);
    }
  });
});

[...document.getElementsByClassName('content-nav-arrow')].forEach(element => {
  element.addEventListener('click', () => {
    const scrollToElementClass = element.classList[1];
    const scrollToElementLocation = offset(document.getElementsByClassName(scrollToElementClass)[1]).top - window.innerHeight / 15;
    window.smoothScrollTo(0, scrollToElementLocation, 1200);
  });
});

function titleScroll() {
  const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const distanceFromTop = Math.abs(document.getElementsByTagName('header')[0].getBoundingClientRect().top);
  const distanceToScroll = (windowHeight - distanceFromTop) / windowHeight;
  document.getElementsByClassName('logo')[0].style.top = `${(1 - (distanceToScroll / 2)) * 100}%`;
  document.getElementsByClassName('logo')[0].style.opacity = ((distanceToScroll * 2) - 0.5);
  if (((distanceToScroll * 2) - 0.5) <= 0) {
    document.getElementsByClassName('logo')[0].style.display = 'none';
  } else {
    document.getElementsByClassName('logo')[0].style.display = 'inherit';
  }
}

[...document.getElementsByTagName('i')].forEach(element => {
  element.addEventListener('click', () => {
    element.classList.add('expand-border');
    window.setTimeout(() => {
      element.classList.remove('expand-border');
    }, 500);
  });
});

[...document.getElementsByTagName('img')].forEach(element => {
  element.src = `./assets/images/portfolio/${element.classList[0]}/1.png`;
  let currentImage = 1;
  [...document.getElementsByClassName('arrow')].forEach(element => {
    if (element.classList[1] === 'left-arrow') {
      let imageElement;
      if (element.classList[3] === 'large-carousel') {
        imageElement = [...document.getElementsByTagName('img')].filter(imageElement => imageElement.classList[1] === 'large-carousel')[0];
      } else {
        imageElement = [...document.getElementsByTagName('img')].filter(imageElement => imageElement.classList[0] === element.classList[2])[0];
      }
      element.addEventListener('click', () => {
        let maxImages = null;
        if (element.classList[2] === 'poco-a-poco') {
          maxImages = 7;
        } else if (element.classList[2] === 'keyboard-warrior') {
          maxImages = 4;
        } else if (element.classList[2] === 'turtle-todo') {
          maxImages = 3;
        } else if (element.classList[2] === 'sino') {
          maxImages = 4;
        }
        if (currentImage === 1) {
          imageElement.src = `./assets/images/portfolio/${element.classList[2]}/${maxImages}.png`;
          currentImage = maxImages;
        } else {
          imageElement.src = `./assets/images/portfolio/${element.classList[2]}/${currentImage - 1}.png`;
          currentImage -= 1;
        }
      });
    } else {
      let imageElement;
      if (element.classList[3] === 'large-carousel') {
        imageElement = [...document.getElementsByTagName('img')].filter(imageElement => imageElement.classList[1] === 'large-carousel')[0];
      } else {
        imageElement = [...document.getElementsByTagName('img')].filter(imageElement => imageElement.classList[0] === element.classList[2])[0];
      }
      element.addEventListener('click', () => {
        let maxImages = null;
        if (element.classList[2] === 'poco-a-poco') {
          maxImages = 7;
        } else if (element.classList[2] === 'keyboard-warrior') {
          maxImages = 4;
        } else if (element.classList[2] === 'turtle-todo') {
          maxImages = 3;
        } else if (element.classList[2] === 'sino') {
          maxImages = 4;
        }
        if (currentImage >= maxImages) {
          imageElement.src = `./assets/images/portfolio/${element.classList[2]}/1.png`;
          currentImage = 1;
        } else {
          imageElement.src = `./assets/images/portfolio/${element.classList[2]}/${currentImage + 1}.png`;
          currentImage += 1;
        }
      });
    }
  });
});

[...document.getElementsByClassName('hover-over')].forEach(element => {
  element.addEventListener('click', () => {
    const portfolioItemDiv = document.getElementsByClassName('portfolio-item-details')[0];
    portfolioItemDiv.removeAttribute('hidden');
    if (element.classList[1] === 'poco-a-poco') {
      [...document.getElementsByClassName('portfolio-item-name-replace')].forEach(portfolioItemElement => {
        portfolioItemElement.classList.replace('portfolio-item-name', 'poco-a-poco');
        portfolioItemElement.classList.replace('keyboard-warrior', 'poco-a-poco');
        portfolioItemElement.classList.replace('turtle-todo', 'poco-a-poco');
        portfolioItemElement.classList.replace('sino', 'poco-a-poco');
      });
      document.getElementsByClassName('portfolio-item-title')[0].innerHTML = 'poco a poco';
      document.getElementsByClassName('portfolio-item-github')[0].setAttribute('href', 'https://github.com/andrewxu-tech/poco-a-poco');
      [...document.getElementsByClassName('portfolio-item-link')].forEach(linkElement => {
        linkElement.setAttribute('href', 'https://poco-a-poco.herokuapp.com/');
      });
      const carouselImageElement = document.getElementsByClassName('large-carousel-image')[0];
      carouselImageElement.src = './assets/images/portfolio/poco-a-poco/1.png';
      document.getElementsByClassName('portfolio-item-technology-list')[0].innerHTML = `
      <div><em class="icon-react"></em>&nbsp;ReactJS</div>
      <div><em class="icon-nodejs"></em>&nbsp;Node.js</div>
      <div><em class="icon-css3"></em>&nbsp;CSS3</div>
      <div><em class="icon-sass"></em>&nbsp;SASS</div>
      <div>BULMA</div>
      <div>Chart.js</div>
      `;
      document.getElementsByClassName('portfolio-item-description')[0].innerHTML = `
        <p>&emsp;As a former music student, I am painfully aware of how frustrating practicing can be. When learning new music, or when learning a new instrument, it is extremely easy to become frustrated and discouraged by only seeing what you presently can’t do or how much you haven’t done, losing track and losing perspective on all of the progress you’ve in fact already been making this whole time. This web app aims to help music learners learn better by better keeping track and keeping perspective on their progress.</p>
        <p>&emsp;The app was built using a React.js front-end and a Node.js back-end. I used this project as an opportunity to explore data manipulation in-depth, especially with regards to the use of back-end endpoints and how the back-end should serve the data for the many different ways it is to be displayed and/or visualised in the front-end. I chose Chart.js as a data visualisation library, and found it to be robust and a great visual addition to the app. In order to improve the UX, I also made use of the Wikimedia API for an “autocorrect” feature and Moment.js for date manipulation.</p>
        <p>&emsp;Of all the projects I have done at GA, I feel that this is my strongest. With two developer friends, I am planning to take this project further through more complex gamification and potentially a “teacher portal” feature where a music teacher can log in to monitor their students’ progress.</p>
      `;
    } else if (element.classList[1] === 'keyboard-warrior') {
      [...document.getElementsByClassName('portfolio-item-name-replace')].forEach(portfolioItemElement => {
        portfolioItemElement.classList.replace('portfolio-item-name', 'keyboard-warrior');
        portfolioItemElement.classList.replace('poco-a-poco', 'keyboard-warrior');
        portfolioItemElement.classList.replace('turtle-todo', 'keyboard-warrior');
        portfolioItemElement.classList.replace('sino', 'keyboard-warrior');
      });
      document.getElementsByClassName('portfolio-item-title')[0].innerHTML = 'Keyboard Warrior';
      document.getElementsByClassName('portfolio-item-github')[0].setAttribute('href', 'https://github.com/andrewxu-tech/keyboard-warrior');
      [...document.getElementsByClassName('portfolio-item-link')].forEach(linkElement => {
        linkElement.setAttribute('href', 'http://andrewxu.tech/keyboard-warrior/');
      });
      const carouselImageElement = document.getElementsByClassName('large-carousel-image')[0];
      carouselImageElement.src = './assets/images/portfolio/keyboard-warrior/1.png';
      document.getElementsByClassName('portfolio-item-technology-list')[0].innerHTML = `
        <div><em class="icon-html5"></em>&nbsp;HTML5</div>
      <div><em class="icon-css3"></em>&nbsp;CSS3</div>
      <div><em class="icon-js"></em>&nbsp;JavaScript</div>
      `;
      document.getElementsByClassName('portfolio-item-description')[0].innerHTML = `
        <h3>Game Instructions:</h3>
        <strong>Press the right key on the keyboard when the falling circular letter is in the middle of its corresponding white circle.</strong>
        <p>&emsp;The basic premise of this rhythm game has already been explored in numerous existing games, but I set out to create the added complextiy of mimicking a piano keyboard with the QWERTY keyboard layout, as though overlaying a piano keyboard on top of the QWERTY keyboard and finding where the keys correspond. This included incorporating 24 different key strokes, specifically <code>Q</code>, <code>A</code>, <code>W</code>, <code>E</code>, <code>D</code>, <code>F</code>, <code>T</code>, <code>G</code>, <code>Y</code>, <code>H</code>, <code>J</code>, <code>I</code>, <code>K</code>, <code>O</code>, <code>L</code>, <code>P</code> ,<code>;</code> ,<code>'</code> , and <code>]</code>, far more than the average rhythm game. This added complexity allowed for the experience of playing the game to be more similar to the experience of playing a real instrument, since whereas in a typical rhythm game, like Guitar Hero, the notes produced have an arbitrary relationship with the key pressed, the letters on the keyboard in Keyboard Warrior are 1:1 mapped to their corresponding notes on the piano.</p>
        <p>&emsp;The synchronisation between the music and the player is such that the player is playing the melody of the song whilst an especially synthesised music plays in the background. The music needed to be custom-created due to needing to absolutely sync the BPM between the background music and the notes as they fall, since any discrepancy in the rhythm, even as small as 50 milliseconds, could be detectable by the player and render the game unplayable. The following images show the process of creating custom music.</p>
        <p>&emsp;The most nuanced aspect of the game is which notes played by the player should be considered "right" and which ones "wrong". Since it would basically be impossible to hit the key on the exact millisecond on which that note should be correct, or even within the nearest 50 milliseconds, there needed to be a "window" around the correct timing of the note in which the player could hit the note and still be considered "right". After a lot of experimenting, I have decided that in faster, more difficult songs where the notes were closer together, this "correctness window" could be as small as 100 milliseconds, whereas in easier songs where the notes are slower, this "correctness window" can be as long as 500 milliseconds. These values are calculated automatically in JavaScript depending on the speed of the song inputted. In other words, in reality the player needn't hit the key when the note is exactly at the center of its white circle, since that would be statistically nearly impossible - instead, there is a small margin around the white circle in which the player's key stroke would still be considered "correct", though this is visually undetectable except in the slowest, easiest songs. A satisfying animation is played when the player gets the note right.</p>
        <p>&emsp;If the game only visually rewarded the player for getting the notes "right", it will be fairly unfulfilling and somewhat infuriating if the player hit a note <em>almost</em> right, but the game didn't acknowledge it. For this reason, around the "correctness window" there is a window for when the player plays the note <em>almost</em> on time. If a player gets a note almost right, the note changes colour, but does not play a satisfying animation.</p>
        <p>&emsp;An oddity in the creation of this game in particular lead to one of the most repetitive parts of the development process: inputting every single note of every single song as keystroke-duration pairs. This lead to the creation of enormous objects, used to hard-code in the hundreds of timings and key presses for the falling notes.</p>
      `;
    } else if (element.classList[1] === 'turtle-todo') {
      [...document.getElementsByClassName('portfolio-item-name-replace')].forEach(portfolioItemElement => {
        portfolioItemElement.classList.replace('portfolio-item-name', 'turtle-todo');
        portfolioItemElement.classList.replace('keyboard-warrior', 'turtle-todo');
        portfolioItemElement.classList.replace('poco-a-poco', 'turtle-todo');
        portfolioItemElement.classList.replace('sino', 'turtle-todo');
      });
      document.getElementsByClassName('portfolio-item-title')[0].innerHTML = 'Turtle To-Do';
      document.getElementsByClassName('portfolio-item-github')[0].setAttribute('href', 'https://github.com/andrewxu-tech/turtle-todo');
      [...document.getElementsByClassName('portfolio-item-link')].forEach(linkElement => {
        linkElement.setAttribute('href', 'https://turtle-to-do.herokuapp.com/');
      });
      const carouselImageElement = document.getElementsByClassName('large-carousel-image')[0];
      carouselImageElement.src = './assets/images/portfolio/turtle-todo/1.png';
      document.getElementsByClassName('portfolio-item-technology-list')[0].innerHTML = `
      <div><em class="icon-angularjs"></em>&nbsp;AngularJS</div>
      <div><em class="icon-nodejs"></em>&nbsp;Node.js</div>
      <div><em class="icon-css3"></em>&nbsp;CSS3</div>
      <div><em class="icon-sass"></em>&nbsp;SASS</div>
      <div><em class="icon-html5"></em>&nbsp;HTML5</div>
      `;
      document.getElementsByClassName('portfolio-item-description')[0].innerHTML = `
        <p>&emsp;Gamified to-do app, designed to help the user keep track of performing daily tasks by rewarding the user for completing tasks that they have assigned themselves. This was my first experience with a front-end framework. Built with Alex Poynter.</p>
      `;
    } else {
      [...document.getElementsByClassName('portfolio-item-name-replace')].forEach(portfolioItemElement => {
        portfolioItemElement.classList.replace('portfolio-item-name', 'sino');
        portfolioItemElement.classList.replace('keyboard-warrior', 'sino');
        portfolioItemElement.classList.replace('poco-a-poco', 'sino');
        portfolioItemElement.classList.replace('turtle-todo', 'sino');
      });
      document.getElementsByClassName('portfolio-item-title')[0].innerHTML = 'Sino';
      document.getElementsByClassName('portfolio-item-github')[0].setAttribute('href', 'https://github.com/andrewxu-tech/sino');
      [...document.getElementsByClassName('portfolio-item-link')].forEach(linkElement => {
        linkElement.setAttribute('href', 'https://sino-review.herokuapp.com/');
      });
      const carouselImageElement = document.getElementsByClassName('large-carousel-image')[0];
      carouselImageElement.src = './assets/images/portfolio/sino/1.png';
      document.getElementsByClassName('portfolio-item-technology-list')[0].innerHTML = `
      <div><em class="icon-nodejs"></em>&nbsp;Node.js</div>
      <div><em class="icon-css3"></em>&nbsp;CSS3</div>
      <div><em class="icon-sass"></em>&nbsp;SASS</div>
      <div>Materialize</div>
      <div>EJS</div>
      <div><em class="icon-html5"></em>&nbsp;HTML5</div>
      `;
      document.getElementsByClassName('portfolio-item-description')[0].innerHTML = `
        <p>&emsp;This restaurant review app was made as an opportunity to learn to work with a Node.js backend featuring two RESTful resources. The front-end was styled using Materialize and made use of the Google Static Maps API.</p>
        <p>&emsp;This project was my first attempt at exploring any sort of back-end technology, and to that end the main challenge was to overcome what had become my comfort zone of writing in vanilla JavaScript. The app featured three resources: users, restaurants and reviews. Users can log in, post a restaurant and post reviews for restaurants that are not your own. Reviews are then used to calculate an average review for each restaurant. The app makes use of the Google Static Maps API to produce a map of all the restaurants on the site and to give a map of the location of each site, the location being calculated based on the user-input postcode for each restaurant.</p>
      `;
    }
    portfolioItemDiv.classList.add('fade-in');
    window.setTimeout(() => {
      portfolioItemDiv.classList.remove('fade-in');
    }, 500);
  });
});

[...document.getElementsByClassName('portfolio-item-close')][0].addEventListener('click', () => {
  const portfolioItemDiv = document.getElementsByClassName('portfolio-item-details')[0];
  portfolioItemDiv.classList.add('fade-out');
  window.setTimeout(() => {
    portfolioItemDiv.setAttribute('hidden', true);
    portfolioItemDiv.classList.remove('fade-out');
  }, 490);
});

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

window.smoothScrollTo = function(endX, endY, duration) {
  var startX = window.scrollX || window.pageXOffset,
    startY = window.scrollY || window.pageYOffset,
    distanceX = endX - startX,
    distanceY = endY - startY,
    startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  var easeInOutQuart = function(time, from, distance, duration) {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  var timer = window.setInterval(function() {
    var time = new Date().getTime() - startTime,
      newX = easeInOutQuart(time, startX, distanceX, duration),
      newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      window.clearInterval(timer);
    }
    window.scrollTo(newX, newY);
  }, 1000 / 60);
};
