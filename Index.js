var data=[
    {id:1,name:"Farooq",age:20 },
    {id:2,name:"Zakir bhai",age:21 },
    {id:3,name:"Suhail bhai",age:22  },
    {id:4,name:"gani bhai" ,age:23 },
    {id:5,name:"jani bhai",age:24  },
    {id:6,name:"money bhai",age:25  },
    {id:7,name:"pani bhai" ,age:26 },
    {id:8,name:"funny bhai" ,age:27 },
    {id:9,name:"gullu bhai" ,age:28 },
    {id:10,name:"comedy bhai" ,age:29 }
    
]


function callfunc(row){

const [first]=data
const keys=Object.keys(first)
const headerrows=createheaders(keys)
console.log(headerrows)
const tablerow=createrows(row)

const container=document.createElement("div")

const filercontainer=document.createElement("div")
keys.forEach(function(col){
    const filter=document.createElement("div")
  filter.innerHTML=`$<input type="checkbox"/><label>${col}</label>`
  filercontainer.appendChild(filter)
})


const table=document.createElement("table")
container.appendChild(table)
document.body.appendChild(container)
table.appendChild(headerrows)
table.appendChild(tablerow)
}
callfunc(data)


function createheaders(headers){
    const tr=document.createElement("tr")
    headers.forEach(function(i){
        const th=document.createElement("th")
        th.innerText=i
        tr.appendChild(th)
    })
    return tr;
}

function createrows(rows){
console.log(rows)
const tbody=document.createElement("tbody")
rows.forEach(function(singlerow){
   const tr=document.createElement("tr")
  const values=Object.values(singlerow)
  values.forEach(function(val){
    const td=document.createElement("td")
    td.innerText=val
    tr.appendChild(td)
  })
  tbody.appendChild(tr)
})
    return tbody

}