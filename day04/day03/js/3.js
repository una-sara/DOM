//Step1:为name为username和pwd的文本框绑定获得焦点事件
var form=document.forms[0];
var txtName=form.username;
var txtPwd=form.pwd;

txtName.onfocus=getFocus;
txtPwd.onfocus=getFocus;
function getFocus(){
  //this->当前文本框
  //当前文本框边框加粗
  this.className="txt_focus";
  //清除旁边div的class
  var div=this.parentNode
      .nextElementSibling
      .firstElementChild;
  div.className="";
}
txtName.onblur=function(){
  vali(this,/^\w{1,10}$/);
}
function vali(txt,reg){
  //清除当前文本框的class
  txt.className="";
  //获取旁边div
  var div=txt.parentNode
    .nextElementSibling
    .firstElementChild;
  //用reg测试当前文本框的内容
  //如果通过,就修改div的class为vali_success
  if(reg.test(txt.value)){
    div.className="vali_success";
    return true;
  }else{//否则修改div的class为vali_fail  
    div.className="vali_fail";
    return false;
  }
}
txtPwd.onblur=function(){
  vali(this,/^\d{6}$/);
}

//1. 查找触发事件的元素
//在表单中查找倒数第二个表单元素——提交按钮
var btnSubmit=form.elements[form.length-2]
//2. 绑定事件处理函数
btnSubmit.onclick=function(){
  /*//先验证所有表单元素的值是否符合要求
  var rName=vali(txtName,/^\w{1,10}$/);
  var rPwd=vali(txtPwd,/^\d{6}$/);
  //只有所有表单元素都验证通过
  if(rName&&rPwd)
    form.submit();//才手动调用表单*/

  //先验证姓名文本框,如果验证不通过
  if(vali(txtName,/^\w{1,10}$/)==false)
    //就让姓名文本框自动获得焦点
    txtName.focus();
  //否则，再验证密码框，如果验证不通过
  else if(vali(txtPwd,/^\d{6}$/)==false)
    //就让密码框自动获得焦点
    txtPwd.focus();
  //否则，才手动调用提交表单
  else
    form.submit();
}