const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let currentScrollPosition;
const navbarOriginalPosition = offset(document.getElementsByTagName('navbar')[0]).top;
let currentlySelected = 'bio-cv';
// let isMobile = false;

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
  [...document.getElementsByTagName('section')].forEach(section => {
    section.classList.remove('hidden');
  });
}

document.addEventListener('scroll', () => {
  currentScrollPosition = document.getElementsByTagName('html')[0].scrollTop;
  navbarPosition(currentScrollPosition, navbarOriginalPosition);
  titleScroll();
  fadeUpAndIn();
});

function navbarPosition(currentScrollPosition, navbarOriginalPosition) {
  const navbarElement = document.getElementsByTagName('navbar')[0];
  if (currentScrollPosition > navbarOriginalPosition) {
    navbarElement.classList.add('fixed-top');
    navbarElement.classList.remove('fade-out-background');
    navbarElement.classList.add('fade-in-background');
    navbarElement.classList.add('white-color');
    navbarElement.style.background = 'black';
    [...document.getElementsByClassName('nav-arrow')].forEach(navArrow => {
      navArrow.classList.add('no-bobble');
      if (navArrow.classList.contains('bio-cv')) {
        navArrow.classList.remove('bio-cv-bobble-again');
      } else if (navArrow.classList.contains('portfolio')) {
        navArrow.classList.remove('portfolio-bobble-again');
      } else {
        navArrow.classList.remove('contact-bobble-again');
      }
    });
    [...document.getElementsByTagName('hr')].forEach(hr => {
      if (hr.classList.contains('fade-out-hr')) {
        hr.classList.remove('fade-out-hr');
        hr.classList.add('fade-in-hr');
      }
      hr.style.backgroundColor = 'white';
    });
    [...document.getElementsByClassName('nav-arrow')].forEach(navArrow => {
      if (navArrow.classList.contains(currentlySelected)) {
        updateCurrentlySelected(currentlySelected);
      }
    });
  } else if (currentScrollPosition < navbarOriginalPosition) {
    navbarElement.classList.remove('fixed-top');
    if (navbarElement.classList.contains('fade-in-background')) {
      navbarElement.classList.remove('fade-in-background');
      navbarElement.classList.add('fade-out-background');
      navbarElement.classList.remove('white-color');
    }
    navbarElement.style.background = 'transparent';
    [...document.getElementsByClassName('nav-arrow')].forEach(navArrow => {
      navArrow.classList.remove('no-bobble');
      if (navArrow.classList.contains('bio-cv')) {
        navArrow.classList.add('bio-cv-bobble-again');
      } else if (navArrow.classList.contains('portfolio')) {
        navArrow.classList.add('portfolio-bobble-again');
      } else {
        navArrow.classList.add('contact-bobble-again');
      }
    });
    [...document.getElementsByTagName('hr')].forEach(hr => {
      if (hr.classList.contains('fade-in-hr')) {
        hr.classList.remove('fade-in-hr');
        hr.classList.add('fade-out-hr');
      }
      hr.style.backgroundColor = 'black';
    });
    [...document.getElementsByClassName('nav-arrow')].forEach(navArrow => {
      navArrow.classList.remove('selected');
    });
  }
}

function updateCurrentlySelected(currentlySelected) {
  [...document.getElementsByClassName('nav-arrow')].forEach(navArrow => {
    if (navArrow.classList.contains(currentlySelected)) {
      navArrow.classList.add('selected');
    } else {
      navArrow.classList.remove('selected');
    }
  });
}

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
      // window.setTimeout(() => {
      //   [...document.getElementsByTagName('section')].forEach(section => {
      //     section.classList.add('hidden');
      //   });
      //   document.getElementsByTagName('footer')[0].classList.add('hidden');
      // }, 1500);
    } else if (window.scrollY < viewportHeight) {
      [...document.getElementsByTagName('section')].forEach(sectionElement => {
        sectionElement.classList.add('fade-out');
        window.setTimeout(() => {
          sectionElement.classList.add('hidden');
        }, 490);
      });
      document.getElementsByClassName(element.classList[1])[1].classList.add('fade-in');
      window.setTimeout(() => {
        document.getElementsByClassName(element.classList[1])[1].classList.remove('hidden');
      }, 490);
      currentlySelected = element.classList[1];
      updateCurrentlySelected(element.classList[1]);
      window.smoothScrollTo(0, viewportHeight * 1.1, 1500);
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
        window.smoothScrollTo(0, viewportHeight * 1.1, 1500);
      }, 490);
      window.setTimeout(() => {
        document.getElementsByClassName(element.classList[1])[1].classList.remove('fade-in');
      }, 990);
      currentlySelected = element.classList[1];
      updateCurrentlySelected(element.classList[1]);
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
  element.src = `./assets/images/portfolio/${element.classList[0]}/1.gif`;
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
          maxImages = 8;
        } else if (element.classList[2] === 'keyboard-warrior') {
          maxImages = 5;
        } else if (element.classList[2] === 'turtle-todo') {
          maxImages = 4;
        } else if (element.classList[2] === 'sino') {
          maxImages = 5;
        }
        if (currentImage === 1) {
          imageElement.src = `./assets/images/portfolio/${element.classList[2]}/${maxImages}.png`;
          currentImage = maxImages;
        } else if (currentImage === 2) {
          imageElement.src = `./assets/images/portfolio/${element.classList[2]}/1.gif`;
          currentImage = 1;
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
          imageElement.src = `./assets/images/portfolio/${element.classList[2]}/1.gif`;
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
    document.getElementsByTagName('footer')[0].classList.remove('hidden');
    const portfolioItemDiv = document.getElementsByClassName('portfolio-item-details')[0];
    portfolioItemDiv.removeAttribute('hidden');
    document.getElementsByTagName('html')[0].classList.add('disable-scroll');
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
      carouselImageElement.src = './assets/images/portfolio/poco-a-poco/2.png';
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
        <p>(1 week individual project)</p>
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
      carouselImageElement.src = './assets/images/portfolio/keyboard-warrior/2.png';
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
        <p>(8 days individual project)</p>
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
      carouselImageElement.src = './assets/images/portfolio/turtle-todo/2.png';
      document.getElementsByClassName('portfolio-item-technology-list')[0].innerHTML = `
      <div><em class="icon-angularjs"></em>&nbsp;AngularJS</div>
      <div><em class="icon-nodejs"></em>&nbsp;Node.js</div>
      <div><em class="icon-css3"></em>&nbsp;CSS3</div>
      <div><em class="icon-sass"></em>&nbsp;SASS</div>
      <div><em class="icon-html5"></em>&nbsp;HTML5</div>
      `;
      document.getElementsByClassName('portfolio-item-description')[0].innerHTML = `
        <p>&emsp;From day 1 of this project, we have decided that fundamentally we want to provide a way of gamifying mundane day-to-day activities. One of the decisions we made before we began to build any of the app was that our app was not going to rely heavily on any one external API - we didn't wish our app to be a "wrapper" for functionality that was provided externally. Instead, the idea was to make the app rewarding and useful to use in and of itself, and to us this meant that firstly the app had to be at least a little bit fun and amusing and that secondly the user would be able to get some sense of accomplishment from using it.</p>
        <p>&emsp;To that end, we went the obvious route of having a points system as some sort of in-app "currency". We also decided quite early on that we could have some sort of "levels" system in order to help the player keep track of how often they have done a certain task, under the premises that watching progress unfold and watching numbers accumulate is rewarding. I felt that there was a danger of the app becoming overly complex and no longer fun if we started introducing too many variables to the user, and if we gave the user too many choices, so it was important to me that all tasks the user could enter were always worth 5 points, since that gives the user one less thing to think about. To that end, we also made much of the form for inputting a new task optional, since my ideal was that the user should only have to input a minimal amount of data but be rewarded with the maximum amount of information derived from that input in return.</p>
        <p>&emsp;As a final little gimmick, we did a little bit of our own data visualisation, with progress bars for displaying the user's history with their tasks and the progress in leveling up their tasks. Overall, it was great exploring Angular while working on this project and I feel that this is the project where I've really started becoming confident in working in the back-end.</p>
        <p>(1 week group project with Alex Poynter)</p>
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
      carouselImageElement.src = './assets/images/portfolio/sino/2.png';
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
        <p>(5 days individual project)</p>
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
  document.getElementsByTagName('html')[0].classList.remove('disable-scroll');
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
