(function(){//避免生成全局变量造成全局污染
  ajax({
    url:"http://localhost:3000/index",
    type:"get",
    dataType:"json",//自动JSON.parse()
  })//open(    res   )
  //  ↓          ↓
  .then(function(data){
    //data形参接住了ajax抛出的服务端返回的数据对象
    //获得第一个商品对象
    var p=data[0];
    //复制页面上第一个商品卡片的HTML片段，并用模板字符串，填充其中动态生成的部分
    var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <h5 class="d-inline-block mb-2">${p.title}</h5>
        <h6 class="mb-5">
          <a class="text-dark" href="javascript:;">${p.details}</a>
        </h6>
        <span class="text-primary">¥${p.price.toFixed(2)}</span>
        <a class="btn btn-primary" href="${p.href}">查看详情</a>
      </div>
      <img class="card-img-right flex-auto d-none d-md-block" src="${p.pic}">
    </div>`;
    //将片段填充回页面中原父元素内: 
    var div=document.querySelector(
      "#main>div:nth-child(2)>h3:first-child>div:nth-child(2)>div:first-child"
    );
    div.innerHTML=html;
    
    //获得第2个商品对象
    var p=data[1];
    //复制页面上69~79行商品卡片的HTML片段，并用模板字符串，填充其中动态生成的部分
    var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <h5 class="d-inline-block mb-2">${p.title}</h5>
        <h6 class="mb-5">
          <a class="text-dark" href="javascript:;">${p.details}</a>
        </h6>
        <span class="text-primary">¥${p.price.toFixed(2)}</span>
        <a class="btn btn-primary" href="${p.href}">查看详情</a>
      </div>
      <img class="card-img-right flex-auto d-none d-md-block mt-5" src="${p.pic}" data-holder-rendered="true">
    </div>`;
    //将片段填充回页面中原父元素内: 
    var div=div.nextElementSibling;
    div.innerHTML=html;

    //获得第3个商品对象
    var p=data[2];
    //复制页面上84~91行商品卡片的HTML片段，并用模板字符串，填充其中动态生成的部分
    var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <h5 class="d-inline-block mb-3">${p.title}</h5>
        <span class="text-primary">¥${p.price.toFixed(2)}</span>
        <a class="btn btn-primary" href="${p.href}">查看详情</a>
      </div>
      <img class="card-img-right flex-auto d-none d-md-block mt-5"  src="${p.pic}" data-holder-rendered="true">
    </div>`;
    //将片段填充回页面中原父元素内: 
    var div=div.parentNode
              .nextElementSibling
              .children[0];
    div.innerHTML=html;

    //获得后data数组中后三个商品对象
    var products=data.slice(-3);
    var html="";//定义空字符串准备拼接多段商品的html片段。
    //遍历后三个商品中的每一个
    for(var p of products){
      //每遍历一个就拼接一段代码片段
      //复制页面上95~104行商品卡片的HTML片段，并用模板字符串，填充其中动态生成的部分，最后拼接到html中
      html+=`<div class="col-md-4 p-0 pl-2">
        <div class="card border-0 text-center">
          <img class="card-img-top" src="${p.pic}" alt="Card image cap">
          <div class="card-body p-0 pr-1 pl-1">
            <span class="d-inline-block">${p.title}</span>
            <span class="text-primary small">¥${p.price.toFixed(2)}</span>
            <a class="btn btn-sm btn-primary" href="${p.href}">查看详情</a>
          </div>
        </div>
      </div>`;
    }
    //将片段填充回页面中原父元素内: 
    var div=div.nextElementSibling.children[0];
    div.innerHTML=html;
  })
})()