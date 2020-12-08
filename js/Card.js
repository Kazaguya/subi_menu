function Card(img) {
    this.curr = img;
    this.curr.onclick = function() {
        console.log('clicked');
    }
}
