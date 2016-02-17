var ceic = ceic || {};

ceic.formTriggers = {

  bindFormTriggers: function() {
    $(".form-trigger").on("click", function() {
      event.preventDefault();
      var formId = "#" + $(this).data("form-id");
      ceic.formTriggers.hideForms();
      ceic.formTriggers.showForm(formId);
      ceic.formTriggers.showOverlay();
    });
  },

  bindOverlay: function() {
    $(".overlay").on("click", function() {
      ceic.formTriggers.hideForms();
    });
  },

  repeatValue: function(showed) {
    document.getElementById("Field18").value = showed.value;
  },

  hideForms: function() {
    $(".form-modal").removeClass("active");
    ceic.formTriggers.hideOverlay();
  },

  hideOverlay: function() {
    $(".overlay").removeClass("active");
  },

  showForm: function(formId) {
    var $form = $(formId),
        $formModal = $form.closest(".form-modal");
    $formModal.addClass("active");
  },

  showOverlay: function() {
    $(".overlay").addClass("active");
    ceic.formTriggers.bindOverlay();
  }
};

$(document).ready(function(){
  ceic.formTriggers.bindFormTriggers();
});
