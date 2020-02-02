jQuery(function ($) {

  $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});


$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});



var chart = c3.generate({
	bindto: '#gauge',
    data: {
		columns: [
            ['HEALTH', 91.4]
        ],
        type : 'gauge',
    },legend: {
    show: false
  },
    color: {pattern: ['#28a745'],}, size: { height:90 }

});
	
var chart = c3.generate({
	bindto: '#gauge2',
    data: {
		columns: [
            ['HEALTH', 60.4]
        ],
        type : 'gauge',
    },legend: {
    show: false
  },
    color: {pattern: ['#28a745'],}, size: { height:90 }

});
	
	
var chart = c3.generate({
	bindto: '#gauge2',
    data: {columns: [['HEALTH', 49]],type : 'gauge',},legend: {show: false},color: {pattern: ['#dc3545'],}, size: {width:150, height:90 }
});
var chart = c3.generate({
	bindto: '#gauge3',
    data: {columns: [['HEALTH', 73]],type : 'gauge',},legend: {show: false},color: {pattern: ['#ffc107'],}, size: {width:150, height:90 }
});
var chart = c3.generate({
	bindto: '#gauge4',
    data: {columns: [['HEALTH',80]],type : 'gauge',},legend: {show: false},color: {pattern: ['#17a2b8'],}, size: {width:150, height:90 }
});
var chart = c3.generate({
	bindto: '#gauge5',
    data: {columns: [['HEALTH', 91.4]],type : 'gauge',},legend: {show: false},color: {pattern: ['#28a745'],}, size: {width:150, height:90 }
});
	
	
var chart = c3.generate({
	bindto: '#bar',size: { height: 190},
    data: {
        columns: [
            ['ACTUAL', 80, 73, 90, 90, 92, 90, 80, 73, 90, 90, 92, 90],
            ['PLANNED', 80, 70, 85, 90, 95, 90, 80, 70, 85, 90, 95, 90]
        ],
	  colors: {
            ACTUAL: '#712c81',
            PLANNED: '#e7374b',},
        type: 'bar'
    },axis: {
        x: {
            type: 'category',
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October ','November','December']
        },y:{max: 100, min:50, padding: {top: 0, bottom: 0}
		}
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
	
	
var chart = c3.generate({

  data: {
    columns: [
      ['Completed', 9],
	['Overdue', 2],
	['Backlogged', 6],
	['Cancelled', 1],
    ],
	  colors: {
            Completed: '#df4c29',
            Overdue: '#e89c35',
            Backlogged: '#7a258c',
		  Cancelled: '#db3f7a'
        },
	  
    type: 'donut'
  },donut: { width: 18 },
  legend: {
    show: false
  }
});

d3.select('.chartlegend').insert('div', ':first-child')
  .attr('class', 'legend')
  .selectAll('span')
  .data(['Completed', 'Overdue', 'Backlogged', 'Cancelled'])
  .enter().append('div').attr('class', 'legend-label')
  .attr('data-id', function(id) {
    return id;
  })
  .html(function(id) {
    var data = chart.data(id);
    return id;
  })
  .on('mouseover', function(id) {
    chart.focus(id);
  })
  .on('mouseout', function(id) {
    chart.revert();
  })
  .insert('span', '.legend-label').attr('class', 'badge')
  .each(function(id) {
    d3.select(this).style('background-color', chart.color(id));
  })

chart.resize({width:115, height:115})
	
	var chart = c3.generate({
	bindto: '#chart2',
    data: {columns: [ 
		['Software Project Proposal', 9],
		['Technology Proposal', 2],
		['Formal Software Project ', 6],
		['Software Development', 1],
		['Software Engineering', 1],
		['Ultimate Guide', 1]
	], names: {
		'Software Project Proposal': '45.0% Software Project Proposal',
		'Technology Proposal': '30.0% Technology Proposal',
		'Formal Software Project ': '10.0% Formal Software Project',
		'Software Development': '5.0% Software Development',
		'Software Engineering': '5.0% Software Engineering',
		'Ultimate Guide':'5.0% Ultimate Guide'
	},type : 'donut'},
	legend: {position: 'right'},color: { pattern: ['#942192', '#da3f7b', '#eeab2b', '#e98bb0', '#e3d5e6', '#e8e8e8'] }
	});


	
	if ($(window).width() < 815) {
		$('.page-wrapper').removeClass('toggled');
		
		$(".page-content").click(function() {
		  $(".page-wrapper").removeClass("toggled");
		});
	} else {
		$('.page-wrapper').addClass('toggled');
	}
	
});

