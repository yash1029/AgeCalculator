let Day = document.getElementById("day")
let Month = document.getElementById("month")
let Year = document.getElementById("year")
let btn  = document.getElementsByClassName("btn")[0]
let labels = document.getElementsByTagName("label")
let inputs = document.getElementsByTagName("input")
let errors = document.getElementsByClassName("error-message")
let dates = document.getElementsByClassName("result")
let day
let month
let year
let correctDate
let date
btn.onclick = ()=>{
    correctDate = true;
     date = new Date()
     day = Day.value
    month = Month.value
    year = Year.value
 
    clearErrors()

    if(isNaN(day) || day>31 || day == ""){
        UserIsStupid()
        wrongDay()
        correctDate = false;
    }
    if(isNaN(month) || month<1 || month>12 ){
        UserIsStupid()
        wrongMonth()
        correctDate = false;
    }
    if(isNaN(year) || year>date.getFullYear() || year == ""){
        UserIsStupid()
        correctDate = false;
    }
    if(year>date.getFullYear()){
        UserIsStupid()
        wrongYear()
        correctDate = false;
    }
  
    if(day>30){
        if(month%2 == 0){
            UserIsStupid()
            wrongDay()
            correctDate = false;
        }
    }

    if(day==29 && month == 2){
         if(year%4==0){

            if(year%100==0){
               if(year%400==0){

               }else{
                UserIsStupid()
                wrongDay()
                correctDate = false;
               }
            }else{

            }
         }else{
            UserIsStupid()
            wrongDay()
            correctDate = false;
         }
    }

    if(correctDate){
        let years
        let months
        let days
        let daysLeft
        years = date.getFullYear()-year
        if(date.getMonth()+1<month){
            years -= 1
            months = month - (date.getMonth()+1)
            
        }else{
            months = (date.getMonth()+1) - month
        }
        if(day>date.getDate()){
            days = day - date.getDate()
        }else{
            days = date.getDate() - day
        }

        dates[0].innerHTML = years
        dates[1].innerHTML = months
        dates[2].innerHTML = days
    
}

}


function UserIsStupid(){
 Array.from(labels,label => label.style.color = "var(--lightRed)")
 Array.from(inputs,input=> input.style.borderColor = "var(--lightRed)")
}   


function wrongDay(){
  errors[0].style.display = "inline"
  correctDate = false;
}
function wrongMonth(){
  errors[1].style.display = "inline"
  correctDate = false;
}
function wrongYear(){
  errors[2].style.display = "inline"
  false;
}

function clearErrors(){
    Array.from(errors,element => element.style.display = "none")
    Array.from(labels,label => label.style.color = "var(--somekyGrey)")
 Array.from(inputs,input=> input.style.borderColor = "var(--lightGrey)")
}
