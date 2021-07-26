// window.onload = function() {
    // new Splide( '.splide', {
    //     type     : 'loop',
    //     autoWidth: true,
    //     focus    : 'center',
    // } ).mount();


    // new Splide( '#splide', {
    //     type   : 'loop',
    //     perPage: 3,
    //     focus  : 'center',
    // } ).mount();


    // var elms = document.getElementsByClassName( 'splide' );
    // for ( var i = 0, len = elms.length; i < len; i++ ) {
	//     new Splide( elms[ i ] ).mount();
    // }

    // new Splide( '#splide', {
    //     type   : 'loop',
    //     padding: {
    //         right: '5rem',
    //         left : '5rem',
    //     },
    // } ).mount();
//   };
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#splide', {
		rewind     : true,
		heightRatio: 0.5,
		pagination : false,
	} );
} );