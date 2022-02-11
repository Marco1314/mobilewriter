"use strict";

let fontsize = document.getElementsByClassName("size");
let textarea = document.getElementById("textarea");


let App = {
        changeSize: function() {
            for(let size of fontsize) {
                size.addEventListener("change", function() {
                    let value = this.value;
                    textarea.style.fontSize = value+"px";
                })
            }            
        }
}

App.changeSize();