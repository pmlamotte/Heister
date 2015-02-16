class Debug {
	showPosition(){
		var smilies = root.getComponentsByName('smiley');
		var i;
		for (i = 0; i < smilies.length; i++){
			var smiley = smilies[i];
			smiley.addComponent(new DebugComponent());
		}
	}

	attachCamera(entity) {
		var cameras = root.getComponentsByType('CameraComponent');
		_.each(cameras, (camera) => camera.parent.removeComponent(camera));

		var cameraComponent = new CameraComponent();
		entity.addComponent(cameraComponent);
	}
}
window.debug = new Debug();