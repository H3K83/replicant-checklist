var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
    $checkboxes = $(".form-check-input");

$checkboxes.on("change", function(){
 $checkboxes.each(function(){
  checkboxValues[this.id] = this.checked;
 });

 localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});

$.each(checkboxValues, function(key, value) {
 $("#" + key).prop('checked', value);
});
