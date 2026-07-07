/********************* HTML Elements *************************/

var result_el = document.getElementById("result");
var length_el = document.getElementById("length");
var uppercase_el = document.getElementById("uppercase");
var lowercase_el = document.getElementById("lowercase");
var numbers_el = document.getElementById("numbers");
var symbols_el = document.getElementById("symbols");
var generate_el = document.getElementById("generate");
var clipboard_el = document.getElementById("clipboard");

/******************** Event Listeners ***********************/

clipboard_el.addEventListener("click", async function()
{
  var password = result_el.innerText;

  if(!password) return;

  // await navigator.clipboard.writeText(password);

  // var rola = await navigator.clipboard.readText();

  // console.log(rola)

  /* deprecated
  var textarea = document.createElement("textarea");
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  textarea.remove();
  */

  navigator.clipboard
    .writeText(password)
    .then((result) =>
    {
      alert("Password Copied Successfully!");
    })
    .catch(function(error)
    {
      alert("An ERROR ocurred while copying the password!");
      console.error(error);
    });

  // navigator.clipboard
  //   .readText()
  //   .then(text => console.log(text));

});

generate_el.addEventListener("click", function()
{
  var length = +length_el.value;

  var has_lower = lowercase_el.checked;
  var has_upper = uppercase_el.checked;
  var has_number = numbers_el.checked;
  var has_symbol = symbols_el.checked;

  var result_password = generate_password(length, has_lower, has_upper, has_number, has_symbol);

  result_el.innerText = result_password;
});

function generate_password(length, lower, upper, number, symbol)
{
  var generated = "";

  var types_count = lower + upper + number + symbol;
  var types_arr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  if(types_count == 0) return "";

  for(var i = 0; i < length; i += types_count)
  {
    types_arr.forEach(type =>
    {
      var func_name = Object.keys(type)[0];
      generated += random_function[func_name]();
    });
  };

  return generated;
};


/********************* Random Funcions **********************/

var random_function = {
  lower: get_random_lower,
  upper: get_random_upper,
  number: get_random_number,
  symbol: get_random_symbol,
};

function get_random_lower()
{
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function get_random_upper()
{
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function get_random_number()
{
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function get_random_symbol()
{
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};
