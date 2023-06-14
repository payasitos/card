function seleciondiv() {
    let selection = document.getElementById("myselect");
    let selectdOption = parseint(selection.value);

    let divs = document.querySelectorAll('.card')

    /*for (let i = 0; i < divs.length; i++) {
        if (i < selectdOption) {
            divs[i].classList.remove("hidden");
        }
        else {
            divs[i].classList.add("hidden");
        }
        
    }
    */
   console.log(divs.length)
}