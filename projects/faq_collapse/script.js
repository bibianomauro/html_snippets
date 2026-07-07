let faqs = document.querySelectorAll(".faq");

for(let i = 0, length = faqs.length; i < length; i++)
{
    let faq = faqs[i];
    let faqButton = faq.lastElementChild;

    faqButton.addEventListener("click", function()
    {
        faq.classList.toggle("active");
    });
};