(function($) {   
    $.fn.prettyRadBar = function( options ) {
	    var options,
	    	defaults,    	// set defaults
			prb_bar = '', 	// will contain the bars
			sumTo = 100, 	// value does not change, always want 100%
			bars, randomSum, startWidth, barList;

        defaults = {
    		color: ['EC1783', '308FCF', '2B9C68'],
    		animate: false,
    		min: 0
    	};
        options = $.extend({}, defaults, options);
        bars = options.color.length;
		startWidth = Math.floor(100/bars);
        randomSum = function(n,t){
		  var max = n*(n+1)/2;  
		  if(t < max) return 'Input error';
		  var list = [], sum = 0, 
		  i = n; while(i--){
		    var r = Math.random();
		    // This keeps any bar from beeing too small or 0
		    while(r < 0.3) { r = Math.random(); }
		    list.push(r);
		    sum += r;
		  }
		  var factor = t / sum;
		  sum = 0;
		  i = n; while(--i){
		    list[i] = parseInt(factor * list[i]);
		    sum += list[i];
		  }
		  list[0] = t - sum;

		  return list;
		};
		barList = randomSum(bars, sumTo);
		
    	$.each( options.color, function( key, value ) {
		  prb_bar += '<div data-size="' + barList[key] + '" class="prbBB prbBB_' + key + '" style="background-color:#' + value + '; width:'+ startWidth +'%;"></div>';
		});
    	this.addClass('clearfix').append(prb_bar);

    	$('.prbBB').each(function() {
    		if(options.animate === false) {
    			$(this).css({
					'width': $(this).attr('data-size') + '%'
				});
			} else {
				$(this).animate({
					'width': $(this).attr('data-size') + '%'
				}, 500);
			};
		});
    	return this
    }    
})(jQuery);