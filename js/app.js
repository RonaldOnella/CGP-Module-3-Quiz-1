import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';


//Lights : Point Light, Ambient Light, Spot Light
//MaterialsL: Standard, Phong, Physical
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(

    75, //FOV
    window.innerWidth / innerHeight, //aspect Ratio
    0.1, //near
    2000 //far
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0,0,0);

const light = new THREE.SpotLight(0xffffff, 10, 50, 10*Math.PI/180);
light.position.set(-0,23.73,0);
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500;
light.shadow.focus = 1
light.castShadow = true;
scene.add(light);

camera.position.set(0,9,21);

scene.add(camera);

const light2 = new THREE.AmbientLight(0xffffff, 0.65);
light2.position.set(0,20,15);
scene.add(light2);

let box = new THREE.BoxGeometry(1, 1, 1)
let cylinder = new THREE.CylinderGeometry(1, 1, 1)
let sphere = new THREE.SphereGeometry(1, 32, 16);

//room

let room = new THREE.MeshStandardMaterial ({color: 0x4f4a43});
let floor = new THREE.Mesh(box,room);
let wall1 = new THREE.Mesh(box,room);
let wall2 = new THREE.Mesh(box,room);
let wall3 = new THREE.Mesh(box,room);

floor.position.set(0,0.395,0);
floor.scale.set(15,1,15);
floor.castShadow = true;
floor.receiveShadow = true;

wall1.position.set(7,7.5,0);
wall1.rotation.set(90*Math.PI/180,0,90*Math.PI/180)
wall1.scale.set(15,1,15)
wall2.position.set(0,7.5,-7);
wall2.rotation.set(90*Math.PI/180,0,0)
wall2.scale.set(15,1,15)
wall3.position.set(-7,7.5,0);
wall3.rotation.set(90*Math.PI/180,0,90*Math.PI/180)
wall3.scale.set(15,1,15);
wall1.castShadow = true;
wall1.receiveShadow = true;
wall2.castShadow = true;
wall2.receiveShadow = true;
wall3.castShadow = true;
wall3.receiveShadow = true;

scene.add(floor,wall1,wall2,wall3)

let beam = new THREE.MeshStandardMaterial({color:0x7b9cd1});
let beam1 = new THREE.Mesh(box,beam);
let beam2 = new THREE.Mesh(box,beam);
let beam3 = new THREE.Mesh(box,beam);
let beam4 = new THREE.Mesh(box,beam);

beam1.position.set(-3.675,19.229,3.805);
beam1.rotation.set(0,45*Math.PI/180,45*Math.PI/180);
beam1.scale.set(13.070,0.750,0.750)

beam2.position.set(3.675,19.229,3.805);
beam2.rotation.set(0,-45*Math.PI/180,-45*Math.PI/180);
beam2.scale.set(13.070,0.750,0.750)

beam3.position.set(-3.675,19.229,-3.805);
beam3.rotation.set(0,-45*Math.PI/180,45*Math.PI/180);
beam3.scale.set(13.070,0.750,0.750)

beam4.position.set(3.675,19.229,-3.805);
beam4.rotation.set(0,45*Math.PI/180,-45*Math.PI/180);
beam4.scale.set(13.070,0.750,0.750)

let disc = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transmission: 0.2, opacity: 0.75, transparent: true })
let discLight = new THREE.Mesh(cylinder,disc);
discLight.position.set(0,23.733,0);

beam1.castShadow = true;
beam1.receiveShadow = true;
beam2.castShadow = true;
beam2.receiveShadow = true;
beam3.castShadow = true;
beam3.receiveShadow = true;
beam4.castShadow = true;
beam4.receiveShadow = true;

scene.add(beam1,beam2,beam3,beam4,discLight);




//pedestal

let baseMaterial = new THREE.MeshStandardMaterial({color: 0xb8ac86});
let addMaterial = new THREE.MeshStandardMaterial({color: 0xd6bc69});
let eggMaterial = new THREE.MeshPhongMaterial({color: 0xffdd00});


let pedestalBase = new THREE.Mesh(box,baseMaterial);
let pedestalTop = new THREE.Mesh(cylinder,addMaterial);
let egg = new THREE.Mesh(sphere, eggMaterial);
pedestalBase.position.set (0,3.391,0)
pedestalBase.scale.set(1.5,5,1.5);
pedestalTop.position.set(0,5.778,0);
pedestalTop.scale.set(1.593,0.5,1.7869);
egg.position.set(0,6.912,0)
egg.scale.set(1,1.370,1);
pedestalBase.castShadow = true;
pedestalBase.receiveShadow = true;
pedestalTop.castShadow = true;
pedestalTop.receiveShadow = true;
egg.castShadow = true;
egg.receiveShadow = true;

scene.add(pedestalBase,pedestalTop,egg);


//Crystals
let crystalR = new THREE.MeshPhysicalMaterial(({ color: 0xb32c04, transmission: 0.3, opacity: 0.5, transparent: true }))
let crystalG = new THREE.MeshPhysicalMaterial(({ color: 0x4fff0f, transmission: 0.3, opacity: 0.5, transparent: true }))
let crystalB = new THREE.MeshPhysicalMaterial(({ color: 0x6052ff, transmission: 0.3, opacity: 0.5, transparent: true }))
let crystalY = new THREE.MeshPhysicalMaterial(({ color: 0xdbd81a, transmission: 0.3, opacity: 0.5, transparent: true }))
let redCrystal = new THREE.Mesh(box,crystalR);
let greenCrystal = new THREE.Mesh(box,crystalG);
let blueCrystal = new THREE.Mesh(box,crystalB);
let yellowCrystal = new THREE.Mesh(box,crystalY);

redCrystal.position.set(-7.060,18.565,7.395);
redCrystal.rotation.set(45*Math.PI/180,0,45*Math.PI/180);
redCrystal.scale.set(0.5,0.5,0.5)

let rLight = new THREE.PointLight( 0xb32c04, 5, 20 );
rLight.position.set(-7.060,18.565,7.395);
scene.add( rLight );

rLight.castShadow = true; 

rLight.shadow.mapSize.width = 1024
rLight.shadow.mapSize.height = 1024
rLight.shadow.camera.near = 0.5; 
rLight.shadow.camera.far = 500; 
rLight.shadow.focus = 1; 


greenCrystal.position.set(-9.804,10.209,-3.217);
greenCrystal.rotation.set(45*Math.PI/180,0,45*Math.PI/180);
greenCrystal.scale.set(0.5,0.5,0.5)

let gLight = new THREE.PointLight( 0x4fff0f, 5, 20 );
gLight.position.set(-9.804,10.209,-3.217);
scene.add( gLight );

gLight.castShadow = true; 

gLight.shadow.mapSize.width = 1024
gLight.shadow.mapSize.height = 1024
gLight.shadow.camera.near = 0.5; 
gLight.shadow.camera.far = 500; 
gLight.shadow.focus = 1; 


blueCrystal.position.set(3.567,13.067,13.729);
blueCrystal.rotation.set(45*Math.PI/180,0,45*Math.PI/180);
blueCrystal.scale.set(0.5,0.5,0.5)

let bLight = new THREE.PointLight( 0x6052ff, 5, 20 );
bLight.position.set(3.567,13.067,13.729);
scene.add( bLight );

bLight.castShadow = true; 

bLight.shadow.mapSize.width = 1024
bLight.shadow.mapSize.height = 1024
bLight.shadow.camera.near = 0.5; 
bLight.shadow.camera.far = 500; 
bLight.shadow.focus = 1; 


yellowCrystal.position.set(9.726,8.974,4.385);
yellowCrystal.rotation.set(45*Math.PI/180,0,45*Math.PI/180);
yellowCrystal.scale.set(0.5,0.5,0.5)

let yLight = new THREE.PointLight( 0xdbd81a, 5, 20 );
yLight.position.set(9.726,8.974,4.385);
scene.add( yLight );

yLight.castShadow = true; 

yLight.shadow.mapSize.width = 1024
yLight.shadow.mapSize.height = 1024
yLight.shadow.camera.near = 0.5; 
yLight.shadow.camera.far = 500; 
yLight.shadow.focus = 1; 

scene.add(redCrystal,greenCrystal,blueCrystal,yellowCrystal);


function spin(){
    requestAnimationFrame(spin);
    redCrystal.rotation.x+= 0.05;
    redCrystal.rotation.y+= 0.05;

    yellowCrystal.rotation.x+= 0.05;
    yellowCrystal.rotation.y-= 0.05;

    blueCrystal.rotation.x-= 0.05;
    blueCrystal.rotation.y+= 0.05;

    greenCrystal.rotation.x-= 0.05;
    greenCrystal.rotation.y-= 0.05;

}

spin()
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}


animate();