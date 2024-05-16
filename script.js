const btn=document.getElementById('btn');
const project=document.getElementById('project');
const container=document.getElementById('container');

let ans;

btn.addEventListener('click',()=>{
   
    let projectName=document.createElement('div');
    let projectInput=document.createElement('input');
    let projectSubmit=document.createElement('button');

    projectName.className='projectName';
    projectInput.className= 'projectInput';
    projectSubmit.className='projectSubmit';

    projectName.innerHTML='<h3>Please enter the project name</h3>';
    projectSubmit.innerHTML='Submit'
    projectName.appendChild(projectInput);
    projectName.appendChild(projectSubmit);
    project.appendChild(projectName);

    projectSubmit.addEventListener('click',()=>{
        if(projectInput.value===''){
            alert('Please enter the name of the project');
        }
        else{
            ans=projectInput.value;
            project.removeChild(projectName);
            createFunction();
        }
    })
    
})

function createFunction(){
    let box=document.createElement('div');
    box.className="box";
    project.appendChild(box);

    // upper

    let upper=document.createElement('div');//div
    upper.className='upper';
    box.appendChild(upper); 

    //upper- title

    
    const title=document.createElement('h1');
    title.className='title';
    title.innerHTML=ans;
    upper.appendChild(title);



    //upper folder

    const folder=document.createElement('div');
    folder.className='folder';
    folder.innerHTML="<img src='images/folder-open-fill.png'></img>";
    upper.appendChild(folder);
   

    console.log(this.className);

   //lower 
    const lower=document.createElement('div');
    const id=document.createElement('div');
    const date=document.createElement('div');
    const udate=document.createElement('div');

    lower.className='lower';
    id.className='id';
    date.className='date';
    udate.className='udate';
 
  
    id.innerHTML=`<h3>id : ${Math.floor(Math.random()*1000)}</h3>`
    date.innerHTML=`<h3>Created date and time: ${new Date().toJSON().slice(0,10)} ${new Date().toJSON().slice(11,18)}</h3>`;
    udate.innerHTML=`<h3>Last updated date and time: ${new Date().toJSON().slice(0,10)} ${new Date().toJSON().slice(11,18)}</h3>`;
   


   
    lower.appendChild(id);
    lower.appendChild(date);
    lower.appendChild(udate);
    box.appendChild(lower);
    saveData();

    let del=document.createElement('div');//del button
    del.className='del';
    del.innerHTML="<img src='images/close-circle-line.png'></img>"

    upper.appendChild(del);
   
    saveData();
}

project.addEventListener('click',(e)=>{
    const q=e.target.matches('.folder img');
      if(q){
        const box=e.target.closest('.box');
        if(box){
        const x=box.querySelector('.id h3');
        const r=x.innerHTML;
        const l=r.slice(-3);
        const z=e.target.closest('.folder');
        addTask(z,l,box);
      }
    }
},false);


function addTask(z,l,box){
    console.log(l);
    const udate=box.querySelector('.udate h3');
    udate.innerHTML=`<h3>Last updated date and time: ${new Date().toJSON().slice(0,10)} ${new Date().toJSON().slice(11,18)}</h3>`;

    const todo=document.createElement('div');
    todo.className='todo';
    z.appendChild(todo);
    
    
    const todo_close=document.createElement('div');
    const todo_title=document.createElement('h1');
    const todo_input=document.createElement('input');
    const todo_btn=document.createElement('button');
    const pending=document.createElement('div');
    const done=document.createElement('div');
    const UL=document.createElement('ul');
    const listData=document.createElement('div');
   
   
    todo_close.className='todo_close';
    todo_title.className='todo_title';
    todo_input.className='todo_input';
    todo_btn.className='todo_btn';
    pending.className='pending';
    done.className='done';
    UL.className='UL';
    listData.className='listData';
   
   

    todo_close.innerHTML="<img src='images/close-line.png'></img>";
    todo_title.innerHTML='Tasks';
    todo_input.placeholder='Please enter the task';
    todo_btn.innerHTML='ADD';
    pending.innerHTML='<h5>Pending Tasks<h5>';
    done.innerHTML='<h5>Completed Tasks<h5>';
   

    

    todo.appendChild(todo_close);
    todo.appendChild(todo_title);
    todo.appendChild(todo_input);
    todo.appendChild(todo_btn);
    todo.appendChild(listData);
    todo.appendChild(pending);
    todo.appendChild(done);
    pending.appendChild(UL);
   
    project.querySelector('.UL1');
    UL.innerHTML=localStorage.getItem(`data1${l}`);
    
   
    todo_btn.addEventListener('click',()=>{
        const LI=document.createElement('li');
        LI.className='LI'; 
        
        

        const v=todo_input.value;
        LI.textContent=v;
        todo_input.value='';
        UL.appendChild(LI);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        LI.appendChild(span);
        localStorage.setItem(`data1${l}`,UL.innerHTML);
        
    })
}

project.addEventListener('click',(e)=>{
    const t=e.target.closest('.LI')
    const box=e.target.closest('.box');
    const UL=e.target.closest('.UL');
    const done=project.querySelector('.done');
    if(t){
        t.addEventListener('click',(u)=>{
            if(u.target.tagName==='LI'){
                u.target.classList.toggle('check');
                const UL1=document.createElement('UL');
                const LI1=document.createElement('li');

                UL1.className='UL';
                LI1.className='LI';
                LI1.innerHTML=t.innerHTML;
                UL1.appendChild(LI1);
                done.appendChild(UL1);
                t.remove();

                if(box){
                const x=box.querySelector('.id h3');
                const r=x.innerHTML;
                const l=r.slice(-3);
                
                localStorage.setItem(`data1${l}`,UL.innerHTML);
                }
            }

        })
    }
})

project.addEventListener('click',()=>{
    const done=document.querySelector('.done');
    const pending=document.querySelector('.pending');
    const listData=document.querySelector('.listData');
    if(done && pending){
        const LI=pending.querySelectorAll('.LI');
        const LI1=done.querySelectorAll('.LI');
        const a=LI.length;
        const b=LI1.length;
        listData.innerHTML=`<h5> ${b}  out  of  ${a}  tasks  are </h5>`
    }
})

project.addEventListener('click',(e)=>{
    const t=e.target.closest('.LI')
    const box=e.target.closest('.box');
    const UL=e.target.closest('.UL');
    if(t){
        t.addEventListener('click',(u)=>{
            if(u.target.tagName==='SPAN'){
                console.log(5);
                u.target.parentElement.remove();
                if(box){
                const x=box.querySelector('.id h3');
                const r=x.innerHTML;
                const l=r.slice(-3);
                localStorage.setItem(`data1${l}`,UL.innerHTML);
                }
            }

        })
    }
})




project.addEventListener('click', (e) => {
    if(e.target.closest('.folder')){
    const folder=e.target.closest('.folder');
    folder.addEventListener('click',(t)=>{
        const todo_close=t.target.closest('.todo_close');
        if(todo_close){
            const todo=t.target.closest('.todo');
            todo.remove();
        }
    })
}
}, false);



project.addEventListener('click',(e)=>{
    const w=e.target.closest('.del img');
    if(w){
        const z=e.target.closest('.box');
        z.remove();
        saveData();
    }
},false)


function saveData(){
    localStorage.setItem('data',project.innerHTML);
}

function getdata(){
     project.innerHTML=localStorage.getItem('data');
}
getdata();





