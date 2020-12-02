function addHover(gender){
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

var selectedGender = null

function genderSelected(toHide,toShow,background){ 
    console.log(gender);
    var selectOptions = document.getElementById("gender")
    var selectedColor = document.querySelector("select#gender")
    var classes = document.getElementById("character-class")
    toHide.classList.add("removed")
    if(toShow.id != selectOptions.value && selectedGender != null){
        selectOptions.value = null
    }
    selectedColor.style.background = background
    selectOptions.value = toShow.id
    selectedGender = toShow
    selectedGender.classList.add("selected")
    classes.classList.add("selected")
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