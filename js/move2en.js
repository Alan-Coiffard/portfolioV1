var btn = document.querySelector('.toggle_btn');
var test = document.querySelector('.test');

btn.onclick = function(){
	test.classList.toggle('test_open');
}
		


$(function(){
	$(".typed").typed({
		strings: [" a student...", " a photographer...", " an apprentice developer...", " keen."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 900,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 1000,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});