let input = document.getElementById("input");
let buttons = document.getElementsByTagName("button");

let string = "";

// Loop through all buttons using a simple for loop
for (let i = 0; i < buttons.length; i++) 
{
  buttons[i].addEventListener("click", function () 
  {
    let value = buttons[i].innerHTML;

    if (value === "=") 
    {
        string = eval(string);
        input.value = string;

    } 
    else if (value === "AC") 
    {
      string = "";
      input.value = string;
    } 
    else if (value === "DEL") 
    {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } 
    else 
    {
      string += value;
      input.value = string;
    }
  });
}
