
$(function() {
	// Init Controller
	var scrollMagicController = new ScrollMagic.Controller();

	var tween = TweenMax.to('#animation', 0.5, {
		backgroundColor: 'rgb(255, 39, 46)',
		scale: 7,
		rotation: 360
	});

	var scene = new ScrollMagic.Scene({
		triggerElement: '#scene',
		offset: 150, /* trigger is 150px below #scene's top */
		duration: 300 /* how many pixels to scroll / animate */
	}).setTween(tween);
		// .addTo(scrollMagicController);

	scrollMagicController.addScene(scene);
	scene.addIndicators();
});
