//Searching

let result = ["pass", "fail", "pass", "error", "fail"];

// indexOf - returns first index, or -1 if not found

result.indexOf("fail");

let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf - returns first index, or -1 if not found

result.indexOf("fail"); //1
results.indexOf("skip");  // -1


// lastIndexOf - searches from the end
results.lastIndexOf("fail");


// includes - returns boolean
results.includes("error");