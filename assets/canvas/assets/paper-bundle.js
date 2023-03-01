var path;

function transformPoint(point) {
    return new Point({
        x: (point.x) / 2 + 1000,
        y: (point.y) / 2 + 500
    })
}

function onFrame() {
	if (!path) {
		path = loadPath()
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

// While the user drags the mouse, points are added to the path
// at the position of the mouse:
function onMouseMove(event) {
	if (!path) {
        path = new Path({
            segments: [transformPoint(event.point)],
            strokeColor: 'black',
            // Select the path, so we can see its segment points:
            // fullySelected: true
        });
    }
	path.add(transformPoint(event.point));
	savePath(path)
}