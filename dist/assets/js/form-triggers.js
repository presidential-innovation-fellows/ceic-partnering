var ceic = ceic || {};

ceic.formTriggers = {

  bindFormTriggers: function() {
    $(".form-trigger").on("click", function() {
      event.preventDefault();
      var formId = "#" + $(this).data("form-id");
      ceic.formTriggers.hideForms();
      ceic.formTriggers.showForm(formId);
    });
  },

  hideForms: function() {
    $(".form-modal").removeClass("active");
  },

  showForm: function(formId) {
    var $form = $(formId),
        $formModal = $form.parent(".form-modal");
    $formModal.addClass("active");

    console.log(formId);
  }
};

$(document).ready(function(){
  ceic.formTriggers.bindFormTriggers();
});
