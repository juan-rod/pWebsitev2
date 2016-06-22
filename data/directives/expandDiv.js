app.directive("expandDiv", function($timeout,$window) {
	return{
		restrict: 'E',
		scope:{
			customdata: '='
		},
		templateUrl: "data/partials/nav-views/blog2.html",
		replace: true,
		link: function(scope,elm,attrs){
			var viewMore = function (){
				var id = 1;
				//var offsetHeight = (elm[0].querySelector('#viewMoreDataDiv'+id)).offsetHeight;
				var offsetHeight = (document.getElementById('viewMoreDataDiv'+id)).offsetHeight;
				console.log("offsetHeight:",offsetHeight);
				var scrollHeight = (document.getElementById('viewMoreDataDiv'+id)).scrollHeight;
				console.log("scrollHeight:",scrollHeight);
				
				if((offsetHeight + 2) > scrollHeight){
					$('#viewMoreDiv' + id).show();
				}else{
					$('#viewMoreDiv' + id).hide();

				}
			};

			$timeout(function (){
				viewMore();
				scope.$apply();
			},10);

			var w = angular.element($window);

			w.bind('resize',function(){
				updateView();
			});

			scope.showMore = function(id){
				console.log("hey gurl i'm clicked", id);
				var blogBox = document.getElementById('viewMoreDataDiv'+id);
				var el = (document.getElementById('viewMoreDataDiv'+id)).offsetHeight,
				curHeight = el;
				c = blogBox.style;
				c.height = "360px";
				autoHeight = c.height;
				console.log("el", el);
				console.log("curHeight", curHeight);
				console.log("autoHeight", autoHeight);
				console.log("blogBox", blogBox);

				// curHeight.animate({height:autoHeight}, 600, function(){
				// 	el.css('height','auto');
				// });
			}

			var updateView = function(){
				var id = 1;
				var $content = $('#viewMoreDataDiv'+ id);

				$content.height('100px');
				$timeout(viewMore,0);
			}
		}
		
		

};





});