/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*	[DIU] UX Toolkit v1.0 2019         */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Eduardo Rodríguez",
                Photo: "persona1.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Le han adelantado las vacaciones y ahora se ve obligado a planearlas con muy poca antelación",
                touch1: "buscador internet",
                feel1: "3",
                con1: "No sabe de que sitio fiarse",
                ima1: "cartoon-PCtyping.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Entra en internet y encuentra una pagina bastante recomendada llamada inspirock.com, se crea una cuenta y pone la fecha de inicio y fin de sus vacaciones.",
                touch2: "Página web",
                feel2: "3",
                con2: "Ve como al poner las fechas y el destino la página le ha organizado todo el viaje, aunque no hay para filtrar por un precio determinado ni nada por el estilo",
                ima2: "cartoon-PCSurprised.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide mirar mas a fondo y comparar precios",
                touch3: "Página web",
                feel3: "2",
                con3: "Al ir mirando mas a fondo se da cuenta que para elegir los transportes y alojamientos tiene que hacerlo a traves de otras plataformas",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Decide empezar a comparar en esas otras plataformas y filtrar según le interesa",
                touch4: "Pagina Web Secundaria",
                feel4: "2",
                con4: "Cuando ya ha visto todas las reservas que hay que hacer y ver que se pierde mucho tiempo teniendo que estar yendo de un lado a otro acaba bastante molesto", 
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Al final encuentra unas reservas que encajan más o menos en sus preferencias (regular) tras un buen rato buscando",
                touch5: "Pagina Web Secundaria",
                feel5: "3",
                con5: "Podría haber encontrado algo mejor pero por falta de tiempo se tendrá que conformar con esas reservas",
                ima5: "cartoon-deciding.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue irse de vacaciones pero la próxima vez buscara otra plataforma que no te este redireccionando a otras plataformas", 
                touch6: "",
                feel6: "3",
                con6: "Si la pagina te guardase las reservas que haces desde las otras paginas estaría bastante mejor",
                ima6: "cartoon-sad.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Yuko Himura",
                Photo: "persona2.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere hacer un viaje bastante largo y que siempre ha deseado hacer pero nunca ha tenido ocasión, utiliza el buscador en busca de suerte",
                touch1: "buscador Internet",
                feel1: "3",
                con1: "No sabe de que sitio fiarse",
                ima1: "cartoon-PCtyping.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide entrar en una de las primeras paginas recomendadas (inspirock.com), se crea una cuenta fácilmente y empieza a mirar como funciona la pagina",
                touch2: "Pagina web",
                feel2: "3",
                con2: "Encuentra fácilmente los menús y los usa correctamente",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Empieza a ver todas las recomendaciones y la organización de su viaje",
                touch3: "Pagina web",
                feel3: "4",
                con3: "Ve un par de viajes que han organizado otros usuarios que le parecen adecuados y los guarda en favoritos",
                ima3: "cartoon-PCSurprised.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "No encuentra ningun viaje que cumple sus expectativas y decide hacerlo ella a través de la página ",
                touch4: "Pagina web",
                feel4: "2",
                con4: "Pierde bastante tiempo configurando las horas de llegada y salidas en cada sitio y necesita mas información de los sitios que le sugiere la pagina para visitar",
                ima4: "cartoon-planning.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Tras haber mirado todas las cosas incluyendo las reservas en las plataformas secundarias encuentra unas reservas que podrían entrar en el perfil que busca ",
                touch5: "Pagina web",
                feel5: "3",
                con5: "A pesar de las dificultades encuentra las reservas que más concuerdan con el viaje que quiere hacer",
                ima5: "cartoon-looking.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue realizar todas las reservas aunque la próxima vez buscara una página que le ahorre tanta búsqueda",
                touch6: "",
                feel6: "3",
                con6: "Habría tardado menos si se pudiera hacer todo desde la misma página",
                ima6: "cartoon-KO.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



