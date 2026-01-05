// SHOW BOOKING FORM
function showBooking() {
  const box = document.getElementById("cc");

  box.style.display = "block";

  // scroll to booking form
  box.scrollIntoView({ behavior: "smooth" });
}

/* RESTRICT DOB (NO TODAY) */
(function restrictDOB() {
  const dobInput = document.getElementById("dob");
  if (!dobInput) return;

  const today = new Date();
  today.setDate(today.getDate() - 1);
  dobInput.max = today.toISOString().split("T")[0];
})();

/* END DATE RESTRICTION */
function restrictEndDate() {
  const startInput = document.getElementById("startDate");
  const endInput = document.getElementById("endDate");

  if (!startInput.value) return;

  const start = new Date(startInput.value);
  const minEnd = new Date(start);
  minEnd.setDate(minEnd.getDate() + 10);

  endInput.min = minEnd.toISOString().split("T")[0];
  endInput.value = "";
}

/* BLOCK SUNDAY */
function isWeekendBlocked(date) {
  return date.getDay() === 0;
}

/* LOGIN & CALCULATION */
function loginCheck() {
  const dob = document.getElementById("dob").value;
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  const result = document.getElementById("result");
  const box = document.getElementById("cc"); // 🔥 FIX

  if (!dob || !startTime || !endTime || !startDate || !endDate) {
    result.innerHTML = "⚠️ Please fill all fields";
    return;
  }

  /* AGE CALCULATION */
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  if (
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  /* TIME CALCULATION */
  const t1 = new Date("1970-01-01T" + startTime);
  const t2 = new Date("1970-01-01T" + endTime);
  let timeDiff = t2 - t1;
  if (timeDiff < 0) timeDiff += 24 * 60 * 60 * 1000;

  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  /* DATE CALCULATION */
  const d1 = new Date(startDate);
  const d2 = new Date(endDate);
  const days = (d2 - d1) / (1000 * 60 * 60 * 24);

  if (d1.getDay() === 0) {
    result.innerHTML = "❌ Booking cannot start on Sunday";
    return;
  }

  if (days < 10) {
    result.innerHTML = "❌ Minimum stay is 10 days";
    return;
  }

  /* SHOW RESULT */
  result.innerHTML = `
    Age: ${age} years <br>
    Time Duration: ${hours}h ${minutes}m <br>
    Stay Duration: ${days} days <br>
    ✅ Booking Available
  `;

  /* 🔥 HIDE LOGIN BOX AFTER RESULT */
  setTimeout(() => {
    box.style.display = "none";
  }, 4000); // hides after 4 second
}

document.querySelectorAll('.like-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('liked');
    icon.textContent = icon.classList.contains('liked') ? '❤' : '🤍';
  });
});


 

