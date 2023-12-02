var numofPapers=12;
window.alert = function(message){
    const alert=document.createElement('div');
    const alertButton = document.createElement('button');
    alertButton.innerText = 'OK';
    alert.classList.add('alert');
    alert.setAttribute('style',`
    align-items: center;
    max-width: 50%;
    left: 25%; 
    right: 25%;
    top: 0%;
    position: fixed;
    transition: 0.5s;
    background-color: black;
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border: 10px solid #1e6ee5;
    font: 700 3.2rem Inter, sans-serif;
    color: white;`
    );
    alertButton.setAttribute('style',`
    margin-top:20px;
    width: 50%;
    border: 1px solid #333;
    background: blue;
    border-radius: 5px;
    cursor:pointer;
    padding: 5px;
    font: 700 3.2rem Inter, sans-serif;
    color: #d9d9d9`);
    alert.innerHTML=`<span style="padding=10px">${message}</span>`;
    alert.appendChild(alertButton);
    alertButton.addEventListener('click', (e)=>{
        alert.remove();
        toggle();
    });
    document.body.appendChild(alert);
}
document.getElementById('NumOfPage').innerHTML=`Số trang còn lại: ${user.numofPapers}`;
function toggle(){
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
}
function check(){
    var printer=document.getElementById('printer').value;
    var ele=document.getElementsByName('side');
    var size=document.getElementById('size').value;
    var number=document.getElementById('number').value;
    for(var i=0;i<ele.length;i++){
        if(ele[i].checked)side=ele[i].value;
    }
    if(printer=="1"){
        alert('Không thể chọn máy in này!' + '<br>' + '<br>Vui lòng chọn lại!');
        return false;
    }
    if(printer=="2" && (Math.ceil(size*number/side))>user.numofPapers){
        alert('Không đủ trang giấy!' + '<br>' + '<br>Vui lòng chọn lại!');
        return false;
    }
    if(printer=="2" && (Math.ceil(size*number/side))<=user.numofPapers){
        alert('Hoàn tất!');
        user.numofPapers= user.numofPapers - Math.ceil(size*number/side);
        document.getElementById('NumOfPage').innerHTML=`Số trang còn lại: ${user.numofPapers}`
        return true;
    }
}