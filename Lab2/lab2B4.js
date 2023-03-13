const days = ["Tue", "Thu", "Sat", "Nine"];
days.splice(0, 0, "Mon");
days.splice(2, 0, "Wed");
days.splice(4, 0, "Fri");
days.push("Sun");
days.splice(days.indexOf("Nine"), 1);

const sortedDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const result = sortedDays.filter(day => days.includes(day));

console.log(result);