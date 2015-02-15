class Debug {
	showPosition(){
		var smilies = root.getComponentsByName('smiley');
		var i;
		for (i = 0; i < smilies.length; i++){
			var smiley = smilies[i];
			smiley.addComponent(new DebugComponent());
		}
	}
}
window.debug = new Debug();