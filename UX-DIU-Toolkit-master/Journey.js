/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
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
                goal1: "Necesita una habitación o apartamento asequible en el centro de Bárcelona con urgencia",
                touch1: "buscador internet",
                feel1: "3",
                con1: "No sabe de que sitio fiarse",
                ima1: "cartoon-PCtyping.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Entra en internet y encuentra una pagina bastante recomendada llamada piscompartido.com, se crea una cuenta y busca el modo de hacer una búsqueda por localización y precio para buscar algo barato/asequible",
                touch2: "Página web",
                feel2: "2",
                con2: "hay demasiada información y pierde mucho tiempo, y los precios no son muy ' baratos '",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide mirar unos pisos y comparar precios",
                touch3: "Móvil (llamada)",
                feel3: "4",
                con3: "Parece que hay unos pocos pisos que le han gustado así que decide guardarlos en favoritos",
                ima3: "cartoon-PCSurprised.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Decide hacer unas llamadas para contactar con los dueños de los pisos y ver que le dicen",
                touch4: "Móvil (llamada)",
                feel4: "2",
                con4: "Cuando ya ha llamado a un par de personas y ver que se pierde mucho tiempo hablando con la gente acaba bastante frustrado porque está interesado en más pisos pero por no tener que contactar con la persona decide abandonarlos", 
                ima4: "cartoon-phoning.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Al final encuentra una opción que encaja más o menos en sus preferencias (regular) tras un buen rato hablando con bastante gente",
                touch5: "móvil (whatsapp)",
                feel5: "3",
                con5: "Podría haber encontrado algo mejor pero por descartar opciones se tendrá que conformar con ese piso",
                ima5: "cartoon-deciding.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue un piso pero la próxima vez buscará un hotel/hostal u otra cosa para ahorrarse todo ese tiempo",
                touch6: "",
                feel6: "3",
                con6: "Si la pagina te dijese si esa oferta está desfasada ó las personas estuviesen mas atentas a la hora de contactar con ellas y que no haya mucho tiempo de espera entre que lo ves llamas/envías un mensaje, y te responden",
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
                goal1: "Quiere encontrar estancia para el periodo de tiempo que dure el máster, utiliza el buscador en busca de suerte",
                touch1: "buscador Internet",
                feel1: "3",
                con1: "No sabe de que sitio fiarse",
                ima1: "cartoon-PCtyping.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide entrar en una de las primeras paginas recomendadas (piscompartido.com), busca el modo de hacer una búsqueda por localización y se crea una cuenta fácilmente",
                touch2: "Pag web",
                feel2: "3",
                con2: "Encuentra fácilmente los menús y los usa correctamente",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Empieza a mirar pisos y a comparar precios",
                touch3: "Móvil (llamada)",
                feel3: "4",
                con3: "Ve un par de pisos que le parecen adecuados y los guarda en favoritos",
                ima3: "cartoon-PCSurprised.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra pisos interesantes y se pone en contacto",
                touch4: "Pag web",
                feel4: "2",
                con4: "Pierde muchísimo tiempo hablando con gente ya que nadie cumple sus expectativas, necesita mas información de los inquilinos",
                ima4: "cartoon-phone-sitting.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Tras haberse puesto en contacto con mucha gente encuentra a alguien que podría entrar en el perfil que busca ",
                touch5: "Pag web",
                feel5: "3",
                con5: "A pesar de las dificultades encuentra a alguien tras hablar con muchísima gente",
                ima5: "cartoon-PCangry.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue un sitio donde alojarse, la próxima vez buscara una página que le ahorre tanta búsqueda",
                touch6: "",
                feel6: "2",
                con6: "Habría tardado menos si hubiera mejores descripciones",
                ima6: "cartoon-KO.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



