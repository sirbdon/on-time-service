var thisy = []
var thisy2 = []

var contactReset = function() {
    console.log("contact reset $this:"); console.log($(this));
    $(this).children()
    thisy = $(this)

    $('.thank-you').fadeOut('fast')
    $('.thank-you').remove()
    $(this).find('.none1, .none0').hide() // $this refers to $('form') that envoked it.
    $(this).get(0).reset() // reset this form. Need  so data is sent to 'reset' in proper format.
    ( !$(this).hasClass('form-style-lower') ) ? $(this).find('input[name="message"]').eq(0).prop('style').width =  "20%" : null; // only apply width styling to navbar form
    $(this).find('input[name="message"]').prop('placeholder', 'Type here...')
    $(this).find('input').prop('required', false)
    $(this).fadeIn('fast')
    $(this).find('.some0').fadeIn('fast')
    whiteOnPhone()
    console.log('form RESET')
  }




$("form .submit").on('mouseenter', $(this), function() {
  var dataContext    = $(this).closest('form').removeAttr('id').removeAttr('_lpchecked') // set data context for calling form reset function

  var windowFn = function() { return contactReset.apply(dataContext, []) } // call reset function with data context // .apply executes code immediately; doesn't work with setTimeout so fore to put in function
  window.setTimeout(windowFn, 100)   
  console.log("data context: "); console.log(dataContext);
  thisy2 = dataContext
});


/////

var formTest = ""

$("form .submit").on('mouseenter', $(this), function() {

    var formHtml = $(this).closest('form').get(0)

    formTest = $(this)
  })








