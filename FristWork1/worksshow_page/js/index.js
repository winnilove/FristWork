function openNew(num){
				//获取页面的高度和宽度
				var sWidth = document.body.scrollWidth;
				var sHeight = document.body.scrollHeight;

				//获取页面可视区域的高度
				//var wHeight = document.documentElement.clientHeight;

				var oMask= document.createElement("div");
					oMask.id="mask";
					oMask.style.height=sHeight+"px";
					oMask.style.width=sWidth+"px";
					document.body.appendChild(oMask);

				var cImg = document.createElement("div");
					switch(num){
						case 1 :
						cImg.id = "cImg1";
						break;
						case 2 :
						cImg.id = "cImg2";
						break;
						case 3 :
						cImg.id = "cImg3";
						break;
						case 4 :
						cImg.id = "cImg4";
						break;
						case 5:
						cImg.id = "cImg5";
						break;
					}
					document.body.appendChild(cImg);

				
				//获取图片div的宽和高
				var dHeight=cImg.offsetHeight;
				var dWidth =cImg.offsetWidth;

				//点击关闭按钮
					oMask.onclick=function(){
						col();
						return false;
					}
					function col(){
						document.body.removeChild(cImg);
						document.body.removeChild(oMask);
					}
				}
				
			window.onload=function(){
			var oBtn=document.getElementById('main_img');
				//点击登录按钮
				oBtn.onclick=function(){
					openNew(1);
					return false;
					}
			var oBtn1=document.getElementById('main_im');	
				//点击登录按钮
				oBtn1.onclick=function(){
					openNew(2);
					return false;
					}
			var oBtn2=document.getElementById('main_img1');	
				//点击登录按钮
				oBtn2.onclick=function(){
					openNew(3);
					return false;
					}	
			var oBtn3=document.getElementById('main_img2');	
				//点击登录按钮
				oBtn3.onclick=function(){
					openNew(4);
					return false;
					}
			var oBtn4=document.getElementById('main_right');	
				//点击登录按钮
				oBtn4.onclick=function(){
					openNew(5);
					return false;
					}		
		}

function toRight(s){

	var one = document.getElementByClassName("con");
	alert(one[0].id);
	if (s == 1) {
		one[0].style.marginLeft = - 100 + "%";
	}else{
		one[0].style.marginLeft = - 200 + "%";
	}
	

}