function createHomeDOM() {
    const content = document.getElementById('content');
    let DOMtoDelete = content.childNodes[1];
    content.removeChild(DOMtoDelete);

    const home = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const btn = document.createElement('button');

    home.id = "home";
    h1.textContent = "Fine dining";
    h2.textContent = "Like you've never seen before";
    btn.textContent = "order now";

    btn.addEventListener('click', () => {
        createMenuDOM();
    })

    home.append(h1, h2, btn);
    content.append(home);
}

export default function createHeaderDOM() {
    const content = document.getElementById('content');

    const header = document.createElement("header");
    const ul = document.createElement("ul");
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    const listItems = document.getElementsByTagName('li');
    li1.textContent = "Home";
    li1.classList = "active";
    li2.textContent = "Menu";
    li3.textContent = "Contact";

    li1.id = "home-tab";
    li2.id = "menu-tab";
    li3.id = "contact-tab";

    li1.addEventListener('click', () => {
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active");
        }
        li1.classList = "active";
        createHomeDOM();
    });

    li2.addEventListener('click', () => {
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active");
        }
        li2.classList = "active";
        createMenuDOM();
    })

    li3.addEventListener('click', () => {
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active");
        }
        li3.classList.add("active");
        createContactDOM();
    })

    ul.append(li1,li2,li3);
    header.append(ul);

    content.prepend(header);
    createContactDOM();
}

function createMenuDOM() {
    const content = document.getElementById('content');
    let DOMtoDelete = content.childNodes[1];
    content.removeChild(DOMtoDelete);

    const listItems = document.getElementsByTagName('li');
    const menuTab = document.getElementById('menu-tab');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }
    menuTab.classList.add('active');

    const menu = document.createElement('div');
    menu.id = "menu";

    for (let i = 0; i < 10; i++) {
        const menuItem = document.createElement('div');
        const menuImg = document.createElement('img');
        const menuDesc = document.createElement('div');
        const menuName = document.createElement('h1');
        const menuIngredients = document.createElement('p');
        const menuPrice = document.createElement('p');
    
        menuItem.classList = "menu-item";
        menuImg.classList = "menu-img";
        menuDesc.classList = "menu-desc";
        menuName.classList = "menu-name";
        menuIngredients.classList = "menu-ingredients";
        menuPrice.classList = "menu-price";
    
        menuImg.src = "https://bjsrestaurants.scene7.com/is/image/bjsrestaurants/lunch-chicken-ranch-pladina:1x1_1240x1240?hei=383&wid=383";
        menuName.textContent = "Bacon Blitz Burger";
        menuIngredients.textContent = "Graciously seasoned bacon on top of a seasoned bun with lettuce, tomato, freshly chopped pineapple spears, pickles, and other stuff.";
        menuPrice.textContent = "$16.95";
    
        menuDesc.append(menuName, menuIngredients, menuPrice);
        menuItem.append(menuImg, menuDesc);
        menu.append(menuItem);
    }
    
    content.append(menu);
}

function createContactDOM() {
    const content = document.getElementById('content');
    let DOMtoDelete = content.childNodes[1];
    content.removeChild(DOMtoDelete);

    const listItems = document.getElementsByTagName('li');
    const contactTab = document.getElementById('contact-tab');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }
    contactTab.classList.add('active');

    const contactForm = document.createElement('form');
    
    const nameLabel = document.createElement('label');
    const name = document.createElement('input');
    const messageLabel = document.createElement('label');
    const message = document.createElement('textarea');
    const submit = document.createElement('input');

    name.type = "text";
    submit.type = "submit";
    name.id = "form-name";
    message.id = "form-message";

    nameLabel.for = "form-name";
    messageLabel.for = "form-message";
    nameLabel.textContent = "Name";
    name.placeholder= "Colby Ricks";
    messageLabel.textContent = "Message";
    message.placeholder = "Your message here...";

    contactForm.id = "form";

    contactForm.append(nameLabel, name, messageLabel, message, submit);

    content.append(contactForm);
}