<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="https://sirbdon.github.io/moment/moment-copy.js"></script>
<script src="https://sirbdon.github.io/moment-timezone/moment-timezone-copy.js"></script>
<meta name="google-site-verification" content="U3VF9tek-GQipZb5m5ZbKz0Pgx4sdgwwKLIeD-yy0go" />
<meta name="google-site-verification" content="U3VF9tek-GQipZb5m5ZbKz0Pgx4sdgwwKLIeD-yy0go" />

<!-- Mixpanel Analytics -->
<script type="text/javascript">
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";
  analytics.load("7Kai3BXMZfeLnoUTZwHB2vF2lGLogXF6");
  analytics.page()
  }}();
</script>



<script >
$(document).ready(function() {

  // remove iOs phone styling
$('head').append('<meta name="format-detection" content="telephone=no">');
    
  // add hidden div w/ URL over middle icon on homepage so it appears clickable
var elementServices = '<div style="position:absolute;height:20%;width:30%;background-color:rgba(255, 0, 0, 0);display:hidden;left:50%;margin-left:-15%" id="service-outer"><div style="position:relative;height:100%;width:100%;background-color:rgba(255, 0, 0, 0);cursor:pointer;z-index:50;margin-top: 79%;" id="service-inner"></div></div>';
  
$('div.image-wrapper').prepend(elementServices);

$('#service-inner').click(function() {
window.location='http://ontimeserviceco.com/watch-services/';
})


// Add hidden div with URL over "locations" Icon
var elementLocations = '<div style="position:absolute;height:20%;width:30%;background-color:rgba(255, 0, 0, 0);display:hidden;left:20%;margin-left:-15%" id="locations-outer"><div style="position:relative;height:100%;width:100%;background-color:rgba(255, 0, 0, 0);cursor:pointer;z-index:50;margin-top: 79%;" id="locations-inner"></div></div>';
  
$('div.image-wrapper').prepend(elementLocations);

$('#locations-inner').click(function() {
window.location='http://ontimeserviceco.com/locations/';
})



// god damn contact form in-page in just javascript. COME ON
var formHtml = '<div class="site-address">\
<form action="#" method="POST" class="form-style">\
<div class="form-container">\
<label for="message" class="some0 form-email" style="color:#111;">Contact Us: <span class="" style="font-weight:bold;text-decoration:underline;display:none;" class="here">HERE</span></label>\
<input style="" class="some0" type="text" name="message" placeholder="Type here..." >\
<button style="display:none" class="none0 form-next">Next</button>\
<label for="contact-info" style="display:none; color:#111;" class="none1 form-email">Your Info:</label>\
<input style="display:none;" class="none1 touch" type="text" name="contact-info" placeholder="Enter your phone number or e-mail...">\
<input type="text" name="_gotcha" style="display:none">\
<input type="hidden" name="_subject" value="New contact from On Time website!">\
<input type="hidden" name="_cc" value="bpizza@gmail.com">\
<button style="display:none;" class="none1 submit">Send</button>\
</div>\
</form>\
</div>'

//

var bottomHtmlWrap = '<h3 class="text-align-center"></h3>'

var orCall = '<div class="site-city-state or-call">or:</div>'

var callPhone = '<div class="site-phone"><a href="tel:+16046885317,203" style="text-decoration:underline">Call Us</a><br><span style="text-transform:lowercase !important; text-decoration:none !important; margin-top:-10px;"><a>(ext. 203)</a></span></div>'

  
$('div.site-address:contains("info@ontimeserviceco.com")').replaceWith(formHtml);
$('div.site-address').addClass('phonex');
// $('div.site-city-state').remove();
$('div.site-city-state').replaceWith(orCall); 
  
// lower form
$('div.sqs-block-content h3.text-align-center').eq(1).before(formHtml);
$('div.site-address').eq(1).wrap(bottomHtmlWrap).after('<br><div>or e-mail:</div>');
$('div.site-address form').eq(1).addClass('form-style-lower');

  
// On phones, white-out phone info for better UX

var isPhoneX = function() {
  return ($('div.or-call').css('display') === "block" && $('div.site-phone').css('display') === "block");
}

if (isPhoneX()) { 
  $('div.site-city-state').replaceWith(orCall);
  $('div.site-phone').replaceWith(callPhone);
}
  
  
var whiteOnPhone = function() {
  console.log("in whiteOnPhone");
  var opacity1 = Boolean( $('div.or-call').css('opacity') === "1"),
      opacity2 = Boolean( $('div.site-phone').css('opacity') === "1"),
      isPhone = isPhoneX();
      console.log("vars:" + " " + isPhone + " " + opacity1 + " " + opacity2);  
  if ( isPhone && opacity1 && opacity2 ) {
    console.log("set opacity to 0");
    $('div.or-call, div.site-phone').animate( { opacity: "0" }, 400 );
  } else if ( isPhone && !opacity1 && !opacity2 ) {
    console.log("set opacity to 1");
    $('div.or-call, div.site-phone').animate( { opacity: "1" }, 400 );
  }
  console.log("end of whiteOnPhone");
}


// When message field is focus
$('input[name="message"]').eq(0).focus(function() {
  whiteOnPhone();
  if ( $(this).prop('style').width !==  "40%" && !isPhoneX() ) { 
    $(this).animate( { width: "20%" }, 0 ); // set with style
    $(this).animate( { width: "40%" }, 100 ); // animate it
  }
  $(this).prop('placeholder', 'Enter your comments and requests here...')
  $(this).parent().find('.none0').fadeIn('fast');
});
  
$('input[name="message"]').eq(1).focus(function() {
  whiteOnPhone();
  $(this).prop('placeholder', 'Enter your comments and requests here...')
  $(this).parent().find('.none0').fadeIn('fast');
});
  
$('does-not-work').focusout(function() {
  whiteOnPhone();
  if ( $('input[name="message"]').prop('style').width !==  "20%" && !isPhoneX() ) { 
    $('input[name="message"]').animate( { width: "20%" }, 100 ); // animate out
  }
  $('input[name="message"]').prop('placeholder', 'Type here...')
  $('.none0').fadeOut('fast');
});
  

  
// cliked CONTACT
// $('label.form-email').click(function(e) {
$('doesnt-work').click(function(e) {
  console.log("contact us clicked");
  whiteOnPhone();
  $('.some0').fadeOut('fast',function() {
    $('.none0').removeClass('input:invalid').fadeIn('fast');
    $('input[name="message"]').focus();
  });
  e.preventDefault(); 
});

 // clicked next
$('.form-next').click(function(e) {
  if ($(this).parent().find('input[name="message"]').val().trim() === "") {
    $(this).parent().find('input[name="message"]').prop('required',true);
    e.preventDefault();
    return false;
  } else {
    console.log("next form clicked");
    var labelWidth = $('label[for="message"]').width();
    $(this).parent().find('label[for="contact-info"]').width(labelWidth);
    $(this).parent().find('.some0').fadeOut('fast');
    $(this).parent().find('.none0').fadeOut('fast', function() {
      $(this).parent().find('.none1').fadeIn('fast');
      $(this).parent().find('.touch').focus();
    });
    e.preventDefault();
  }
});

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};
  
var filterArrayU = function(x) { return x !== "undefined"; } 

var currentPathX = function() {
  var fullPath = getLocation().pathname;
  var pathArray = fullPath.split("/");
  pathArray.shift(); // remove empty first array element
  var filteredArray = pathArray.filter(filterArrayU);
  var userPath = filteredArray.join("/");
  return userPath;
}
  
if (currentPathX() === "") { 
  $('section[data-content-field="main-content"]').remove();
  
}
  
  
  // form reset
var contactReset = function() {
  $('.thank-you').fadeOut('fast');
  $('.thank-you').remove();
  $('.none1, .none0').hide();
  $('form')[0].reset();
  $('form')[1].reset();
  $('input[name="message"]').eq(0).prop('style').width =  "20%";
  $('input[name="message"]').prop('placeholder', 'Type here...');
  $('input').prop('required', false);
  $('form').fadeIn('fast');
  $('.some0').fadeIn('fast');  
  whiteOnPhone();
}
// dates
var thisMoment = function() { 
  return moment().tz('America/Los_Angeles').format('MMMM Do YYYY, h:mm:ss a (zz)'); 
}
var timeSent = "";

// obfuscation
var e = "lyn",
  m = "de",
  a = "ll@",
  i = "tel",
  l = "us.",
  z = "net";

// set formData variables
var messageX = "",
  replyTo = "",
  pathOn = "",
  copyTo = "",
  subject = "",
  gotcha = "",
  thankYou = '<span class="thank-you site-address phonex" style="display:none; color:rgb(0,0,0);opacity:1;">Thanks! We\'ll be in touch soon.</span>';

var formData = {
  message: messageX,
  contact: replyTo,
  page: currentPathX,
  time: timeSent,
  _cc: copyTo,
  _subject: subject,
  _gotcha: gotcha
};
  
// "https://formspree.io/" + e + m + a + i + l + z,
var sendForm = function(formData) {
  $.ajax({
    url: "https://formspree.io/" + e + m + a + i + l + z,
    method: "POST",
    data: formData,
    dataType: "json",
    success: function (data, status, request) { 
      console.log("Status: " + status + "\n Data: ");
      console.log(data);
    },
    error: function (request, status, error) { alert(request.responseText); }
  }); 
}

// press enter on contact info form to submit form
$('input[name="contact-info"]').keypress(function(event){
  if(event.keyCode == 13){
    event.preventDefault();
    $("form .submit").click();
  }
});

$("form .submit").on('click', $(this), function() {
    // Form reset timer shorter on phone screens
    var resetTimer = ( isPhoneX() ) ? 3000 : 10000;
    console.log("submit timer: " + isPhoneX() + resetTimer);
  
    // Contact info required - check it is not empty
    if ($(this).parent().find('input[name="contact-info"]').val().trim() === "") {
      $(this).parent().find('input[name="contact-info"]').prop('required',true);    
      return false;
      
    // Otherwise get formData ready
    } else {
        formData = {
          message: $(this).parent().find('input[name="message"]').val(),
          contact: $(this).parent().find('input[name="contact-info"]').val(),
          page: ( currentPathX() ) ? currentPathX() : "Homepage",
          time: ( thisMoment() ) ? thisMoment() : "N/A",
          _cc: $(this).parent().find('input[name="_cc"]').val(),
          _subject: $(this).parent().find('input[name="_subject"]').val(),
          _gotcha: $(this).parent().find('input[name="_gotcha"]').val()
        };

      // prevents send form for testing
      if ( formData.message.startsWith('//') || formData.contact.startsWith('//') ) {
        console.log("test form NOT sent");
        console.log("!message: " + formData.message + "\n !contact info: " + formData.contact);
      } else {
        
        sendForm(formData);
        console.log("form sent! data object:");
        console.log(formData);
      }
      $(this).parents("form").eq(0).before(thankYou);
      console.log("thanks in, form coming out");
      $(this).parents("form").eq(0).fadeOut('fast', function() {
          $('.thank-you').fadeIn(400, function() {
            $(".thank-you").animate({opacity: .3}, 4000);
            window.setTimeout(contactReset, resetTimer);
          });
      });
      return false;
    } //end else
});
  
// Add note to locations page
var correctUrl = (window.location.pathname === "/locations/");
  
var subtitle = '<p id="location-subtitle"style="font-size:18px;margin-top: 3%;margin-bottom: -3%;margin-left:auto;margin-right:auto;text-align:center;">Click on your province below to find your nearest On Time Service counter located within The Hudson\'s Bay</p>';

if(correctUrl) { 
$('#canvas').find('.page-divider.top-divider').after(subtitle);
}; // end if(CorrectUrl)

}); // end doc ready
</script>



<style type="text/css">

.form-style input[type=submit],
.form-style input[type=button],
.form-next,
.fake-sub,
.submit {
    border: none;
    padding: 8px 20px 8px 19px
    color: #111;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
}
  
@media only screen and (max-width: 640px) {
  .site-address.phonex, .form-style {
    width: 100% !important;
    display: block;
    float: none !important;
    text-align: center !important;
    margin-bottom: 10px;
  }
  
  .form-style input {
    display: block;
    float: none !important;
    width: 70% !important;
  }
  
  .form-style label {
    display: block;
    float: none !important;
  }
  
  .form-style button {
    float: none;
    width: 50% !important;
    margin-top: 5px;
  }
  
  .site-phone, .or-call {
    display: block !important;
    text-align: center !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  
  .form-style .two-rows {
    margin-top: 0px;
    margin-bottom: 10px;
  }
  
  
}

@media only screen and (min-width: 640px) {
  .site-address.phonex {
    width: 66.666% !important;
  }
  
  .form-style .two-rows {
    margin-top: -23px;
  }
  
  .or-call {
    display: none !important;
  }

  .form-style label, .form-style input, .form-style button {
    float: left;
  }

  .form-style input.some0 {
    width: 20%;
    float: left;
  }

  .form-style.form-style-lower label {
    font-weight: bold;.
  }
  .form-style.form-style-lower label,
  .form-style.form-style-lower input,
  .form-style.form-style-lower button {
    float: none;
  }

  .form-style.form-style-lower input.some0 {
    width: 40%;
    float: none;
  }
  
  input.none1, button.none1 {
    display: inline-block;
  }

  .form-style input, .form-style.submit {
    padding: 3px;
    margin-left: 5px;
    margin-right: 5px;
    width: 40%;
  }
}
  
.form-style input[type="text"],
.form-style input[type="password"],
.form-style input[type="email"],
.form-style input[type="url"],
.form-style select,
.form-style textarea,
.form-next,
.fake-sub,
.submit{
    padding: 0.5em 0.6em;
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 4px;
    vertical-align: middle;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

  
.form-style-lower .form-next,
.form-style-lower .fake-sub,
.form-style-lower .submit {
  padding: 10px 25px !important;
}
  
.form-next,
.fake-sub,
.submit {
  padding: 7px 20px !important;
}
  
  
.form-style input:not([type]) {
    padding: 0.5em 0.6em;
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
 
.form-style input[type=submit]:hover,
.form-style input[type=button]:hover,
.form-next:hover,
.submit:hover {
    background: #111;
    color: #fff;
}
.form-style input[type="text"]:focus,
.form-style input[type="password"]:focus,
.form-style input[type="email"]:focus,
.form-style input[type="url"]:focus,
.form-style input[type="date"]:focus,
.form-style input[type="month"]:focus,
.form-style input[type="time"]:focus,
.form-style input[type="datetime"]:focus,
.form-style input[type="datetime-local"]:focus,
.form-style input[type="week"]:focus,
.form-style input[type="number"]:focus,
.form-style input[type="search"]:focus,
.form-style input[type="tel"]:focus,
.form-style input[type="color"]:focus,
.form-style select:focus,
.form-style textarea:focus {
    outline: 0;
    border-color: #129FEA;
}

/*
Need to separate out the :not() selector from the rest of the CSS 2.1 selectors
since IE8 won't execute CSS that contains a CSS3 selector.
*/
.form-style input:not([type]):focus {
    outline: 0;
    border-color: #129FEA;
}

.form-style input[type="file"]:focus,
.form-style input[type="radio"]:focus,
.form-style input[type="checkbox"]:focus {
    outline: thin solid #129FEA;
    outline: 1px auto #129FEA;
}
.form-style .pure-checkbox,
.form-style .pure-radio {
    margin: 0.5em 0;
    display: block;
}

.form-style input[type="text"][disabled],
.form-style input[type="password"][disabled],
.form-style input[type="email"][disabled],
.form-style input[type="url"][disabled],
.form-style input[type="date"][disabled],
.form-style input[type="month"][disabled],
.form-style input[type="time"][disabled],
.form-style input[type="datetime"][disabled],
.form-style input[type="datetime-local"][disabled],
.form-style input[type="week"][disabled],
.form-style input[type="number"][disabled],
.form-style input[type="search"][disabled],
.form-style input[type="tel"][disabled],
.form-style input[type="color"][disabled],
.form-style select[disabled],
.form-style textarea[disabled] {
    cursor: not-allowed;
    background-color: #eaeded;
    color: #cad2d3;
}

/*
Need to separate out the :not() selector from the rest of the CSS 2.1 selectors
since IE8 won't execute CSS that contains a CSS3 selector.
*/
.form-style input:not([type])[disabled] {
    cursor: not-allowed;
    background-color: #eaeded;
    color: #cad2d3;
}
.form-style input[readonly],
.form-style select[readonly],
.form-style textarea[readonly] {
    background-color: #eee; /* menu hover bg color */
    color: #777; /* menu text color */
    border-color: #ccc;
}

.form-style input:focus:invalid,
.form-style textarea:focus:invalid,
.form-style select:focus:invalid {
    color: #b94a48;
    border-color: #e9322d;
}
.form-style input[type="file"]:focus:invalid:focus,
.form-style input[type="radio"]:focus:invalid:focus,
.form-style input[type="checkbox"]:focus:invalid:focus {
    outline-color: #e9322d;
}
.form-style select {
    /* Normalizes the height; padding is not sufficient. */
    height: 2.25em;
    border: 1px solid #ccc;
    background-color: white;
}
.form-style select[multiple] {
    height: auto;
}
.form-style label {
    margin: 0.2em 0 0.2em;
}
.form-style fieldset {
    margin: 0;
    padding: 0.35em 0 0.75em;
    border: 0;
}
.form-style legend {
    display: block;
    width: 100%;
    padding: 0.3em 0;
    margin-bottom: 0.3em;
    color: #333;
    border-bottom: 1px solid #e5e5e5;
}
</style>