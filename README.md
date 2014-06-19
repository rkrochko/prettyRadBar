prettyRadBar
============

A little plug in that adds a scalable bar of random sized bars.

Example:

<code>var colours = [ '999999', 'B2E1DB', '308FCF', 'EC1783', '2B9C68' ];</code>

<code>$('#radBar').prettyRadBar({ color: colours, animate: true });</code>

And don't forget some simple styling:

#radBar {
	position:relative;
	height:12px;
	overflow: hidden;
	width: 100%;
	div {
		height: 12px;
		float: left;
	}
}




