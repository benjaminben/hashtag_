function getTaggedPosts() {

  var tag = $("input").val();

  console.log("starting function");

  if (tag !== "") {
    $.ajax({
      method: "GET",
      url: "https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token=1578228172.467ede5.04a6ec58145743cc851a2d64b58d9627",
      dataType: "jsonp",
      jsonp: "callback",
      jsonpCallback: "jsonpcallback",
      success: function(data) {
        console.log(data)
        $("main").html('')
        data.data.forEach(function(data) {
          console.log(data.images.standard_resolution.url);
          imgUrl = data.images.standard_resolution.url;
          // $("main").append("<div class='imgBox'><img src=" + imgUrl + "></div>");
          $("<div class='imgBox'><img src=" + imgUrl + "></div>").hide().appendTo("main").fadeIn(1000);
        })
      },
      error: function(err) {
        console.log(err)
      }
    })
  } else {
    $("main").html('')
    $("main").append("enter tag to sizzearch<br>(then wait)")
  }

}

getTaggedPosts();
window.setInterval(getTaggedPosts, 15000);


function fadeEmIn() {
  // setTimeout$("main").children().css("background", "blue");

    // for (var i = 0; i < children.length; i++) {
    //   setTimeout(function(){
    //     // $("'#img"+i+"'").css("background", "blue");
    //     console.log(i);
    //   }, 100);
    // }
}

function fadeEmOut(parent) {

}
