var initMap;(function(){var b=this;initMap=function(){map=new google.maps.Map(b.document.getElementById("map"),{center:{lat:37.4849,lng:-119.9663},zoom:6}),add.forEach(function(c){!function(d,f){if(1===add.length)map.setZoom(16),g=markers;else var g=c;d.geocode({address:g},function(h,i){"OK"===i&&(f.setCenter(h[0].geometry.location),new google.maps.Marker({map:f,position:h[0].geometry.location,title:g,animation:google.maps.Animation.DROP}))})}(new google.maps.Geocoder,map)})}}).call(this);
