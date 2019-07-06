var player;
// Callback for when the YouTube iFrame player is ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    // Set Player height and width
    height: '580',
    width: '600',
    // Set the id of the video to be played
    videoId: 'Poa5O-MdePk',
    // Setup event handelers
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onPlaybackQualityChange': onPlaybackQualityChange,
      'onPlaybackRateChange': onPlaybackRateChange,
      'onError': onError,
      'onApiChange': onApiChange,
    }
  });
};

// Event Handlers 
function onPlaybackQualityChange(){
  // Update playback quality on page
  update("quality");
};
function onPlaybackRateChange(){
  // Update playback rate on page
  update("rate");
};
function onError(error){
  // Update errors on page
  console.log("Error!");
};
function onApiChange(event){
  // Update currently availbe APIs
  console.log("API Change!");
};
function onPlayerReady(){
  // Update page after player is ready
  updateAll();
  //playVideo();
}

function onPlayerStateChange(event){
  // Get current state
  // Video has ended
  switch (event.data) {
    case YT.PlayerState.ENDED:
      updateAll() // set status for state, ...
      clearIntervals() // clear all intervals
      break;
    case YT.PlayerState.PLAYING:
      updateAll() // set status for state, ...
      setIntervals() // set intervals for ...
      break;
    case YT.PlayerState.PAUSED:
      updateAll() // set status for state, ...
      clearIntervals() // clear all intervals
      break;
    default:
      updateAll() // set status for state, ...
      clearIntervals() // clear all intervals
      break;

  }
};

// the YouTube iFrame API
function update(node){
  switch (node){
    // Update player reported changes
    case "duration":
      document.getElementById("duration").innerHTML = player.getDuration()+"s";
      break;
    case "url":
      var url = player.getVideoUrl();
      var container = document.getElementById("url");
      if (container != null){
        container.innerHTML = "<a href=\""+url+"\" target=\"_blank\">"+url+"</a>";
      }
      break;
    case "embedCode":
      var embedCode = player.getVideoEmbedCode();
      var index = Math.ceil(embedCode.length/3);
      var fmtEmbedCode = [embedCode.slice(0, index), "\n", embedCode.slice(index, index*2),"\n", embedCode.slice(index*2)].join('');
      var container = document.getElementById("embedCode");
      if (container != null){
        container.innerText = fmtEmbedCode;
      }
      break;
    case "title":
      var container = document.getElementById("title");
      if (container != null){
        container.innerHTML = player.getVideoData()["title"];
      }
      break;
    case "author":
      var container = document.getElementById("author");
      if (container != null){
        container.innerHTML = player.getVideoData()["author"]
      }
      break;
    case "video_id":
      var container = document.getElementById("video_id");
      if (container != null){
        container.innerHTML = player.getVideoData()["video_id"];
      }
      break;
  }
};
// Updates all video info
function updateAll(){
  for (var node in videoInfo){
    update(videoInfo[node]);
  }
};
// Array to track all video info
var videoInfo = [
  "url",
  "title",
  "author",
  "video_id",
];

// Functions to invoke user requested action through the iFrame API
function loadNewVideo(id){
  player.loadVideoById(document.getElementById(id).value);
};
function playVideo(){
  player.playVideo();
};