function jsFunction() {
    return "Called JavaScript function!";
}

function percentage(current,needed) {
    return Math.round((current / needed) * 100);
}

//changes today progress text
function text(current, needed, metrics) {
    if(metrics === 1 && needed >= 1000 && current >= 1000){
        //metric on needed and current grater are in liters
        return (current/1000) + " L / " + (needed/1000) + " L";
    } else if(metrics === 1 && needed >=1000){
        //if metrics is on and needed is in liters but current is milliters
        return current + " mL / " + (needed/1000) + " L";
    } else {
        //imperial mode on
        return current + " Oz / " + needed + " Oz";}
}

function addWater(met, imp, metrics, current){
    if(metrics === 1){
        //current = Math.round(current + ( met / 29.5735));
        current = current + met;
        return current
    } else {
        current = current + imp;
        return current
    }

}

function lvl(current, need, lvl){
    console.log("pre" + lvl)
    if (lvl <= 100 && current === 0) {
        current = 1;
        lvl = ((current / need ));
        return lvl;
    }else if(lvl <= 100){
            lvl = ((current / need ));
            return lvl;
        } else {return 100}
}


//---- Settings ----//

// changes and set text in text field
function lorem(unit, goal, weight){
    if(unit === 1 && goal === 1){
        //metric on. goal mode being used
        return weight + " liters"
    } else if(unit === 0 && goal === 1){
        //imperial on. goal mode being used
        return weight + " ounces"
    } else if(unit === 1 && goal === 0){
        //metric on. goal mode not used
        return weight + " kilograms"
    } else {
        // imperial on. goal mode not used
        return weight + " pounds"
    }
}
function placeLorem(index, goal){
    if(index === 1 && goal === 0){
        //metrics and goal off
        return "Enter weight in kilograms"
    } else if(index === 1 && goal === 1){
        //metric and goal on
        return "Target goal amount in liters"
    } else if(index === 0 && goal === 1) {
        //imperial and goal off
        return "Target goal amount in ounces"
    }else {
        return "Enter weight in pounds"
    }
}

// Handles setting new weight or goal
function save(text, weight){
    if(text <= 0){
        //weight/goal can't be less than 0. sets it to current weight
        return weight
    } else {
        return text;}
}

function waterNeeded(weight, goal, metrics){
    if(goal === 1 && metrics === 1){
        //goal on metric used. converts weight to liters
        return (weight*1000);
    } else if(goal === 0 && metrics === 1){
        //halfs weight and converts to ounces
        weight =Math.round((weight*35)/2).toFixed(1);
        return weight;
    }else if(goal === 0 && metrics === 0) {
        return Math.round(weight/2);
    }else {
        return weight;
    }
}
