

const add_btn=document.querySelector('.add');
const input_text=document.querySelector('.input_text');
const newly_addedjoblist=document.querySelector('.newly_addedjob');
add_btn.addEventListener('click',add_job);
newly_addedjoblist.addEventListener('click',delete_job);
function add_job(e){
    if(input_text.value===''){
        alert('plz enter a valid job name');
        return;
    }
    let addedjob=document.createElement('li');
    let job_details=document.createElement('span');
    job_details.innerText=input_text.value;
    let delete_btn=document.createElement('button');
    addedjob.appendChild(job_details);
    delete_btn.innerText="delete";
    addedjob.appendChild(delete_btn);
    newly_addedjoblist.appendChild(addedjob);
    input_text.value="";

}

function delete_job(e){
    if(e.target.tagName==='BUTTON')
        e.target.parentElement.remove();
    //console.log('done');
}