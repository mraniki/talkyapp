console.log('I am running!');

document.write('hello 014');



document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = new Audio('http://s-00.wefunkradio.com:81/wefunk64.mp3');
  audioPlayer.controls = true;
  document.body.appendChild(audioPlayer);
  audioPlayer.play();
});

// document.addEventListener('DOMContentLoaded', function () {
//   const iframe = document.createElement('iframe');
//   iframe.width = '800';
//   iframe.height = '600';
//   iframe.frameBorder = '0';
  
//   const audioPlayer = new Audio('https://somafm.com/m3u/live130.m3u');
//   audioPlayer.controls = true;

//   iframe.contentDocument.body.appendChild(audioPlayer);
//   document.body.appendChild(iframe);
// });