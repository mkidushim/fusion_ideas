function l_display() {
    $.ajax({
        url: 'l_display.php',
        method: "POST",
        type: "JSON",
        crossDomain: true,
        success: function(response) {
            console.log(response);
            $('#l_display').append(response);
        }
    });
}

function s_display() {
    $.ajax({
        url: 's_display.php',
        method: "POST",
        type: "JSON",
        crossDomain: true,
        success: function(response) {
            console.log(response);
            $('#s_display').append(response);
        }

    });
}

function c_display() {
    $.ajax({
        url: 'c_display.php',
        method: "POST",
        type: "JSON",
        crossDomain: true,
        success: function(response) {
            console.log(response);
            $('#c_display').append(response);
           
        }
    })
}

function add_client() {
    $.ajax({
        url: 'client_add.php',
        method: "POST",
        type: "html",
        data: {
            name: $('#client_name').val()
        },
        crossDomain: true,
        success: function(response) {
            console.log(response);
            $('body').after("<p class='response alert-success col-md-6 col-md-offset-3'>" + response + "</p>");
           
        }
    })
}

function remove_client() {
    $.ajax({
        url: 'client_remove.php',
        method: "POST",
        type: "html",
        data: {
            client_id: $('#remove_id').val()
        },
        crossDomain: true,
        success: function(response) {
            console.log(response);
            $('body').after("<p class='response alert-success col-md-6 col-md-offset-3'>" + response + "</p>");
        }
    })
}

function update_client() {
    $.ajax({
        url: 'client_edit.php',
        method: "POST",
        type: "html",
        data: {
            client_id: $('#client_edit_id').val(),
            name: $('#client_edit_name').val()
        },
        crossDomain: true,
        success: function(response) {
            console.log(response);
            $('body').after("<p class='response alert-success col-md-6 col-md-offset-3'>" + response + "</p>");
      
        }
    })
}

function add_section() {
    $.ajax({
        url: 'section_add.php',
        method: "POST",
        type: "html",
        data: {
            name: $('#section_name').val(),
            client_id: $('#client_id').val()
        },
        crossDomain: true,
        success: function(response) {
            console.log(response);
            $('body').after("<p class='response alert-success col-md-6 col-md-offset-3'>" + response + "</p>");
        }
    })
}

function remove_section() {
    $.ajax({
        url: 'section_delete.php',
        method: "POST",
        type: "html",
        data: {
            client_id: $('#s_remove_id').val(),
            section_id: $('#ss_remove_id').val()
        },
        crossDomain: true,
        success: function(response) {
            console.log(response);
            $('body').after("<p class='response alert-success col-md-6 col-md-offset-3'>" + response + "</p>");
            
        }
    })
}

function edit_section() {
    $.ajax({
        url: 'section_edit.php',
        method: "POST",
        type: "html",
        data: {
            client_id: $('#section_edit_id').val(),
            section_id: $('#s_edit_id').val(),
            name: $('#s_edit_name').val()
        },
        crossDomain: true,
        success: function(response) {
            console.log(response);
            $('body').after("<p class='response alert-success col-md-6 col-md-offset-3'>" + response + "</p>");
         
        }
    })
}

function add_link() {
    $.ajax({
        url: 'link_add.php',
        method: "POST",
        type: "html",
        data: {
            name: $('#link_name').val(),
            section_id: $('#section_id').val()
        },
        crossDomain: true,
        success: function(response) {
            console.log(response);
            $('body').after("<p class='response alert-success col-md-6 col-md-offset-3'>" + response + "</p>");
           
        }
    })
}

function remove_link() {
    $.ajax({
        url: 'link_remove.php',
        method: "POST",
        type: "html",
        data: {
            link_id: $('#link_remove_id').val(),
            section_id: $('#sl_remove_id').val()
        },
        crossDomain: true,
        success: function(response) {
            console.log(response);
           $('body').after("<p class='response alert-success col-md-6 col-md-offset-3'>" + response + "</p>");
        }
    })
}

function edit_link() {
    $.ajax({
        url: 'link_edit.php',
        method: "POST",
        type: "html",
        data: {
            link_id: $('#l_edit_id').val(),
            section_id: $('#ls_edit_id').val(),
            name: $('#l_edit_name').val()
        },
        crossDomain: true,
        success: function(response) {
            console.log(response);
            $('body').after("<p class='response alert-success col-md-6 col-md-offset-3'>" + response + "</p>");
        }
    })
}
$(document).ready(function() {
    c_display();
    s_display();
    l_display();
    $('body').on('click', '#client_add_btn', function() {
        add_client();
        $('#c_display > li').remove();
        c_display();
        $('input').val('')
    });
    $('body').on('click', '#client_remove_btn', function() {
        remove_client()
        $('#c_display > li').remove();
        c_display();
        $('input').val('')
    });
    $('body').on('click', '#client_update_btn', function() {
        update_client()
        $('#c_display > li').remove();
        c_display();
    });
    $('body').on('click', '#section_add_btn', function() {
        add_section()
        $('#s_display > li').remove();
        s_display();
        $('input').val('')
    });
    $('body').on('click', '#section_remove_btn', function() {
        remove_section()
        $('#s_display > li').remove();
        s_display();
        $('input').val('')
    });
    $('body').on('click', '#section_edit_btn', function() {
        edit_section()
        $('#s_display > li').remove();
        s_display();
        $('input').val('')
    });
    $('body').on('click', '#link_add_btn', function() {
        add_link();
        $('#l_display > li').remove();
        l_display();
        $('input').val('')
    });
    $('body').on('click', '#link_remove_btn', function() {
        remove_link();
        $('#l_display > li').remove();
        l_display();
        $('input').val('')
    });
    $('body').on('click', '#link_edit_btn', function() {
        edit_link();
        $('#l_display > li').remove();
        l_display();
        $('input').val('')
    });
})
