var typed = new Typed(".auto-type",{
    strings : [`YOUR <span style=color:#548754>BMI</span> IS`],
    typeSpeed : 150,
    backSpeed : 150,
    looped : true
})

function calBMI(){
        details={
            age: document.getElementById('age').value,
            height: document.getElementById('height').value,
            weight: document.getElementById('weight').value
    }
    if(details.age=="" || details.height=="" || details.weight==""){
        alert("Please fill all the fields")
    }
    else{
        // Convert height to meters
        const heightInM = details.height / 100;
        const weight = details.weight;

        //  Calculate BMI
        var bmi=((weight)/(heightInM**2)).toFixed(2)
        var category=""
        var comment=""
        var comment1=""

        // BMI category and comments
        if(bmi<=18.4){
            category="Underweight"
            comment="Gain weight"
            comment1="Focusing on improving your health and strength is key, even small steps can make a big difference!"
            document.getElementById("category").style.color = "#4347c4"
        }

        else if(bmi>18.5 &&  bmi<=24.9){
            category="Normal"
            comment="Maintaining a normal weight is key to overall health and well-being."
            document.getElementById("category").style.color = "#45b05e" 
        }

        else if(bmi>25 && bmi<=29.9){
            category="Overweight"
            comment="Loose weight"
            comment1="Focus on becoming healthier every day, one step at a time - your journey is about progress, not perfection."
            document.getElementById("category").style.color = "#fffd6b"
        }

        else{
            category="Obese"
            comment="Focusing on healthy habits and seeking support can be really beneficial."
            comment1="Consult Healthcare Professionals , Adopt a Balanced Diet , Increase Physical Activity"
            document.getElementById("category").style.color = "#b83333"
        }

        // Store BMI data in localStorage
        localStorage.setItem("bmiResult",bmi)
        localStorage.setItem("category",category)
        localStorage.setItem("comment",comment)
        localStorage.setItem("comment1",comment1)


        // Display BMI results
        document.getElementById('result').innerText = `${localStorage.getItem('bmiResult')} kg/m²`;
        document.getElementById('category').innerText = `${localStorage.getItem('category')}`;
        document.getElementById('comment').innerText = `${localStorage.getItem('comment')}`;
        document.getElementById('comment1').innerText = `${localStorage.getItem('comment1')}`;
    }
}

function resetBMI(){
    localStorage.clear()
    age.value="";
    weight.value="";
    height.value="";
    document.getElementById('result').textContent = '';
    document.getElementById('category').textContent = '';
    document.getElementById('comment').textContent = '';
    document.getElementById('comment1').textContent = '';

    const genderRadios = document.getElementsByName('gender');
    genderRadios.forEach((radio) => {
        radio.checked = false; // Uncheck all gender radio buttons
    });
    
}