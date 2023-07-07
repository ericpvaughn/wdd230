
const datefield = document.querySelector("#currentDate");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;



//Toggle for Monday and Tuesday Banner
const today = new Date().getDay();
if (today === 1 || today === 2) {
    document.getElementById("meetingbanner").style.display = "block";
}