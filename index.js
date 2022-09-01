window.addEventListener("DOMContentLoaded",()=> {

    const data=[
        {
            header:"Led Zeppelin",
            src:"./img/LZ_1.webp",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, molestiae? Nesciunt dolorum quas facere sed minima esse officia, nihil quae voluptates tempore amet quisquam porro asperiores vero minus incidunt voluptatem, nemo commodi quod! Illo, ipsa? Fugiat eaque"
        },
        {
            header:"Beatles",
            src:"./img/beatles.webp",
            text:"ipsum dolor sit amet consectetur adipisicing elit. Veritatis, molestiae? Nesciunt dolorum quas facere sed minima esse officia, nihil quae voluptates tempore amet quisquam porro asperiores vero minus incidunt voluptatem, nemo commodi quod! Illo, ipsa? Fugiat eaque"
        },
        {
            header:"Deep Purple",
            src:"./img/deep-purple.jpg",
            text:"dolor sit amet consectetur adipisicing elit. Veritatis, molestiae? Nesciunt dolorum quas facere sed minima esse officia, nihil quae voluptates tempore amet quisquam porro asperiores vero minus incidunt voluptatem, nemo commodi quod! Illo, ipsa? Fugiat eaque"
        },
        {
            header:"Pink Floyd",
            src:"./img/Pink_Floyd_.jpg",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, molestiae? Nesciunt dolorum quas facere sed minima esse officia, nihil quae voluptates tempore amet quisquam porro asperiores vero minus incidunt voluptatem, nemo commodi quod! Illo, ipsa? Fugiat eaque"
        },
        {
            header:"Scorpions",
            src:"./img/scorpions.jpg",
            text:"sit amet consectetur adipisicing elit. Veritatis, molestiae? Nesciunt dolorum quas facere sed minima esse officia, nihil quae voluptates tempore amet quisquam porro asperiores vero minus incidunt voluptatem, nemo commodi quod! Illo, ipsa? Fugiat eaque"
        }
    ];

    const menuItem=document.querySelectorAll(".menu__item"),
          menuItemParent=document.querySelector(".menu"),
          contentItem=document.querySelector(".item");

    console.log(menuItem);
    //console.log("frnbd   ",menuItemActive);

    function hideMenuItemActive(){
        menuItem.forEach((element)=>{
            element.classList.remove("menu__item__active");
        });
    }

    function showMenuItemActive(i=0){
        menuItem[i].classList.add("menu__item__active");
    }

    function renderContent(i=0,parent){
        const h=document.createElement('h2'),
              img=document.createElement('img'),
              p=document.createElement('p');
        h.classList.add("item__header");
        h.innerText=data[i].header;
        img.classList.add("item__src");
        img.src=data[i].src;
        p.classList.add("item__text");
        p.innerText=data[i].text;
        parent.innerHTML="";
        parent.appendChild(h);
        parent.appendChild(img);
        parent.appendChild(p);
    }

    hideMenuItemActive();
    showMenuItemActive(0);
    renderContent(0,contentItem);

    menuItemParent.addEventListener("click", (event)=>{
        const target=event.target;

        if (target && target.classList.contains("menu__item")){
            menuItem.forEach((element, i)=>{
                if(target===element){
                    hideMenuItemActive();
                    showMenuItemActive(i);
                    renderContent(i,contentItem);
                }
            });
        }

    });

});