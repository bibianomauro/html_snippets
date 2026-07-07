const testimonials = [
  {
    name: "Jane Doe",
    position: "Developer",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "John Doe",
    position: "Developer",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const testimonialsContainer = document.querySelector("testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

let index = 1;

function updateTestimonial()
{
  const {
    name,
    position,
    photo,
    text
  } = testimonials[index];

  testimonial.textContent = text;
  userImage.src = photo;
  username.textContent = name;
  role.textContent = position;

  ++index;
  if(index >= testimonials.length) index = 0;
}

setInterval(updateTestimonial, 10000);
