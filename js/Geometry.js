/**
 * Created by nur20 on 30.04.2017.
 */

function import_axes(length) {

    // X-AXES
    var cylinder_x = new THREE.CylinderGeometry( 3, 3, (length*2) );
    var cone_x = new THREE.ConeGeometry( length/2, 20, 32 );
    var cylinder_mesh_x = new THREE.Mesh( cylinder_x, axes.material_axes_x );
    var cone_mesh_x = new THREE.Mesh(cone_x,axes.material_axes_x);
    cylinder_mesh_x.position.x = length;
    cylinder_mesh_x.rotateZ(1.5708);
    cone_mesh_x.position.x = (length*2+10);
    cone_mesh_x.rotateZ(-1.5708);
    // X-AXES
    var cylinder_y = new THREE.CylinderGeometry( 3, 3, (length*2) );
    var cone_y = new THREE.ConeGeometry( length/2, 20, 32 );
    var cylinder_mesh_y = new THREE.Mesh( cylinder_y, axes.material_axes_y );
    var cone_mesh_y = new THREE.Mesh(cone_y,axes.material_axes_y);
    cylinder_mesh_y.position.y = length;
    cone_mesh_y.position.y = (length*2+10);
    // Z-AXES
    var cylinder_z = new THREE.CylinderGeometry( 3, 3, (length*2) );
    var cone_z = new THREE.ConeGeometry( length/2, 20, 32 );
    var cylinder_mesh_z = new THREE.Mesh( cylinder_z, axes.material_axes_z );
    var cone_mesh_z = new THREE.Mesh(cone_z,axes.material_axes_z);
    cylinder_mesh_z.position.z = length;
    cylinder_mesh_z.rotateX(1.5708);

    cone_mesh_z.position.z = (length*2+10);
    cone_mesh_z.rotateX(1.5708);


    axes.x = new THREE.Object3D();
    axes.y = new THREE.Object3D();
    axes.z = new THREE.Object3D();

    axes.x.add(cylinder_mesh_x, cone_mesh_x);
    axes.y.add(cylinder_mesh_y, cone_mesh_y);

    axes.z.add(cylinder_mesh_z, cone_mesh_z);

    scene.add(axes.x);
    scene.add(axes.y);
    scene.add(axes.z);
}

function import_background() {
    var textures = {background_texture:0};
    var materials = {background:0};
    var meshes = {background:0};

    textures.background_texture = new THREE.ImageUtils.loadTexture("img/background.jpg");

    textures.background_texture.repeat.set( 1, 1 );
    materials.background = new THREE.MeshLambertMaterial({ map : textures.background_texture });
    meshes.background = new THREE.Mesh(new THREE.PlaneGeometry(2000, 1200), materials.background);
    meshes.background.material.side = THREE.DoubleSide;
    meshes.background.position.set(0,0,-300);
    scene.add(meshes.background);

}


function import_object() {
    var texture = new THREE.ImageUtils.loadTexture('textures/metal.jpg' );

    var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh.object1 = new THREE.Mesh( geometry, material );

    scene.add( mesh.object1 );
}
