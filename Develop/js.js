let schedule = [];

const loadSchedule = () => {
  schedule = JSON.parse(localStorage.getItem("schedule"));

  if (!schedule) {
    schedule = ["", "", "", "", "", "", "", "", ""];
  }

  for (let i = 0; i < schedule.length; i++) {
    $("#" + i + "T").val(schedule[i]);
  }

  setInterval(timeCheck, 900000);
};

const saveSchedule = () => {
  localStorage.setItem("schedule", JSON.stringify(schedule));
};

$(".saveBtn").on("click", function () {
  let id = this.id;
  let text = $("#" + id + "T").val();
  schedule[parseInt(id)] = text;
  saveSchedule();
  timeCheck();
});

const timeCheck = () => {
  let currentTime = parseInt(moment().format("H"));

  for (let i = 0; i < 9; i++) {
    if (i + 9 < currentTime) {
      $("#" + i + "T").addClass("past");
    } else if (i + 9 == currentTime) {
      $("#" + i + "T").addClass("present");
    } else {
      $("#" + i + "T").addClass("future");
    }
  }
};

loadSchedule();
timeCheck();
