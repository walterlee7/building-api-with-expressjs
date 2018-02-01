$('form').submit((ev) => {

    ev.preventDefault();

    let chirpText = $('#chirpText').val();

    $.ajax({
        type: 'POST',
        url: '/api/chirps/',
        data: JSON.stringify({
            text: chirpText
        }),
        contentType: 'application/json'
    }).then((r) => {
        console.log('success!');
        window.location.reload(true);
    }).catch((err) => {
        console.log(err);
    });
});


$.ajax({
    type: 'GET',
    url: 'api/chirps',
    dataType: 'json',
}).then((chirps) => {
    let keys = Object.keys(chirps);

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
    }

    for (let key of keys) {
        if (key !== 'nextid') {

            $('.chirps').append(`<div class="chirpRows" id="d${key}" data-backdrop="static" data-toggle="modal" data-target="#myModal">${chirps[key].text}
            <button id="b${key}">X</button></div>`);

            $(`#b${key}`).bind("click", function (evt) {
                evt.preventDefault();
                $.ajax({
                    type: 'DELETE',
                    url: `/api/chirps/${key}`,
                }).then((r) => {
                    console.log('success!');
                    window.location.reload(true);
                }).catch((err) => {
                    console.log(err);
                });
            });

            $(`#d${key}`).click((evt) => {
                evt.preventDefault();
                $('.modal-body').append(`<textarea id="t${key}">${chirps[key].text}</textarea>`);
                $('.modal-footer').append(`<button id="s${key}" type="button" class="btn btn-default" data-dismiss="modal">Save Changes</button>`);

                //console.log(`s${key}`);
                $(`#s${key}`).bind("click", function (evt) {
                    evt.preventDefault();
                    console.log('clicked');
                    let changeText = $(`#t${key}`).val();
                    console.log(changeText);
                    $.ajax({
                        type: 'PUT',
                        url: `/api/chirps/${key}`,
                        data: JSON.stringify({
                            text: changeText
                        }),
                        contentType: 'application/json'
                    }).then((r) => {
                        console.log('success!');
                        window.location.reload(true);
                    }).catch((err) => {
                        console.log(err);
                    });
                });
            });
        }
    }
}).catch((err) => {
    console.log(err);
});

$('#closeBtn').click(() => {
    window.location.reload(true);
});




