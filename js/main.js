let cards = [];
let a_i = ['cards/front/pea_front.png'       ,'cards/back/pea_back.png'];
let b_i = ['cards/front/lobber_front.png'    ,'cards/back/lobber_back.png'];
let c_i = ['cards/front/splat_front.png'     ,'cards/back/splat_back.png'];
let d_i = ['cards/front/splitter_front.png'  ,'cards/back/splitter_back.png'];
let e_i = ['cards/front/aimer_front.png'     ,'cards/back/aimer_back.png'];
let f_i = ['cards/front/roundabout_front.png','cards/back/roundabout_back.png'];

function setup() {
    noCanvas();
    let a = select('a');
    let b = select('b');
    let c = select('c');
    let d = select('d');
    let e = select('e');
    let f = select('f');


    if (getItem('cards')!=null) cards = getItem('cards');
    else cards = [1,1,1,1,1,1];
    // //createImg('cards/front/pea_front.png', '');
    // for (let i = 0; i < cards.length; i++) cards[i].show();
    noLoop();
}

a.onclick = function() {
    cards[0] = (cards[0]+1)%2;
    a.src = a_i[cards[0]];
    storeItem('cards', cards);
}

b.onclick = function() {
    cards[1] = (cards[1]+1)%2;
    b.src = b_i[cards[1]];
    storeItem('cards', cards);
}

c.onclick = function() {
    cards[2] = (cards[2]+1)%2;
    c.src = c_i[cards[2]];
    storeItem('cards', cards);
}

d.onclick = function() {
    cards[3] = (cards[3]+1)%2;
    d.src = d_i[cards[3]];
    storeItem('cards', cards);
}

e.onclick = function() {
    cards[4] = (cards[4]+1)%2;
    e.src = e_i[cards[4]];
    storeItem('cards', cards);
}

f.onclick = function() {
    cards[5] = (cards[5]+1)%2;
    f.src = f_i[cards[5]];
    storeItem('cards', cards);
}

function draw() {
    a.src = a_i[cards[0]];
    b.src = b_i[cards[1]];
    c.src = c_i[cards[2]];
    d.src = d_i[cards[3]];
    e.src = e_i[cards[4]];
    f.src = f_i[cards[5]];
}
