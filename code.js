function add_data_from_local(key,item,c_name)
{
	btn1.style.backgroundColor = 'pink'
	const ul = document.getElementById('todoList')
	const li = document.createElement('li')
	const bt = document.createElement('button')
	li.textContent = item
	bt.textContent = 'Delete'
	li.setAttribute('class',c_name)
	
	console.log(key)
	li.setAttribute('id',key)
	li.setAttribute('onclick','click_li()')
	li.onclick = click_li
	bt.setAttribute('onclick','deleteITEM()')
	bt.onclick = deleteITEM
	ul.appendChild(li)
	li.appendChild(bt)
}



function deleteITEM()
{
	//console.log(this.parentNode.getAttribute('id'))
	ls.removeItem(this.parentNode.getAttribute('id'))
	this.parentNode.remove(this)
}

function add_li_fun()
{
	//console.log(item)
	item = document.getElementById('addTodoItem').value
	document.getElementById('addTodoItem').textContent= ''
	add_data(item,c_name)
	add_ls(item)
	
}


function add_data(item,c_name)
{
	
	btn1.style.backgroundColor = 'pink'
	const ul = document.getElementById('todoList')
	const li = document.createElement('li')
	const bt = document.createElement('button')
	li.textContent = item
	bt.textContent = 'Delete'
	li.setAttribute('class',c_name)
	id = id + 1
	console.log(id)
	li.setAttribute('id',id)
	li.setAttribute('onclick','click_li()')
	li.onclick = click_li
	bt.setAttribute('onclick','deleteITEM()')
	bt.onclick = deleteITEM
	ul.appendChild(li)
	li.appendChild(bt)	
	

}

function add_ls(item)
{
	let arr = []
	arr.push(item)
	arr.push('normal')
	ls.setItem(id ,JSON.stringify(arr))

}


let btn1 = document.getElementById('addTodo')
let item = document.getElementById('addTodoItem').value

const ls = localStorage
let id = 0
let c_name = 'normal'


btn1.addEventListener('click',add_li_fun)


function click_li()
{
	let data1 = ''
	let data2 = ''
	console.log(this.getAttribute('id'))
	if(this.className === 'line-throughClass') 
	{
		btn1.style.backgroundColor = 'yellow'
		this.className = 'normal'
		if(typeof data1!=='undefined' ){
			data1=ls.getItem(this.getAttribute('id'))
		 	data2 = data1.replace('line-throughClass','normal')
		 	ls.setItem(this.getAttribute('id'),data2)
		 }
	}
	else
	{
		btn1.style.backgroundColor = 'yellow'
		this.className = "line-throughClass"
		 if(typeof data1!=='undefined' ){
		 	data1=ls.getItem(this.getAttribute('id'))
		 	data2=data1.replace('normal','line-throughClass')
		 	ls.setItem(this.getAttribute('id'),data2)
		 }	
	}
	
	
}

function load_fun(){
	let mylist = []
	let i = 0
	let j=0
	let key = 0
	console.log(ls)
	for(i=0;i<ls.length;i++){
		key=ls.key(i)
		mylist[j]=key
		mylist[j+1]=JSON.parse(ls.getItem(key))
		j=j+2
	}
	console.log(mylist)
	console.log("length")
	console.log(mylist.length)
	for(i=0;i<mylist.length;i=i+2){
		console.log("hittt")
		console.log(mylist[i][0])
		add_data_from_local(mylist[i],mylist[i+1][0],mylist[i+1][1])
	
}
}

