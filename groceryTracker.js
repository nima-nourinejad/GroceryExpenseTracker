const createField = (num) => {
	let p = document.createElement("input");
	let label = document.createElement("label");
	let br = document.createElement("p");
	p.innerHTML = "<br>";
	label.innerHTML = `Item ${num}:`;
	label.htmlFor = `item${num}`;
	p.type = "number";
	p.id = `item${num}`;
	p.placeholder = `Item ${num}`;
	p.min = "0";
	document.getElementById("form_container").appendChild(label);
	document.getElementById("form_container").appendChild(p);
	document.getElementById("form_container").appendChild(br);
}
const sum = () =>{
	let sum = 0;
	let i = 1;
	while (1){
		let elem = document.getElementById(`item${i}`);
		if (!elem) break ;
        let value = parseFloat(elem.value);
		if (isNaN(value) || value < 0){
			alert("Please check the costs")
			return ;
		}
		sum += value;
		i++;
	}
	document.getElementById("result").innerHTML = `The total cost expended is ${sum}`

}
const createForm = () => {
	document.getElementById("form_container").innerHTML ="";
	document.getElementById("button_container").innerHTML ="";
	document.getElementById("result").innerHTML ="";
	let item_num;
	item_num = parseInt(document.getElementById("number_of_items").value);
	if (!item_num)
		return ;
	for (let i=1 ; i <= item_num ; i++)	createField(i);
	let button = document.createElement("button");
	// button.type = "button";
	button.innerHTML = "Calculate Total";
	button.onclick = sum;
	document.getElementById("button_container").appendChild(button);
	

}
