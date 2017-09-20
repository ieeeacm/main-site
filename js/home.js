$(document).ready(function() {

     $(document).ready(function(){
         $('.collapsible').collapsible();
     });

     mykey = 'AIzaSyAfIu2iaqycS3gfXYl1aMjBNQ4CyHvSlqo';
     calendarid = 'ncvkteq0hm7cgr5bhi00bgbaik@group.calendar.google.com';

     var officers = [
        {id: 'AlishaSaxena', name: 'Alisha Saxena', position: 'President', image: 'AlishaSaxena_2018_6-2_President.jpg'},
        {id: 'CzarinaLao', name: 'Czarina Lao', position: 'Vice President', image: 'CzarinaLao_2018_6-3_VP.jpg'},
        {id: 'AdelaideOh', name: 'Adelaide Oh', position: 'Secretary', image: 'AdelaideOh_2020_6-3and17_Secretary.jpg'},
        {id: 'MartinWinton', name: 'Martin Winton', position: 'Treasurer', image: 'MartinWinton_2020_6-2_Treasurer.jpg'},
        {id: 'SylvieLee', name: 'Sylvie Lee', position: 'Social Chair', image: 'SylvieLee_2019_6-2_Social.jpg'},
        {id: 'KaiAichholz', name: 'Kai Aichholz', position: 'Faculty Chair', image: 'KaiAichholz_2017_6-2_FacultyCo-Chair.jpg'},
        {id: 'CarlaPinzon', name: 'Carla Pinzon', position: 'Publicity Chair', image: 'CarlaPinzon_2018_6-1_PubChair.jpg'},
        {id: 'JessicaWang', name: 'Jessica Wang', position: 'Publicity Chair', image: 'JessicaWang_2017_6-3_Publicity Chair.jpg'},
        {id: 'AndrewLuo', name: 'Andrew Luo', position: 'ML Chair', image: 'AndrewLuo_2019_6-3_MLGroup.jpg'},
        {id: 'WeiLow', name: 'Wei Low', position: 'Voltage Chair', image: 'WeiLow_2017_6-2_VoltageChair.jpg'},
        {id: 'MinaSun', name: 'Mina Sun', position: 'URTC Chair', image: 'MinaSun_2019_6-2_URTC_Co-chair.jpg'},
        {id: 'JacquelineXu', name: 'Jacqueline Xu', position: 'WiEECS Chair', image: 'JacquelineXu_2017_6-3_WomenInEECSChair.jpg'},
        {id: 'AneliseNewman', name: 'Anelise Newman', position: 'URGE Chair', image: 'AneliseNewman_2019_6-3_URGEchair.jpg'},
        {id: 'ShramanRayChaudhuri', name: 'Shraman Ray Chaudhuri', position: 'Faculty Chair', image: 'ShramanRayChaudhuri_2017_6-3_FacultyCo-Chair.jpg'},
        {id: 'ChunchunWu', name: 'Chunchun Wu', position: '6# Chair', image: 'ChunchunWu_2018_6-2_6Sharpco-chair.jpg'},
        {id: 'TenzinUkyab', name: 'Tenzin Ukyab', position: 'Webmaster', image: 'TenzinUkyab_2020_6-3_Webmaster.jpg'}
      ];

     // SET UP EVENTS SECTION
     var events = $.grabCalendar({
          type: 'detailedEvents',
          maxEvents: 15,
          clean_date: true,
          upcoming: true
      });

      // Format event data for use later
     events.map(function(event) {
        if(!event.location) {
             event.location = 'TBA';
        }

        // fix date and time
        var start, end, month, day, startTime, timeSuffix, endTime, time;
        var hasStartTime = false, hasEndTime = false;

        if (event.start.dateTime) {
            start = event.start.dateTime.split(' ');
            hasStartTime = true;
        } else if (event.start.date) {
            start = event.start.date.split(' ');
        } else {
            console.log("Could not get start time for event");
            // stop processing event and go to next
            return event;
        }

        if (event.end.dateTime) {
            end = event.end.dateTime.split(' ');
            hasEndTime = true;
        } else if (event.end.date) {
            end = event.end.date.split(' ');
        } else {
            console.log("Could not get end time for event");
            // stop processing event and go to next
            return event;
        }

        month = start[1].substring(0, 3);
        day = start[2].substring(0, 2);

        if (hasStartTime && hasEndTime) {
            startTime = start[5] + " " + start[6];
            timeSuffix = new RegExp(" " + end[6], 'g');
            startTime = startTime.replace(timeSuffix, ""); // if they have the same suffix, remove the first occurrence
            endTime = end[5] + " " + end[6];
            time = startTime + "-" + endTime;
            time = time.replace(/:00/g, "");
        } else {
            time = "all-day";
        }

        event['month'] = month;
        event['day'] = day;
        event['time'] = time;

        return event;
     });

     // Split into sections of 5 events
     var k, q, pages = [], chunk = 5;
     for (k=0,q=events.length; k<q; k+=chunk) {
         pages.push(events.slice(k,k+chunk));
     }

     // Handlebars (only necessary if we have upcoming events)
     if (pages.length) {
         var carouselTemplate = $('#carousel-template').html();
         var carouselHandlebars = Handlebars.compile(carouselTemplate);
         pages.forEach(function (events) {
             var context;
             if (events.length) {
                 context = {events: events};
                 $('.carousel-nav-container', '.event-list').before(carouselHandlebars(context));
             }
         });

         // Initialize carousel
         $('.event-list', '.events').slick({
             slide: '.carousel-group',
             arrows: true, dots: true,
             prevArrow: '<span class="carousel-prev"><i class="material-icons">chevron_left</i></span>',
             nextArrow: '<span class="carousel-next"><i class="material-icons">chevron_right</i></span>',
             appendArrows: '.event-list .carousel-nav',
             appendDots: '.event-list .carousel-nav'
         });
     } else {
         var noEventsTemplate = $('#no-events-template').html();
         var noEventsHandlebars = Handlebars.compile(noEventsTemplate);
         $('.event-list', '.events').html(noEventsHandlebars());
     }

     // APPLICATION MODAL
     $('.modal-trigger').leanModal({
         dismissible: true
     });

     var ErrorState = function() {
         var that = Object.create(ErrorState.prototype);
         var incomplete = false;
         var error = false;
         var $errorMessage = $('#error-message', '.error');
         var $errorType = $('#error-type', '#error-message');
         var requiredMessage = "All fields are required.";

         that.triggerRequireInputs = function() {
             incomplete = true;
             if (!error) {
                 that.showError(requiredMessage);
             }
         };

         that.dismissInputRequired = function() {
             incomplete = false;
             if (!error) that.hideErrorMessage();
         };

         that.triggerError = function(errorMessage) {
             error = true;
             that.showError(errorMessage);
         };

         that.dismissError = function() {
             error = false;
             if (incomplete) {
                 $errorType.text(requiredMessage);
             } else {
                 that.hideErrorMessage();
             }

         };

         that.showError = function(message) {
             $errorType.text(message);
             $errorMessage.fadeIn({queue: false}).animate({'margin-left': 0}, 400);
         };

         that.hideErrorMessage = function() {
             $('#error-message').fadeOut({queue: false}).animate({'margin-left': '-500px'}, 400);
         };

         return that;
     };

     var eState = new ErrorState();

     var checkInputs = function() {
         var $inputs = $('#application').find('input');
         var full = $inputs.filter(function () {
             return $.trim($(this).val()).length > 0;
         }).length;
         return full == 3;
     };

     $('input', '#application').blur(function () {
         if (checkInputs()) {
             eState.dismissInputRequired();
         }
     });

     $('input#email').blur(function() {
        var correctEmail = $(this).val().includes('@mit.edu');
         if (correctEmail) eState.dismissError();
     });


     // Application submission handling
     $('#application').submit(function (event) {
         event.preventDefault();

         var data = $(this).serialize();
         var $inputs = $(this).find('input');

         if (!checkInputs()) {
             eState.triggerRequireInputs();
             return;
         }

         $inputs.prop('disabled', true);

         $.post('register.php', data)
             .always(function () {
                 $inputs.prop('disabled', false);
             })
             .done(function (response) {
                 if (response.includes("success")) {
                     $("#join-modal").closeModal();
                     Materialize.toast(response, 4000);
                 } else {
                     eState.triggerError(response);
                 }
             })
             .fail(function (responseObject) {
                 console.log(responseObject);
             });
     });

     var execTemplate = $('#exec-template').html();
     var execHandlebars = Handlebars.compile(execTemplate);
     var execCards = execHandlebars({officers: officers});
     $('#exec.row').html(execCards);
 });
