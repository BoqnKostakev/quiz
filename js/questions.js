var questionsStack = (function() {

	var questionsStack = [{
		question: "Нийл Армстронг и Едуин Олдрин са първите, които...",
		choices: ["пътуват в Космоса", "стъпват на Марс", "стъпват на Луната", "обикалят Луната"],
		correctAnswer: 2,
		points: 3
	}, {
		question: "Кой газ съставлява по-голямата част (близо 78%) от атмосферата на Земята?",
		choices: ["въглероден диоксит", "водород", "азот", "кислород"],
		correctAnswer: 2,
		points: 5
	}, {
		question: "Кой е най-големият океан на Земята?",
		choices: ["Атлантически океан", "Арктически океан", "Тихи океан", "Индийски океан"],
		correctAnswer: 2,
		points: 5
	}, {
		question: "Колко ъгъла има хептагонът?",
		choices: ["6", "7", "5", "8"],
		correctAnswer: 1,
		points: 10
	}, {
		question: "Коя единица измерва енергията в храните?",
		choices: ["джаул", "келвин", "калория", "мегават"],
		correctAnswer: 2,
		points: 3
	}, {
		question: "Колко нули има числото 1 трилион?",
		choices: ["12", "6", "16", "9"],
		correctAnswer: 0,
		points: 5
	}, {
		question: "В Гръцката митология, от какво беше направена косата на медуза?",
		choices: ["кабели", "червей", "обикновена коса", "змии"],
		correctAnswer: 3,
		points: 3
	}, {
		question: "Светлинната година се отнася за",
		choices: ["разстояние", "енергия", "скорост", "интензитет"],
		correctAnswer: 0,
		points: 5
	}, {
		question: "Какво представлява Мачу Пикчу?",
		choices: ["статуя", "езеро", "градина", "град"],
		correctAnswer: 3,
		points: 10
	}, {
		question: "Според закон в САЩ, какво трябва да имаш, зада заложиш капан за мишки?",
		choices: ["капан за мишки", "разрешително за лов", "сиренце", "мишки"],
		correctAnswer: 1,
		points: 7
	}, {
		question: "Как се нарича правата, която се намира под прав ъгъл спрямо друга права?",
		choices: ["успоредна", "транспортир", "хипербола", "перпендикуляр"],
		correctAnswer: 3,
		points: 3
	}, {
		question: "Колко пръстени има олимпийският флаг?",
		choices: ["7", "5", "6", "3"],
		correctAnswer: 1,
		points: 3
	}, {
		question: "Веднъж на колко години се провеждат Летните Олимпийски игри?",
		choices: ["7", "5", "4", "3"],
		correctAnswer: 2,
		points: 5
	}, {
		question: "Кое езеро не е от Седемте рилски езера?",
		choices: ["Око", "Сълза", "Сърце", "Бъбрек"],
		correctAnswer: 2,
		points: 5
	}, {
		question: "Коя жена политик е известна като \"желязната лейди\"?",
		choices: ["Маргарет Тачър", "Раиса Горбачова", "Даяна Спенсър", "Жаклин Кенеди"],
		correctAnswer: 0,
		points: 7
	}, {
		question: "Коя кръвна група се приема за универсален донор?",
		choices: ["AB", "B", "O", "A"],
		correctAnswer: 2,
		points: 3
	}, {
		question: "Към Коя част на тялото се отнася заболяването Глаукома?",
		choices: ["ставите", "сърцето", "очите", "кожата"],
		correctAnswer: 2,
		points: 10
	}, {
		question: "Какъв е Конфуций?",
		choices: ["философ", "математик", "художник", "футболист"],
		correctAnswer: 0,
		points: 6
	}, {
		question: "Колко стрели държи орелът, изобразен на герба на САЩ?",
		choices: ["10", "13", "7", "15"],
		correctAnswer: 1,
		points: 10
	}, {
		question: "Къде е построено първото метро в континентална Европа?",
		choices: ["Будапеща", "Мадрид", "Париж", "Виена"],
		correctAnswer: 0,
		points: 13
	}, {
		question: "Кой учен първи открива, че Земята се върти около Слънцето?",
		choices: ["Исак Нютон", "Николай Коперник", "Алберт Айнщайн", "Джон Далтон"],
		correctAnswer: 1,
		points: 15
	}, {
		question: "Приблизително колко пъти диаметърът на Слънцето е по-голям от този на Земята?",
		choices: ["10 000", "1 000", "100", "10"],
		correctAnswer: 2,
		points: 10
	}, {
		question: "Довършете поговорката: \"От трън та на...\"",
		choices: ["магарешки бодил", "блог", "полицай", "глог"],
		correctAnswer: 3,
		points: 3
	}, {
		question: "Японско ястие, приготвено от сурова риба и ориз",
		choices: ["фугу", "каки но тане", "суши", "уасаби"],
		correctAnswer: 2,
		points: 5
	}, {
		question: "От коя част на канеленото дърво се изготвя популярната подправка канела?",
		choices: ["корени", "кора", "листа", "семена"],
		correctAnswer: 1,
		points: 5
	}, {
		question: "На какъв език са говорили древните римляни?",
		choices: ["древен римски", "латински", "английски", "италиански"],
		correctAnswer: 1,
		points: 8
	}, {
		question: "Кое от изброените е по-леко от въздуха?",
		choices: ["желязо", "хелий", "вода", "олио"],
		correctAnswer: 1,
		points: 3
	}, {
		question: "Как се нарича зеленият пигмент в растенията?",
		choices: ["хлороформ", "хлорофил", "хлоропирамин", "хлорофитум"],
		correctAnswer: 1,
		points: 9
	}, {
		question: "Кой е официалният език на Австралия?",
		choices: ["немски", "английски", "италиански", "испански"],
		correctAnswer: 1,
		points: 3
	}, {
		question: "Какво ядат кенгурутата?",
		choices: ["малки животни", "насекоми", "пълнени чушки с ориз", "растения"],
		correctAnswer: 3,
		points: 6
	}, {
		question: "Колко сантиметра е един инч?",
		choices: ["2.34 см", "2.8 см", "2 см", "2.54 см"],
		correctAnswer: 3,
		points: 9
	}, {
		question: "Кой е изобразен на американската 100 доларова банкнота?",
		choices: ["Юлисис Грант", "Дордж Вашинктон", "Еибрахам Линкълн", "Бенджамин Франклин"],
		correctAnswer: 3,
		points: 10
	}, {
		question: "Приблизително на колко години е Земята?",
		choices: ["65 005 години", "4.5 млрд. години", "4.5 млн. години", "100 000 години"],
		correctAnswer: 1,
		points: 10
	}, {
		question: "Колко градуса е всеки ъгъл в равностранен триъгълник?",
		choices: ["50", "60", "30", "45"],
		correctAnswer: 1,
		points: 3
	}, {
		question: "Най голямата концентрация на етерични ароматни масла е в?",
		choices: ["шампоаните", "дезодорантите", "парфюмните води", "парфюмите"],
		correctAnswer: 3,
		points: 8
	}, {
		question: "С кое устройство се преобразува звукова енергия в електрическа енергия?",
		choices: ["микрофон", "клавиатура", "телевизор", "мишка"],
		correctAnswer: 0,
		points: 3
	}, {
		question: "Кой прибор помага при определянето на посоките на света?",
		choices: ["шублер", "барометър", "компас", "телескоп"],
		correctAnswer: 2,
		points: 3
	}, {
		question: "Какво поглъща озоновият слой?",
		choices: ["гама лъчи", "инфрачервени лъчи", "ултравиолетови лъчи", "видима светлина"],
		correctAnswer: 2,
		points: 8
	}];


	return questionsStack;
}());