var path;


function transformPoint(point) {
    return new Point({
        x: (point.x) / 5 + 1000,
        y: (point.y) / 5 + 500
    })
}


function onMouseDown(event) {
	// If we produced a path before, deselect it:
	if (path) {
		path.selected = false;
	}

	// Create a new path and set its stroke color to black:
	path = new Path({
		segments: [transformPoint(event.point)],
		strokeColor: 'black',
		// Select the path, so we can see its segment points:
		// fullySelected: true
	});
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
}

// When the mouse is released, we simplify the path:
function onMouseUp(event) {
	var segmentCount = path.segments.length;

	// When the mouse is released, simplify it:
	path.simplify(2);

	// Select the path, so we can see its segments:
	path.fullySelected = false;

	var newSegmentCount = path.segments.length;
	var difference = segmentCount - newSegmentCount;
	var percentage = 100 - Math.round(newSegmentCount / segmentCount * 100);
}