// Crear el mapa centrado en La Paz, Bolivia
const map = L.map('map').setView([-16.5401869, -68.2080252], 13);

// Añadir capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Crear diferentes iconos personalizados
const icons = {
  via: L.icon({
    iconUrl: 'images/via.png', // Icono para plazas
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  }),
  emergencia: L.icon({
    iconUrl: 'images/ambulancia.png', // Icono para paisajes
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  }),
  defensoria: L.icon({
    iconUrl: 'images/letra.png', // Icono para teleféricos
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  }),
  baño: L.icon({
    iconUrl: 'images/muni.png', // Icono para teleféricos
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  }),
  control: L.icon({
    iconUrl: 'images/controle.png', // Icono para teleféricos
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  }),
  paso: L.icon({
    iconUrl: 'images/paso.png', // Icono para teleféricos
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  }),
  palco: L.icon({
    iconUrl: 'images/palco.png', // Icono para teleféricos
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  }),
  salud: L.icon({
    iconUrl: 'images/cruzroja.png', // Icono para teleféricos
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  }),
  movil: L.icon({
    iconUrl: 'images/movil.png', // Icono para teleféricos
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  }),
  jesus: L.icon({
    iconUrl: 'images/jesus.png', // Icono para teleféricos
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  })
};

// Definir ubicaciones con diferentes iconos
const locations = [
  {
    name: "Cierre de Via",
    coordinates: [-16.495820962127183, -68.14879420405899],
    info: "Inicio de los cierres de vias La Paz, Bolivia",
    icon: icons.via // Asocia el icono "plaza"
  },
  {
    name: "Puntos de Emergencia",
    coordinates: [-16.49566414223617, -68.14770612921991],
    info: "Punto de emergencia con atencion medica en la Av.Baptista.",
    icon: icons.emergencia // Asocia el icono "valle"
  },
  {
    name: "Defensoria",
    coordinates: [-16.49585607817467, -68.14603022633175],
    info: "Punto donde se encuentra la defensoria DASI en la Plaza Garita de Lima.",
    icon: icons.defensoria // Asocia el icono "teleférico"
  },
  {
    name: "Baños Municipales",
    coordinates: [-16.49578020976459, -68.14570970235557],
    info: "Punto donde se encuentra el baño municipal en la Plaza Garita de Lima.",
    icon: icons.baño // Asocia el icono "teleférico"
  },
  {
    name: "Punto de Control",
    coordinates: [-16.4953639468879, -68.1443866997792],
    info: "Realizado por la Alcaldia donde se  controla la distancia de los bloques de las fraternidades.",
    icon: icons.control // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.495296352455526, -68.1442274447525],
    info: "Jaula de paso puesto por la alcaldia por la Av.Buenos Aires .",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.49534007334667, -68.14418855272231],
    info: "Jaula de paso puesto por la alcaldia por la Av.Tumusla .",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.49646802937603, -68.14446237978963],
    info: "Jaula de paso puesto por la alcaldia por la C.Max Paredes.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.49651946540603, -68.14434100983335],
    info: "Jaula de paso puesto por la alcaldia por la C.Max Paredes.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Palco",
    coordinates: [-16.497029027494012, -68.14445186895577],
    info: "Primer punto de palco instalado por la alcadia en la Av.Buenos Aires.",
    icon: icons.palco // Asocia el icono "teleférico"
  },
  {
    name: "Cierre de via",
    coordinates: [-16.49786429621304, -68.14443841842274],
    info: "Cierre de via en la Av.Buenos Aires.",
    icon: icons.via // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.498529961380477, -68.14380178798427],
    info: "Jaula de paso puesto por la alcaldia por la C.Pedro de la Gasca.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.49860454282573, -68.14392382849317],
    info: "Jaula de paso puesto por la alcaldia por la C.Pedro de la Gasca.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.500060045551624, -68.1431610309189],
    info: "Jaula de paso puesto por la alcaldia por la C.Gallardo.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Punto de Control",
    coordinates: [-16.500109545441404, -68.14305772692371],
    info: "Realizado por la Alcaldia donde se  controla la distancia de los bloques de las fraternidades.",
    icon: icons.control // Asocia el icono "teleférico"
  },
  {
    name: "Salud",
    coordinates: [-16.49995781192714, -68.14293434530926],
    info: "Carpas instaladas por la alcaldia para brindar atencion medica.",
    icon: icons.salud // Asocia el icono "teleférico"
  },
  {
    name: "Baños Moviles",
    coordinates: [-16.499901876238063, -68.14281230480073],
    info: "Punto donde se encuentra el baño movil instalado por la alcaldia.",
    icon: icons.movil // Asocia el icono "teleférico"
  },
  {
    name: "Palco",
    coordinates: [-16.499699711219378, -68.14232071172148],
    info: "Punto de palco instalado por la alcadia en la C.Gallardo.",
    icon: icons.palco // Asocia el icono "teleférico"
  },
  {
    name: "Palco",
    coordinates: [-16.49963477429677, -68.14235625099043],
    info: "Punto de palco instalado por la alcadia en la C.Gallardo.",
    icon: icons.palco // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.499234373704912, -68.14159180845226],
    info: "Jaula de paso puesto por la alcaldia por la C.Sebastian Segurola.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.49925944841269, -68.1415066483172],
    info: "Jaula de paso puesto por la alcaldia por la C.Gallardo.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Defensoria",
    coordinates: [-16.499822428430512, -68.14270144506446],
    info: "Punto donde se encuentra la defensoria DASI en la C.Gallardo.",
    icon: icons.defensoria // Asocia el icono "teleférico"
  },
  {
    name: "Señor Jesus del Gran Poder",
    coordinates: [-16.499910525279233, -68.14114977837987],
    info: "En este lugar se puede encuentra el Señor Jesus del Gran Poder donde se realiza una promesa a fin de pedir favores al santo con el compromiso de bailar y participar de la fiesta.",
    icon: icons.jesus // Asocia el icono "teleférico"
  },
  {
    name: "Cierre de Via",
    coordinates: [-16.50008419254006, -68.14096960060282],
    info: "Inicio de los cierres de vias La Paz, Bolivia",
    icon: icons.via // Asocia el icono "plaza"
  },
  {
    name: "Punto de Control",
    coordinates: [-16.499173591378412, -68.14030598446833],
    info: "Realizado por la Alcaldia donde se  controla la distancia de los bloques de las fraternidades.",
    icon: icons.control // Asocia el icono "teleférico"
  },
  {
    name: "Cierre de Via",
    coordinates: [-16.498210055768165, -68.13926264918663],
    info: "Cierre de via por la Av.Illampu.",
    icon: icons.via // Asocia el icono "plaza"
  },
  {
    name: "Puntos de Emergencia",
    coordinates: [-16.49866621411495, -68.13968990217823],
    info: "Punto de emergencia con atencion medica en la Av.Baptista.",
    icon: icons.emergencia // Asocia el icono "valle"
  },
  {
    name: "Defensoria",
    coordinates: [-16.498065124723873, -68.13926473758919],
    info: "Punto donde se encuentra la defensoria DASI en la C.Sagarnaga.",
    icon: icons.defensoria // Asocia el icono "teleférico"
  },
  {
    name: "Punto de Control",
    coordinates: [-16.497701688899554, -68.13939590996733],
    info: "Realizado por la Alcaldia donde se  controla la distancia de los bloques de las fraternidades.",
    icon: icons.control // Asocia el icono "teleférico"
  },
  {
    name: "Palco",
    coordinates: [-16.496294211343898, -68.13980258210817],
    info: "Punto de palco instalado por la alcadia en la Av.Illampu.",
    icon: icons.palco // Asocia el icono "teleférico"
  },
  {
    name: "Baños Moviles",
    coordinates: [-16.495898772962384, -68.13993144761145],
    info: "Punto donde se encuentra el baño movil instalado por la alcaldia.",
    icon: icons.movil // Asocia el icono "teleférico"
  },
  {
    name: "Punto de Control",
    coordinates: [-16.495157885128155, -68.14020681929152],
    info: "Realizado por la Alcaldia donde se  controla la distancia de los bloques de las fraternidades.",
    icon: icons.control // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.494051350231047, -68.14073414366223],
    info: "Jaula de paso puesto por la alcaldia por la Plaza Vicente Juariste Eguino.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.493712846897353, -68.14078581227722],
    info: "Jaula de paso puesto por la alcaldia por la Plaza Vicente Juariste Eguino.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Defensoria",
    coordinates: [-16.493796343491358, -68.14056017313843],
    info: "Punto donde se encuentra la defensoria DASI en la C.Murillo.",
    icon: icons.defensoria // Asocia el icono "teleférico"
  },
  {
    name: "Punto de Control",
    coordinates: [-16.492142232236738, -68.14043923243256],
    info: "Realizado por la Alcaldia donde se  controla la distancia de los bloques de las fraternidades.",
    icon: icons.control // Asocia el icono "teleférico"
  },
  {
    name: "Cierre de Via",
    coordinates: [-16.490840734002525, -68.14021531746225],
    info: "Cierre de vias Av.Ismael Montes",
    icon: icons.via // Asocia el icono "plaza"
  },
  {
    name: "Defensoria",
    coordinates: [-16.490880146167616, -68.1400749361661],
    info: "Punto donde se encuentra la defensoria DASI en la Av.Ismael Montes.",
    icon: icons.defensoria // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.49110447295233, -68.13917975284382],
    info: "Jaula de paso puesto por la alcaldia por la Av.Uruguay.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Punto de Control",
    coordinates: [-16.49115269556874, -68.13911605037944],
    info: "Realizado por la Alcaldia donde se  controla la distancia de los bloques de las fraternidades.",
    icon: icons.control // Asocia el icono "teleférico"
  },
  {
    name: "Baños Municipales",
    coordinates: [-16.491730576982608, -68.13846621251795],
    info: "Punto donde se encuentra el baño municipal en la Plaza Garita de Lima.",
    icon: icons.baño // Asocia el icono "teleférico"
  },
  {
    name: "Cierre de Via",
    coordinates: [-16.49221654818593, -68.13761067427883],
    info: "Cierre de vias C.Pisagua",
    icon: icons.via // Asocia el icono "plaza"
  },
  {
    name: "Baños Municipales",
    coordinates: [-16.49477849485447, -68.13696615583908],
    info: "Punto donde se encuentra el baño municipal en la Av.Perez Velasco.",
    icon: icons.baño // Asocia el icono "teleférico"
  },
  {
    name: "Punto de Control",
    coordinates: [-16.495212791676334, -68.13685770597105],
    info: "Realizado por la Alcaldia donde se  controla la distancia de los bloques de las fraternidades.",
    icon: icons.control // Asocia el icono "teleférico"
  },
  {
    name: "Palco",
    coordinates: [-16.49517609057417, -68.13663442683097],
    info: "Punto de palco instalado por la alcadia en la Av.Illampu.",
    icon: icons.palco // Asocia el icono "teleférico"
  },
  {
    name: "Cierre de Via",
    coordinates: [-16.497958509036234, -68.13554038160481],
    info: "Cierre de vias C.Socabaya",
    icon: icons.via // Asocia el icono "plaza"
  },
  {
    name: "Baños Moviles",
    coordinates: [-16.497861273549947, -68.13597997924569],
    info: "Punto donde se encuentra el baño movil instalado por la alcaldia.",
    icon: icons.movil // Asocia el icono "teleférico"
  },
  {
    name: "Defensoria",
    coordinates: [-16.498155742516047, -68.13574662706458],
    info: "Punto donde se encuentra la defensoria DASI en la Av.Mariscal Sta. Cruz.",
    icon: icons.defensoria // Asocia el icono "teleférico"
  },
  {
    name: "Salud",
    coordinates: [-16.49831273411638, -68.135522483782],
    info: "Carpas instaladas por la alcaldia para brindar atencion medica.",
    icon: icons.salud // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.498398010503152, -68.13485089471557],
    info: "Jaula de paso puesto por la alcaldia por la C.Ayacucho.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.49860118071509, -68.13497159411959],
    info: "Jaula de paso puesto por la alcaldia por la C.Oruro.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Punto de Control",
    coordinates: [-16.498416012935607, -68.13512716224034],
    info: "Realizado por la Alcaldia donde se  controla la distancia de los bloques de las fraternidades.",
    icon: icons.control // Asocia el icono "teleférico"
  },
  {
    name: "Cierre de Via",
    coordinates: [-16.498796868311494, -68.13406933359461],
    info: "Cierre de vias C.Colon",
    icon: icons.via // Asocia el icono "plaza"
  },
  {
    name: "Cierre de Via",
    coordinates: [-16.499413540035704, -68.13346294794754],
    info: "Cierre de vias C.Ramon de Loayza",
    icon: icons.via // Asocia el icono "plaza"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.49984654088553, -68.1319440759482],
    info: "Jaula de paso puesto por la alcaldia por la C.Bueno.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Jaula de Paso",
    coordinates: [-16.50009091240459, -68.1320207615853],
    info: "Jaula de paso puesto por la alcaldia por la C.Bueno.",
    icon: icons.paso // Asocia el icono "teleférico"
  },
  {
    name: "Defensoria",
    coordinates: [-16.49981273698603, -68.13221567856966],
    info: "Punto donde se encuentra la defensoria DASI en la Av.Camacho.",
    icon: icons.defensoria // Asocia el icono "teleférico"
  },
  {
    name: "Baños Moviles",
    coordinates: [-16.49959413748552, -68.131802618387],
    info: "Punto donde se encuentra el baño movil instalado por la alcaldia.",
    icon: icons.movil // Asocia el icono "teleférico"
  },
  {
    name: "Palco",
    coordinates: [-16.500193303179508, -68.1313903089182],
    info: "Punto de palco instalado por la alcadia en la Av.Camacho.",
    icon: icons.palco // Asocia el icono "teleférico"
  },
  {
    name: "Palco",
    coordinates: [-16.50030359459057, -68.131368882049],
    info: "Punto de palco instalado por la alcadia en la Av.Camacho.",
    icon: icons.palco // Asocia el icono "teleférico"
  },
  {
    name: "Puntos de Emergencia",
    coordinates: [-16.499321262570785, -68.13172189513338],
    info: "Punto de emergencia con atencion medica en la C.Bueno",
    icon: icons.emergencia // Asocia el icono "valle"
  },
  {
    name: "Salud",
    coordinates: [-16.500044209003015, -68.12836925812708],
    info: "Carpas instaladas por la alcaldia para brindar atencion medica.",
    icon: icons.salud // Asocia el icono "teleférico"
  },
  {
    name: "Baños Municipales",
    coordinates: [-16.500240393822413, -68.12888582331475],
    info: "Punto donde se encuentra el baño municipal en la Av.Perez Velasco.",
    icon: icons.baño // Asocia el icono "teleférico"
  },
  {
    name: "Baños Moviles",
    coordinates: [-16.50044748186022, -68.1287616939088],
    info: "Punto donde se encuentra el baño movil instalado por la alcaldia.",
    icon: icons.movil // Asocia el icono "teleférico"
  },
  {
    name: "Punto de Control",
    coordinates: [-16.50039595887145, -68.12779177530865],
    info: "Realizado por la Alcaldia donde se  controla la distancia de los bloques de las fraternidades.",
    icon: icons.control // Asocia el icono "teleférico"
  }
];

// Añadir marcadores con iconos personalizados
locations.forEach(location => {
  const marker = L.marker(location.coordinates, { icon: location.icon })
    .addTo(map)
    .bindPopup(`<b>${location.name}</b><br>${location.info}`);
});

// Coordenadas para la ruta
const routeCoordinates = [
  [-16.495612895916217, -68.14765265051976], 
  [-16.495670939653692, -68.14640752975217], 
  [-16.495607558802224, -68.14610894762991],  
  [-16.495542042624876, -68.14594971085894],
  [-16.495553701170394, -68.14536786731615],
  [-16.49545918698103, -68.14486025925622],
  [-16.495326738448103, -68.144256762228],
  [-16.496378020576863, -68.14440634126345],
  [-16.497150496311303, -68.1445101474748],
  [-16.497732693670102, -68.14449781979903],
  [-16.49781434782757, -68.1443858375699],
  [-16.497827041866582, -68.14429035934562],
  [-16.497874619860575, -68.14423000964129],
  [-16.49818773420938, -68.14407913538619],
  [-16.50001780381083, -68.14310671481675],
  [-16.49929185333421, -68.14157739216435],
  [-16.49992287596168, -68.14122272643681],
  [-16.499911964924205, -68.14118100106383],
  [-16.499917420442582, -68.14109375708524],
  [-16.499653736878905, -68.14094961485979],
  [-16.499573722485053, -68.14090030304581],
  [-16.49916637595396, -68.14033511381581],
  [-16.498817221110695, -68.13979458047964],
  [-16.498684469356746, -68.1396428518318],
  [-16.498204380087316, -68.13931663521821],
  [-16.498177001457606, -68.13928158821193],
  [-16.496518501850705, -68.1397291877498],
  [-16.49405868363833, -68.14067714756945],
  [-16.494021294252427, -68.140676067684],
  [-16.493954252205597, -68.14061291480395],
  [-16.493848282471312, -68.14060050977395],
  [-16.493763939169796, -68.14064674670358],
  [-16.49372393015596, -68.14070764412362],
  [-16.493612553664825, -68.14068057860426],
  [-16.493302213010953, -68.14058021063573],
  [-16.493175760255326, -68.14059673519077],
  [-16.49296808360817, -68.14065104992348],
  [-16.492483932540033, -68.14078180761459],
  [-16.492134802930515, -68.14045591921584],
  [-16.492086580555423, -68.1404223916064],
  [-16.491684535151517, -68.14014025586825],
  [-16.491601391797634, -68.14012648022413],
  [-16.490876767035452, -68.14016134894058],
  [-16.490750220991433, -68.1401113384043],
  [-16.491086517884796, -68.13932305515146],
  [-16.491126527443893, -68.1392012603114],
  [-16.49118600109757, -68.13908623185132],
  [-16.491228932993973, -68.13898818058418],
  [-16.49180053059297, -68.13819357616097],
  [-16.492236782816647, -68.13770437711554],
  [-16.49242902911433, -68.13752735131862],
  [-16.492541547763423, -68.13742073351098],
  [-16.49267843254107, -68.13732517782184],
  [-16.492824385099006, -68.13723197105628],
  [-16.492970980512496, -68.13716625693546],
  [-16.493283715908213, -68.13714350832363],
  [-16.493394305176235, -68.1371166862332],
  [-16.493533184634753, -68.13707578254589],
  [-16.493661776639932, -68.13701878560595],
  [-16.493926675891274, -68.13689003957299],
  [-16.494080343012016, -68.13685047699],
  [-16.49422179381176, -68.13682566655729],
  [-16.494297662832007, -68.13680890275053],
  [-16.49436581633329, -68.13678543342107],
  [-16.49436967408119, -68.13678878618254],
  [-16.494732400257185, -68.13674274755184],
  [-16.49505481823549, -68.13671492630424],
  [-16.495878442053694, -68.13673705452766],
  [-16.49587189854601, -68.13673598337141],
  [-16.496117401852672, -68.13667718851892],
  [-16.497368554595372, -68.13604182477],
  [-16.498070505935015, -68.13560939810468],
  [-16.498199621063268, -68.13551836091858],
  [-16.498328736099594, -68.13526800863225],
  [-16.500435621858685, -68.1309922945315],
  [-16.500597468409026, -68.13068694061897],
  [-16.500662934387236, -68.13057504073342],
  [-16.500712033856363, -68.13043089850797],
  [-16.50071930785072, -68.13035882739521],
  [-16.500706578360393, -68.13019571908747],
  [-16.500588375907686, -68.12989605500707],
  [-16.500293778716035, -68.12932707254403],
  [-16.500197398055967, -68.12884723068638],
  [-16.50021740159304, -68.12829911090796],
  [-16.500381066820893, -68.12791030623951],
];

// Crear y añadir la línea al mapa
const polyline = L.polyline(routeCoordinates, { color: 'red', weight: 4 }).addTo(map);
  
// Ajustar el zoom para mostrar toda la ruta
map.fitBounds(polyline.getBounds());
// Mostrar la ubicación en tiempo real
map.locate({
  setView: true,
  maxZoom: 16,
  watch: true // Activa el rastreo continuo
});

let marker, circle;

function onLocationFound(e) {
  const radius = e.accuracy;

  // Si ya existe un marcador y círculo, actualízalos
  if (marker) {
      marker.setLatLng(e.latlng);
      circle.setLatLng(e.latlng).setRadius(radius);
  } else {
      // Si no existe, créalos
      marker = L.marker(e.latlng).addTo(map)
          .bindPopup(`Se encuentra aqui`).openPopup();

      circle = L.circle(e.latlng, radius).addTo(map);
  }
}

function onLocationError(e) {
  alert(`No se pudo obtener la ubicación: ${e.message}`);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
