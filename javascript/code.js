// request
fetch("../data/data.json")
.then((res)=>{
	return res.json();
})
.then((data)=>{
	console.table(data.laptops)
	console.table(laptops);
})