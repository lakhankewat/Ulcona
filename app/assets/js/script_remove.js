var abc = 0; //Declaring and defining global increement variable

$(document).ready(function() {

//To add new input file field dynamically, on click of "Add More Files" button below function will be executed
    $('#add_more').click(function() {
        $(this).before($("<div/>", {id: 'filediv'}).fadeIn('slow').append(
                $("<input/>", {name: 'file[]', type: 'file', id: 'file'}),        
                $("<br/><br/>")
                ));
    });

//following function will executes on change event of file input to select different file	
$('body').on('change', '#file', function(){
            if (this.files && this.files[0]) {
                 abc += 1; //increementing global variable by 1
				
				var z = abc - 1;
                var x = $(this).parent().find('#previewimg' + z).remove();
                $(this).before("<div id='abcd"+ abc +"' class='abcd'><img id='previewimg" + abc + "' src=''/></div>");
               
			    var reader = new FileReader();
                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
               
			    $(this).hide();
                $("#abcd"+ abc).append($("<img/>", {id: 'img', src: '../images/x.png', alt: 'delete'}).click(function() {
                $(this).parent().parent().remove();
                }));
            }
        });

//To preview image     
    function imageIsLoaded(e) {
        $('#previewimg' + abc).attr('src', e.target.result);
    };

    $('#upload').click(function(e) {
        var name = $(":file").val();
        
    });
});

$(document).ready(function() {
 
    $("#hide1").click(function(){
        document.getElementById('file1').value ="";
      $("#update_img1").hide();
        
    }); 
    $("#hide2").click(function(){
        document.getElementById('file2').value ="";
      $("#update_img2").hide();
        
    });
    $("#hide3").click(function(){
        document.getElementById('file3').value ="";
      $("#update_img3").hide();
        
    });
    $("#hide4").click(function(){
        document.getElementById('file4').value ="";
      $("#update_img4").hide();
        
    });
    $("#hide5").click(function(){
        document.getElementById('file5').value ="";
      $("#update_img5").hide();
        
    });
    $("#hide6").click(function(){
        document.getElementById('file6').value ="";
      $("#update_img6").hide();
        
    });
    $("#hide7").click(function(){
        document.getElementById('file7').value ="";
      $("#update_img7").hide();
        
    });
    $("#hide8").click(function(){
        document.getElementById('file8').value ="";
      $("#update_img8").hide();
        
    });
    $("#hide9").click(function(){
        document.getElementById('file9').value ="";
      $("#update_img9").hide();
        
    });
    $("#hide10").click(function(){
        document.getElementById('file10').value ="";
      $("#update_img10").hide();
        
    });

    $("#hide11").click(function(){
        document.getElementById('file11').value ="";
      $("#update_img11").hide();
        
    });
    $("#hide12").click(function(){
        document.getElementById('file12').value ="";
      $("#update_img12").hide();
        
    });
    $("#hide13").click(function(){
        document.getElementById('file13').value ="";
      $("#update_img13").hide();
        
    });
});