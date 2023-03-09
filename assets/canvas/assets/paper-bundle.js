var path;

function transformPoint(point) {
    return new Point({
        x: (point.x) / 2 + 1000,
        y: (point.y) / 2 + 500
    })
}

function onFrame() {
	if (!path) {
		// path = loadPath()
	}
}

function savePath(path) {
	window.sessionStorage.setItem("__path", path.exportJSON())
}

function loadPath() {
	var json = window.sessionStorage.getItem("__path")
	if (!json) {
		return null;
	}
	var path = new Path()
	path.importJSON(json)
	return path
}

function pickColor() {
	var colors = [
		'#717186',
		'#8F8883',
		'#C2B7C1',
		'#E3D7B7',
		'#8B8F83'
	]
	return colors[ Math.floor(Math.random() * colors.length)]
}

// While the user drags the mouse, points are added to the path
// at the position of the mouse:
function onMouseMove(event) {
	if (!path) {
        path = new Path({
            segments: [transformPoint(event.point)],
            strokeColor: pickColor(),
			strokeWidth: 100
            // Select the path, so we can see its segment points:
            // fullySelected: true
        });
    }

	if (path.segments.length > 400) {
		path.removeSegment(0)
	}
	path.add(transformPoint(event.point));
	// savePath(path)
}