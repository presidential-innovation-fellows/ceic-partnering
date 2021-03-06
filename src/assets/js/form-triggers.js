var ceic = ceic || {};

ceic.formTriggers = {

  bindCloseTrigger: function() {
    $(".form-modal .close").on("click", function() {
      ceic.formTriggers.hideForms();
    });
  },

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

  repeatValue: function(showed, hiddenField) {
    document.getElementById(hiddenField).value = showed.value;
  },

  hideForms: function() {
    $(".form-modal").removeClass("active");
    $("body").removeClass("no-scroll");
    ceic.formTriggers.hideOverlay();
  },

  hideOverlay: function() {
    $(".overlay").removeClass("active");
  },

  showForm: function(formId) {
    var $form = $(formId),
        $formModal = $form.closest(".form-modal");
    $formModal.addClass("active");
    $("body").addClass("no-scroll");
  },

  showOverlay: function() {
    $(".overlay").addClass("active");
    ceic.formTriggers.bindOverlay();
  },

  validateForms: function() {
    $("#form1").parsley();
    $("#form3").parsley();
    $("#form4").parsley();
  }
};

$(document).ready(function(){
  ceic.formTriggers.validateForms();
  ceic.formTriggers.bindFormTriggers();
  ceic.formTriggers.bindCloseTrigger();

  $(".form-modal").on("click", function(e) {
    e.stopPropagation();
  });
});
