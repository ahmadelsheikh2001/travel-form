var initial = document.querySelector('.initial');
var initial1;
initial.addEventListener('change', e => {
  initial1 = e.target.value;
});
var surname = document.querySelector('.surname');
var surname2;
surname.addEventListener('change', e => {
  surname2 = e.target.value;
});
var initial = document.querySelector('.Cabin');
var Cabin1;
initial.addEventListener('change', e => {
  Cabin1 = e.target.value;
  console.log(Cabin1);
});
function onSubmitForm() {
  var mainText = 'https://trueadventure.amadeusonlinesuite.com/Flight/search?';

  var cl1 = document.querySelector('#txtDate').value;
  var cl2 = document.querySelector('#txtDate2').value;
  var quantity = document.querySelector('#quantity').value;
  window.location.href = `${mainText}dep1=${initial1}&ret1=${surname2}&dtt1=${cl1}&cl1=${Cabin1}&dep2=${surname2}&ret2=${initial1}&dtt2=${cl2}&cl2=${Cabin1}&triptype=2&adult=${quantity}&child=0&infant=0&direct=false&key=IRT&airlines=&ref=false&langcode=EN`;

}
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById('txtDate').setAttribute('min', today);
document.getElementById('txtDate2').setAttribute('min', today);
