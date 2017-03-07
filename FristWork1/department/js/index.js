function a(){
				var w = $(window).width()||$(document).width();
				var h = screen.height;
				var t = w/9;
				document.getElementById('sun').style.width = t+"px";
				document.getElementById('sun').style.height =t+"px";
				
				
				document.getElementById('last').style.width = t+11+"px";
				var all = document.getElementById('all3');
				var ah = all.offsetHeight;

				var medDiv = document.getElementsByClassName('name');
				var medDivHe = medDiv[0].offsetHeight;
				var medLine = document.getElementsByClassName('med1');
				for (var i = 0; i < medLine.length; i++) {
					medLine[i].style.lineHeight = medDivHe+"px";
					medLine[i].style.marginLeft = 40+"%";
				}
				
				var a = document.getElementsByClassName('righttop');
				var left = document.getElementsByClassName('left');
				var leftHeight = left[0].offsetHeight;
				var leftWidth = left[0].offsetWidth;
				a[0].style.height = leftHeight + 'px';
				var sun = document.getElementById("sun");
				sun.style.marginLeft = leftWidth*0.2+"px";
				

				var bgt = document.getElementsByClassName('bgtop');
				for (var i = 0; i < bgt.length; i++) {
					bgt[i].style.height = leftHeight +'px';
				}

				var oDiv=document.getElementsByClassName('bg');
				var bgtop = document.getElementsByClassName('bgtop');
				for (var i = 0; i < oDiv.length; i++) {
					oDiv[i].timer = null;
					oDiv[i].onmouseover = function(){
						var strID = this.id;
						var thid = strID.substring(2);
						startMove(thid,0);
					}
					oDiv[i].onmouseout = function(){
						var strID = this.id;
						var thid = strID.substring(2);
						startMove(thid,-10000);
					}
				}

				document.getElementsById('trigon').style.marginRight = w/5-20+"px";

			}
			
			function startMove(obj,iTarget){
				var bgtop = document.getElementsByClassName('bgtop');
				var bgtid = obj;
				clearInterval(bgtop[bgtid].timer);
				bgtop[bgtid].timer = setInterval(function(){
						var speed =(iTarget-bgtop[bgtid].offsetTop)/6;
						speed = speed>0?Math.ceil(speed):Math.floor(speed);
						if (bgtop[obj].offsetTop==iTarget) {
							    clearInterval(bgtop[bgtid].timer);
						    }else{
						    	if (speed>0) {bgtop[bgtid].style.top = bgtop[bgtid].offsetTop + speed +'px';
						    }else{
							    bgtop[bgtid].style.top =bgtop[bgtid].offsetTop-70+'px';
							    }
					}
					},50)
				}

		$(document).ready(function(){
			a();
		})