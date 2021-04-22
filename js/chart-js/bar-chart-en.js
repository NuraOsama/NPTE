
(function ($) {



	    let bartype='bar';
		let color = Chart.helpers.color;
		let todayyesterdaylabels=[ "0:00", "3:00", "6:00", "9:00", "12:00", "15:00" ,"18:00" , "21:00" ,"24:00"];
		let weeklabels = ['Sunday (14 March)', 'Wednesday (17 March)', 'Saturady (20 March)'];
		let monthlabels = ['21/02', '24/02', '27/02','02/03' ,'05/03','08/03','11/03','14/03','17/03','20/03'];
		let yearlabels = ['2021', '2020', '2019','2018' ,'2017','2016','2015','2014','2013','2012'];
		let baroptionschart = {
			
				responsive: true,
				plugins: {
				  title: {
					display: false,
					text: 'Chart.js Bar Chart'
				  },
				  tooltip: {
					mode: 'index',
					intersect: false,
				  }
				},
				hover: {
				  mode: 'nearest',
				  intersect: true
				},
				scales: {
				  x: {
					display: false,
					title: {
					  display: true,
					
					}
				  },
				  y: {
					display: false,
					title: {
					  display: true,
					 
					}
				  },
				  yAxes: [{ticks: {fontSize: 14, fontFamily: "'Mirza', sans-serif"},position:"left"}],
				  xAxes: [{ticks: {fontSize: 14, fontFamily: "'Mirza', sans-serif"},position:"left"}]
				}
			
		}

		 //today chart login course
		  let todaychartlogincourse = document.getElementById('today-chart-en').getContext('2d');
		  window.myBar = new Chart(todaychartlogincourse, {
		    type:bartype,
	     data :{
			labels: todayyesterdaylabels,
			datasets: [{
				label: 'Login',
				backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
				borderColor: window.chartColors.blue,
				borderWidth: 1,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}, {
				label: 'Course Completions',
				backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
				borderColor: window.chartColors.green,
				borderWidth: 1,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}]

		},
		options : baroptionschart,
	      });


		//yesterday chart login course
		let yesterdaychartlogincourse = document.getElementById('yesterday-chart-en').getContext('2d');
		window.myBar = new Chart(yesterdaychartlogincourse, {
		type: bartype,
	     data :{
		labels: todayyesterdaylabels,
		datasets: [{
			label: 'Login',
			backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
			borderColor: window.chartColors.blue,
			borderWidth: 1,
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			]
		}, {
			label: 'Course Completions',
			backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
			borderColor: window.chartColors.green,
			borderWidth: 1,
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			]
		}]

	},
	options : baroptionschart,
	    });

		//week chart login course
		let weekchartlogincourse = document.getElementById('week-chart-en').getContext('2d');
		window.myBar = new Chart(weekchartlogincourse, {
		type:bartype,
	    data :{
		  labels: weeklabels,
		  datasets: [{
			  label: 'Login',
			  backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
			  borderColor: window.chartColors.blue,
			  borderWidth: 1,
			  data: [
				  randomScalingFactor(),
				  randomScalingFactor(),
				  randomScalingFactor()
				  
				  
			  ]
		  }, {
			  label: 'Course Completions',
			  backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
			  borderColor: window.chartColors.green,
			  borderWidth: 1,
			  data: [
				  randomScalingFactor(),
				  randomScalingFactor(),
				  randomScalingFactor()
				 
			  ]
		  }]

	  },
	  options : baroptionschart,
		});


	    //month chart login course
	    let monthchartlogincourse = document.getElementById('month-chart-en').getContext('2d');
	    window.myBar = new Chart(monthchartlogincourse, {
	  type: bartype,
	   data :{
	  labels: monthlabels,
	  datasets: [{
		  label: 'Login',
		  backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
		  borderColor: window.chartColors.blue,
		  borderWidth: 1,
		  data: [
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor()
		  ]
	  }, {
		  label: 'Course Completions',
		  backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
		  borderColor: window.chartColors.green,
		  borderWidth: 1,
		  data: [
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor(),
			  randomScalingFactor()
		  ]
	  }]

  },
  options : baroptionschart,
	    });
        
		 //year chart login course
		 let yearchartlogincourse = document.getElementById('year-chart-en').getContext('2d');
		 window.myBar = new Chart(yearchartlogincourse, {
	   type: bartype,
		data :{
	   labels: yearlabels,
	   datasets: [{
		   label: 'Login',
		   backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
		   borderColor: window.chartColors.blue,
		   borderWidth: 1,
		   data: [
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor()
		   ]
	   }, {
		   label: 'Course Completions',
		   backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
		   borderColor: window.chartColors.green,
		   borderWidth: 1,
		   data: [
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor(),
			   randomScalingFactor()
		   ]
	   }]
 
   },
   options : baroptionschart,
		 });
 
		      
})(jQuery);
