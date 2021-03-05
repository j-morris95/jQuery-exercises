$("#submit").on("click", (e) => {
  e.preventDefault();
  let title = $("#title-input").val();
  let rating = $("#rating-input").val();
  $("#table-body").append(makeHTML(title, rating));
});

$("tbody").on("click", "button", (e) => {
  $(e.target).parents("tr").remove();
});

function makeHTML(title, rating) {
  return `<tr>
    <td>
      ${title}
    </td>
    <td>
      ${rating}
    </td>
    <td>
      <button>Delete</button>
    </td>
  </tr>`;
}
