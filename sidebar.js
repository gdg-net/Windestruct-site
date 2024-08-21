function updatePosition() {
    	var element = document.getElementById('sidebar');
    	element.style.top = (document.documentElement.scrollTop || document.body.scrollTop) + 'px';
}

  	window.onscroll = updatePosition;
  	window.onload = updatePosition;
