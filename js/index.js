var smallBox;
var minesNum;
var minesOver;
var minesOverFlags;
var mineMap = [];
var inlei;

function start() {
	$(".group").show(200)
	$(this).hide(500).next().show(500);
	$(".prompt").show(500)
	$(".prompt1").show(500)
	minesOver = 20;
}

function simple() {
	$(".box").show(500)
	minesNum = 32;
	minesOver = 20;
	minesOverFlags = 30;
	mineMap = [];
	$(".prompt").children('span').html(minesOver)
	$(".prompt1").children('span').html(minesOverFlags)
	if ($(".box")[0].innerHTML == "") {
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < 18; j++) {
				var con = document.createElement("div")
				con.classList.add("block");
				$(con).attr({
					"id": i + "_" + j
				})
				$(".box").append(con)
				mineMap.push({
					mine: 0
				});
			}
		}
	}
	for (var i = 0; i < minesNum; i++) {
		var idx = Math.floor(Math.random() * 180);
		if (mineMap[idx].mine == 0) {
			mineMap.mine = 1;
			$(".block")[idx].classList.add("inlei");
		}
	}
}

function secondary() {
	$(".box").show(500)
	minesNum = 40;
	minesOver = 30;
	minesOverFlags = 40;
	mineMap = [];
	$(".prompt").children('span').html(minesOver)
	$(".prompt1").children('span').html(minesOverFlags)
	if ($(".box")[0].innerHTML == "") {
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < 18; j++) {
				var con = document.createElement("div")
				con.classList.add("block");
				$(con).attr({
					"id": i + "_" + j
				})
				$(".box").append(con)
				mineMap.push({
					mine: 0
				});
			}
		}
	}
	for (var i = 0; i < minesNum; i++) {
		var idx = Math.floor(Math.random() * 180);
		if (mineMap[idx].mine == 0) {
			mineMap.mine = 1;
			$(".block")[idx].classList.add("inlei");
		}
	}
}

function nightmare() {
	$(".box").show(500)
	minesNum = 40;
	minesOver = 30;
	minesOverFlags = 30;
	mineMap = [];
	$(".prompt").children('span').html(minesOver)
	$(".prompt1").children('span').html(minesOverFlags)
	if ($(".box")[0].innerHTML == "") {
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < 18; j++) {
				var con = document.createElement("div")
				con.classList.add("block");
				$(con).attr({
					"id": i + "_" + j
				})
				$(".box").append(con)
				mineMap.push({
					mine: 0
				});
			}
		}
	}
	for (var i = 0; i < minesNum; i++) {
		var idx = Math.floor(Math.random() * 180);
		if (mineMap[idx].mine == 0) {
			mineMap.mine = 1;
			$(".block")[idx].classList.add("inlei");
		}
	}
}

function leftclick(dom) {
	inlei = $(".inlei")
	if (dom && dom.classList.contains("inlei")) {
		for (var i = 0; i < inlei.length; i++) {
			inlei[i].classList.add("show")
		}
		setTimeout(over, 1000)
	} else {
		var n = 0;
		var posArr = dom && dom.getAttribute("id").split("_"); //2,2
		// alert(posArr)
		posX = posArr && +posArr[0]; //2
		posY = posArr && +posArr[1]; //2
		dom && dom.classList.add("num"); //变换背景
		for (var i = posX - 1; i <= posX + 1; i++) {
			for (var j = posY - 1; j <= posY + 1; j++) {
				var aroundBox = document.getElementById(i + "_" + j)
				// console.log(typeof(aroundBox))
				if (aroundBox && aroundBox.classList.contains("inlei")) {
					n++;
				}

			}

		}
		dom && (dom.innerHTML = n)
		if (n == 0) {
			for (var i = posX - 1; i <= posX + 1; i++) {
				for (var j = posY - 1; j <= posY + 1; j++) {
					var nearBox = document.getElementById(i + "_" + j);
					console.log(nearBox)
					if (nearBox && nearBox.length != 0) {
						if (!nearBox.classList.contains("check")) {
							nearBox.classList.add("check");
							if (!nearBox.classList.contains('inlei')) {
								leftclick(nearBox);
							}
						}

					}
				}
			}
		}
	}
}

function rightclick(dom) {
	if (dom && dom.classList.contains('num')) {
		return false;
	} else {
		minesOverFlags--;
		if (dom && !dom.classList.contains('Flags')) {
			// $(dom).toggleClass('Flags');
			dom.classList.add('Flags')
		} else {
			(minesOverFlags += 1);
			minesOverFlags++
			dom.classList.remove('Flags');
		}
		if (dom && dom.classList.contains("inlei")) {
			if (!dom.classList.contains("checkt")) {
				dom.classList.add("checkt")
				minesOver--;
			}

		}
	}
	if (minesOverFlags == 0) {
		alert('Flags is null,then Game Over')
		over()
	}
	if (minesOver == 0) {
		GameWin()
	}

}

function GameWin() {
	$(".start").show(800)
	$(".box").fadeOut(800)
	$(".prompt").fadeOut(800)
	$(".prompt1").fadeOut(800)
	$(".box").html('')
	$(".group").hide()
	setTimeout(function () {
		$(".GameWin").slideDown(1000)
	}, 800)
}

function over() {
	$(".over").hide(800)
	$(".start").show(800)
	$(".box").fadeOut(800)
	$(".prompt").fadeOut(800)
	$(".prompt1").fadeOut(800)
	$(".box").html('')
	$(".group").hide(200)
	setTimeout(function () {
		$(".gameOver").slideDown(2000)
	},1000)
}

function restart() {
	minesOver = 20;
	$(".over").hide(800)
	$(this).parent().hide(500)
	$(".start").show(800)
}

function WindowSize(dom) {
	$(dom).height($(window).height())
	$(dom).width($(window).width())
	if ($(window).width() < 1920) {
		$("header").show()
	} else {
		$("header").hide()
	}
}

// function close() {
// 	if (confirm("您确定要关闭本页吗？")) {
		
// window.open('','_self');
// 	} else {
// 		setTimeout(function () {
// 			location.reload()
// 		}, 1000)
// 	}
// }
$(function () {
	WindowSize($(".wrapper"))
	$(".start").click(start);
	$(".group").children().eq(1).click(simple)
	$(".group").children().eq(2).click(secondary)
	$(".group").children().eq(3).click(nightmare)
	$(".over").click(over);
	$(".Restart").click(restart)
	oncontextmenu = function () {
		return false;
	}
	$(".box")[0].onmousedown = function (e) {
		var event = e.target;
		if (e.which == 1) {
			leftclick(event)
		} else if (e.which == 3) {
			rightclick(event)
			$(".prompt1").children('span').html(minesOverFlags)
			$(".prompt").children('span').html(minesOver)
		}
	}
})