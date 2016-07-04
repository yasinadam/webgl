app.controller('HomeCtrl', function($scope, $http, Upload) {
    $scope.img = {};
    $scope.img.files = '';

    $scope.$watch('img.files', function () {
        /*if($scope.img.files !== '') {
            var reader  = new FileReader();

            reader.onloadend = function () {
                console.log(reader.result); //this is an ArrayBuffer
            }
            reader.readAsArrayBuffer($scope.img.files[0]);
            $scope.getBase64Image($scope.img.files[0], function(url) {
                console.log(url);
            })
        }*/
    });

    $scope.edit = function() {
        // try to create a WebGL canvas (will fail if WebGL isn't supported)
        try {
            var canvas = fx.canvas();
        } catch (e) {
            alert(e);
            return;
        }


        var image = document.getElementById('image');
        var texture = canvas.texture(image);
        canvas.setAttribute("id", "canvas-1");

        canvas.draw(texture).ink(0.25).update();
        // apply the ink filter
        //canvas.draw(texture).perspective([nub1y,nub1x,nub2y,nub2x,nub3y,nub3x,nub4y,nub4x], [nub1y,nub1x,nub2y,nub2x,nub3y,nub3x,nub4y,nub4x]);

        // replace the image with the canvas
        image.parentNode.insertBefore(canvas, image);
        image.parentNode.removeChild(image);
        var imgHeight = $('#canvas-1').attr('height');
        var imgWidth = $('#canvas-1').attr('width');
        $('#canvas-1').after('<div id style="height:'+imgHeight+'px;" class="nubs"></div>');
        // Add Nubs
        var nub1x = (imgHeight / 2) / 2;
        var nub1y = (imgWidth / 2) / 2;
        var nub2x = (imgHeight / 2) / 2;
        var nub2y = imgWidth - ((imgWidth / 2) / 2);
        var nub3x = imgHeight - ((imgHeight / 2) / 2);
        var nub3y = (imgWidth / 2) / 2;
        var nub4x = imgHeight - ((imgHeight / 2) / 2);
        var nub4y = imgWidth - ((imgWidth / 2) / 2);
        $('.nubs').after('<div id="nub1" class="nub" style="top:'+nub1x+'px; left:'+nub1y+'px;" class="nub"></div>');
        $('.nubs').after('<div id="nub2" class="nub" style="top:'+nub2x+'px; left:'+nub2y+'px;" class="nub"></div>');
        $('.nubs').after('<div id="nub3" class="nub" style="top:'+nub3x+'px; left:'+nub3y+'px;" class="nub"></div>');
        $('.nubs').after('<div id="nub4" class="nub" style="top:'+nub4x+'px; left:'+nub4y+'px;" class="nub"></div>');
        $( ".nub" ).draggable();
        $( ".nub" ).on( "drag", function( event, ui ) {
            var newNub1x = parseInt($('#nub1').css('top').replace('px', ""));
            var newNub1y = parseInt($('#nub1').css('left').replace('px', ""));
            var newNub2x = parseInt($('#nub2').css('top').replace('px', ""));
            var newNub2y = parseInt($('#nub2').css('left').replace('px', ""));
            var newNub3x = parseInt($('#nub3').css('top').replace('px', ""));
            var newNub3y = parseInt($('#nub3').css('left').replace('px', ""));
            var newNub4x = parseInt($('#nub4').css('top').replace('px', ""));
            var newNub4y = parseInt($('#nub4').css('left').replace('px', ""));
            var before = [nub1y,nub1x,nub2y,nub2x,nub3y,nub3x,nub4y,nub4x];
            var after = [newNub1y,newNub1x,newNub2y,newNub2x,newNub3y,newNub3x,newNub4y,newNub4x];
            console.log(before);
            console.log(after);
            canvas.draw(texture).perspective(before, after).update();
        });
    }


    $scope.getBase64Image = function getBase64Image(img, cb) {
        console.log(img);
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        cb(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
    }




})
