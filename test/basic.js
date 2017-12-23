const RabbitChain = require( "../" );
const assert = require( "assert" );

describe( "Basic", function( ){
	it( "Is a function", function( ){
		assert.ok( typeof( RabbitChain ) == "function" );
	} );
} );
