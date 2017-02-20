var game = {
	data:[], //单元格中的所有数字
	score: 0,
	state: 1,
	RUNNING:1,
	GAME_OVER:0,
	PALYING:2,  //动画正在播放中
	start: function(){   //启动游戏时调用
		//生成二维数组
		for(var i = 0; i < 4; i++) {
			this.data[i] = [];
			for(var j = 0; j < 4; j++){
				this.data[i][j] = 0;
			}
		}
		// 在两个位置随机生成2或4
		this.score = 0;
		this.state = this.RUNNING;
		var div = document.getElementById('gameOver');
		div.style.display = 'none';
		this.randomNum();
		this.randomNum();
		this.updateView();
	},
	isFull: function(){  //判断是否还能添加数字
		/*遍历data数组，只要发现值为0的就返回false,如果否则true*/
		for(var row = 0; row < 4; row++){
			for(var col = 0; col < 4; col++) {
				if(this.data[row][col] == 0) {
					return false;		//未满
				}
			}
		}
		return true;  //格子已满
	},
	randomNum: function(){  //随机生成2或4
		if(this.isFull())  {return;}  // 如果格子已满就不用生成
		  /*循环条件： true
		     随机在0到3行中生成一个行下标row
		     随机在0到3列中生成一个列下标col
		     如果该位置==0，随机选择2或4：如果Math.random() < 0.5，选2
		     否则选4，放入该位置退出循环*/
		     while(true){
		     	var row = Math.floor(Math.random() * (3-0+1) + 0);
		     	var col = Math.floor(Math.random() * (3-0+1) + 0);
		     	if(this.data[row][col] == 0){
		     		this.data[row][col] = Math.random() < 0.5 ? 2 : 4;
		     		break;
		     	}
		     }
	},
	canLeft: function(){
		/*遍历每一元素（最左侧列除外），只要发现任意元素
		左侧数等于0或者当前值等于左侧值 return true
		如果循环正常结束 return false*/
		for(var row = 0; row < 4; row++){
			for(var col = 1; col < 4; col++){
				if(this.data[row][col] != 0){
					if(this.data[row][col - 1] == 0 || this.data[row][col]==this.data[row][col-1]) {
						return true;  //可以向左移动
					}
				}
			}
		}
		return false;   //不能向左移动
	},
	moveLeft: function(){	//实现左移所有行
		if(this.canLeft()){
			for(var row = 0; row < 4; row++){
				this.moveLeftInRow(row);
			}
			this.state = this.PALYING;
			animation.start();
			setTimeout(function(){
				game.state = game.RUNNING;
				game.randomNum();
				game.updateView();
			},animation.times*animation.interval);
		}
	},
	moveLeftInRow:function(row){  //左移一行
		/*从0位置开始到2结束遍历row行中的每个元素，
		获得一个下标不为0的元素nextCol下标
		如果nextCol == -1 break
		否则 判断合并
		如果自己等于0，用下一个元素的值替换自己，将下一个元素的值设为0，
		让col留在原地：col--
		如果自己等于下一个元素，将自己*2；将下一个元素设为0*/
		for(var col = 0; col <= 2; col++){
			var nextCol = this.getNextRight(row, col);
			if(nextCol == -1) {   //值为0
				break;
			}else {
				if(this.data[row][col] == 0){
					this.data[row][col] = this.data[row][nextCol];
					this.data[row][nextCol] = 0;
					animation.addTask(''+row+nextCol,''+row+col);
					col--;
				}else if(this.data[row][col] == this.data[row][nextCol]) {
					this.data[row][col]*=2;
					this.score += this.data[row][col];
					this.data[row][nextCol] = 0;
					animation.addTask(''+row+nextCol, ''+row+col);
				}
			}
		}
	},
	getNextRight:function(row, col){  //获得当前行中，指定位置右侧第一个不为0的数，返回下一个为0的数的位置
	/*遍历当前位置右侧的每一个元素 只要发现不等于0的，
	就返回其位置下标退出循环
	否则 返回 -1*/
		for(var i = col +1; i < 4; i++){
			if(this.data[row][i] != 0){
				return i;
			}
		}
		return -1;
	},
	canRight:function(){	//判断是否能右移
		for(var row = 0; row < 4; row++){
			for(var col = 2; col >= 0; col--){
				if(this.data[row][col] != 0){
					if(this.data[row][col + 1] == 0 || this.data[row][col] == this.data[row][col + 1]){
						return true;
					}
				}
			}
		}
		return false;
	},
	moveRight:function(){  //向右移动所动行
		if(this.canRight()){
			for(var row = 0; row < 4; row++){
				this.moveRightInRow(row);
			}
			this.state = this.PALYING;
			animation.start();
			setTimeout(function(){
				game.state = game.RUNNING;
				game.randomNum();
				game.updateView();
			},animation.times*animation.interval);
		}
	},
	moveRightInRow:function(row){  //右移当前行
		/*从右向左遍历检查，最左边元素除外*/
		for(var col = 3; col > 0; col--){
			var nextCol = this.getNextLeft(row, col);
			if(nextCol == -1){
				break;
			}else {
				if(this.data[row][col] == 0){
					this.data[row][col] = this.data[row][nextCol];
					this.data[row][nextCol] = 0;
					animation.addTask('' + row + nextCol, '' + row + col);
					col++;
				}else if(this.data[row][col] == this.data[row][nextCol]){
					this.data[row][col] *= 2;
					this.score += this.data[row][col];
					this.data[row][nextCol] = 0;
					animation.addTask('' + row+nextCol, '' + row + col);
				}
			}
		}
	},
	getNextLeft:function(row, col){
		// 从当前位置向左。找下一个不为0的数
		for(var i = col -1; i >= 0; i--){
			if(this.data[row][i] != 0){
				return i;
			}
		}
		return -1;
	},
	canUp:function(){
		for(var row = 1; row < 4; row++){
			for(var col = 0; col < 4; col++){
				if(this.data[row][col] != 0){
					if(this.data[row - 1][col] == 0 || this.data[row][col] == this.data[row - 1][col]) {
						return true;
					}
				}
			}
		}
		return false;
	},
	moveUp:function(){
		if(this.canUp()){  //先判断是否能上移
			for(var col = 0; col < 4; col++){
				this.moveUpInCol(col);
			}
			this.state = this.PALYING;
			animation.start();
			setTimeout(function(){
				game.state = game.RUNNING;
				game.randomNum();
				game.updateView();
			},animation.times * animation.interval);
		}
	},
	moveUpInCol:function(col){
		for(var row = 0; row < 3; row++){
			var nextRow = this.getNextDown(row, col);
			if(nextRow == -1) {
				break;
			}else {
				if(this.data[row][col] == 0){
					this.data[row][col] = this.data[nextRow][col];
					this.data[nextRow][col] = 0;
					animation.addTask('' + nextRow + col, '' + row + col);
					row--;
				}else if(this.data[row][col] == this.data[nextRow][col]){
					this.data[row][col] *= 2;
					this.score += this.data[row][col];
					this.data[nextRow][col] = 0;
					animation.addTask('' + nextRow + col, '' + row + col);
				}
			}
		}
	},
	getNextDown:function(row, col){
			for(var i = row + 1; i < 4; i++){
				if(this.data[i][col] != 0){
					return i;
				}
			}
			return -1;
	},
	canDown:function(){ //判断能否下移
		for(var row = 0; row < 3 ; row++) {
			for(var col = 0; col < 4; col++){
				if(this.data[row][col] != 0){
					if(this.data[row + 1][col] == 0 || this.data[row][col] == this.data[row + 1][col]){
						return true;
					}
				}
			}
		}
		return false;
	},
	moveDown: function(){ //向下移动所有行
		if(this.canDown()){
			for(var col = 0; col < 4; col++){
				this.moveDownInCol(col);
			}
			this.state = this.PALYING;
			animation.start();
			setTimeout(function(){
				game.state = game.RUNNING;
				game.randomNum();
				game.updateView();
			},animation.times * animation.interval);
		}
	},
	moveDownInCol:function(col) { //下移当前行
		// 从下到上遍历检查，最上边元素除外
		for(var row = 3; row > 0; row--){
			var nextRow = this.getNextUp(row,col);
			if(nextRow == -1){
				break;
			}else {
				if(this.data[row][col] == 0){
					this.data[row][col] = this.data[nextRow][col];
					this.data[nextRow][col] = 0;
					animation.addTask('' + nextRow + col, '' + row + col);
					row++;
				}else if(this.data[row][col] == this.data[nextRow][col]) {
					this.data[row][col] *= 2;
					this.score += this.data[row][col];
					this.data[nextRow][col] = 0;
					animation.addTask('' + nextRow + col, '' + row + col);
				}
			}
		}
	},
	getNextUp:function(row, col) {
		// 从当前位置向上，找到下一个不为0的数
		for(var i = row -1; i >= 0; i--){
			if(this.data[i][col] != 0){
				return i;
			}
		}
		return -1;
	},
	updateView:function(){   //将游戏数据整体更新到页面上
		/*step1.遍历二维数组的每个元素
		    step2.找到当前元素对应的div
		    step3.将当前元素的值放入div中
		    step4.根据当前元素值修改div样式类
		    */
		   for(var row = 0; row < 4; row++){
		   	for(var col = 0; col < 4; col++){
		   		var div = document.getElementById('c' + row + col);
		   		div.innerHTML = this.data[row][col] == 0 ? '' : this.data[row][col];
		   		div.className = this.data[row][col] == 0 ? 'cell' : 'cell n'+this.data[row][col];
		   	}
		   }
		   // 将分数放入span
		   var span = document.getElementById('score');
		   span.innerHTML = this.score;
		   /*
		   判断游戏结束
		   如果游戏结束，this.state = GAME_OVER
		   显示游戏结束div
		   找到gameOver div
		   修改div的style
		    */
		   if(this.isGameOver()){
		   	this.state = this.GAME_OVER;
		   	var div = document.getElementById('gameOver');
		   	var finalScore = document.getElementById('finalScore');
		   	finalScore.innerHTML = this.score;
		   	div.style.display = 'block';
		   }
	},
	isGameOver:function(){  //判断游戏是否结束
		// 能继续是返回false 否则返回true
		if( !this.isFull()) return false;
		// 已经满了
		for(var row = 0; row < 4; row++){
			for(var col = 0; col < 4; col++){
				if(col < 3){ //检查右侧相邻
					if(this.data[row][col] == this.data[row][col + 1]){
						return false;
					}
				}
				if( row < 3){ //检查下方相邻
					if(this.data[row][col] == this.data[row + 1][col]){
						return false;
					}
				}  
			}
		}
		return true;
	}
}
// 当窗口加载后，调用game对象的start方法
window.onload = function(){
	game.start();
	document.onkeydown = function(){
		/*step1. 先获得事件对象
		    step2. 获的事件对象中的按键编号
		    */
		if(game.state != game.PALYING){
			var event = window.event || arguments[0]; //解决浏览器兼容性问题
			if(game.state == game.RUNNING){
				switch(event.keyCode){
					case  37 :
					        game.moveLeft();
					        break;
					 case  39 :
					         game.moveRight();
					         break;
					  case  38 :
					          game.moveUp();
					          break;
					   case  40 :
					           game.moveDown();
					           break;
					   case   13 :
					            game.start();
					            break;
				}
			}
		}
	}
}

	// animation
	function Task(obj, topStep, leftStep) {
		this.obj = obj;
		this.topStep = topStep;
		this.leftStep = leftStep;
	}
	// moveStep 方法将当前元素对象移动一步
	Task.prototype.moveStep = function(){
		var style = getComputedStyle(this.obj, null);
		var top = parseInt(style.top);
		var left = parseInt(style.left);
		this.obj.style.top = top + this.topStep + 'px';
		this.obj.style.left = left + this.leftStep + 'px';
	}
	// 清除元素对象的样式 使其返回原地
	Task.prototype.clear = function(){
		this.obj.style.left = '';
		this.obj.style.top = '';
	}
	var animation = {
		times: 10,  //每个动画10步完成
		interval: 10 , //10毫秒迈一步
		timer: null,  //保存定时器id的属性
		tasks:[],  //保存每次需要移动的任务
		addTask:function(source, target){
			var sourceDiv = document.getElementById('c' + source);
			var targetDiv = document.getElementById('c' + target);
			var sourceStyle = getComputedStyle(sourceDiv);
			var targetStyle = getComputedStyle(targetDiv),
			       topStep = (parseInt(targetStyle.top) - parseInt(sourceStyle.top)) / this.times;
			var  leftStep = (parseInt(targetStyle.left) - parseInt(sourceStyle.left)) / this.times;
			var task = new Task(sourceDiv, topStep, leftStep);
			this.tasks.push(task);
		},
		start:function(){
			this.timer = setInterval(function(){
				for(var i = 0; i < animation.tasks.length; i++){
					animation.tasks[i].moveStep();
				}
				animation.times--;
				if(animation.times == 0){
					for(var i = 0; i < animation.tasks.length; i++){
						animation.tasks[i].clear();
					}
					clearInterval(animation.timer);
					animation.timer = null;
					animation.tasks = [];
					animation.times = 10;
				}
			},this.interval);
		}
	}
