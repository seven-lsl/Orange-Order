<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>顾客列表</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/font.css">
    <link rel="stylesheet" href="css/xadmin.css">
    <link rel="stylesheet" href="..//layui/css/layui.css">
    <script src="https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190"></script><script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="..//layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/xadmin.js"></script>    
    <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
    <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
   
</head>
        
<body>
	<div class="x-nav">
    	<span class="layui-breadcrumb" style="visibility: visible;">
        	<a href="">首页</a><span lay-separator="">/</span>
        	<a><cite>导航元素</cite></a>
        </span>
      	<a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">刷新</i></a>
	</div>
    <div class="x-body">
		<div class="layui-row">
        	<form class="layui-form layui-col-md12 x-so">
          		<input name="username" placeholder="请输入用户名" autocomplete="off" class="layui-input" type="text">
          		<button class="layui-btn" lay-submit="" lay-filter="sreach"><i class="layui-icon"></i></button>
        	</form>
      	</div>
      	<xblock>
        	<button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>
        	<span class="x-right" style="line-height:40px">共有数据：88 条</span>
      	</xblock>
      	<table class="layui-table">
        <thead>
        	<tr>
            	<th>
              		<div class="layui-unselect header layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
            	</th>
            	<th>ID</th>
            	<th>用户名</th>
            	<th>邮箱</th>
            	<th>地址</th>
            	<th>注册时间</th>
            	<th>状态</th>
            	<th>操作</th></tr>
       </thead>
       <tbody>
          <tr>
         	<td>	
             	<div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id="2"><i class="layui-icon"></i></div>
            </td>
            <td>1</td>
            <td>小明</td>
            <td>admin@mail.com</td>
            <td>仲恺农业工程学院</td>
            <td>2018-01-01 11:11:11</td>
            <td class="td-status">
              <span class="layui-btn layui-btn-normal layui-btn-mini">已注册</span></td>
            <td class="td-manage">
            	<a title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                	<i class="layui-icon"></i>
              	</a>
            </td>
         </tr>
         <tr>
            <td>
              <div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id="2"><i class="layui-icon"></i></div>
            </td>
            <td>1</td>
            <td>小红</td>
            <td>admin@mail.com</td>
            <td>仲恺农业工程学院</td>
            <td>2018-01-01 11:11:11</td>
            <td class="td-status">
            	<span class="layui-btn layui-btn-normal layui-btn-mini">已注册</span></td>
            <td class="td-manage">
            	<a title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                	<i class="layui-icon"></i>
              	</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="page">
      	<div>
          <a class="prev" href="">&lt;&lt;</a>
          <a class="num" href="">1</a>
          <span class="current">2</span>
          <a class="num" href="">3</a>
          <a class="num" href="">4</a>
          <a class="next" href="">&gt;&gt;</a>
        </div>
      </div>

    </div>
    <script>
      layui.use('laydate', function(){
        var laydate = layui.laydate;
        
        //执行一个laydate实例
        laydate.render({
          elem: '#start' //指定元素
        });

        //执行一个laydate实例
        laydate.render({
          elem: '#end' //指定元素
        });
      });

       /*用户-停用*/
      function member_stop(obj,id){
          layer.confirm('确认要停用吗？',function(index){

              if($(obj).attr('title')=='启用'){

                //发异步把用户状态进行更改
                $(obj).attr('title','停用')
                $(obj).find('i').html('&#xe62f;');

                $(obj).parents("tr").find(".td-status").find('span').addClass('layui-btn-disabled').html('已停用');
                layer.msg('已停用!',{icon: 5,time:1000});

              }else{
                $(obj).attr('title','启用')
                $(obj).find('i').html('&#xe601;');

                $(obj).parents("tr").find(".td-status").find('span').removeClass('layui-btn-disabled').html('已启用');
                layer.msg('已启用!',{icon: 5,time:1000});
              }
              
          });
      }

      /*用户-删除*/
      function member_del(obj,id){
          layer.confirm('确认要删除吗？',function(index){
              //发异步删除数据
              $(obj).parents("tr").remove();
              layer.msg('已删除!',{icon:1,time:1000});
          });
      }



      function delAll (argument) {

        var data = tableCheck.getData();
  
        layer.confirm('确认要删除吗？'+data,function(index){
            //捉到所有被选中的，发异步进行删除
            layer.msg('删除成功', {icon: 1});
            $(".layui-form-checked").not('.header').parents('tr').remove();
        });
      }
    </script>
    <script>var _hmt = _hmt || []; (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();</script>
  

</body>
</html> 
        
       
          
    