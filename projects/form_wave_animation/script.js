let labels = document.querySelectorAll('.form-control label');

for(let i = 0, length = labels.length; i < length; i++)
{
    let label = labels[i];
    let labelText = label.innerText;
    let spannedText = "";
    for(let j = 0, textLength = labelText.length; j < textLength; j++)
    {
        let letter =
            "<span style=\"transition-delay: " + 50 * j + "ms\">" +
            labelText[j] +
            "</span>"
        ;
        spannedText = spannedText + letter;
    };
    label.innerHTML = spannedText;
};