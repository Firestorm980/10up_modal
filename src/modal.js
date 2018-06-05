import A11yDialog from 'a11y-dialog';

// Create a new dialog based on the selector passed.
const Modal = ( selector, options ) => {
	// Get all modal dialog elements
	const els = document.querySelectorAll( selector );
	const totalSelectors = els.length;
	let i = 0;
	let modalDialog = null;

	for( i = 0; i < totalSelectors; i ++ ) {
		modalDialog = new A11yDialog( els[i] );

		if ( options.onShow ) {
			modalDialog.on( 'show', options.onShow );
		}
	}
};

export default Modal;
