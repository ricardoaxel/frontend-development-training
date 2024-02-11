// Inialization of the button
function LikeButton() {
    this.init()
}

LikeButton.prototype.handleclick = function(event){
    console.info(event, this)
}

LikeButton.prototype.init = function() {
    console.info("Holaa")
    //This obtains the button with the 'like' class
    this.button = document.querySelector('button.like')
    this.buttonIcon = document.querySelector('button i');
    //We add to the button and event listener that will call and action, this action it's called 
    //with the binded context(this) of the same proptype
    this.button.addEventListener('click', this.handleclick.bind(this))
}

new LikeButton();