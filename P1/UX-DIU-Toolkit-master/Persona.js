/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Eduardo Rodríguez",
				Photo: "persona1.jpg",
				Quote: "La familia siempre va primero",
				Age: 37,
				Occupation: "Teleoperador  en una empresa de telefonía movil",
				Family: "Con pareja desde hace 6 años, Padre y Madre, 1 hermana, 2 sobrinos",
				Location: "Madrid (Salamanca)",
				Character: "Afable, descuidado, no le gusta destacar",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Disfrutar del tiempo con su familia y pareja", "Conseguir una situación económica más estable"],
				Frustrations: ["El trabajo le produce mucho estrés y frustraciones", "Le han trasladado y ahora no puede estar con su familia", "Necesita una habitación urgentemente en Barcelona"],
				Bio: "Nacido en el barrio Salamanca, de familia humilde, no ha llegado a destacar en sus estudios, sus aficiones estan relaciondas con la música, tiene un grado en relaciones Publicas y un nivel b1 de inglés",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Le han adelantado las vacaciones y ahora se ve obligado a planearlas con muy poca antelación",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 2},
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Yuko Himura",
				Photo: "persona2.jpg",
				Quote: "Obtienes lo que siembras",
				Age: 25,
				Occupation: "Student",
				Family: "Padre y Madre, 1 hermano mayor",
				Location: "Ha nacido y crecido en Japón",
				Character: "Ideas muy claras, busca la perfección, puede ser impertinente e impaciente",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Obtener un trabajo en la embajada com traductora", "Realizar e master en traducción en Madrid", "Escalar en el mundo laboral", "Encontrar el exito"],
				Frustrations: ["Odia perder el tiempo", "Necesita encontrar un piso para compartir que se adecuado para ella", "Le cuesta encontrar gente ordenada y tan perfeccionista como ella para convivir bien", "Necesita saber el caracter y forma de ser de sus posibles compañero de piso porque es muy tiquismiquis con esto"],
				Bio: "Yuko es una estudiante de 25 años nacida en Osaka, Japon, sus padres son personas con una situación economica favorable y ella ha podido estudiar en los mejores centros. Yuko ha sdo una gran estudiante ya que sus padres le han inculcado este deseo de superación continua. En este momento quiere realizar un master en traducción para comlementar su formación universitaría y salir a mundo laboral. Yuko es muy selectva con la gente que entra en su vida y puede a llegar a ser impertinente por lo directa que es. Se defiende muy bien en español, Inglés y su lengua materna Japonés",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos:   "Quiere hacer el viaje más largo e importante de su vida" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
