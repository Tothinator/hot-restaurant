$("document").ready(function() {
    displayTables();
    displayWaitlist();
});

function displayTables() {

    $('#tableList').empty();

    $.get('/api/tables')
        .then(function(data) {

            for (var i = 0; i < data.length; i ++) {

                $('#tableList').append(
                    $('<li> class="list-group-item mt-4"').append(
                        $('<h2>').text('Table #' + i)
                    ).append(
                        $('<h2>').text('ID: ' + data[i].customerID)
                    ).append(
                        $('<h2>').text('Name: ' + data[i].name)
                    ).append(
                        $('<h2>').text('Email ' + data[i].customerEmail)
                    ).append(
                        $('<h2>').text('Phone: ' + data[i].phoneNumber)
                    )
                );

            }

        });

}

function displayWaitlist() {

    $('#waitList').empty();

    $.get('/api/waitlist')
    .then(function(data) {

        for (var i = 0; i < data.length; i ++) {

            $('#waitList').append(
                $('<li> class="list-group-item mt-4"').append(
                    $('<h2>').text('Table #' + i)
                ).append(
                    $('<h2>').text('ID: ' + data[i].customerID)
                ).append(
                    $('<h2>').text('Name: ' + data[i].name)
                ).append(
                    $('<h2>').text('Email ' + data[i].customerEmail)
                ).append(
                    $('<h2>').text('Phone: ' + data[i].phoneNumber)
                )
            );

        }

    });

}

$('#reserve-btn').on('click', function (event) {
    event.preventDefault();

    var newReservation = {
        name: $('#reserve-name').val().trim(),
        phoneNumber: $('#reserve-phone').val().trim(),
        customerEmail: $('#reserve-email').val().trim(),
        customerID: $('reserve-unique-id').val().trim()
    };

    $.post('/api/reserve', newReservation)
        .then(function(data) {
            console.log(data);
            alert("Your reservations has been added!");
        });
});

$('#clear').on('click', function(event) {
    
    $.post('/api/clear')
        .then(function(data){
            console.log(data);

            $('#tableList').empty();            
            $('#waitList').empty();
        });

});