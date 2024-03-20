const result = document.getElementById("final");
const submit = document.getElementById("submit");


submit.addEventListener('click', ()=>{

        const height = document.getElementById("height").value;
const weight = document.getElementById("weight").value;
var health_data = false;
var weight_data = false;


if(weight === ''|| isNaN(weight) || (weight<=0) || height === ''|| isNaN(height) || (height<=0)){
        alert("Enter valid Details");
}else{
        weight_data = true;
        health_data = true;
}

if(health_data && weight_data){
        const bmi = (weight/(height*height)*10000).toFixed(2);

        if(bmi<18.5){
                result.innerHTML = "Your BMI is "+bmi+". Underweight";
        }
        else if(bmi>=18.5 && bmi<=24.9){
                result.innerHTML = "Your BMI is "+bmi+". Normal";
        }
        else{
                result.innerHTML = "Your BMI is "+bmi+". Over-weight";
        }
}
});

