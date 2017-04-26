function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  var songsList = document.getElementById("songs");

  function drawSongs(songList) {
    console.log(songList);
    // This is where you task begins
    var template = "";
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      template += `
        <div class="row">
            <div class="col-xs-12">
                <div class="media">
                    <div class="media-left">
                        <img class="media-object" src="${song.albumArt}"
                                class="img-resposive">
                    </div>
                    <div class="media-body">
                        <h2 class="media-heading"><a href="${song.preview}">${song.title}</a></h2>
                        <h3 class="media-heading">${song.artist}</h3>
                        <h4 class="media-heading">${song.collection}</h4 >
                        <h5 class="media-heading">${song.price}</h5>
                    </div >
                  <div class="media-right">
                    <audio controls>
                      <source src="${song.preview}" type="audio/mpeg">
                    </audio>
                  </div>
              </div>
            </div >
        </div > `;
    }
    songsList.innerHTML = template;
  }

}

var itunesCtrl = new ItunesController()
