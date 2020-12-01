function addHover(gender){
    gender.classList.add("hovered")
}

function removeHover(gender){
    gender.classList.remove("hovered")
}

var selectedGender = null

function genderSelected(gender){ 
    var selectOptions = document.getElementById("gender")
    if(gender.id != selectOptions.value && selectedGender != null){
        //selectedGender.classList.add("removed")
        selectOptions.value = null
    }
    selectOptions.value = gender.id
    selectedGender = gender
    selectedGender.classList.add("selected")
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