

var elForm = document.querySelector(".site__form");
var elInput = document.querySelector(".site__input");
var elSelect = document.querySelector(".site__select");
var elResult = document.querySelector(".site__result");


elForm.addEventListener("submit" , function(event){
  event.preventDefault();

  var elInputVal = elInput.value;
  var elSelectVal = elSelect.value;

  if (elInputVal >= 0){
    elResult.textContent = (elInputVal*elSelectVal)
  }else(
    elResult.textContent =(`Xato!`)
  )


});
