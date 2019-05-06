window.DEBUG = true;

(function($) {
  $.fn.tape = function(misc) {
    var $object = $(this);

    var log = window.DEBUG ? console.log : null;
    var error = console.error;
    var info = console.info;

    var methods = {
      private: {
        show: function() {
          var status = (misc.status !== undefined && misc.status !== '' && misc.status !== null) ? misc.status : 'success';
          var text = ($.isArray(misc.text)) ? misc.text.map(function(value) { return '<p>'+value+'</p>'}) : misc.text;

          var $title = $("<div />")
            .addClass("tape-title")
            .text(misc.title);

          var $text = $("<div />")
            .addClass("tape-text")
            .html(text);

          // Appending
          
          var $content = $("<div />")
          .addClass("tape-content")
          .append([$title, $text]);

          var $tape = $("<div />")
            .addClass("tape-alert")
            .addClass("tape--" + status)
            .append([$content]);
          
          if($object.find('.tape-alert') !== null){
            $object.find('.tape-alert').remove();
          }
          $object.append($tape);

        }
      },
      public: {
        close: function() {
          log("Close");
        }
      }
    };

    if (typeof misc == "object") {
      methods.private.show.apply(this, arguments);
    } else {
      if (methods.public[misc] !== undefined) {
        methods.public[misc].apply(this, arguments);
      } else {
        error('Tape cannot find the method: "' + misc + '"');
      }
    }
  };
})(jQuery);
