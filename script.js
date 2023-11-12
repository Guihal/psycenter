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

const pageTitle = document.querySelector(".liner-container");
if(pageTitle){
    if(pageTitle.textContent.includes("Тренинг | Расписание в Минске")){
        const listPsy = new map([
            ["Дубовик"],["https://psycenter.by/psychologists/elena_dubovik_psiholog"],
            ["Кобринец"],["https://psycenter.by/psychologists/natalyya_kobrinec_psiholog"],
            ["Ефремова"],["https://psycenter.by/psychologists/anna_efremova_psiholog"],
            ["Аракелян"],["https://psycenter.by/psychologists/natalya-arakelyan"],
            ["Калюжина"],["https://psycenter.by/psychologists/anastasiya-kalyuzhina"],
            ["Сацевич"],["https://psycenter.by/psychologists/viktoriya-satsevich"],
            ["Борщевская"],["https://psycenter.by/psychologists/ekaterina-borshhevskaya"],
            ["Рыбчинская"],["https://psycenter.by/psychologists/olga-rybchinskaya"],
            ["Шмак"],["https://psycenter.by/psychologists/irina-shmak"],
            ["Нагорная"],["https://psycenter.by/psychologists/olga-nagornaya-batura"],
            ["Цветаева"],["https://psycenter.by/psychologists/darya-tsvetaeva"],
            ["Бланк"],["https://psycenter.by/psychologists/oksana-blank"],
            ["Голубева"],["https://psycenter.by/psychologists/elena-golubeva"],
            ["Дерюгин"],["https://psycenter.by/psychologists/aleksandr-deryugin"],
            ["Федорчук"],["https://psycenter.by/psychologists/anna-fedorchuk"]
        ]);
        const aEventOrg = document.querySelectorAll("a.box-icon-align-left");
        if(aEventOrg.length > 0){
            aEventOrg.forEach((el) =>{
                const namePsy = el.querySelector("h4");
                if(namePsy){
                    for (let pair of listPsy.entries()) {
                        if(namePsy.textContent.includes(pair[0])){
                            el.href = pair[1];
                        }
                    }
                }
            });
        }
    }
}
