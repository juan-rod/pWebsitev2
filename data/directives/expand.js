app.directive("expandDiv",expandDiv);

function expandDiv($timeout,$window){
	console.log("expand div is here");

	function expandDivCtrl($scope){

		//something here maybe?
	}

	function link(scope,element,attr){
		var getBlogDiv;
			scope.showMore = function(){
				var elementId = attr.id;
				getBlogDiv = angular.element(document.querySelector('#'+ elementId));
				getGlyphiconId = angular.element(document.querySelector('#menu-up-down'));
				// console.log("getGlyphiconId:",getGlyphiconId);
				// console.log("getBlogDiv:",getBlogDiv);

			// 	getGlyphiconId.removeClass('glyphicon-menu-down');
			// 	getGlyphiconId.addClass('glyphicon-menu-up');	
			// if(getGlyphiconId.hasClass('glyphicon-menu-down') ===true){
				
			// }else{
			// 	getGlyphiconId.removeClass('glyphicon-menu-up');
			// 	getGlyphiconId.addClass('glyphicon-menu-down');

			// }

				getBlogDiv.toggleClass("heightAuto");
				// getBlogContentDiv.addClass('heightAuto');
	

			
			};

			$timeout(function (){
				scope.$apply();
			},10);

			// var viewMore = function (){
			// 	var id = 1;
			// 	//var offsetHeight = (elm[0].querySelector('#viewMoreDataDiv'+id)).offsetHeight;
			// 	var offsetHeight = (document.getElementById('viewMoreDataDiv1')).offsetHeight;
			// 	console.log("offsetHeight:",offsetHeight);
			// 	var scrollHeight = (document.getElementById('viewMoreDataDiv1')).scrollHeight;
			// 	console.log("scrollHeight:",scrollHeight);
				
			// 	if((offsetHeight + 2) > scrollHeight){
			// 		$('#viewMoreDiv' + id).show();
			// 	}else{
			// 		$('#viewMoreDiv' + id).hide();

			// 	}
			// };


			// var w = angular.element($window);

			// w.bind('resize',function(){
			// 	updateView();
			// });

			// scope.showMore = function(id){
			// 	console.log("hey gurl i'm clicked", id);
			// 	var blogBox = document.getElementById('viewMoreDataDiv'+id);
			// 	var el = (document.getElementById('viewMoreDataDiv'+id)).offsetHeight,
			// 	curHeight = el;
			// 	c = blogBox.style;
			// 	c.height = "360px";
			// 	autoHeight = c.height;
			// 	console.log("el", el);
			// 	console.log("curHeight", curHeight);
			// 	console.log("autoHeight", autoHeight);
			// 	console.log("blogBox", blogBox);

			// 	// curHeight.animate({height:autoHeight}, 600, function(){
			// 	// 	el.css('height','auto');
			// 	// });
			// }

			// var updateView = function(){
			// 	var $content = $('#blogCard');

			// 	$content.height('100px');
			// 	$timeout(getCardInfo,0);
			// }
		}
		
	return{
		restrict: 'A',
		scope:true,
		// templateUrl: "data/partials/nav-views/blog2.html",
		controllerAs:'vm',
		controller:expandDivCtrl,
		link: link
	};
}