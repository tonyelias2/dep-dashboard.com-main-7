window.onload = function() {
    setTimeout(
        ()=>{
            updateWeatherCondtion(userData.temperatureCondition)
        },1000
    )
};

function updateWeatherCondtion(condition){
    var array = document.getElementsByClassName('weatherInformer18-week__data')
    if(array){
        // console.log(array)
        for (let item of array) {
            let span = item.innerHTML.split('<span>')[1]
            let temperature = span.split('</span>')[0]
            let number = +temperature.split('+')[1]
            console.log(' temp con 2')
            if(condition && number > condition){
                item.setAttribute('style', 'color: red !important')
                console.log(item)
            }else{
                item.removeAttribute('style')
                item.setAttribute('style', 'color: black !important')
            }
            // console.log(item);
        }
    }
}

function setCondition(){
    var condition = document.getElementById('temperature-condition').value;
    console.log(auth.currentUser.uid)
    firestore.collection('user').doc(auth.currentUser.uid).update({temperatureCondition: +condition})
    updateWeatherCondtion(+condition)
}