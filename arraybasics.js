var a = ["one", "2", "print array value", "4", "five"];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

console.log("***************using for loop to print array values****")

for (var i=0; i<5; i++)
	{
	console.log(a[i]);
	}
console.log("***************using array length and print all values****")

var arraysize = a.length;
console.log("array size is ", arraysize);

//or
console.log(arraysize + "  is array size  " );



