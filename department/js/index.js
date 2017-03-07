function a(){
				var w = screen.width;
				var h = screen.height;
				var t = w/9;
				document.getElementById('sun').style.width = t+"px";
				document.getElementById('sun').style.height =t+"px"; 
				document.getElementById('introduce').style.width =t+50+"px";
				document.getElementById('last').style.width = t+11+"px";
				var all = document.getElementById('all3');
				var ah = all.offsetHeight;
				var a = document.getElementsByClassName('righttop');
				a[0].style.height = ah + 'px';
				var bgt = document.getElementsByClassName('bgtop');
				for (var i = 0; i < bgt.length; i++) {
					bgt[i].style.height = ah +'px';
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
			}
			
			function startMove(obj,iTarget){
				var bgtop = document.getElementsByClassName('bgtop');
				var bgtid = obj;
				clearInterval(bgtop[bgtid].timer);
				bgtop[bgtid].timer = setInterval(function(){
					console.log(bgtop[bgtid]);
						var speed =(iTarget-bgtop[bgtid].offsetTop)/10;
						speed = speed>0?Math.ceil(speed):Math.floor(speed);
						if (bgtop[obj].offsetTop==iTarget) {
							    clearInterval(bgtop[bgtid].timer);
						    }else{
						    	if (speed>0) {bgtop[bgtid].style.top = bgtop[bgtid].offsetTop + speed +'px';
						    }else{
							    bgtop[bgtid].style.top =bgtop[bgtid].offsetTop-70+'px';
							    }
							   	var f = document.getElementsByClassName('med1');
								 if (bgtop[bgtid].style.top == 0 + 'px'){
									f[bgtid].style.fontSize =30 + 'px';
									f[bgtid].style.marginRight = 0+ 'px';
									f[bgtid].style.textAlign = "center";
							  	}else{
							  	   f[bgtid].style.fontSize = 22 + 'px';
							  	   f[bgtid].style.marginRight = 20+ 'px';
								   f[bgtid].style.textAlign = "right";
							  	}
					}
					},50)
				}