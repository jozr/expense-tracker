var Expense = {
  total: function() {
    return (this.cost*this.quantity);
  },
  // finalTotal: function() {
  //   return (this.cost*this.quantity+this.total());
  //   console.log(expenseTracker.finalTotal());
  // }
};

$(document).ready(function() {
  $("form#the-form").submit(function(event) {
    event.preventDefault();

    var newExpense = Object.create(Expense)

    newExpense.item = $("#input-item").val();
    newExpense.cost = parseFloat($("#input-cost").val());
    newExpense.quantity = parseInt($("#input-quantity").val());

    $("#input-item").val('');
    $("#input-cost").val('');
    $("#input-quantity").val('');

    $("#item").append("<tr>" +  "<td>" + newExpense.item + "</td>" + "</tr>")
    $("#quantity").append("<tr>" + "<td>" + newExpense.quantity + "</td>" + "</tr>")
    $("#total").append("<tr>" +  "<td> $" + newExpense.total() + "</td>" + "</tr>")

  });
});
