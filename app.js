function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList){
    console.log(songList);
    // This is where you task begins
    var template = "";
      for(var i = 0; i < songList.length; i++) {
          var song = songList[i];
          template = "";
      }

  }
  
}



var itunesCtrl = new ItunesController()
