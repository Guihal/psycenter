let AInterval = setInterval(() =>{
	const urlComm = document.querySelectorAll(".comment-body .url");
	if(urlComm.length > 0){
		urlComm.forEach((el) => {
			el.style.pointerEvents = "none";
			el.style.color = "#000";
			let btna = document.createElement("a");
			let br = document.createElement("br");
			btna.classList.add("btna");
			btna.href = el.href
			btna.textContent = "Смотреть оригинал отзыва";
			if(!el.parentNode.parentNode.parentNode.querySelector(".btna")){
					el.parentNode.parentNode.parentNode.querySelector("p").prepend(br);
				 el.parentNode.parentNode.parentNode.querySelector("p").prepend(btna);
					
			}
		});
	}
}, 100);

