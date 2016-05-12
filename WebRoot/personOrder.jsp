<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel=stylesheet type=text/css href="css/lrtk1.css">
<%@ page import="java.util.Map"%>
<%@ page import="com.opensymphony.xwork2.ActionContext"%>
<%
	ActionContext actionContext = ActionContext.getContext();
	Map session1 = actionContext.getSession();
	// 从session里取用户名
	String user = (String) session1.get("user");
%>
<title>无标题文档</title>
<script>
	window.onload = function() {
		var ms = document.getElementById("hehe");
		var add = document.getElementById("menu");
		ms.onmouseover = function() {
			add.style.display = "block";
		};
		ms.onmouseout = function() {
			add.style.display = "none";
		};
	};
</script>


<style type="text/css">
body {
	margin: 0;
}

#apDiv1 {
	position:absolute;
	left:50px;
	top:220px;
	width:1280px;
	height:312px;
	z-index:1;
	
}

#dingdan {
	
}
</style>
</head>
<style type="text/css">
#container {
	background-color: #FFF;
	height: 100%;
	width: 100%;
	position: relative;
}

#Header {
	background-color: rgba(0, 0, 0, 0.14);
	position: relative;
	width: 100%;
	a: hover{  
text-decoration:underline;
}

}
a {
	text-decoration: none;
}

a {
	color: #333  ;
}

#Body { margin-top:20px;

	
}

#hehe {
	
}

#tb {margin-top:30px;
	
}

#kkk {
	overflow-y: auto;
	max-height: 200px;
}

#tubiao{margin-left:30px;
margin-top:5px;

 }

#container #apDiv1 table tr td {
	font-size: 20px;
}

#container #apDiv1 table tr td #dingdan p {
	font-size: 12px;
}

#container #apDiv1 table tr td #dingdan #form2 {
	font-size: 12px;
}

#container #apDiv1 table tr td #dingdan #form2 table {
	font-size: 12px;
	
}
</style>
<body>
	<div id="container">
		<div id="Header">
    <table width="100%" border="0">
      <tr line-height:20px>
        <td width="68%" height=33px >&nbsp;&nbsp;&nbsp; 
          
          欢迎来到趣分期！</td>
        <c:choose>
			<c:when test="${NULL==user}">
        <td width="17%"><div align="right"><a href="login.jsp">登录</a>&nbsp;</div></td>
        <td width="1%"> |</td>
        <td width="5%"><div align="center"><a href="register.jsp">&nbsp;注册</a>&nbsp;</div></td>
        <td width="1%"> |</td>
        </c:when>
        <c:otherwise>
        <td width="17%"><div align="right"><a href="getmyself.action"> <%=user%></a>&nbsp;</div></td>
        <td width="1%"> |</td>
        <td width="5%"><div align="center"><a href="loginout.action"> 退出</a>&nbsp;</div></td>
        <td width="1%"> |</td>
        </c:otherwise>
        </c:choose>
        <td width="8%"><div align="center"><a href="#">帮助中心</a></div></td>
      </tr>
    </table>
  </div>



 <div id="Body">
			<table width="991" >
				<tr>
					<td width="436"><img src="images/logo1.png" 
						height="80px" hspace="80" align="middle"></td>
					<td width="545" colspan="2">
						<form name="form1" method="post" action="search.action">
							<table width="465" border="0" rules=rows cellspacing=0 align=right>
							<tr><td width="420">
								<label for="shangping"></label> <input name="keyWord"
									type="text" id="shangping" value="请输入商品名称"
									onFocus="if(this.value=='请输入商品名称')this.value='';"
									onBlur="if(this.value=='')this.value='请输入商品名称';"
									class="SmallInput" style="width:420px;height:40px; border:#FF0000 3px solid;"> 
									</td>
									<td width="45"><input name="sousuo" type="image" id="sousuo" value="搜索"
									src="images/0011.png" align="middle" style="border:#FF0000 3px solid;" height="34"
									onclick="javascript:document.getElementById('sousuo').submit"></td>
							</tr></table>
						</form>
					</td>
				</tr>
			</table>
			</div>
			
		<div id="tb">
			<table width="918" border="0" >
				<tr>
					<td width="327" align="center" valign="top">
					<div id="hehe"><img src="images/spfl3.png" width="170" height="40">
					<div id="menu">
							<ul>
								
								<s:iterator value="mainShow" var="list">
									<li><a href="#"><s:property value="#list.typeAllName" />
									</a><ul> <s:iterator value="#list.productType" var="detail">
											
												<li><a
													href="loadDetail.action?detailKey=<s:property value="#detail.pdid"/>&
													sellAndPrice=all&brandOne=-1&minPrice=0&maxPrice=0"><s:property
															value="#detail.typeDetailName" /> </a></li>
										</s:iterator>
											</ul>
									</li>
								</s:iterator>
							</ul></div></div>
					</td>
					<td width="123"   valign="top"><a href="index.jsp"><font size="+2">首页</font></a></td>
					<td width="454"   valign="top"><a href="index.jsp"><font size="+2">特卖</font></a></td>
					
				</tr>
			</table>
		</div>


		<div id="apDiv1">
			<table width="1250" height="400" border="1" bgcolor=#f1f1f1  rules=cols>
				<tr>
					<td width="21%"  valign="top" >
						<div id="tubiao">	<img src="images/003.png"
								width="74" height="40" /><a href="getmyself.action"><s:property value="myinfo.name" /></a>
						</div>
						<hr />
						<p>可用额度：<s:property value="myinfo.creditLine" /></p>
					</td>

					<td width="79%" rowspan="3" bgcolor=#FFFFFF valign="top"><p>我的订单</p>
					<s:iterator value="orderList" var="listorder">
						<div id="dingdan">

							<p>

								&nbsp; &nbsp;&nbsp;&nbsp;<font color="#0033FF">订单号</font>:<s:property value="#listorder.orderId" />
								&nbsp;&nbsp;&nbsp;<font color="#0033FF">提交日期</font>:<s:property value="#listorder.submitDate" />

							</p>
							<div id="kkk">
								<table width="931" border="1" align="center" cellpadding="0"
									cellspacing="0" bordercolor="#00FFFF">
									<tr>
										<td width="245" align="center" >商品名</td>
										<td width="66" align="center" >价格</td>
										<td width="68" align="center" >首付</td>
										<td width="75" align="center" >月供</td>
										<td width="113" align="center" >分期月数</td>
										<td width="112" align="center" >总价钱</td>
										<td width="75" align="center" >类别</td>
										<td width="125" align="center" >操作</td>
									</tr>
									<tr>
										<td align="center"><s:property value="#listorder.shop" /></td>
										<td align="center"><s:property value="#listorder.price" /></td>
										<td align="center"><s:property value="#listorder.firstPay" /></td>
										<td align="center"><s:property value="#listorder.monthPay" /></td>
										<td align="center"><s:property value="#listorder.monthTime" /></td>
										<td align="center"><s:property value="#listorder.allMoney" /></td>
										<td align="center"><s:property value="#listorder.content" /></td>
										<td align="center"><s:set name="num" value="#listorder.isPay"/>
										<s:if test="#num==0">
											<a href="cancelorder.action?orderId=<s:property value='#listorder.orderId' />">取消订单</a>
										</s:if>
										<s:if test="#num==1">
											付款中
										</s:if>
										<s:if test="#num==2">
											已完成
										</s:if>
										</td>
									</tr>
								</table>
							</div>
							<p>&nbsp;</p>

						</div>
						</s:iterator>
					</td>
				</tr>
				<tr>
				
					<td  >
					
					<div id="firstpane" class="menu_list">
    <p class="menu_head current">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="getmoney.action">我的账单</a></p>

    <p class="menu_head">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="getorder.action">我的订单</a></p>

    <p class="menu_head">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="checkSafe.action">安全中心</a></p>
   
    <p class="menu_head">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="shopCart.action">我的购物车</a></p>
    
  
   </div>
					</td>
				</tr>
				<tr>
					<td height="60" ><div align="center">
						</div>
					</td>
				</tr>
			</table>

		</div>



	</div>
</body>
</html>


