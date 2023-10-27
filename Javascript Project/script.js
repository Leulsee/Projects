function calculate(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value/100;
    
    let BMI = parseFloat(weight/(height**2)).toFixed(2);
    let BMI_status ,health_status, color, suggestion;
    if(BMI < 18.5){
      BMI_status = "Under Weight";
      color="#A7BD00"
      suggestion = "Should eat nutritious food and exercise"
    }else if(BMI < 22.90){
      BMI_status = "Normal";
      suggestion = "Healthy - should maintain this BMI"
      color="green"
    }else if(BMI < 24.9){
      BMI_status = "Over weight 1";
      suggestion = "You are overweight level 1 - should exercise and control food eating"
      color="red"
    }else if(BMI < 29.9){
      BMI_status = "Over weight 2";
      suggestion = "You are overweight level 2 - should exercise and control food eating"
      color="red"
    }else if(BMI > 30){
      BMI_status = "Over weight 3";
      suggestion = "You are overweight level 3 - should exercise, control food and should see doctor"
      color="red"
    }
    
    if(isNaN(BMI) || weight=="" || height ==""){
        document.getElementById("result").innerHTML = `please enter your weight and height`;
        document.getElementById("suggestion").innerHTML = ``;
        document.getElementById("normal-bmi").innerHTML = ``;
    }else{
        document.getElementById("result").innerHTML = `${BMI} - (${BMI_status})`
        document.getElementById("suggestion").innerHTML = `${suggestion}`
        document.getElementById("result").style.color = color;
        document.getElementById("normal-bmi").innerHTML = `Normal BMI is 18.5 - 22.9`;
    }
    
   
  }