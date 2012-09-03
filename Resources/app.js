
//windowを作る
	
	var win1 = Ti.UI.createWindow({
	backgroundColor: 'blue'	
	}); 

	var win2 = Ti.UI.createWindow({
	backgroundColor: 'red'	
	}); 
//viewを作る

	var view1 = Ti.UI.createView();
	var view2 = Ti.UI.createView();
//labelを作る

	var label = Ti.UI.createLabel({
		
		text: 'Hello World!',
		height: 30,
		weight: 100,
		top: 100,
		color: 'yellow'
	});

	var map = Ti.Map.createView({
		mapType: Ti.Map.STANDARD_TYPE,
		region: {latitude:35.658517, longitude:139.701334, latitudeDelta:0.01, longitudeDelta:0.01},
    	animate: true,
    	regionFit: true,
    	width: 300,
    	height: 400
	});
 
	
	var button1 = Ti.UI.createButton({
		title: 'push',
		top: 200,
		height: 30,
		weight: 100
	});

	button1.addEventListener('click', function(e){
    win2.open();
});

	var button2 = Ti.UI.createButton({
		title: 'push',
		top: 50,
		height: 30,
		weight: 100
	});

	button2.addEventListener('click', function(e){
    win2.close();
	});

//viewにlabelとbuttonを追加
	view1.add(label);
	view1.add(button1);
	view2.add(map);
	view2.add(button2)
//windowにviewを追加	
	win1.add(view1);
	win2.add(view2);
//windowを開く	
	win1.open();
