///Display the current date
let todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

  //On load date and save feature
  document.addEventListener('load', ()=>{
    document.getElementsById("#currentDay").display.innerHTML(todaysDate)
    document.getElementsByClassName('.saveBtn').addEventListener('click', addUserInput());
});

  //Saving appointment info typed into local storage
  let apptInfo = JSON.parse(localStorage.getItem("input-area"))
  console.log(apptInfo)

  $(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".input-area").val();
        var time = $(this).parent().attr(".hour");

        // Save text in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //get current number of hours.
        let timeNow = getTime(); 

        console.log(timeNow)

        // loop over time blocks
        $(".time-block").each(function () {
            let blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    console.log(timeTracker)

    // Get item from local storage if any
    $("#text6 .input-area").val(localStorage.getItem("text6"));
    $("#text7 .input-area").val(localStorage.getItem("text7"));
    $("#text8 .input-area").val(localStorage.getItem("hour8"));
    $("#text9 .input-area").val(localStorage.getItem("hour9"));
    $("#text10 .input-area").val(localStorage.getItem("hour10"));
    $("#text11 .input-area").val(localStorage.getItem("hour11"));
    $("#text12 .input-area").val(localStorage.getItem("hour12"));
    $("#text13 .input-area").val(localStorage.getItem("hour13"));
    $("#text14 .input-area").val(localStorage.getItem("hour14"));
    $("#text15 .input-area").val(localStorage.getItem("hour15"));
    $("#text16 .input-area").val(localStorage.getItem("hour16"));

    timeTracker();
})