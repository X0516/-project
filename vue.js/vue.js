<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>RunJS</title>
		<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
		<script src="https://cdn.bootcss.com/vue/2.5.13/vue.min.js"></script>
		<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" >
		<style >
		body{
	background:rgba(203,118,255,0.5);

	
	}
button{

	cursor:pointer;
}
#app{
	text-align:center; 
	width:1000px;
	margin:20px auto;
	transition:1.5s;
	padding:5px;
	border-radius:20px;
	border:1px solid rgba(0,0,0,0.4);
}
#app:hover{
background:rgba(252,255,170,0.2);
}



#h3{
	transition:2s;
	color:rgba(28,255,15,0.8)
}
#get-ticket{
	
	transition:2s;

}
#app:hover #get-ticket{
	border-radius:40px;
	
	

}
#app:hover #h3{color:red}

#tb-imgs td{
	padding:0 0 0 5px;
		transition:1.5s;
		overflow:hidden

}
#tb-imgs td:hover{
	background:rgba(255,85,255,0.8);
	border:1px solid red

}

#tb-imgs img{
	width:160px; 
	height:230px;
	border:1px solid rgba(0,0,0,0.5);
	transition:1.5s;
	cursor:pointer;
	opacity:0.8
	
}
#tb-imgs img:hover{
transform:scale(1.1);

}
#tb-imgs td:hover{

border-color:rgba(255,0,180)
}
#tb-imgs td button{
transition:1.5s
}
#tb-imgs td button:hover{
	transform:scalex(1.2);
	border-radius:40px

}
#tb-imgs:hover img{
	border:1px solid rgba(255,0,0,1);
	opacity:1；

}
	
		</style>
		
	</head>
	
	<body>
		<div id="app" style="">
				<h3 id="h3" style=""> Vue自定义事件---按钮联动事件</h3>
			<hr style="background:red;height:1px">
			<button id="get-ticket" style="width:200px"  class="btn btn-success btn-lg" @click.once="getnum()" v-once>点 击 获 得 票 数</button>
			<h3>恭喜你，获得了 <span style="color:rgba(255,137,173)">{{ num }} </span>点赞票数</h3>
			<h4>剩余点赞票数为：<span style="color:red">{{ lastnum }} </span> 票</h4>
				<!--<my-btn @add="alladd()"></my-btn>-->
			<table style="border-radius:20px" id="tb-imgs" class="table ">
				<tr  style="width:140px">
					<td v-for="imgs in Imgs1"><img :title="imgs.title" :src="imgs.img" ></td>
					
				</tr>
				<tr>
					<td v-for="imgs in Imgs1"><my-btn @add="alladd()"></my-btn></td>
					
				</tr>
				
				<tr  style="width:140px">
					<td v-for="imgs in Imgs2"><img :title="imgs.title" :src="imgs.img"></td>
					
				</tr>
				<tr>
					<td v-for="imgs in Imgs2"><my-btn @add="alladd()"></my-btn></td>
					
				</tr>
			</table>
			
			<h5 style="color:rgba(255,0,0,0.8)">
				总 共 投 票 数 ：  <span style="color:rgba(255,137,173)"> {{allcount}} </span> 票
			</h5>
			
			
			
			</div>
			
		
		<template id="my_btn">
		
			<button @click="add()" class="btn  btn-info">
				投 票 数 ：<span style="color:red"> {{counter}} </span>票
			</button>
		</template>
		<script>
		Vue.component('my-btn',{
	template:"#my_btn",
	data(){   //组件中的data属性应是函数（返回值）
		return{
			counter:0
		}

	},
					
		
	methods:{
		add(){
		this.counter++;
		this.$emit('add');   //通知外界调用了这个方法
		
		},
			
	}

},
	
	
	
	);



var app=new Vue({
	el:"#app",
	data:{
		allcount:0,
		num:1,
		lastnum:1,
		
		Imgs1:[
			{img:"http://i03.pic.sogou.com/1b339e31fe287e24", title:'GEM-邓紫棋'},
			{img:"http://img04.sogoucdn.com/app/a/100520024/919e4471239cbdfd4492513f33b66922", title:'胡歌'},
			{img:"http://img01.sogoucdn.com/app/a/100520024/2dca236d81c5fc584cbc7c910b9aacf0", title:'林允儿'},
			{img:"http://img01.sogoucdn.com/app/a/100520024/38b410e1d1e0a78280ef4515196fec3e", title:'杨幂'},
			{img:"http://img04.sogoucdn.com/app/a/100520024/646e5f06e9b545a73c1503348f69dabf", title:'张天爱'},
		],
		Imgs2:[
			{img:"http://img01.sogoucdn.com/app/a/100520024/345b08f77b4c93112dc956d5cd0dcdba", title:'小黑龙'},
			{img:"http://img04.sogoucdn.com/app/a/100520024/027a2df86f945f052908ad0a8eb5a55d", title:'刘诗诗'},
			{img:"http://img04.sogoucdn.com/app/a/100520024/c75c77cf3a12493079c578d2cb7202a5", title:'娜扎'},
			{img:"http://img04.sogoucdn.com/app/a/100520024/21e8169bbf8612b6e4c194341890a838", title:'张艺兴'},
			{img:"http://img01.sogoucdn.com/app/a/100520024/a8cae69bcfdd0ad5743a1a5522101db8", title:'黄晓明'},
		],
			
			
			
		},
		
		methods:{
			alladd(){
				this.allcount++;
			  this.lastnum--;
				if(this.allcount>=this.num){
						$("button").attr("disabled","disabled");
						alert('票数已经用完了奥~~~~');
			};
			
		},
			
		getnum(){
			Num=parseInt(10*Math.random())+20;
			alert('恭喜获得点赞票数为：'+ Num +' 票')
			this.num=Num+1;
			this.lastnum=Num+1;
			
			
			},
		
		}

});
			
			
		
		</script>

	</body>
</html>
