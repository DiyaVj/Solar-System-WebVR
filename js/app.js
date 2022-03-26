var API_URL = "https://api.le-systeme-solaire.net/rest/bodies/"
var information = {"recently":"","status":"error","mass":0,"volume":0,"gravity":0}

function get_api_data(name){
	var request = new XMLHttpRequest()

	if(information.recently!=name){
		request.open('GET', API_URL+name, true)
		request.onload = function () {

		  var data = JSON.parse(this.response)

		  if (request.status==200) {
		  	information["recently"] = name
		  	information["status"] = "successful"
		  	information["mass"] = data.mass.massValue+" "+data.mass.massExponent
		  	information["volume"] = data.vol.volValue+" "+data.vol.volExponent
		  	information["gravity"] = data.gravity
		  }
		}
		request.send()
	}
}

function set_api_data(name, mass, volume, gravity){
	if (information.status=="successful") {
		planet_text.setAttribute('value',name)
		mass_text.setAttribute('value',"Mass: "+information.mass+" kg")
		volume_text.setAttribute('value',"Volume: "+information.volume+" km3")
		gravity_text.setAttribute('value',"Gravity: "+information.gravity+" m/s2")
	}else{
		planet_text.setAttribute('value',name)
		mass_text.setAttribute('value',"Mass: "+mass+" kg")
		volume_text.setAttribute('value',"Volume: "+volume+" km3")
		gravity_text.setAttribute('value',"Gravity: "+gravity+" m/s2")
	}
}

AFRAME.registerComponent('do-something', {
  init: function () {
    var scene = this.el
    var card_data = scene.querySelector('#card_data')
    var planet_text = scene.querySelector('#planet_text')
    var mass_text = scene.querySelector('#mass_text')
    var volume_text = scene.querySelector('#volume_text')
    var gravity_text = scene.querySelector('#gravity_text')
    var mercury = scene.querySelector('#mercury')
    var venus = scene.querySelector('#venus')
    var earth = scene.querySelector('#earth')
    var mars = scene.querySelector('#mars')
    var jupiter = scene.querySelector('#jupiter')
    var saturn = scene.querySelector('#saturn')
    var uranus = scene.querySelector('#uranus')
    var neptune = scene.querySelector('#neptune')

    mercury.addEventListener('click', function (e) {
    	var name = "Mercury"
    	get_api_data(name)
    	setTimeout( () => {set_api_data("Mercury","3,302×10 23","6,083×10 10","3,7")}, 1000)
	    card_data.object3D.visible = true
	    setTimeout( () => {card_data.object3D.visible = false}, 8000)
  	});

  	venus.addEventListener('click', function (e) {
  		var name = "Venus"
  		setTimeout( () => {set_api_data("Venus","4,869×10 24","9,28x10 11","8,87")}, 1000)
	    card_data.object3D.visible = true
	    setTimeout( () => {card_data.object3D.visible = false}, 8000)
  	});

    earth.addEventListener('click', function (e) {
    	var name = "Earth"
    	get_api_data(name)
    	setTimeout( () => {set_api_data("Earth","5,9736×10 24","1,08321×10 12","9,780327")}, 1000)
	    card_data.object3D.visible = true
	    setTimeout( () => {card_data.object3D.visible = false}, 8000)
	});

	mars.addEventListener('click', function (e) {
	    var name = "Mars"
    	get_api_data(name)
    	setTimeout( () => {set_api_data("Mars","6,4185×10 23","1,6318×10 11","3,711")}, 1000)
	    card_data.object3D.visible = true
	    setTimeout( () => {card_data.object3D.visible = false}, 8000)
	});

	jupiter.addEventListener('click', function (e) {
		var name = "Jupiter"
		get_api_data(name)
    	setTimeout( () => {set_api_data("Jupiter","1,899×10 27","1,4313×10 15","24.79")}, 1000)
	    card_data.object3D.visible = true
	    setTimeout( () => {card_data.object3D.visible = false}, 8000)
	});

	saturn.addEventListener('click', function (e) {
		var name = "Saturn"
		get_api_data(name)
    	setTimeout( () => {set_api_data("Saturn","5,688x10 26","8,27x10 23","10,44")}, 1000)
	    card_data.object3D.visible = true
	    setTimeout( () => {card_data.object3D.visible = false}, 8000)
	});

	uranus.addEventListener('click', function (e) {
		var name = "Uranus"
		get_api_data(name)
    	setTimeout( () => {set_api_data("Uranus","8,686×10 25","6,833×10 13","8,69")}, 1000)
	    card_data.object3D.visible = true
	    setTimeout( () => {card_data.object3D.visible = false}, 8000)
	});

	neptune.addEventListener('click', function (e) {
		var name = "Neptune"
		get_api_data(name)
    	setTimeout( () => {set_api_data("Neptune","1,024×10 26","6,254×10 13","11,15")}, 1000)
	    card_data.object3D.visible = true
	    setTimeout( () => {card_data.object3D.visible = false}, 8000)
	});

  	}

});