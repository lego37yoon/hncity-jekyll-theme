let unordered_list = document.querySelectorAll("#main-content ul:not([class])");
let ordered_list = document.querySelectorAll("#main-content ol:not([class])");
let nested_list = document.querySelectorAll("#main-content ul:not([class]) ul, #main-content ol:not([class]) ol");

let unordered_list_item;
let ordered_list_item;
let i, j;

for (i = 0; i < unordered_list.length; i++) {
    unordered_list[i].setAttribute("class", "bx--list--unordered");
    unordered_list_item = unordered_list[i].querySelectorAll("li");
    for (j = 0; j < unordered_list_item.length; j++) {
        unordered_list_item[j].setAttribute("class", "bx--list__item");
    }
}

for (i = 0; i < ordered_list.length; i++) {
    ordered_list[i].setAttribute("class", "bx--list--ordered");
    ordered_list_item = ordered_list[i].querySelectorAll("li");
    for (j = 0; j < ordered_list_item.length; j++) {
        ordered_list_item[j].setAttribute("class", "bx--list__item");
    }
}

for (i = 0; i < nested_list.length; i++) {
    nested_list[i].classList.add("bx--list--nested");
}