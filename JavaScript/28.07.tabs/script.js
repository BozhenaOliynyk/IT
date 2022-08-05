const tabsBtn = document.querySelectorAll(".tabs__nav-btn")

const tabsItem = document.querySelectorAll(".tabs__item")

tabsBtn.forEach(function(btn){
    btn.addEventListener('click',function(){
        let activeBtn = btn;
        console.log(activeBtn);

        let tabId = activeBtn.getAttribute("data-tab");
        console.log(tabId);

        let activeTab = document.querySelector(tabId);

        //скидаю клас активний у всіх елементів
        tabsBtn.forEach(function(btn){
            btn.classList.remove('active');
        })

        //скидаю клас активний у всіх табів
        tabsItem.forEach(function(item){
            item.classList.remove('active');
        })

        //додаю активний клас для табу і кнопки
        activeBtn.classList.add('active');
        activeTab.classList.add('active');
    })
})