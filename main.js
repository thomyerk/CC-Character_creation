function addHover(gender){
    console.log(gender);
    var childElems = gender.children
    Array.from(childElems).forEach(function(item) {
        item.classList.add("hovered")
    })
}

function removeHover(gender){
    var childElems = gender.children
    Array.from(childElems).forEach(function(item) {
        item.classList.remove("hovered")
    })
}

function genderSelected(toHide,toShow,background){ 
    var selectOptions = document.getElementById("gender")
    var selectedColor = document.querySelector("select#gender")
    toHide.classList.add("removed")
    if(toShow.id != selectOptions.values){
        selectOptions.value = null
    }
    selectedColor.style.background = background
    selectOptions.value = toShow.id
    console.log(toShow);
    (toShow.id == "female") ? toShow.classList.add("female-selected"):null
    Array.from(toShow.children).forEach(function(item) {
        item.classList.add("gender-selected")
    })
}

var raceSelected = null;

function selectedRace(race){ 
    var selectOptions = document.getElementById("race")
    if(race.value != selectOptions.selectedIndex && raceSelected != null){
        raceSelected.setAttribute("class",'')
    }
    race.setAttribute("class","race-selected")
    selectOptions.selectedIndex = race.value
    raceSelected = race
    document.querySelector("#character-class").style.opacity  = "1"
}

var classSelected = null

function selectedClass(classes){ 
    var selectOptions = document.getElementById("classes")
    console.log(selectOptions.selectedIndex);
    console.log(classes.value);
    if(classes.value != selectOptions.selectedIndex && classSelected != null){
        classSelected.setAttribute("class",'')
    }
    classes.setAttribute("class","class-selected")
    selectOptions.selectedIndex = classes.value
    classSelected = classes
}