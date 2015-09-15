function add_client (){
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
            // $('body').html(response);
            // $('body').on('click', '#login', function() {
            //     ajax_call();
            //     console.log('button worked')
            // });
        }
    })
}
function remove_client (){
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
            $('#client_remove_btn').after(response);
            // $('body').on('click', '#login', function() {
            //     ajax_call();
            //     console.log('button worked')
            // });
        }
    })
}
function update_client (){
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
            $('#client_update_btn').after("<p>"+response+"</p>");
            // $('body').on('click', '#login', function() {
            //     ajax_call();
            //     console.log('button worked')
            // });
        }
    })
}
function add_section (){
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
            // $('body').html(response);
            // $('body').on('click', '#login', function() {
            //     ajax_call();
            //     console.log('button worked')
            // });
        }
    })
}
function remove_section (){
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
            $('body').append('<p>'+response+'</p>');
            // $('body').on('click', '#login', function() {
            //     ajax_call();
            //     console.log('button worked')
            // });
        }
    })
}
function edit_section (){
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
            $('body').append('<p>'+response+'</p>');
            // $('body').on('click', '#login', function() {
            //     ajax_call();
            //     console.log('button worked')
            // });
        }
    })
}
function add_link (){
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
        	$('body').append('<p>'+response+'</p>');
            // $('body').html(response);
            // $('body').on('click', '#login', function() {
            //     ajax_call();
            //     console.log('button worked')
            // });
        }
    })
}
function remove_link (){
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
        	$('body').append('<p>'+response+'</p>');
            // $('body').html(response);
            // $('body').on('click', '#login', function() {
            //     ajax_call();
            //     console.log('button worked')
            // });
        }
    })
}
function edit_link (){
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
        	$('body').append('<p>'+response+'</p>');
            // $('body').html(response);
            // $('body').on('click', '#login', function() {
            //     ajax_call();
            //     console.log('button worked')
            // });
        }
    })
}
$(document).ready(function(){
	$('body').on('click','#client_add_btn',function(){
		add_client()
	});
	$('body').on('click','#client_remove_btn',function(){
		remove_client()
	});
	$('body').on('click','#client_update_btn',function(){
		update_client()
	});
	$('body').on('click','#section_add_btn',function(){
		add_section()
	});
	$('body').on('click','#section_remove_btn',function(){
		remove_section()
	});
	$('body').on('click','#section_edit_btn',function(){
		edit_section()
	});
	$('body').on('click','#link_add_btn',function(){
		add_link();
	});
	$('body').on('click','#link_remove_btn',function(){
		remove_link();
	});
	$('body').on('click','#link_edit_btn',function(){
		edit_link();
	});
})