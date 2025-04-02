const endDate = "19 August 2024 10:00 PM"
document.getElementById("end-date").innerText = endDate;

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    console.log(end);
    console.log(now);
    console.log(diff + ' Seconds');
    console.log(diff/60 + ' Minutes');
    console.log(diff/3600 + ' Hours' );
    console.log(diff/3600 + ' Hours' );
}

clock();
// or
// function clock() {}