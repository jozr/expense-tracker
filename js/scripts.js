
var expenseTracker = {
  item: [],
  cost: [],
  quantity: [],
  total: function() {
    return (this.cost*this.quantity);
  },
  finalTotal: function() {
    return (this.cost*this.quantity+this.total());
    console.log(expenseTracker.finalTotal());
  }
};

$(document).ready(function() {
  $("form#the-form").submit(function(event) {
    event.preventDefault();

    expenseTracker.item = $("#input-item").val();
    expenseTracker.cost = parseFloat($("#input-cost").val());
    expenseTracker.quantity = parseInt($("#input-quantity").val());

    $("#input-item").val('');
    $("#input-cost").val('');
    $("#input-quantity").val('');

    $("#item").append("<tr>" +  "<td>" + expenseTracker.item + "</td>" + "</tr>")
    $("#quantity").append("<tr>" + "<td>" + expenseTracker.quantity + "</td>" + "</tr>")
    $("#total").append("<tr>" +  "<td> $" + expenseTracker.total() + "</td>" + "</tr>")

  });
});
