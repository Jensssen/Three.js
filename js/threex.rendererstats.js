/**
 * @author mrdoob / http://mrdoob.com/
 * @author jetienne / http://jetienne.com/
 */
/** @namespace */
var THREEx	= THREEx || {}

/**
 * provide info on THREE.WebGLRenderer
 *
 * @param {Object} renderer the renderer to update
 * @param {Object} Camera the camera to update
*/
THREEx.RendererStats	= function (){

	var msMin	= 100;
	var msMax	= 0;

	var container	= document.createElement( 'div' );
	container.style.cssText = 'width:80px;opacity:0.9;cursor:pointer';

	var msDiv	= document.createElement( 'div' );
	msDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#200;';
	container.appendChild( msDiv );

	var msText	= document.createElement( 'div' );
	msText.style.cssText = 'color:#f00;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
	msText.innerHTML= 'My Console';
	msDiv.appendChild( msText );

	var msTexts	= [];
	var nLines	= 9;
	for(var i = 0; i < nLines; i++){
		msTexts[i]	= document.createElement( 'div' );
		msTexts[i].style.cssText = 'color:#f00;background-color:#311;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
		msDiv.appendChild( msTexts[i] );
		msTexts[i].innerHTML= '-';
	}


	var lastTime	= Date.now();
	return {
		domElement: container,

		update: function(webGLRenderer){
			// sanity check
			console.assert(webGLRenderer instanceof THREE.WebGLRenderer)

			// refresh only 30time per second
			if( Date.now() - lastTime < 1000/100 )	return;
			lastTime	= Date.now()

			var i	= 0;
			msTexts[i++].textContent = "== Face Pos ===";
			msTexts[i++].textContent = "X: "	+ absolute;//object_pos.x;
			msTexts[i++].textContent = "Y: "    + alpha;//object_pos.y;
			msTexts[i++].textContent = "Z: "	+ beta;

			msTexts[i++].textContent = "=== Cam Rot ====";
			msTexts[i++].textContent = "Rot_X: "	+ Math.round(camera.rotation.x*180/Math.PI);
			msTexts[i++].textContent = "Rot_Y: "	+ Math.round(camera.rotation.y*180/Math.PI);
			msTexts[i++].textContent = "Rot_Z: "	+ Math.round(camera.rotation.z*180/Math.PI);
			msTexts[i++].textContent = "Points: "	+ i;
		}
	}
};
