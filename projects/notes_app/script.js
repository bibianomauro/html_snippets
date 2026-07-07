var add_btn = document.getElementById("add");

var notes = JSON.parse(localStorage.getItem("notes"));

if(notes)
{
  for(var i = 0; i < notes.length; i++)
  {
    add_new_note(notes[i]);
  };
};

function add_new_note(text = "")
{
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  var edit_btn = note.querySelector(".edit");
  var delete_btn = note.querySelector(".delete");
  var main = note.querySelector(".main");
  var text_area = note.querySelector("textarea");

  text_area.value = text;
  main.innerHTML = text;

  delete_btn.addEventListener("click", function()
  {
    note.remove();

    update_local_storage();
  });

  edit_btn.addEventListener("click", function()
  {
    main.classList.toggle("hidden");
    text_area.classList.toggle("hidden");
    text_area.focus();
  });

  text_area.addEventListener("input", function(e)
  {
    var value = e.target.value;

    main.innerHTML = value;

    update_local_storage();
  });

  document.body.appendChild(note);
};

add_btn.addEventListener("click", function() { add_new_note() });



function update_local_storage()
{
  var notes_text_areas = document.querySelectorAll("textarea");

  var notes_text = [];

  for(var i = 0; i < notes_text_areas.length; i++)
  {
    var note = notes_text_areas[i].value;
    notes_text.push(note);
  };

  localStorage.setItem("notes", JSON.stringify(notes_text));
};
