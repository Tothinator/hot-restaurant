
$('#add-btn').on('click', function (event) {
    event.preventDefault();

    var newReservation = {
        name: $('#name').val().trim(),
        phoneNumber: $('#phone-num').val().trim(),
        customerEmail: $('#email').val().trim(),
        customerID: $('customer-id').val().trim()
    };

    $.post('/api/reserve', newReservation)
        .then(function(data) {
            console.log(data);
            alert("Your reservations has been added!");
        });
});