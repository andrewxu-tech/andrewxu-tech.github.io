let counter = 1;
setInterval(() => {
  const displayJobs = [
    '<h1>web<br />developer</h1>',
    '<h1>composer,<br />violinist</h1>'
  ];
  document.getElementsByClassName('job')[0].innerHTML = displayJobs[counter % displayJobs.length];
  counter++;
}, 4000);
