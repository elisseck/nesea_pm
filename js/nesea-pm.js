(function ($, Drupal) {
  Drupal.behaviors.neseaPm = {
    attach: function (context, settings) {
      if (context === document) {
        $('#edit-members-target-id').css('background-color', '#ddd');
        var placeholder = $('#edit-members-target-id').val().split(' (')[0];
        $('#edit-members-target-id').after('<div id="pm-subject">' + placeholder + '</div>');
        $('#edit-members-target-id').hide();
      }
    }
  };
})(jQuery, Drupal);
