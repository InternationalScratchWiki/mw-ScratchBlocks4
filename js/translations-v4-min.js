(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

"use strict";window.scratchblocks4.loadLanguages(require("../locales/forums.js"));



},{"../locales/forums.js":6}],2:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "mou-te %n passos",

    "turn @turnRight %n degrees": "gira @turnRight %n graus",

    "turn @turnLeft %n degrees": "gira @turnLeft %n graus",

    "point in direction %d.direction": "apunta en direccio %d.direction",

    "point towards %m.spriteOrMouse": "apunta cap a %m.spriteOrMouse",

    "go to x:%n y:%n": "ves a x:%n y:%n",

    "go to %m.location": "ves a %m.location",

    "glide %n secs to x:%n y:%n": "llisca en %n segons fins a x:%n y:%n",

    "change x by %n": "suma %n a x",

    "set x to %n": "assigna el valor %n a x",

    "change y by %n": "suma %n a y",

    "set y to %n": "assigna el valor %n a y",

    "set rotation style %m.rotationStyle": "fixa la rotacio a %m.rotationStyle",

    "say %s for %n secs": "digues %s durant %n segons",

    "say %s": "digues %s",

    "think %s for %n secs": "pensa %s durant %n segons",

    "think %s": "pensa %s",

    "show": "mostra't",

    "hide": "amaga't",

    "switch costume to %m.costume": "canvia el vestit a %m.costume",

    "next costume": "seguent vestit",

    "next backdrop": "seguent fons de pantalla",

    "switch backdrop to %m.backdrop": "canvia el fons a %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "canvia el fons a %m.backdrop i espera",

    "change %m.effect effect by %n": "augmenta l'efecte %m.effect en %n",

    "set %m.effect effect to %n": "fixa l'efecte %m.effect a %n",

    "clear graphic effects": "treu els efectes grafics",

    "change size by %n": "augmenta %n la mida",

    "set size to %n%": "fixa la mida a %n%",

    "go to front": "ves al front",

    "go back %n layers": "ves %n capes darrera",

    "play sound %m.sound": "toca el so %m.sound",

    "play sound %m.sound until done": "toca el so %m.sound fins que acabi",

    "stop all sounds": "atura tots els sons",

    "play drum %d.drum for %n beats": "toca el tambor %d.drum durant %n pulsacions",

    "rest for %n beats": "fes silenci durant %n pulsacions",

    "play note %d.note for %n beats": "toca la nota %d.note durant %n pulsacions",

    "set instrument to %d.instrument": "fixa l'instrument a %d.instrument",

    "change volume by %n": "puja %n el volum",

    "set volume to %n%": "fixa el volum a %n%",

    "change tempo by %n": "augmenta %n el tempo",

    "set tempo to %n bpm": "fixa el tempo a %n",

    "clear": "neteja",

    "stamp": "estampa",

    "pen down": "baixa el llapis",

    "pen up": "puja el llapis",

    "set pen color to %c": "fixa el color del llapis a %c",

    "change pen color by %n": "augmenta %n el color del llapis",

    "set pen color to %n": "fixa el color del llapis a %n",

    "change pen shade by %n": "augmenta %n la intensitat del llapis",

    "set pen shade to %n": "fixa la intensitat del llapis a %n",

    "change pen size by %n": "augmenta %n la mida del llapis",

    "set pen size to %n": "fixa la mida del llapis a %n",

    "when @greenFlag clicked": "quan la @greenFlag es premi",

    "when %m.key key pressed": "quan la tecla %m.key es premi",

    "when this sprite clicked": "quan es cliqui aquest personatge",

    "when backdrop switches to %m.backdrop": "quan l'escenari canvii al fons %m.backdrop",

    "when %m.triggerSensor > %n": "quan %m.triggerSensor > %n",

    "when I receive %m.broadcast": "quan rebi %m.broadcast",

    "broadcast %m.broadcast": "envia a tots %m.broadcast",

    "broadcast %m.broadcast and wait": "envia a tots %m.broadcast i espera",

    "wait %n secs": "espera %n segons",

    "repeat %n": "repeteix %n vegades",

    "forever": "per sempre",

    "if %b then": "si %b llavors",

    "wait until %b": "espera fins %b",

    "repeat until %b": "repeteix fins %b",

    "stop %m.stop": "atura %m.stop",

    "when I start as a clone": "quan una copia meva comenci",

    "create clone of %m.spriteOnly": "crea una copia de %m.spriteOnly",

    "delete this clone": "esborra aquesta copia",

    "ask %s and wait": "pregunta %s i espera",

    "turn video %m.videoState": "posa video %m.videoState",

    "set video transparency to %n%": "fixa la transparencia del video a %n%",

    "reset timer": "reinicia el cronometre",

    "set %m.var to %s": "assigna a %m.var el valor %s",

    "change %m.var by %n": "augmenta %m.var en %n",

    "show variable %m.var": "mostra la variable %m.var",

    "hide variable %m.var": "amaga la variable %m.var",

    "add %s to %m.list": "afegeix %s a %m.list",

    "delete %d.listDeleteItem of %m.list": "esborra l'element %d.listDeleteItem de %m.list",

    "if on edge, bounce": "rebota en tocar una vora",

    "insert %s at %d.listItem of %m.list": "afegeix %s a la posicio %d.listItem de %m.list",

    "replace item %d.listItem of %m.list with %s": "canvia l'element %d.listItem de %m.list per %s",

    "show list %m.list": "mostra la llista %m.list",

    "hide list %m.list": "amaga la llista %m.list",

    "x position": "posicio x",

    "y position": "posicio y",

    "direction": "direccio",

    "costume #": "vestit nr",

    "size": "mida",

    "backdrop name": "nom del fons",

    "backdrop #": "fons nr",

    "volume": "volum",

    "touching %m.touching?": "tocant %m.touching?",

    "touching color %c?": "tocant el color %c?",

    "color %c is touching %c?": "color %c sobre %c?",

    "distance to %m.spriteOrMouse": "distancia a %m.spriteOrMouse",

    "answer": "resposta",

    "key %m.key pressed?": "tecla %m.key premuda?",

    "mouse down?": "ratoli clicat?",

    "mouse x": "ratoli x",

    "mouse y": "ratoli y",

    "loudness": "volum del so",

    "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType de video a %m.stageOrThis",

    "timer": "cronometre",

    "%m.attribute of %m.spriteOrStage": "%m.attribute de %m.spriteOrStage",

    "current %m.timeAndDate": "%m.timeAndDate actual",

    "days since 2000": "dies des del 2000",

    "username": "nom d'usuari",

    "pick random %n to %n": "nombre a l'atzar entre %n i %n",

    "%b and %b": "%b i %b",

    "%b or %b": "%b o %b",

    "not %b": "no %b",

    "join %s %s": "uneix %s i %s",

    "letter %n of %s": "lletra %n de %s",

    "length of %s": "llargada de %s",

    "%n mod %n": "residu de dividir %n entre %n",

    "round %n": "arrodoneix %n",

    "%m.mathOp of %n": "%m.mathOp de %n",

    "item %d.listItem of %m.list": "element %d.listItem de %m.list",

    "length of %m.list": "llargada de %m.list",

    "%m.list contains %s?": "%m.list conte %s?",

    "when %m.booleanSensor": "quan %m.booleanSensor actiu",

    "when %m.sensor %m.lessMore %n": "quan %m.sensor %m.lessMore %n",

    "%m.sensor sensor value": "valor del sensor %m.sensor",

    "turn %m.motor on for %n secs": "activa el motor %m.motor durant %n segons",

    "turn %m.motor on": "activa el motor %m.motor",

    "turn %m.motor off": "atura el motor %m.motor",

    "set %m.motor power to %n": "fixa potencia del motor %m.motor a %n",

    "set %m.motor2 direction to %m.motorDirection": "fixa la direccio del motor %m.motor2 a %m.motorDirection",

    "when distance %m.lessMore %n": "quan la distancia sigui %m.lessMore %n",

    "when tilt %m.eNe %n": "quan la inclinacio sigui %m.eNe %n",

    "distance": "distancia",

    "tilt": "inclinacio",

    "else": "si no"

  },

  "ignorelt": [

    "quan distanciaundefined"

  ],

  "dropdowns": {

    "A connected": "A connectat",

    "all": "tot",

    "all around": "al voltant",

    "B connected": "B connectat",

    "brightness": "brillantor",

    "button pressed": "boto premut",

    "C connected": "C connectat",

    "costume name": "nom del vestit",

    "D connected": "D connectat",

    "date": "data",

    "day of week": "dia de la setmana",

    "don't rotate": "no giris",

    "down arrow": "fletxa avall",

    "edge": "vora",

    "fisheye": "ull de peix",

    "ghost": "transparencia",

    "hour": "hora",

    "left arrow": "fletxa esquerra",

    "left-right": "esquerra-dreta",

    "light": "llum",

    "minute": "minut",

    "month": "mes",

    "motion": "moviment",

    "mouse-pointer": "punter del ratoli",

    "myself": "jo mateix",

    "off": "apaga",

    "on": "activa",

    "on-flipped": "voltejat actiu",

    "other scripts in sprite": "altres programes del personatge",

    "pixelate": "pixelar",

    "previous backdrop": "fons anterior",

    "random position": "posicio aleatoria",

    "resistance-A": "resistencia-A",

    "resistance-B": "resistencia-B",

    "resistance-C": "resistencia-C",

    "resistance-D": "resistencia-D",

    "reverse": "invertit",

    "right arrow": "fletxa dreta",

    "second": "segon",

    "slider": "lliscador",

    "sound": "so",

    "space": "espai",

    "Stage": "Escenari",

    "that way": "cap aqui",

    "this script": "aquest programa",

    "this sprite": "aquest personatge",

    "this way": "cap alla",

    "up arrow": "fletxa amunt",

    "video motion": "moviment de video",

    "whirl": "girar",

    "year": "any"

  },

  "osis": [

    "altres programes del personatge",

    "altres programes de l'escenari"

  ],

  "define": [

    "defineix"

  ],

  "palette": {

    "Motion": "Moviment",

    "Looks": "Aspecte",

    "Sound": "Sons",

    "Pen": "Llapis",

    "Data": "Dades",

    "list": "llista",

    "Events": "Esdeveniments",

    "Sensing": "Sensors",

    "Operators": "Operadors",

    "More Blocks": "Mes Blocs",

    "Tips": "Consells"

  },

  "math": [

    "part sencera",

    "sostre",

    "arrel quadrada"

  ],

  "aliases": {

    "gira a l'esquerra %n graus": "turn @turnLeft %n degrees",

    "gira a la dreta %n graus": "turn @turnRight %n degrees",

    "quan la bandera verda es premi": "when @greenFlag clicked",

    "fi": "end"

  },

  "_name": "Catala"

}

},{}],3:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "gehe %n er-Schritt",

    "turn @turnRight %n degrees": "drehe dich @turnRight um %n Grad",

    "turn @turnLeft %n degrees": "drehe dich @turnLeft um %n Grad",

    "point in direction %d.direction": "setze Richtung auf %d.direction",

    "point towards %m.spriteOrMouse": "drehe dich zu %m.spriteOrMouse",

    "go to x:%n y:%n": "gehe zu x:%n y:%n",

    "go to %m.location": "gehe zu %m.location",

    "glide %n secs to x:%n y:%n": "gleite in %n Sek. zu x:%n y:%n",

    "change x by %n": "andere x um %n",

    "set x to %n": "setze x auf %n",

    "change y by %n": "andere y um %n",

    "set y to %n": "setze y auf %n",

    "set rotation style %m.rotationStyle": "setze Drehtyp auf %m.rotationStyle",

    "say %s for %n secs": "sage %s fur %n Sek.",

    "say %s": "sage %s",

    "think %s for %n secs": "denke %s fur %n Sek.",

    "think %s": "denke %s",

    "show": "zeige dich",

    "hide": "verstecke dich",

    "switch costume to %m.costume": "wechsle zu Kostum %m.costume",

    "next costume": "nachstes Kostum",

    "next backdrop": "nachstes Buhnenbild",

    "switch backdrop to %m.backdrop": "wechsle zu Buhnenbild %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "wechsle zu Buhnenbild %m.backdrop und warte",

    "change %m.effect effect by %n": "andere %m.effect-Effekt um %n",

    "set %m.effect effect to %n": "setze %m.effect-Effekt auf %n",

    "clear graphic effects": "schalte Grafikeffekte aus",

    "change size by %n": "andere Grose um %n",

    "set size to %n%": "setze Grose auf %n%",

    "go to front": "komme nach vorn",

    "go back %n layers": "gehe %n Ebenen nach hinten",

    "play sound %m.sound": "spiele Klang %m.sound",

    "play sound %m.sound until done": "spiele Klang %m.sound ganz",

    "stop all sounds": "stoppe alle Klange",

    "play drum %d.drum for %n beats": "spiele Schlaginstrument %d.drum fur %n Schlage",

    "rest for %n beats": "pausiere %n Schlage",

    "play note %d.note for %n beats": "spiele Ton %d.note fur %n Schlage",

    "set instrument to %d.instrument": "setze Instrument auf %d.instrument",

    "change volume by %n": "andere Lautstarke um %n",

    "set volume to %n%": "setze Lautstarke auf %n%",

    "change tempo by %n": "andere Tempo um %n",

    "set tempo to %n bpm": "setze Tempo auf %n Schlage/Min.",

    "clear": "wische Malspuren weg",

    "stamp": "hinterlasse Abdruck",

    "pen down": "schalte Stift ein",

    "pen up": "schalte Stift aus",

    "set pen color to %c": "setze Stiftfarbe auf %c",

    "change pen color by %n": "andere Stiftfarbe um %n",

    "set pen color to %n": "setze Stiftfarbe auf %n",

    "change pen shade by %n": "andere Farbschattierung um %n",

    "set pen shade to %n": "setze Farbschattierung auf %n",

    "change pen size by %n": "andere Stiftdicke um %n",

    "set pen size to %n": "setze Stiftdicke auf %n",

    "when @greenFlag clicked": "Wenn @greenFlag angeklickt",

    "when %m.key key pressed": "Wenn Taste %m.key gedruckt",

    "when this sprite clicked": "Wenn ich angeklickt werde",

    "when backdrop switches to %m.backdrop": "Wenn das Buhnenbild zu %m.backdrop wechselt",

    "when %m.triggerSensor > %n": "Wenn %m.triggerSensor > %n",

    "when I receive %m.broadcast": "Wenn ich %m.broadcast empfange",

    "broadcast %m.broadcast": "sende %m.broadcast an alle",

    "broadcast %m.broadcast and wait": "sende %m.broadcast an alle und warte",

    "wait %n secs": "warte %n Sek.",

    "repeat %n": "wiederhole %n mal",

    "forever": "wiederhole fortlaufend",

    "if %b then": "falls %b dann",

    "wait until %b": "warte bis %b",

    "repeat until %b": "wiederhole bis %b",

    "stop %m.stop": "stoppe %m.stop",

    "when I start as a clone": "Wenn ich als Klon entstehe",

    "create clone of %m.spriteOnly": "erzeuge Klon von %m.spriteOnly",

    "delete this clone": "losche diesen Klon",

    "ask %s and wait": "frage %s und warte",

    "turn video %m.videoState": "schalte Video %m.videoState",

    "set video transparency to %n%": "setze Video-Transparenz auf %n%",

    "reset timer": "setze Stoppuhr zuruck",

    "set %m.var to %s": "setze %m.var auf %s",

    "change %m.var by %n": "andere %m.var um %n",

    "show variable %m.var": "zeige Variable %m.var",

    "hide variable %m.var": "verstecke Variable %m.var",

    "add %s to %m.list": "fuge %s zu %m.list hinzu",

    "delete %d.listDeleteItem of %m.list": "losche %d.listDeleteItem aus %m.list",

    "if on edge, bounce": "pralle vom Rand ab",

    "insert %s at %d.listItem of %m.list": "fuge %s als %d.listItem in %m.list ein",

    "replace item %d.listItem of %m.list with %s": "ersetze Element %d.listItem  von %m.list durch %s",

    "show list %m.list": "zeige Liste %m.list",

    "hide list %m.list": "verstecke Liste %m.list",

    "x position": "x-Position",

    "y position": "y-Position",

    "direction": "Richtung",

    "costume #": "Kostumnummer",

    "size": "Grose",

    "backdrop name": "Buhnenbildname",

    "backdrop #": "Buhnenbildnummer",

    "volume": "Lautstarke",

    "tempo": "Tempo",

    "touching %m.touching?": "wird %m.touching beruhrt?",

    "touching color %c?": "wird Farbe %c beruhrt?",

    "color %c is touching %c?": "Farbe %c beruhrt %c?",

    "distance to %m.spriteOrMouse": "Entfernung von %m.spriteOrMouse",

    "answer": "Antwort",

    "key %m.key pressed?": "Taste %m.key gedruckt?",

    "mouse down?": "Maustaste gedruckt?",

    "mouse x": "Maus x-Position",

    "mouse y": "Maus y-Position",

    "loudness": "Lautstarke",

    "video %m.videoMotionType on %m.stageOrThis": "Video %m.videoMotionType auf %m.stageOrThis",

    "timer": "Stoppuhr",

    "%m.attribute of %m.spriteOrStage": "%m.attribute von %m.spriteOrStage",

    "current %m.timeAndDate": "%m.timeAndDate im Moment",

    "days since 2000": "Tage seit 2000",

    "username": "Benutzername",

    "pick random %n to %n": "Zufallszahl von %n bis %n",

    "%b and %b": "%b und %b",

    "%b or %b": "%b oder %b",

    "not %b": "nicht %b",

    "join %s %s": "verbinde %s %s",

    "letter %n of %s": "Zeichen %n von %s",

    "length of %s": "Lange von %s",

    "round %n": "%n gerundet",

    "%m.mathOp of %n": "%m.mathOp von %n",

    "item %d.listItem of %m.list": "Element %d.listItem von %m.list",

    "length of %m.list": "Lange von %m.list",

    "%m.list contains %s?": "%m.list enthalt %s?",

    "when %m.booleanSensor": "Wenn %m.booleanSensor",

    "when %m.sensor %m.lessMore %n": "Wenn %m.sensor %m.lessMore %n",

    "sensor %m.booleanSensor?": "Sensor %m.booleanSensor?",

    "%m.sensor sensor value": "Wert von Sensor %m.sensor",

    "turn %m.motor on for %n secs": "schalte %m.motor fur %n Sekunden an",

    "turn %m.motor on": "schalte %m.motor an",

    "turn %m.motor off": "schalte %m.motor aus",

    "set %m.motor power to %n": "setze Leistung von %m.motor auf %n",

    "set %m.motor2 direction to %m.motorDirection": "setze Drehrichtung von %m.motor2 auf %m.motorDirection",

    "when distance %m.lessMore %n": "Wenn Abstand %m.lessMore %n",

    "when tilt %m.eNe %n": "Wenn Neigung %m.eNe %n",

    "distance": "Abstand",

    "tilt": "Neigung",

    "else": "sonst"

  },

  "ignorelt": [

    "Wenn Abstandundefined"

  ],

  "dropdowns": {

    "A connected": "A angeschlossen",

    "all": "alles",

    "all around": "rundherum",

    "B connected": "B angeschlossen",

    "brightness": "Helligkeit",

    "button pressed": "Schalter gedruckt",

    "C connected": "C angeschlossen",

    "color": "Farbe",

    "costume name": "Kostumname",

    "D connected": "D angeschlossen",

    "date": "Datum",

    "day of week": "Wochentag",

    "don't rotate": "nicht drehen",

    "down arrow": "Pfeil nach unten",

    "edge": "Rand",

    "fisheye": "Fischauge",

    "ghost": "Durchsichtigkeit",

    "hour": "Stunde",

    "left arrow": "Pfeil nach links",

    "left-right": "links-rechts",

    "light": "Helligkeit",

    "minute": "Minute",

    "month": "Monat",

    "mosaic": "Mosaik",

    "motion": "Bewegung",

    "mouse-pointer": "Mauszeiger",

    "myself": "mir selbst",

    "off": "aus",

    "on": "an",

    "on-flipped": "an-gespiegelt",

    "other scripts in sprite": "andere Skripte der Figur",

    "pixelate": "Pixel",

    "previous backdrop": "vorheriges Buhnenbild",

    "random position": "Zufallsposition",

    "resistance-A": "Widerstand-A",

    "resistance-B": "Widerstand-B",

    "resistance-C": "Widerstand-C",

    "resistance-D": "Widerstand-D",

    "reverse": "umkehren",

    "right arrow": "Pfeil nach rechts",

    "second": "Sekunde",

    "slider": "Schieberegler",

    "sound": "Lautstarke",

    "space": "Leertaste",

    "Stage": "Buhne",

    "that way": "linksherum",

    "this script": "dieses Skript",

    "this sprite": "diese Figur",

    "this way": "rechtsherum",

    "up arrow": "Pfeil nach oben",

    "video motion": "Videobewegung",

    "whirl": "Wirbel",

    "year": "Jahr"

  },

  "osis": [

    "andere Skripte der Figur",

    "andere Skripte der Buhne"

  ],

  "define": [

    "Definiere"

  ],

  "palette": {

    "Motion": "Bewegung",

    "Looks": "Aussehen",

    "Sound": "Klang",

    "Pen": "Malstift",

    "Data": "Daten",

    "variable": "Variable",

    "list": "Liste",

    "Events": "Ereignisse",

    "Control": "Steuerung",

    "Sensing": "Fuhlen",

    "Operators": "Operatoren",

    "More Blocks": "Weitere Blocke",

    "Tips": "Tipps"

  },

  "math": [

    "Betrag",

    "abrunden",

    "aufrunden",

    "Wurzel",

    "e^",

    "10^"

  ],

  "aliases": {

    "drehe dich nach links um %n Grad": "turn @turnLeft %n degrees",

    "drehe dich nach rechts um %n Grad": "turn @turnRight %n degrees",

    "Wenn die grune Flagge angeklickt": "when @greenFlag clicked",

    "Ende": "end"

  },

  "_name": "Deutsch"

}

},{}],4:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "κιν?σου %n β?ματα",

    "turn @turnRight %n degrees": "στρ?ψε @turnRight %n μο?ρε?",

    "turn @turnLeft %n degrees": "στρ?ψε @turnLeft %n μο?ρε?",

    "point in direction %d.direction": "στρ?ψε προ? την κατε?θυνση των %d.direction μοιρ?ν",

    "point towards %m.spriteOrMouse": "στρ?ψε προ? το %m.spriteOrMouse",

    "go to x:%n y:%n": "π?γαινε στη θ?ση x:%n και y:%n",

    "go to %m.location": "π?γαινε στη θ?ση του %m.location",

    "glide %n secs to x:%n y:%n": "π?γαινε αργ? για %n δευτ. στη θ?ση x:%n και y:%n",

    "change x by %n": "?λλαξε το x κατ? %n",

    "set x to %n": "?ρισε το x ?σο με %n",

    "change y by %n": "?λλαξε το y κατ? %n",

    "set y to %n": "?ρισε το y ?σο με %n",

    "set rotation style %m.rotationStyle": "?ρισε τον ?ξονα περιστροφ?? σε %m.rotationStyle",

    "say %s for %n secs": "πε? %s για %n δευτερ?λεπτα",

    "say %s": "πε? %s",

    "think %s for %n secs": "σκ?ψου %s για %n δευτερ?λεπτα",

    "think %s": "σκ?ψου %s",

    "show": "εμφαν?σου",

    "hide": "εξαφαν?σου",

    "switch costume to %m.costume": "?λλαξε την ενδυμασ?α σε %m.costume",

    "next costume": "?λλαξε στην επ?μενη ενδυμασ?α",

    "next backdrop": "?λλαξε στο επ?μενο υπ?βαθρο",

    "switch backdrop to %m.backdrop": "?λλαξε το υπ?βαθρο σε %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "?λλαξε το υπ?βαθρο σε %m.backdrop και περ?μενε",

    "change %m.effect effect by %n": "?λλαξε το εφ? %m.effect κατ? %n",

    "set %m.effect effect to %n": "?ρισε το εφ? %m.effect σε %n",

    "clear graphic effects": "επαν?φερε τα γραφικ? εφ?",

    "change size by %n": "?λλαξε το μ?γεθο? του αντικειμ?νου κατ? %n",

    "set size to %n%": "?ρισε το μ?γεθο? του αντικειμ?νου σε %n%",

    "go to front": "π?γαινε στην μπροστιν? στρ?ση",

    "go back %n layers": "π?γαινε π?σω %n επ?πεδα",

    "play sound %m.sound": "πα?ξε τον ?χο %m.sound",

    "play sound %m.sound until done": "πα?ξε τον ?χο %m.sound μ?χρι το τ?λο?",

    "stop all sounds": "σταμ?τησε ?λου? του? ?χου?",

    "play drum %d.drum for %n beats": "πα?ξε το τ?μπανο %d.drum για %n χρ?νου?",

    "rest for %n beats": "περ?μενε για %n χρ?νου?",

    "play note %d.note for %n beats": "πα?ξε τη ν?τα %d.note για %n χρ?νου?",

    "set instrument to %d.instrument": "?ρισε το μουσικ? ?ργανο σε %d.instrument",

    "change volume by %n": "?λλαξε την ?νταση κατ? %n",

    "set volume to %n%": "?ρισε την ?νταση σε %n%",

    "change tempo by %n": "?λλαξε το ρυθμ? κατ? %n",

    "set tempo to %n bpm": "?ρισε το ρυθμ? σε %n χτ?που? το λεπτ?",

    "clear": "καθ?ρισε",

    "stamp": "κ?νε μ?α στ?μπα",

    "pen down": "κατ?βασε την π?να",

    "pen up": "σ?κωσε την π?να",

    "set pen color to %c": "?ρισε το χρ?μα π?να? σε %c",

    "change pen color by %n": "?λλαξε το χρ?μα τη? π?να? κατ? %n",

    "set pen color to %n": "?ρισε το χρ?μα π?να? σε %n",

    "change pen shade by %n": "?λλαξε τη σκι? τη? π?να? κατ? %n",

    "set pen shade to %n": "?ρισε τη σκι? π?να? σε %n",

    "change pen size by %n": "?λλαξε το μ?γεθο? τη? π?να? κατ? %n",

    "set pen size to %n": "?ρισε το μ?γεθο? π?να? σε %n",

    "when @greenFlag clicked": "?ταν στο @greenFlag γ?νει κλ?κ",

    "when %m.key key pressed": "?ταν το πλ?κτρο %m.key πατηθε?",

    "when this sprite clicked": "?ταν σε αυτ? το αντικε?μενο γ?νει κλικ",

    "when backdrop switches to %m.backdrop": "?ταν το υπ?βαθρο αλλ?ξει σε %m.backdrop",

    "when %m.triggerSensor > %n": "?ταν %m.triggerSensor > %n",

    "when I receive %m.broadcast": "?ταν λ?βω το %m.broadcast",

    "broadcast %m.broadcast": "μετ?δωσε %m.broadcast",

    "broadcast %m.broadcast and wait": "μετ?δωσε το %m.broadcast και περ?μενε",

    "wait %n secs": "περ?μενε %n δευτερ?λεπτα",

    "repeat %n": "επαν?λαβε %n",

    "forever": "για π?ντα",

    "if %b then": "ε?ν %b τ?τε",

    "wait until %b": "περ?μενε ?σπου %b",

    "repeat until %b": "επαν?λαβε ?σπου %b",

    "stop %m.stop": "σταμ?τησε %m.stop",

    "when I start as a clone": "?ταν ξεκιν?σει ο κλ?νο?",

    "create clone of %m.spriteOnly": "δημιο?ργησε ?ναν κλ?νο του %m.spriteOnly",

    "delete this clone": "δι?γραψε αυτ?ν τον κλ?νο",

    "ask %s and wait": "ρ?τησε %s και περ?μενε",

    "turn video %m.videoState": "%m.videoState την προβολ? κ?μερα?",

    "set video transparency to %n%": "?ρισε τη διαφ?νεια προβολ?? κ?μερα? σε %n%",

    "reset timer": "μηδ?νισε τη χρονομ?τρηση",

    "set %m.var to %s": "?ρισε το %m.var σε %s",

    "change %m.var by %n": "?λλαξε το %m.var κατ? %n",

    "show variable %m.var": "εμφ?νισε τη μεταβλητ? %m.var",

    "hide variable %m.var": "απ?κρυψε τη μεταβλητ? %m.var",

    "add %s to %m.list": "πρ?σθεσε το %s στη λ?στα %m.list",

    "delete %d.listDeleteItem of %m.list": "δι?γραψε το %d.listDeleteItem απ? το %m.list",

    "if on edge, bounce": "ε?ν βρ?σκεσαι στα ?ρια, αναπ?δησε",

    "insert %s at %d.listItem of %m.list": "β?λε το %s στη θ?ση %d.listItem τη? λ?στα? %m.list",

    "replace item %d.listItem of %m.list with %s": "αντικατ?στησε το στοιχε?ο %d.listItem τη? λ?στα? %m.list με %s",

    "show list %m.list": "εμφ?νισε την λ?στα %m.list",

    "hide list %m.list": "απ?κρυψε τη λ?στα %m.list",

    "x position": "θ?ση x",

    "y position": "θ?ση y",

    "direction": "κατε?θυνση",

    "costume #": "ενδυμασ?α #",

    "size": "μ?γεθο?",

    "backdrop name": "?νομα υποβ?θρου",

    "backdrop #": "υπ?βαθρο #",

    "volume": "?νταση",

    "tempo": "ρυθμ??",

    "touching %m.touching?": "αγγ?ζει το %m.touching",

    "touching color %c?": "αγγ?ζει το χρ?μα %c",

    "color %c is touching %c?": "το χρ?μα %c αγγ?ζει το χρ?μα %c",

    "distance to %m.spriteOrMouse": "η απ?σταση μ?χρι το %m.spriteOrMouse",

    "answer": "απ?ντηση",

    "key %m.key pressed?": "πατ?θηκε το πλ?κτρο %m.key",

    "mouse down?": "πατ?θηκε το ποντ?κι",

    "mouse x": "θ?ση x του ποντικιο?",

    "mouse y": "θ?ση y του ποντικιο?",

    "loudness": "?νταση",

    "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType προβολ?? κ?μερα? στο %m.stageOrThis",

    "timer": "χρον?μετρο",

    "%m.attribute of %m.spriteOrStage": "%m.attribute απ? %m.spriteOrStage",

    "current %m.timeAndDate": "%m.timeAndDate ",

    "days since 2000": "ημ?ρε? απ? το 2000",

    "username": "?νομα χρ?στη",

    "pick random %n to %n": "επ?λεξε ?ναν τυχα?ο αριθμ? απ? το %n μ?χρι το %n",

    "%b and %b": "%b και %b",

    "%b or %b": "%b ? %b",

    "not %b": "δεν ισχ?ει ?τι %b",

    "join %s %s": "?νωσε το %s με το %s",

    "letter %n of %s": "το %n ° γρ?μμα του %s",

    "length of %s": "το μ?κο? του %s",

    "round %n": "στρογγυλοπο?ησε το %n",

    "%m.mathOp of %n": "%m.mathOp απ? %n",

    "item %d.listItem of %m.list": "το στοιχε?ο %d.listItem τη? λ?στα? %m.list",

    "length of %m.list": "το μ?κο? τη? λ?στα? %m.list",

    "%m.list contains %s?": "Η λ?στα %m.list περι?χει %s",

    "when %m.booleanSensor": "?ταν %m.booleanSensor",

    "when %m.sensor %m.lessMore %n": "?ταν ο αισθητ?ρα? %m.sensor ε?ναι %m.lessMore %n",

    "sensor %m.booleanSensor?": "αισθητ?ρα? %m.booleanSensor",

    "%m.sensor sensor value": "τιμ? αισθητ?ρα %m.sensor",

    "turn %m.motor on for %n secs": "ενεργοπο?ησε τον κινητ?ρα %m.motor για %n δευτερ?λεπτα",

    "turn %m.motor on": "ενεργοπο?ησε τον κινητ?ρα %m.motor",

    "turn %m.motor off": "απενεργοπο?ησε τον κινητ?ρα %m.motor",

    "set %m.motor power to %n": "?ρισε την ισχ? κινητ?ρα σε %n",

    "set %m.motor2 direction to %m.motorDirection": "?ρισε την κατε?θυνση κ?νηση? του κινητ?ρα %m.motor2 σε %m.motorDirection",

    "when distance %m.lessMore %n": "?ταν η απ?σταση ε?ναι  %m.lessMore %n",

    "when tilt %m.eNe %n": "?ταν γ?ρνει %m.eNe %n",

    "distance": "απ?σταση",

    "tilt": "κλ?ση",

    "else": "αλλι??"

  },

  "ignorelt": [

    "?ταν η απ?στασηundefined"

  ],

  "dropdowns": {

    "A connected": "το Α ?χει συνδεθε?",

    "all": "?λα",

    "all around": "ελε?θερο",

    "B connected": "το B ε?ναι συνδεδεμ?νο",

    "brightness": "φωτειν?τητα?",

    "button pressed": "πατ?θηκε το κουμπ?",

    "C connected": "το C ε?ναι συνδεδεμ?νο",

    "color": "χρ?ματο?",

    "costume name": "?νομα ενδυμασ?α?",

    "D connected": "το D ε?ναι συνδεδεμ?νο",

    "date": "ημερομην?α",

    "day of week": "μ?ρα τη? εβδομ?δα?",

    "don't rotate": "[να μην γ?νεται περιστροφ?]",

    "down arrow": "κ?τω β?λο?",

    "edge": "?ρια",

    "fisheye": "κυρτ?τητα?",

    "ghost": "εξαφ?νιση?",

    "hour": "?ρα",

    "left arrow": "αριστερ? β?λο?",

    "left-right": "οριζ?ντιο",

    "light": "φω?",

    "minute": "λεπτ?",

    "month": "μ?να?",

    "mosaic": "ψηφιδωτο?",

    "motion": "κ?νηση",

    "mouse-pointer": "δε?κτη του ποντικιο?",

    "myself": "εαυτο? μου",

    "off": "Απενεργοπο?ησε",

    "on": "Ενεργοπο?ησε",

    "on-flipped": "καθρεφτισμ?νο",

    "other scripts in sprite": "?λλα σεν?ρια στο αντικε?μενο αυτ?",

    "pixelate": "εικονοστοιχειοπο?ηση?",

    "previous backdrop": "προηγο?μενο υπ?βαθρο",

    "random position": "τυχα?α θ?ση",

    "resistance-A": "Αντ?σταση-Α",

    "resistance-B": "Αντ?σταση-Β",

    "resistance-C": "Αντ?σταση-C",

    "resistance-D": "Αντ?σταση-D",

    "reverse": "Αντιστροφ?",

    "right arrow": "δεξ? β?λο?",

    "second": "δευτερ?λεπτο",

    "slider": "Γραμμ? κ?λιση?",

    "sound": "?χο?",

    "Stage": "Σκηνικ?",

    "that way": "προ? εκε?νη την κατε?θυνση",

    "this script": "αυτ? το σεν?ριο",

    "this sprite": "αντικε?μενο αυτ?",

    "this way": "προ? αυτ?ν την κατε?θυνση",

    "up arrow": "Π?νω β?λο?",

    "video motion": "κ?νηση στην προβολ? απ? κ?μερα",

    "whirl": "περιστροφ??",

    "year": "χρ?νο?"

  },

  "osis": [

    "?λλα σεν?ρια στο αντικε?μενο αυτ?",

    "?λλα σεν?ρια στο αντικε?μενο αυτ?"

  ],

  "define": [

    "ορισμ?? του"

  ],

  "palette": {

    "Motion": "Κιν?σει?",

    "Looks": "?ψει?",

    "Sound": "?χοι",

    "Pen": "Σχεδιασμο? Π?να?",

    "Data": "Δεδομ?να",

    "variable": "Μεταβλητ?",

    "list": "Λ?στα",

    "Events": "Συμβ?ντα",

    "Control": "?λεγχο?",

    "Sensing": "Αισθητ?ρε?",

    "Operators": "Τελεστ??",

    "More Blocks": "?λλε? Εντολ??",

    "Tips": "Συμβουλ??"

  },

  "math": [

    "Απ?λυτηΤιμ?",

    "ΤετΡ?ζα"

  ],

  "aliases": {

    "στρ?ψε αριστερ? %n μο?ρε?": "turn @turnLeft %n degrees",

    "στρ?ψε αριστερ?στροφα %n μο?ρε?": "turn @turnLeft %n degrees",

    "στρ?ψε δεξι? %n μο?ρε?": "turn @turnRight %n degrees",

    "στρ?ψε δεξι?στροφα %n μο?ρε?": "turn @turnRight %n degrees",

    "?ταν στην πρ?σινη σημα?α γ?νει κλικ": "when @greenFlag clicked",

    "τ?λο?": "end"

  },

  "_name": "Ελληνικ?"

}

},{}],5:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "mover %n pasos",

    "turn @turnRight %n degrees": "girar @turnRight %n grados",

    "turn @turnLeft %n degrees": "girar @turnLeft %n grados",

    "point in direction %d.direction": "apuntar en direccion %d.direction",

    "point towards %m.spriteOrMouse": "apuntar hacia %m.spriteOrMouse",

    "go to x:%n y:%n": "ir a x:%n y:%n",

    "go to %m.location": "ir a %m.location",

    "glide %n secs to x:%n y:%n": "deslizar en %n segs a x:%n y:%n",

    "change x by %n": "cambiar x por %n",

    "set x to %n": "fijar x a %n",

    "change y by %n": "cambiar y por %n",

    "set y to %n": "fijar y a %n",

    "set rotation style %m.rotationStyle": "fijar estilo de rotacion %m.rotationStyle",

    "say %s for %n secs": "decir %s por %n segundos",

    "say %s": "decir %s",

    "think %s for %n secs": "pensar %s por %n segundos",

    "think %s": "pensar %s",

    "show": "mostrar",

    "hide": "esconder",

    "switch costume to %m.costume": "cambiar disfraz a %m.costume",

    "next costume": "siguiente disfraz",

    "next backdrop": "siguiente fondo",

    "switch backdrop to %m.backdrop": "cambiar fondo a %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "cambiar fondo a %m.backdrop y esperar",

    "change %m.effect effect by %n": "cambiar efecto %m.effect por %n",

    "set %m.effect effect to %n": "establecer efecto %m.effect a %n",

    "clear graphic effects": "quitar efectos graficos",

    "change size by %n": "cambiar tamano por %n",

    "set size to %n%": "fijar tamano a %n%",

    "go to front": "enviar al frente",

    "go back %n layers": "ir %n capas hacia atras",

    "play sound %m.sound": "tocar sonido %m.sound",

    "play sound %m.sound until done": "tocar sonido %m.sound y esperar",

    "stop all sounds": "detener todos los sonidos",

    "play drum %d.drum for %n beats": "tocar tambor %d.drum durante %n pulsos",

    "rest for %n beats": "silencio por %n pulsos",

    "play note %d.note for %n beats": "tocar nota %d.note durante %n pulsos",

    "set instrument to %d.instrument": "fijar instrumento a %d.instrument",

    "change volume by %n": "cambiar volumen por %n",

    "set volume to %n%": "fijar volumen a %n%",

    "change tempo by %n": "cambiar tempo por %n",

    "set tempo to %n bpm": "fijar tempo a %n ppm",

    "clear": "borrar",

    "stamp": "sellar",

    "pen down": "bajar lapiz",

    "pen up": "subir lapiz",

    "set pen color to %c": "fijar color de lapiz a %c",

    "change pen color by %n": "cambiar color del lapiz por %n",

    "set pen color to %n": "fijar color de lapiz a %n",

    "change pen shade by %n": "cambiar intensidad de lapiz por %n",

    "set pen shade to %n": "fijar intensidad de lapiz a %n",

    "change pen size by %n": "cambiar tamano de lapiz por %n",

    "set pen size to %n": "fijar tamano de lapiz a %n",

    "when @greenFlag clicked": "al presionar @greenFlag",

    "when %m.key key pressed": "al presionar tecla %m.key",

    "when this sprite clicked": "al hacer clic en este objeto",

    "when backdrop switches to %m.backdrop": "cuando el fondo cambie a %m.backdrop",

    "when %m.triggerSensor > %n": "cuando %m.triggerSensor sea > %n",

    "when I receive %m.broadcast": "al recibir %m.broadcast",

    "broadcast %m.broadcast": "enviar %m.broadcast",

    "broadcast %m.broadcast and wait": "enviar %m.broadcast y esperar",

    "wait %n secs": "esperar %n segundos",

    "repeat %n": "repetir %n",

    "forever": "por siempre",

    "if %b then": "si %b entonces",

    "wait until %b": "esperar hasta que %b",

    "repeat until %b": "repetir hasta que %b",

    "stop %m.stop": "detener %m.stop",

    "when I start as a clone": "al comenzar como clon",

    "create clone of %m.spriteOnly": "crear clon de %m.spriteOnly",

    "delete this clone": "borrar este clon",

    "ask %s and wait": "preguntar %s y esperar",

    "turn video %m.videoState": "video %m.videoState",

    "set video transparency to %n%": "fijar transparencia de video a %n%",

    "reset timer": "reiniciar cronometro",

    "set %m.var to %s": "fijar %m.var a %s",

    "change %m.var by %n": "cambiar %m.var por %n",

    "show variable %m.var": "mostrar variable %m.var",

    "hide variable %m.var": "esconder variable %m.var",

    "add %s to %m.list": "anade %s a %m.list",

    "delete %d.listDeleteItem of %m.list": "borrar %d.listDeleteItem de %m.list",

    "if on edge, bounce": "rebotar si toca un borde",

    "insert %s at %d.listItem of %m.list": "insertar %s en %d.listItem de %m.list",

    "replace item %d.listItem of %m.list with %s": "reemplazar elemento %d.listItem de %m.list con %s",

    "show list %m.list": "mostrar lista %m.list",

    "hide list %m.list": "esconder lista %m.list",

    "x position": "posicion en x",

    "y position": "posicion en y",

    "direction": "direccion",

    "costume #": "# de disfraz",

    "size": "tamano",

    "backdrop name": "nombre de fondo",

    "backdrop #": "# de fondo",

    "volume": "volumen",

    "touching %m.touching?": "?tocando %m.touching?",

    "touching color %c?": "?tocando el color %c?",

    "color %c is touching %c?": "?color %c tocando %c?",

    "distance to %m.spriteOrMouse": "distancia a %m.spriteOrMouse",

    "answer": "respuesta",

    "key %m.key pressed?": "?tecla %m.key presionada?",

    "mouse down?": "?raton presionado?",

    "mouse x": "posicion x del raton",

    "mouse y": "posicion y del raton",

    "loudness": "volumen del sonido",

    "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType del video en %m.stageOrThis",

    "timer": "cronometro",

    "%m.attribute of %m.spriteOrStage": "%m.attribute de %m.spriteOrStage",

    "current %m.timeAndDate": "%m.timeAndDate actual",

    "days since 2000": "dias desde el 2000",

    "username": "nombre de usuario",

    "pick random %n to %n": "numero al azar entre %n y %n",

    "%b and %b": "%b y %b",

    "%b or %b": "%b o %b",

    "not %b": "no %b",

    "join %s %s": "unir %s %s",

    "letter %n of %s": "letra %n de %s",

    "length of %s": "longitud de %s",

    "round %n": "redondear %n",

    "%m.mathOp of %n": "%m.mathOp de %n",

    "item %d.listItem of %m.list": "elemento %d.listItem de %m.list",

    "length of %m.list": "longitud de %m.list",

    "%m.list contains %s?": "%m.list contiene %s?",

    "when %m.booleanSensor": "cuando %m.booleanSensor",

    "when %m.sensor %m.lessMore %n": "cuando %m.sensor sea %m.lessMore %n",

    "sensor %m.booleanSensor?": "?sensor %m.booleanSensor activado?",

    "%m.sensor sensor value": "valor del sensor %m.sensor",

    "turn %m.motor on for %n secs": "encender %m.motor por %n segundos",

    "turn %m.motor on": "encender %m.motor",

    "turn %m.motor off": "apagar %m.motor",

    "set %m.motor power to %n": "fijar fuerza del %m.motor a %n",

    "set %m.motor2 direction to %m.motorDirection": "fijar direccion del %m.motor2 a %m.motorDirection",

    "when distance %m.lessMore %n": "cuando la distancia sea %m.lessMore %n",

    "when tilt %m.eNe %n": "cuando inclinacion sea %m.eNe %n",

    "distance": "distancia",

    "tilt": "inclinacion",

    "else": "si no"

  },

  "ignorelt": [

    "cuando la distancia seaundefined"

  ],

  "dropdowns": {

    "A connected": "A conectado",

    "all": "todos",

    "all around": "en todas direcciones",

    "B connected": "B conectado",

    "brightness": "brillantez",

    "button pressed": "boton presionado",

    "C connected": "C conectado",

    "costume name": "nombre del disfraz",

    "D connected": "D conectado",

    "date": "fecha",

    "day of week": "dia de la semana",

    "don't rotate": "no rotar",

    "down arrow": "flecha abajo",

    "edge": "borde",

    "fisheye": "ojo de pez",

    "ghost": "desvanecer",

    "hour": "hora",

    "left arrow": "flecha izquierda",

    "left-right": "izquierda-derecha",

    "light": "luz",

    "minute": "minuto",

    "month": "mes",

    "mosaic": "mosaico",

    "motion": "movimiento",

    "mouse-pointer": "puntero del raton",

    "myself": "mi mismo",

    "off": "apagado",

    "on": "encendido",

    "on-flipped": "encendido e invertido",

    "other scripts in sprite": "otros programas en el objeto",

    "pixelate": "pixelizar",

    "previous backdrop": "fondo anterior",

    "random position": "posicion aleatoria",

    "resistance-A": "resistencia-A",

    "resistance-B": "resistencia-B",

    "resistance-C": "resistencia-C",

    "resistance-D": "resistencia-D",

    "reverse": "reversa",

    "right arrow": "flecha derecha",

    "second": "segundo",

    "slider": "deslizador",

    "sound": "sonido",

    "space": "espacio",

    "Stage": "Escenario",

    "that way": "hacia alla",

    "this script": "este programa",

    "this sprite": "este objeto",

    "this way": "hacia aca",

    "up arrow": "flecha arriba",

    "video motion": "movimiento del video",

    "whirl": "remolino",

    "year": "ano"

  },

  "osis": [

    "otros programas en el objeto",

    "otros programas en el escenario"

  ],

  "define": [

    "definir"

  ],

  "palette": {

    "Motion": "Movimiento",

    "Looks": "Apariencia",

    "Sound": "Sonido",

    "Pen": "Lapiz",

    "Data": "Datos",

    "list": "lista",

    "Events": "Eventos",

    "Sensing": "Sensores",

    "Operators": "Operadores",

    "More Blocks": "Mas Bloques",

    "Tips": "Sugerencias"

  },

  "math": [

    "piso",

    "techo",

    "raiz cuadrada",

    "En"

  ],

  "aliases": {

    "girar a la izquierda %n grados": "turn @turnLeft %n degrees",

    "girar a la derecha %n grados": "turn @turnRight %n degrees",

    "al presionar bandera verde": "when @greenFlag clicked",

    "fin": "end"

  },

  "_name": "Espanol"

}

},{}],6:[function(require,module,exports){

"use strict";module.exports={de:require("./de.json"),es:require("./es.json"),fr:require("./fr.json"),zh_CN:require("./zh_CN.json"),pl:require("./pl.json"),ja:require("./ja.json"),nl:require("./nl.json"),pt:require("./pt.json"),it:require("./it.json"),he:require("./he.json"),ko:require("./ko.json"),nb:require("./nb.json"),tr:require("./tr.json"),el:require("./el.json"),ru:require("./ru.json"),ca:require("./ca.json"),id:require("./id.json")};



},{"./ca.json":2,"./de.json":3,"./el.json":4,"./es.json":5,"./fr.json":7,"./he.json":8,"./id.json":9,"./it.json":10,"./ja.json":11,"./ko.json":12,"./nb.json":13,"./nl.json":14,"./pl.json":15,"./pt.json":16,"./ru.json":17,"./tr.json":18,"./zh_CN.json":19}],7:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "avancer de %n ",

    "turn @turnRight %n degrees": "tourner @turnRight de %n degres",

    "turn @turnLeft %n degrees": "tourner @turnLeft de %n degres",

    "point in direction %d.direction": "s'orienter a %d.direction",

    "point towards %m.spriteOrMouse": "s'orienter vers %m.spriteOrMouse",

    "go to x:%n y:%n": "aller a x:%n y:%n",

    "go to %m.location": "aller a %m.location",

    "glide %n secs to x:%n y:%n": "glisser en %n secondes a x:%n y:%n",

    "change x by %n": "ajouter %n a x",

    "set x to %n": "donner la valeur %n a x",

    "change y by %n": "ajouter %n a y",

    "set y to %n": "donner la valeur %n a y",

    "set rotation style %m.rotationStyle": "fixer le sens de rotation %m.rotationStyle",

    "say %s for %n secs": "dire %s pendant %n secondes",

    "say %s": "dire %s",

    "think %s for %n secs": "penser a %s pendant %n secondes",

    "think %s": "penser a %s",

    "show": "montrer",

    "hide": "cacher",

    "switch costume to %m.costume": "basculer sur le costume %m.costume",

    "next costume": "costume suivant",

    "next backdrop": "arriere-plan suivant",

    "switch backdrop to %m.backdrop": "basculer sur l'arriere-plan %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "basculer sur l'arriere-plan %m.backdrop et attendre",

    "change %m.effect effect by %n": "ajouter a l'effet %m.effect %n",

    "set %m.effect effect to %n": "mettre l'effet %m.effect a %n",

    "clear graphic effects": "annuler les effets graphiques",

    "change size by %n": "ajouter %n a la taille",

    "set size to %n%": "mettre a %n % de la taille initiale",

    "go to front": "aller au premier plan",

    "go back %n layers": "deplacer de %n plans arriere",

    "play sound %m.sound": "jouer le son %m.sound",

    "play sound %m.sound until done": "jouer le son %m.sound jusqu'au bout",

    "stop all sounds": "arreter tous les sons",

    "play drum %d.drum for %n beats": "jouer du tambour %d.drum pendant %n temps",

    "rest for %n beats": "faire une pause pour %n temps",

    "play note %d.note for %n beats": "jouer la note %d.note pendant %n temps",

    "set instrument to %d.instrument": "choisir l'instrument n° %d.instrument",

    "change volume by %n": "ajouter %n au volume",

    "set volume to %n%": "mettre le volume au niveau %n%",

    "change tempo by %n": "ajouter %n au tempo",

    "set tempo to %n bpm": "mettre le tempo a %n bpm",

    "clear": "effacer tout",

    "stamp": "estampiller",

    "pen down": "stylo en position d'ecriture",

    "pen up": "relever le stylo",

    "set pen color to %c": "mettre la couleur du stylo a %c",

    "change pen color by %n": "ajouter %n a la couleur du stylo",

    "set pen color to %n": "mettre la couleur du stylo a %n",

    "change pen shade by %n": "ajouter %n a l'intensite du stylo",

    "set pen shade to %n": "mettre l'intensite du stylo a %n",

    "change pen size by %n": "ajouter %n a la taille du stylo",

    "set pen size to %n": "mettre la taille du stylo a %n",

    "when @greenFlag clicked": "quand @greenFlag est clique",

    "when %m.key key pressed": "quand %m.key est presse",

    "when this sprite clicked": "quand ce lutin est clique",

    "when backdrop switches to %m.backdrop": "quand l'arriere-plan bascule sur %m.backdrop",

    "when %m.triggerSensor > %n": "quand %m.triggerSensor > %n",

    "when I receive %m.broadcast": "quand je recois %m.broadcast",

    "broadcast %m.broadcast": "envoyer a tous %m.broadcast",

    "broadcast %m.broadcast and wait": "envoyer a tous %m.broadcast et attendre",

    "wait %n secs": "attendre %n secondes",

    "repeat %n": "repeter %n fois",

    "forever": "repeter indefiniment",

    "if %b then": "si %b alors",

    "wait until %b": "attendre jusqu’a %b",

    "repeat until %b": "repeter jusqu’a %b",

    "when I start as a clone": "quand je commence comme un clone",

    "create clone of %m.spriteOnly": "creer un clone de %m.spriteOnly",

    "delete this clone": "supprimer ce clone",

    "ask %s and wait": "demander %s et attendre",

    "turn video %m.videoState": "activer la video %m.videoState",

    "set video transparency to %n%": "mettre la transparence video a %n%",

    "reset timer": "reinitialiser le chronometre",

    "set %m.var to %s": "mettre %m.var a %s",

    "change %m.var by %n": "ajouter a %m.var %n",

    "show variable %m.var": "montrer la variable %m.var",

    "hide variable %m.var": "cacher la variable %m.var",

    "add %s to %m.list": "ajouter %s a %m.list",

    "delete %d.listDeleteItem of %m.list": "supprimer l'element %d.listDeleteItem de la liste %m.list",

    "if on edge, bounce": "rebondir si le bord est atteint",

    "insert %s at %d.listItem of %m.list": "inserer %s en position %d.listItem de la liste %m.list",

    "replace item %d.listItem of %m.list with %s": "remplacer l'element %d.listItem de la liste %m.list par %s",

    "show list %m.list": "montrer la liste %m.list",

    "hide list %m.list": "cacher la liste %m.list",

    "x position": "abscisse x",

    "y position": "ordonnee y",

    "size": "taille",

    "backdrop name": "nom de l'arriere-plan",

    "backdrop #": "arriere-plan #",

    "touching %m.touching?": "%m.touching touche?",

    "touching color %c?": "couleur %c touchee?",

    "color %c is touching %c?": "couleur %c touche %c?",

    "distance to %m.spriteOrMouse": "distance de %m.spriteOrMouse",

    "answer": "reponse",

    "key %m.key pressed?": "touche %m.key pressee?",

    "mouse down?": "souris pressee?",

    "mouse x": "souris x",

    "mouse y": "souris y",

    "loudness": "volume sonore",

    "video %m.videoMotionType on %m.stageOrThis": "video %m.videoMotionType sur %m.stageOrThis",

    "timer": "chronometre",

    "%m.attribute of %m.spriteOrStage": "%m.attribute de %m.spriteOrStage",

    "current %m.timeAndDate": "actuel %m.timeAndDate",

    "days since 2000": "jours depuis 2000",

    "username": "nom d'utilisateur",

    "pick random %n to %n": "nombre aleatoire entre %n et %n",

    "%b and %b": "%b et %b",

    "%b or %b": "%b ou %b",

    "not %b": "non %b",

    "join %s %s": "regroupe %s %s",

    "letter %n of %s": "lettre %n de %s",

    "length of %s": "longueur de %s",

    "%n mod %n": "%n modulo %n",

    "round %n": "arrondi de %n",

    "%m.mathOp of %n": "%m.mathOp de %n",

    "item %d.listItem of %m.list": "element %d.listItem de %m.list",

    "length of %m.list": "longueur de %m.list",

    "%m.list contains %s?": "%m.list contient %s?",

    "when %m.booleanSensor": "quand %m.booleanSensor",

    "when %m.sensor %m.lessMore %n": "quand %m.sensor %m.lessMore %n",

    "sensor %m.booleanSensor?": "capteur %m.booleanSensor active?",

    "%m.sensor sensor value": "valeur du capteur %m.sensor",

    "turn %m.motor on for %n secs": "allumer le %m.motor pour %n secs",

    "turn %m.motor on": "allumer le %m.motor",

    "turn %m.motor off": "arreter le %m.motor",

    "set %m.motor power to %n": "fixer %m.motor a la puissance %n",

    "set %m.motor2 direction to %m.motorDirection": "fixer la direction de %m.motor2 en sens %m.motorDirection",

    "when distance %m.lessMore %n": "quand la distance %m.lessMore %n",

    "when tilt %m.eNe %n": "quand l'inclinaison %m.eNe %n",

    "tilt": "inclinaison",

    "else": "sinon"

  },

  "ignorelt": [

    "quand la distanceundefined"

  ],

  "dropdowns": {

    "A connected": "A connecte",

    "all": "tout",

    "all around": "a 360°",

    "B connected": "B connecte",

    "brightness": "luminosite",

    "button pressed": "bouton presse",

    "C connected": "C connecte",

    "color": "couleur",

    "costume name": "nom du costume",

    "D connected": "D connecte",

    "day of week": "jour de la semaine",

    "don't rotate": "ne pivote pas",

    "down arrow": "fleche bas",

    "edge": "bord",

    "fisheye": "oeil de poisson",

    "ghost": "fantome",

    "hour": "heure",

    "left arrow": "fleche gauche",

    "left-right": "position a gauche ou a droite",

    "light": "lumiere",

    "month": "mois",

    "mosaic": "mosaique",

    "motion": "mouvement",

    "mouse-pointer": "pointeur de souris",

    "myself": "moi-meme",

    "off": "Desactive",

    "on": "Active",

    "on-flipped": "effet miroir",

    "other scripts in sprite": "autres scripts du lutin",

    "pixelate": "pixeliser",

    "previous backdrop": "arriere-plan precedent",

    "random position": "Position aleatoire",

    "resistance-A": "Resistance-A",

    "resistance-B": "Resistance-B",

    "resistance-C": "Resistance-C",

    "resistance-D": "Resistance-D",

    "reverse": "inverse",

    "right arrow": "fleche droite",

    "second": "seconde",

    "slider": "potentiometre",

    "sound": "son",

    "space": "espace",

    "Stage": "Scene",

    "that way": "par la",

    "this script": "ce script",

    "this sprite": "ce lutin",

    "this way": "par ici",

    "up arrow": "fleche haut",

    "video motion": "mouvement video",

    "whirl": "tournoyer",

    "year": "annee"

  },

  "osis": [

    "autres scripts du lutin",

    "autres scripts"

  ],

  "define": [

    "definir"

  ],

  "palette": {

    "Motion": "Mouvement",

    "Looks": "Apparence",

    "Sound": "Sons",

    "Pen": "Stylo",

    "Data": "Donnees",

    "list": "liste",

    "Events": "Evenements",

    "Control": "Controle",

    "Sensing": "Capteurs",

    "Operators": "Operateurs",

    "More Blocks": "Ajouter blocs",

    "Tips": "Conseils"

  },

  "math": [

    "plancher",

    "plafond",

    "racine",

    "10^"

  ],

  "aliases": {

    "tourner gauche de %n degres": "turn @turnLeft %n degrees",

    "tourner droite de %n degres": "turn @turnRight %n degrees",

    "quand le drapeau vert presse": "when @greenFlag clicked",

    "fin": "end"

  },

  "_name": "Francais"

}

},{}],8:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "??? %n ?????",

    "turn @turnRight %n degrees": "?????? @turnRight %n ?????",

    "turn @turnLeft %n degrees": "?????? @turnLeft %n ?????",

    "point in direction %d.direction": "??? ?????? %d.direction",

    "point towards %m.spriteOrMouse": "??? ?????? ?? %m.spriteOrMouse",

    "go to x:%n y:%n": " ???? ?? :x %n :y %n",

    "go to %m.location": "???? ?? %m.location",

    "glide %n secs to x:%n y:%n": "???? %n ????? ? :x %n :y %n",

    "change x by %n": "??? ??? x ? %n",

    "set x to %n": "??? ??? x ? %n",

    "change y by %n": "??? ??? y ? %n",

    "set y to %n": "??? ??? y ? %n",

    "set rotation style %m.rotationStyle": "??? ???? ????? %m.rotationStyle",

    "say %s for %n secs": "???? %s ???? %n ?????",

    "say %s": "???? %s",

    "think %s for %n secs": "???? %s ???? %n ?????",

    "think %s": "???? %s",

    "show": "???",

    "hide": "????",

    "switch costume to %m.costume": "??? ?????? ? %m.costume",

    "next costume": "??????? ????",

    "next backdrop": "???? ????",

    "switch backdrop to %m.backdrop": "??? ??? ? %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "??? ??? ? %m.backdrop ????",

    "change %m.effect effect by %n": "??? ???? %m.effect ? %n",

    "set %m.effect effect to %n": "??? ???? %m.effect ? %n",

    "clear graphic effects": "??? ??????",

    "change size by %n": "??? ???? ? %n",

    "set size to %n%": "??? ???? ? %n%",

    "go to front": "???? ?????? ??????",

    "go back %n layers": "???? %n ????? ?????",

    "play sound %m.sound": "??? ???? %m.sound",

    "play sound %m.sound until done": "??? ???? %m.sound ?? ?????",

    "stop all sounds": "???? ?? ?? ???????",

    "play drum %d.drum for %n beats": "??? ???? %d.drum ???? %n ??????",

    "rest for %n beats": "??? ???? %n ??????",

    "play note %d.note for %n beats": "??? ?? %d.note ???? %n ??????",

    "set instrument to %d.instrument": "??? ??? ????? ? %d.instrument",

    "change volume by %n": "??? ????? ??? ? %n",

    "set volume to %n%": "??? ????? ??? ? %n%",

    "change tempo by %n": "??? ??? ? %n",

    "set tempo to %n bpm": "??? ??? ? %n ?????? ????",

    "clear": "???",

    "stamp": "????",

    "pen down": "?? ???",

    "pen up": "?? ????",

    "set pen color to %c": "??? ??? ?? ? %c",

    "change pen color by %n": "??? ??? ?? ? %n",

    "set pen color to %n": "??? ??? ?? ? %n",

    "change pen shade by %n": "??? ????? ?? ? %n",

    "set pen shade to %n": "??? ????? ?? ? %n",

    "change pen size by %n": "??? ???? ?? ? %n",

    "set pen size to %n": "??? ???? ?? ? %n",

    "when @greenFlag clicked": "???? ?????? ??  @greenFlag  ",

    "when %m.key key pressed": "???? ???? ??? %m.key ",

    "when this sprite clicked": "???? ?????? ?? ???? ??",

    "when backdrop switches to %m.backdrop": "???? ???? ????? ? %m.backdrop",

    "when %m.triggerSensor > %n": "???? %m.triggerSensor < %n",

    "when I receive %m.broadcast": "???? ????? ??? %m.broadcast",

    "broadcast %m.broadcast": "??? ??? %m.broadcast",

    "broadcast %m.broadcast and wait": "??? ??? %m.broadcast ????",

    "wait %n secs": "??? %n ?????",

    "repeat %n": "???? %n ?????",

    "forever": "???????",

    "if %b then": "?? %b ??",

    "wait until %b": "??? ?? ? %b",

    "repeat until %b": "???? ?? ? %b",

    "stop %m.stop": "???? %m.stop",

    "when I start as a clone": "????? ????? ?????",

    "create clone of %m.spriteOnly": "??? ???? ?? %m.spriteOnly",

    "delete this clone": "??? ???? ??",

    "ask %s and wait": "??? %s ?????",

    "turn video %m.videoState": "??? ??? ????? ? %m.videoState",

    "set video transparency to %n%": "??? ?????? ????? ? %n%",

    "reset timer": "??? ????",

    "set %m.var to %s": "??? %m.var ? %s",

    "change %m.var by %n": "??? ??? %m.var ? %n",

    "show variable %m.var": "??? ????? %m.var",

    "hide variable %m.var": "???? ????? %m.var",

    "add %s to %m.list": "???? %s ? %m.list",

    "delete %d.listDeleteItem of %m.list": "??? ???? %d.listDeleteItem ???? %m.list",

    "if on edge, bounce": "?????? ?????? ???? ?????",

    "insert %s at %d.listItem of %m.list": "???? %s ????? %d.listItem ?? %m.list",

    "replace item %d.listItem of %m.list with %s": "??? ???? %d.listItem ?? %m.list ? %s",

    "show list %m.list": "??? ????? %m.list",

    "hide list %m.list": "???? ????? %m.list",

    "x position": "????? ?? ??? x",

    "y position": "????? ?? ??? y",

    "direction": "?????",

    "costume #": "??????",

    "size": "????",

    "backdrop name": "???",

    "backdrop #": "# ???",

    "volume": "????? ???",

    "tempo": "???",

    "touching %m.touching?": "???? ? %m.touching?",

    "touching color %c?": "???? ???? %c?",

    "color %c is touching %c?": "??? %c ???? ???? %c ?",

    "distance to %m.spriteOrMouse": "????? ?? %m.spriteOrMouse",

    "answer": "?????",

    "key %m.key pressed?": "??? %m.key ???? ?",

    "mouse down?": "???? ???? ?",

    "mouse x": "??? ???? ???? x",

    "mouse y": "??? ???? ???? y",

    "loudness": "????? ?????????",

    "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType ????? ?? %m.stageOrThis",

    "timer": "????",

    "%m.attribute of %m.spriteOrStage": "%m.attribute ?? %m.spriteOrStage",

    "current %m.timeAndDate": "%m.timeAndDate ??????",

    "days since 2000": "???? ??? 2000",

    "username": "?? ?????",

    "pick random %n to %n": "??? ???? ????? ??? %n ? %n",

    "%b and %b": "%b ??? %b",

    "%b or %b": "%b ?? %b",

    "not %b": "?? %b",

    "join %s %s": "??? %s %s",

    "letter %n of %s": "??? %n ?? %s",

    "length of %s": "???? ?? %s",

    "%n mod %n": "%n ????? %n",

    "round %n": "??? %n",

    "%m.mathOp of %n": "%m.mathOp ?? %n",

    "item %d.listItem of %m.list": "???? %d.listItem ?? %m.list",

    "length of %m.list": "???? ?? %m.list",

    "%m.list contains %s?": "%m.list ???? %s?",

    "when %m.booleanSensor": "???? %m.booleanSensor",

    "sensor %m.booleanSensor?": "???? %m.booleanSensor ?",

    "%m.sensor sensor value": "??? ???? %m.sensor",

    "distance": "????",

    "tilt": "????",

    "else": "??? ??"

  },

  "ignorelt": [],

  "dropdowns": {

    "A connected": "A ?????",

    "all": "???",

    "all around": "?????",

    "B connected": "B ?????",

    "brightness": "??????",

    "button pressed": "????? ????",

    "C connected": "C ?????",

    "color": "???",

    "costume name": "?? ???????",

    "D connected": "D ?????",

    "date": "?????",

    "day of week": "??? ?????",

    "don't rotate": "?? ?????",

    "down arrow": "?? ???",

    "edge": "???",

    "fisheye": "??? ??",

    "ghost": "??? ?????",

    "hour": "???",

    "left arrow": "?? ?????",

    "left-right": "????-????",

    "light": "???",

    "minute": "???",

    "month": "????",

    "mosaic": "?????",

    "motion": "?????",

    "mouse-pointer": "??? ?????",

    "myself": "????",

    "off": "???",

    "on": "????",

    "on-flipped": "????? ???",

    "other scripts in sprite": "??????? ????? ?????",

    "pixelate": "???????",

    "previous backdrop": "??? ?????",

    "random position": "????? ?????",

    "resistance-A": "???????-A",

    "resistance-B": "???????-B",

    "resistance-C": "???????-C",

    "resistance-D": "???????-D",

    "reverse": "????",

    "right arrow": "?? ????",

    "second": "????",

    "slider": "????",

    "sound": "????",

    "space": "????",

    "Stage": "???",

    "that way": "???? ????",

    "this script": "????? ??",

    "this sprite": "???? ??",

    "this way": "???? ????",

    "up arrow": "?? ????",

    "video motion": "????? ?????",

    "whirl": "?????",

    "year": "???"

  },

  "osis": [

    "??????? ????? ?????",

    "??????? ????? ????"

  ],

  "define": [

    "????"

  ],

  "palette": {

    "Motion": "?????",

    "Looks": "????",

    "Sound": "??????",

    "Pen": "??",

    "Data": "??????",

    "variable": "?????",

    "list": "?????",

    "Events": "???????",

    "Control": "????",

    "Sensing": "???????",

    "Operators": "???????",

    "More Blocks": "????? ??????",

    "Tips": "?????"

  },

  "math": [

    "????",

    "????",

    "?????",

    " ^e"

  ],

  "aliases": {

    "?????? ???? %n ?????": "turn @turnLeft %n degrees",

    "?????? ????? %n ?????": "turn @turnRight %n degrees",

    "???? ?????? ?? ??? ????": "when @greenFlag clicked",

    "???": "end"

  },

  "_name": "????????"

}

},{}],9:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "gerak %n langkah",

    "turn @turnRight %n degrees": "putar @turnRight %n derajat",

    "turn @turnLeft %n degrees": "putar @turnLeft %n derajat",

    "point in direction %d.direction": "mengarah ke arah %d.direction",

    "point towards %m.spriteOrMouse": "mengarah ke %m.spriteOrMouse",

    "go to x:%n y:%n": "pergi ke x:%n y:%n",

    "go to %m.location": "pergi ke %m.location",

    "glide %n secs to x:%n y:%n": "meluncur %n detik ke x:%n y:%n",

    "change x by %n": "ubah x sebesar %n",

    "set x to %n": "atur x ke %n",

    "change y by %n": "ubah y sebesar %n",

    "set y to %n": "atur y ke %n",

    "set rotation style %m.rotationStyle": "atur gaya rotasi %m.rotationStyle",

    "say %s for %n secs": "katakan %s selama %n detik",

    "say %s": "katakan %s",

    "think %s for %n secs": "berpikir %s selama %n detik",

    "think %s": "berpikir %s",

    "show": "tampilkan",

    "hide": "sembunyikan",

    "switch costume to %m.costume": "ganti kostum ke %m.costume",

    "next costume": "kostum berikutnya",

    "next backdrop": "latar berikutnya",

    "switch backdrop to %m.backdrop": "ganti latar ke %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "ganti latar ke %m.backdrop dan tunggu",

    "change %m.effect effect by %n": "ubah efek %m.effect sebesar %n",

    "set %m.effect effect to %n": "atur efek %m.effect ke %n",

    "clear graphic effects": "hapus semua efek grafis",

    "change size by %n": "ubah ukuran sebesar %n",

    "set size to %n%": "atur ukuran ke %n%",

    "go to front": "maju ke depan",

    "go back %n layers": "pergi ke belakang %n lapisan",

    "play sound %m.sound": "mainkan suara %m.sound",

    "play sound %m.sound until done": "mainkan suara %m.sound sampai selesai",

    "stop all sounds": "hentikan semua suara",

    "play drum %d.drum for %n beats": "mainkan drum %d.drum sebanyak %n ketukan",

    "rest for %n beats": "diam selama %n ketukan",

    "play note %d.note for %n beats": "bunyikan nada %d.note sebanyak %n ketukan",

    "set instrument to %d.instrument": "atur alat musik ke %d.instrument",

    "change volume by %n": "ubah volume sebesar %n",

    "set volume to %n%": "atur volume ke %n%",

    "change tempo by %n": "ubah tempo sebesar %n",

    "set tempo to %n bpm": "atur tempo ke %n ketukan per menit",

    "clear": "bersihkan",

    "stamp": "cap",

    "pen down": "tekan pena",

    "pen up": "angkat pena",

    "set pen color to %c": "atur warna pena ke %c",

    "change pen color by %n": "ubah warna pena sebesar %n",

    "set pen color to %n": "atur warna pena ke %n",

    "change pen shade by %n": "ubah kegelapan pena sebesar %n",

    "set pen shade to %n": "atur kegelapan pena ke %n",

    "change pen size by %n": "ubah ukuran pena sebesar %n",

    "set pen size to %n": "atur ukuran pena ke %n",

    "when @greenFlag clicked": "ketika @greenFlag diklik",

    "when %m.key key pressed": "ketika tombol %m.key ditekan",

    "when this sprite clicked": "ketika sprite ini diklik",

    "when backdrop switches to %m.backdrop": "ketika latar menjadi %m.backdrop",

    "when %m.triggerSensor > %n": "ketika %m.triggerSensor > %n",

    "when I receive %m.broadcast": "ketika aku menerima %m.broadcast",

    "broadcast %m.broadcast": "siarkan pesan %m.broadcast",

    "broadcast %m.broadcast and wait": "siarkan pesan %m.broadcast dan tunggu",

    "wait %n secs": "tunggu %n detik",

    "repeat %n": "ulangi %n kali",

    "forever": "selamanya",

    "if %b then": "jika %b maka",

    "wait until %b": "tunggu sampai %b",

    "repeat until %b": "ulangi sampai %b",

    "stop %m.stop": "berhenti %m.stop",

    "when I start as a clone": "ketika aku mulai sebagai clone",

    "create clone of %m.spriteOnly": "buat clone dari %m.spriteOnly",

    "delete this clone": "hapus clone ini",

    "ask %s and wait": "tanya %s dan tunggu",

    "turn video %m.videoState": "putar video %m.videoState",

    "set video transparency to %n%": "atur transparansi video ke %n%",

    "reset timer": "atur ulang pengatur waktu",

    "set %m.var to %s": "atur %m.var ke %s",

    "change %m.var by %n": "ubah %m.var sebesar %n",

    "show variable %m.var": "tampilkan variabel %m.var",

    "hide variable %m.var": "sembunyikan variable %m.var",

    "add %s to %m.list": "tambahkan %s ke %m.list",

    "delete %d.listDeleteItem of %m.list": "hapus %d.listDeleteItem dari %m.list",

    "if on edge, bounce": "jika di pinggir, pantulkan",

    "insert %s at %d.listItem of %m.list": "sisipkan %s pada %d.listItem dari %m.list",

    "replace item %d.listItem of %m.list with %s": "gantikan benda %d.listItem dari %m.list dengan %s",

    "show list %m.list": "tampilkan daftar %m.list",

    "hide list %m.list": "sembunyikan daftar %m.list",

    "x position": "posisi x",

    "y position": "posisi y",

    "direction": "arah",

    "costume #": "kostum #",

    "size": "ukuran",

    "backdrop name": "nama latar",

    "backdrop #": "latar #",

    "touching %m.touching?": "menyentuh %m.touching?",

    "touching color %c?": "menyentuh warna %c?",

    "color %c is touching %c?": "warna %c menyentuh warna %c?",

    "distance to %m.spriteOrMouse": "jarak dari %m.spriteOrMouse",

    "answer": "jawaban",

    "key %m.key pressed?": "tombol %m.key tertekan?",

    "mouse down?": "mouse tertekan?",

    "loudness": "kenyaringan",

    "video %m.videoMotionType on %m.stageOrThis": "video %m.videoMotionType pada %m.stageOrThis",

    "timer": "pengatur waktu",

    "%m.attribute of %m.spriteOrStage": "%m.attribute dari %m.spriteOrStage",

    "current %m.timeAndDate": "%m.timeAndDate saat ini",

    "days since 2000": "hari-hari sejak 2000",

    "pick random %n to %n": "pilih acak dari %n hingga %n",

    "%b and %b": "%b dan %b",

    "%b or %b": "%b atau %b",

    "not %b": "tidak %b",

    "join %s %s": "gabungkan %s %s",

    "letter %n of %s": "huruf ke%n dari %s",

    "length of %s": "panjang dari %s",

    "round %n": "bulatkan %n",

    "%m.mathOp of %n": "%m.mathOp dari %n",

    "item %d.listItem of %m.list": "benda %d.listItem dari %m.list",

    "length of %m.list": "panjang dari %m.list",

    "%m.list contains %s?": "%m.list berisi %s?",

    "when %m.booleanSensor": "ketika %m.booleanSensor",

    "when %m.sensor %m.lessMore %n": "ketika %m.sensor %m.lessMore %n",

    "%m.sensor sensor value": "nilai sensor %m.sensor",

    "turn %m.motor on for %n secs": "hidupkan %m.motor selama %n detik",

    "turn %m.motor on": "hidupkan %m.motor",

    "turn %m.motor off": "matikan %m.motor",

    "set %m.motor power to %n": "atur kekuatan %m.motor pada %n",

    "set %m.motor2 direction to %m.motorDirection": "atur arah %m.motor2 ke %m.motorDirection",

    "when distance %m.lessMore %n": "ketika jarak %m.lessMore %n",

    "when tilt %m.eNe %n": "ketika kemiringan %m.eNe %n",

    "distance": "jarak",

    "tilt": "miring",

    "else": "jika tidak"

  },

  "ignorelt": [

    "ketika jarakundefined"

  ],

  "dropdowns": {

    "A connected": "A tersambung",

    "all": "semua",

    "all around": "seluruh",

    "B connected": "B tersambung",

    "brightness": "kecerahan",

    "button pressed": "tombol ditekan",

    "C connected": "C tersambung",

    "color": "warna",

    "costume name": "nama kostum",

    "D connected": "D terkoneksi",

    "date": "tanggal",

    "day of week": "hari",

    "don't rotate": "tidak berputar",

    "down arrow": "panah bawah",

    "edge": "pinggir",

    "fisheye": "mata ikan",

    "ghost": "bayangan",

    "hour": "jam",

    "left arrow": "panah kiri",

    "left-right": "kiri-kanan",

    "light": "cahaya",

    "minute": "menit",

    "month": "bulan",

    "mosaic": "mosaik",

    "motion": "gerakan",

    "mouse-pointer": "penunjuk-mouse",

    "myself": "diriku",

    "off": "mati",

    "on": "hidup",

    "on-flipped": "hidup dan telah dibalik",

    "other scripts in sprite": "script lain di sprite ini",

    "previous backdrop": "Latar sebelumnya",

    "random position": "posisi sembarang",

    "resistance-A": "resistan-A",

    "resistance-B": "resistan-B",

    "resistance-C": "resistan-C",

    "resistance-D": "resistan-D",

    "reverse": "balikkan arah",

    "right arrow": "panah kanan",

    "second": "detik",

    "sound": "suara",

    "space": "spasi",

    "that way": "ke arah sana",

    "this script": "script ini",

    "this sprite": "sprite ini",

    "this way": "ke arah sini",

    "up arrow": "panah atas",

    "whirl": "pusaran",

    "year": "tahun"

  },

  "osis": [

    "script lain di sprite ini",

    "skrip lain di panggung ini"

  ],

  "define": [

    "artikan"

  ],

  "palette": {

    "Motion": "Gerakan",

    "Looks": "Tampilan",

    "Sound": "Suara",

    "Pen": "Pena",

    "variable": "variabel",

    "list": "daftar",

    "Events": "Kejadian",

    "Control": "Kontrol",

    "Sensing": "Sensor",

    "Operators": "Operator",

    "More Blocks": "Balok Lainnya"

  },

  "math": [

    "lantai",

    "akar kuadrat",

    "di dalam"

  ],

  "aliases": {

    "putar ke kiri %n derajat": "turn @turnLeft %n degrees",

    "putar ke kanan %n derajat": "turn @turnRight %n degrees",

    "ketika bendera hijau diklik": "when @greenFlag clicked",

    "selesai": "end"

  },

  "_name": "Bahasa Indonesia"

}

},{}],10:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "fai %n passi",

    "turn @turnRight %n degrees": "ruota di @turnRight %n gradi",

    "turn @turnLeft %n degrees": "ruota di @turnLeft %n gradi",

    "point in direction %d.direction": "punta in direzione %d.direction",

    "point towards %m.spriteOrMouse": "punta verso %m.spriteOrMouse",

    "go to x:%n y:%n": "vai a x:%n y:%n",

    "go to %m.location": "raggiungi %m.location",

    "glide %n secs to x:%n y:%n": "scivola in %n secondi a x:%n y:%n",

    "change x by %n": "cambia x di %n",

    "set x to %n": "vai dove x e %n",

    "change y by %n": "cambia y di %n",

    "set y to %n": "vai dove y e %n",

    "set rotation style %m.rotationStyle": "porta stile rotazione a %m.rotationStyle",

    "say %s for %n secs": "dire %s per %n secondi",

    "say %s": "dire %s",

    "think %s for %n secs": "pensa %s per %n secondi",

    "think %s": "pensa %s",

    "show": "mostra",

    "hide": "nascondi",

    "switch costume to %m.costume": "passa al costume %m.costume",

    "next costume": "passa al costume seguente",

    "next backdrop": "passa allo sfondo seguente",

    "switch backdrop to %m.backdrop": "passa allo sfondo %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "passa allo sfondo %m.backdrop e attendi",

    "change %m.effect effect by %n": "cambia effetto %m.effect di %n",

    "set %m.effect effect to %n": "porta effetto %m.effect a %n",

    "clear graphic effects": "rimuovi effetti grafici",

    "change size by %n": "cambia dimensione di %n",

    "set size to %n%": "porta dimensione al %n%",

    "go to front": "vai in primo piano",

    "go back %n layers": "vai indietro di %n livelli",

    "play sound %m.sound": "produci suono %m.sound",

    "play sound %m.sound until done": "produci suono %m.sound e attendi la fine",

    "stop all sounds": "arresta tutti i suoni",

    "play drum %d.drum for %n beats": "suona tamburo %d.drum per %n battute",

    "rest for %n beats": "fai una pausa di %n battute",

    "play note %d.note for %n beats": "suona nota %d.note per %n battute",

    "set instrument to %d.instrument": "passa a strumento %d.instrument",

    "change volume by %n": "cambia volume di %n",

    "set volume to %n%": "porta volume a %n%",

    "change tempo by %n": "cambia tempo di %n",

    "set tempo to %n bpm": "porta tempo a %n bpm",

    "clear": "pulisci",

    "stamp": "timbra",

    "pen down": "penna giu",

    "pen up": "penna su",

    "set pen color to %c": "usa penna di colore %c",

    "change pen color by %n": "cambia colore penna di %n",

    "set pen color to %n": "usa penna di colore %n",

    "change pen shade by %n": "cambia luminosita penna di %n",

    "set pen shade to %n": "porta luminosita penna a %n",

    "change pen size by %n": "cambia dimensione penna di %n",

    "set pen size to %n": "usa penna di dimensione %n",

    "when @greenFlag clicked": "quando si clicca su @greenFlag",

    "when %m.key key pressed": "quando si preme il tasto %m.key",

    "when this sprite clicked": "quando si clicca questo sprite",

    "when backdrop switches to %m.backdrop": "quando lo sfondo passa a %m.backdrop",

    "when %m.triggerSensor > %n": "quando %m.triggerSensor > %n",

    "when I receive %m.broadcast": "quando ricevo %m.broadcast",

    "broadcast %m.broadcast": "invia a tutti %m.broadcast",

    "broadcast %m.broadcast and wait": "invia a tutti %m.broadcast e attendi",

    "wait %n secs": "attendi %n secondi",

    "repeat %n": "ripeti %n volte",

    "forever": "per sempre",

    "if %b then": "se %b allora",

    "wait until %b": "attendi fino a quando %b",

    "repeat until %b": "ripeti fino a quando %b",

    "stop %m.stop": "ferma %m.stop",

    "when I start as a clone": "quando vengo clonato",

    "create clone of %m.spriteOnly": "crea clone di %m.spriteOnly",

    "delete this clone": "elimina questo clone",

    "ask %s and wait": "chiedi %s e attendi",

    "turn video %m.videoState": "%m.videoState il video della webcam",

    "set video transparency to %n%": "porta la trasparenza della webcam a %n%",

    "reset timer": "azzera cronometro",

    "set %m.var to %s": "porta %m.var a %s",

    "change %m.var by %n": "cambia %m.var di %n",

    "show variable %m.var": "mostra la variabile %m.var",

    "hide variable %m.var": "nascondi la variabile %m.var",

    "add %s to %m.list": "aggiungi %s a %m.list",

    "delete %d.listDeleteItem of %m.list": "cancella %d.listDeleteItem da %m.list",

    "if on edge, bounce": "rimbalza quando tocchi il bordo",

    "insert %s at %d.listItem of %m.list": "inserisci %s alla posizione %d.listItem di %m.list",

    "replace item %d.listItem of %m.list with %s": "sostituisci elemento %d.listItem di %m.list con %s",

    "show list %m.list": "mostra la lista %m.list",

    "hide list %m.list": "nascondi la lista %m.list",

    "x position": "posizione x",

    "y position": "posizione y",

    "direction": "direzione",

    "costume #": "numero del costume",

    "size": "dimensione",

    "backdrop name": "nome dello sfondo",

    "backdrop #": "numero dello sfondo",

    "touching %m.touching?": "sta toccando %m.touching",

    "touching color %c?": "sta toccando il colore %c",

    "color %c is touching %c?": "il colore %c sta toccando il colore %c",

    "distance to %m.spriteOrMouse": "distanza da %m.spriteOrMouse",

    "answer": "risposta",

    "key %m.key pressed?": "tasto %m.key premuto",

    "mouse down?": "pulsante del mouse premuto",

    "mouse x": "x del mouse",

    "mouse y": "y del mouse",

    "loudness": "volume microfono",

    "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType del video della webcam rispetto a %m.stageOrThis",

    "timer": "cronometro",

    "%m.attribute of %m.spriteOrStage": "%m.attribute di %m.spriteOrStage",

    "current %m.timeAndDate": "%m.timeAndDate attuale",

    "days since 2000": "giorni trascorsi dal 2000",

    "pick random %n to %n": "numero a caso tra %n e %n",

    "%b and %b": "%b e %b",

    "%b or %b": "%b o %b",

    "not %b": "non %b",

    "join %s %s": "unione di %s e %s",

    "letter %n of %s": "lettera %n di %s",

    "length of %s": "lunghezza di %s",

    "%n mod %n": "resto della divisione di %n diviso %n",

    "round %n": "arrotonda %n",

    "%m.mathOp of %n": "%m.mathOp di %n",

    "item %d.listItem of %m.list": "elemento %d.listItem di %m.list",

    "length of %m.list": "lunghezza di %m.list",

    "%m.list contains %s?": "%m.list contiene %s",

    "when %m.booleanSensor": "quando %m.booleanSensor",

    "when %m.sensor %m.lessMore %n": "quando %m.sensor %m.lessMore %n",

    "sensor %m.booleanSensor?": "sensore %m.booleanSensor",

    "%m.sensor sensor value": "valore del sensore %m.sensor",

    "turn %m.motor on for %n secs": "accendi %m.motor per %n secondi",

    "turn %m.motor on": "accendi %m.motor",

    "turn %m.motor off": "spegni %m.motor",

    "set %m.motor power to %n": "porta potenza %m.motor a %n",

    "set %m.motor2 direction to %m.motorDirection": "porta direzione %m.motor2 a %m.motorDirection",

    "when distance %m.lessMore %n": "quando distanza %m.lessMore %n",

    "when tilt %m.eNe %n": "quando inclinazione %m.eNe %n",

    "distance": "distanza",

    "tilt": "inclinazione",

    "else": "altrimenti"

  },

  "ignorelt": [

    "quando la distanzaundefined"

  ],

  "dropdowns": {

    "A connected": "A connesso",

    "all": "tutto",

    "all around": "puo ruotare",

    "B connected": "B connesso",

    "brightness": "luminosita",

    "button pressed": "pulsante premuto",

    "C connected": "C connesso",

    "color": "colore",

    "costume name": "nome costume",

    "D connected": "D connesso",

    "date": "giorno",

    "day of week": "giorno della settimana",

    "don't rotate": "non ruotare",

    "down arrow": "freccia giu",

    "edge": "bordo",

    "fisheye": "fish-eye",

    "ghost": "fantasma",

    "hour": "ora",

    "left arrow": "freccia sinistra",

    "left-right": "sinistra-destra",

    "light": "luce",

    "minute": "minuto",

    "month": "mese",

    "mosaic": "mosaico",

    "motion": "movimento",

    "mouse-pointer": "puntatore del mouse",

    "myself": "me stesso",

    "off": "spegni",

    "on": "accendi",

    "on-flipped": "accendi e inverti",

    "other scripts in sprite": "tutti gli altri script dello sprite",

    "pixelate": "effetto pixel",

    "previous backdrop": "sfondo precedente",

    "random position": "posizione scelta a caso",

    "resistance-A": "resistenza-A",

    "resistance-B": "resistenza-B",

    "resistance-C": "resistenza-C",

    "resistance-D": "resistenza-D",

    "reverse": "inversione",

    "right arrow": "freccia destra",

    "second": "secondo",

    "slider": "cursore",

    "sound": "suono",

    "space": "spazio",

    "that way": "da quella parte",

    "this script": "questo script",

    "this sprite": "questo sprite",

    "this way": "da questa parte",

    "up arrow": "freccia su",

    "video motion": "movimento del video",

    "whirl": "mulinello",

    "year": "anno"

  },

  "osis": [

    "tutti gli altri script dello sprite",

    "tutti gli altri script dello stage"

  ],

  "define": [

    "definisci"

  ],

  "palette": {

    "Motion": "Movimento",

    "Looks": "Aspetto",

    "Sound": "Suono",

    "Pen": "Penna",

    "Data": "Variabili e Liste",

    "variable": "variabile",

    "list": "lista",

    "Events": "Situazioni",

    "Control": "Controllo",

    "Sensing": "Sensori",

    "Operators": "Operatori",

    "More Blocks": "Altri Blocchi",

    "Tips": "Suggerimenti"

  },

  "math": [

    "intero inferiore",

    "intero superiore",

    "radq"

  ],

  "aliases": {

    "ruota in senso antiorario di %n gradi": "turn @turnLeft %n degrees",

    "ruota in senso orario di %n gradi": "turn @turnRight %n degrees",

    "quando si clicca sulla bandiera verde": "when @greenFlag clicked",

    "fine": "end"

  },

  "_name": "Italiano"

}

},{}],11:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "%n 歩動かす",

    "turn @turnRight %n degrees": "@turnRight %n 度回す",

    "turn @turnLeft %n degrees": "@turnLeft %n 度回す",

    "point in direction %d.direction": "%d.direction 度に向ける",

    "point towards %m.spriteOrMouse": "%m.spriteOrMouse へ向ける",

    "go to x:%n y:%n": "x座標を %n 、y座標を %n にする",

    "go to %m.location": "%m.location へ行く",

    "glide %n secs to x:%n y:%n": "%n 秒でx座標を %n に、y座標を %n に変える",

    "change x by %n": "x座標を %n ずつ変える",

    "set x to %n": "x座標を %n にする",

    "change y by %n": "y座標を %n ずつ変える",

    "set y to %n": "y座標を %n にする",

    "set rotation style %m.rotationStyle": "回転方法を %m.rotationStyle にする",

    "say %s for %n secs": "%s と %n 秒言う",

    "say %s": "%s と言う",

    "think %s for %n secs": "%s と %n 秒考える",

    "think %s": "%s と考える",

    "show": "表示する",

    "hide": "隠す",

    "switch costume to %m.costume": "コスチュームを %m.costume にする",

    "next costume": "次のコスチュームにする",

    "next backdrop": "次の背景",

    "switch backdrop to %m.backdrop": "背景を %m.backdrop にする",

    "switch backdrop to %m.backdrop and wait": "背景を %m.backdrop にして待つ",

    "change %m.effect effect by %n": "%m.effect の効果を %n ずつ変える",

    "set %m.effect effect to %n": "%m.effect の効果を %n にする",

    "clear graphic effects": "画像効果をなくす",

    "change size by %n": "大きさを %n ずつ変える",

    "set size to %n%": "大きさを %n% にする",

    "go to front": "前に出す",

    "go back %n layers": "%n 層下げる",

    "play sound %m.sound": "%m.sound の音を鳴らす",

    "play sound %m.sound until done": "終わるまで %m.sound の音を鳴らす",

    "stop all sounds": "すべての音を止める",

    "play drum %d.drum for %n beats": "%d.drum のドラムを %n 拍鳴らす",

    "rest for %n beats": "%n 拍休む",

    "play note %d.note for %n beats": "%d.note の音符を %n 拍鳴らす",

    "set instrument to %d.instrument": "楽器を %d.instrument にする",

    "change volume by %n": "音量を %n ずつ変える",

    "set volume to %n%": "音量を %n% にする",

    "change tempo by %n": "テンポを %n ずつ変える",

    "set tempo to %n bpm": "テンポを %n BPMにする",

    "clear": "消す",

    "stamp": "スタンプ",

    "pen down": "ペンを下ろす",

    "pen up": "ペンを上げる",

    "set pen color to %c": "ペンの色を %c にする",

    "change pen color by %n": "ペンの色を %n ずつ変える",

    "set pen color to %n": "ペンの色を %n にする",

    "change pen shade by %n": "ペンの濃さを %n ずつ変える",

    "set pen shade to %n": "ペンの濃さを %n にする",

    "change pen size by %n": "ペンの太さを %n ずつ変える",

    "set pen size to %n": "ペンの太さを %n にする",

    "when @greenFlag clicked": "@greenFlag がクリックされたとき",

    "when %m.key key pressed": "%m.key キーが押されたとき",

    "when this sprite clicked": "このスプライトがクリックされたとき",

    "when backdrop switches to %m.backdrop": "背景が %m.backdrop になったとき",

    "when %m.triggerSensor > %n": "%m.triggerSensor > %n のとき",

    "when I receive %m.broadcast": "%m.broadcast を受け取ったとき",

    "broadcast %m.broadcast": "%m.broadcast を送る",

    "broadcast %m.broadcast and wait": "%m.broadcast を送って待つ",

    "wait %n secs": "%n 秒待つ",

    "repeat %n": "%n 回繰り返す",

    "forever": "ずっと",

    "if %b then": "もし %b なら",

    "wait until %b": "%b まで待つ",

    "repeat until %b": "%b まで繰り返す",

    "stop %m.stop": "%m.stop を止める",

    "when I start as a clone": "クローンされたとき",

    "create clone of %m.spriteOnly": "%m.spriteOnly のクローンを作る",

    "delete this clone": "このクローンを削除する",

    "ask %s and wait": "%s と聞いて待つ",

    "turn video %m.videoState": "ビデオを %m.videoState にする",

    "set video transparency to %n%": "ビデオの透明度を %n% にする",

    "reset timer": "タイマーをリセット",

    "set %m.var to %s": "%m.var を %s にする",

    "change %m.var by %n": "%m.var を %n ずつ変える",

    "show variable %m.var": "変数 %m.var を表示する",

    "hide variable %m.var": "変数 %m.var を隠す",

    "add %s to %m.list": "%s を %m.list に追加する",

    "delete %d.listDeleteItem of %m.list": "%d.listDeleteItem 番目を %m.list から削除する",

    "if on edge, bounce": "もし端に着いたら、跳ね返る",

    "insert %s at %d.listItem of %m.list": "%s を %d.listItem 番目に挿入する（ %m.list ）",

    "replace item %d.listItem of %m.list with %s": "%d.listItem 番目（ %m.list ）を %s で置き換える",

    "show list %m.list": "リスト %m.list を表示する",

    "hide list %m.list": "リスト %m.list を隠す",

    "x position": "x座標",

    "y position": "y座標",

    "direction": "向き",

    "costume #": "コスチューム #",

    "size": "大きさ",

    "backdrop name": "背景の名前",

    "backdrop #": "背景 #",

    "volume": "音量",

    "tempo": "テンポ",

    "touching %m.touching?": "%m.touching に触れた",

    "touching color %c?": "%c 色に触れた",

    "color %c is touching %c?": "%c 色が %c 色に触れた",

    "distance to %m.spriteOrMouse": "%m.spriteOrMouse までの距離",

    "answer": "答え",

    "key %m.key pressed?": "%m.key キーが押された",

    "mouse down?": "マウスが押された",

    "mouse x": "マウスのx座標",

    "mouse y": "マウスのy座標",

    "loudness": "音量",

    "video %m.videoMotionType on %m.stageOrThis": "ビデオの %m.videoMotionType ( %m.stageOrThis )",

    "timer": "タイマー",

    "%m.attribute of %m.spriteOrStage": "%m.attribute ( %m.spriteOrStage )",

    "current %m.timeAndDate": "現在の %m.timeAndDate",

    "days since 2000": "2000年からの日数",

    "username": "ユーザー名",

    "pick random %n to %n": "%n から %n までの乱数",

    "%b and %b": "%b かつ %b",

    "%b or %b": "%b または %b",

    "not %b": "%b ではない",

    "join %s %s": "%s と %s",

    "letter %n of %s": "%n 番目( %s )の文字",

    "length of %s": "%s の長さ",

    "%n mod %n": "%n を %n で割った余り",

    "round %n": "%n を四捨五入",

    "%m.mathOp of %n": "%m.mathOp ( %n )",

    "item %d.listItem of %m.list": "%d.listItem 番目（ %m.list ）",

    "length of %m.list": "%m.list の長さ",

    "%m.list contains %s?": "%m.list に %s が含まれる",

    "when %m.booleanSensor": "%m.booleanSensor とき",

    "when %m.sensor %m.lessMore %n": "%m.sensor %m.lessMore %n のとき",

    "sensor %m.booleanSensor?": "%m.booleanSensor",

    "%m.sensor sensor value": "%m.sensor センサーの値",

    "turn %m.motor on for %n secs": "%m.motor を %n 秒オンにする",

    "turn %m.motor on": "%m.motor をオンにする",

    "turn %m.motor off": "%m.motor をオフにする",

    "set %m.motor power to %n": "%m.motor のパワーを %n にする",

    "set %m.motor2 direction to %m.motorDirection": "%m.motor2 の回転方向を %m.motorDirection にする",

    "when distance %m.lessMore %n": "距離 %m.lessMore %n のとき",

    "when tilt %m.eNe %n": "傾き %m.eNe %n のとき",

    "distance": "距離",

    "tilt": "傾き",

    "else": "でなければ"

  },

  "ignorelt": [

    "距離undefined"

  ],

  "dropdowns": {

    "A connected": "Aがつながれた",

    "all": "すべて",

    "all around": "自由に回転",

    "B connected": "Bがつながれた",

    "brightness": "明るさ",

    "button pressed": "ボタンが押された",

    "C connected": "Cがつながれた",

    "color": "色",

    "costume name": "コスチューム名",

    "D connected": "Dがつながれた",

    "date": "日",

    "day of week": "曜日",

    "don't rotate": "回転しない",

    "down arrow": "下向き矢印",

    "edge": "端",

    "fisheye": "魚眼レンズ",

    "ghost": "幽霊",

    "hour": "時",

    "left arrow": "左向き矢印",

    "left-right": "左右のみ",

    "light": "明るさ",

    "minute": "分",

    "month": "月",

    "mosaic": "モザイク",

    "motion": "モーション",

    "mouse-pointer": "マウスのポインター",

    "myself": "自分自身",

    "off": "切",

    "on": "入",

    "on-flipped": "左右反転",

    "other scripts in sprite": "スプライトの他のスクリプト",

    "pixelate": "ピクセル化",

    "previous backdrop": "前の背景",

    "random position": "ランダムな場所",

    "resistance-A": "抵抗-A",

    "resistance-B": "抵抗-B",

    "resistance-C": "抵抗-C",

    "resistance-D": "抵抗-D",

    "reverse": "逆向き",

    "right arrow": "右向き矢印",

    "second": "秒",

    "slider": "スライダー",

    "sound": "音",

    "space": "スペース",

    "Stage": "ステージ",

    "that way": "あちら向き",

    "this script": "このスクリプト",

    "this sprite": "このスプライト",

    "this way": "こちら向き",

    "up arrow": "上向き矢印",

    "video motion": "ビデオモーション",

    "whirl": "渦巻き",

    "year": "年"

  },

  "osis": [

    "スプライトの他のスクリプト",

    "ステージの他のスクリプト"

  ],

  "define": [

    "定義"

  ],

  "palette": {

    "Motion": "動き",

    "Looks": "見た目",

    "Sound": "音",

    "Pen": "ペン",

    "Data": "データ",

    "variable": "変数",

    "list": "リスト",

    "Events": "イベント",

    "Control": "制御",

    "Sensing": "調べる",

    "Operators": "演算",

    "More Blocks": "その他",

    "Tips": "ヒント"

  },

  "math": [

    "絶対値",

    "切り下げ",

    "切り上げ",

    "平方根"

  ],

  "aliases": {},

  "_name": "日本語"

}

},{}],12:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "%n ?? ????",

    "turn @turnRight %n degrees": "@turnRight %n ? ??",

    "turn @turnLeft %n degrees": "@turnLeft %n ? ??",

    "point in direction %d.direction": "%d.direction ? ?? ??",

    "point towards %m.spriteOrMouse": "%m.spriteOrMouse ? ??",

    "go to x:%n y:%n": "x:%n y:%n ? ????",

    "go to %m.location": "%m.location ??? ????",

    "glide %n secs to x:%n y:%n": "%n ? ?? x:%n y:%n ?? ????",

    "change x by %n": "x??? %n ?? ???",

    "set x to %n": "x??? %n (?)? ???",

    "change y by %n": "y??? %n ?? ???",

    "set y to %n": "y??? %n (?)? ???",

    "set rotation style %m.rotationStyle": "????? %m.rotationStyle ? ???",

    "say %s for %n secs": "%s ?(?) %n ??? ???",

    "say %s": "%s ???",

    "think %s for %n secs": "%s ?(?) %n ??? ????",

    "think %s": "%s ????",

    "show": "???",

    "hide": "???",

    "switch costume to %m.costume": "??? %m.costume (?)? ???",

    "next costume": "?? ???? ???",

    "next backdrop": "?? ???? ???",

    "switch backdrop to %m.backdrop": "??? %m.backdrop (?)? ???",

    "switch backdrop to %m.backdrop and wait": "??? %m.backdrop (?)? ??? ????",

    "change %m.effect effect by %n": "%m.effect ??? %n ?? ???",

    "set %m.effect effect to %n": "%m.effect ??? %n (?)? ???",

    "clear graphic effects": "??? ?? ???",

    "change size by %n": "??? %n ?? ???",

    "set size to %n%": "??? %n% ? ???",

    "go to front": "? ??? ?? ???",

    "go back %n layers": "%n ??? ????",

    "play sound %m.sound": "%m.sound ????",

    "play sound %m.sound until done": "%m.sound ??? ????",

    "stop all sounds": "?? ?? ??",

    "play drum %d.drum for %n beats": "%d.drum ? ???? %n ??? ????",

    "rest for %n beats": "%n ?? ??",

    "play note %d.note for %n beats": "%d.note ? ?? %n ??? ????",

    "set instrument to %d.instrument": "%d.instrument ? ??? ???",

    "change volume by %n": "??? %n ?? ???",

    "set volume to %n%": "??? %n% (?)? ???",

    "change tempo by %n": "???? %n ?? ???",

    "set tempo to %n bpm": "???? %n bpm ?? ???",

    "clear": "???",

    "stamp": "????",

    "pen down": "? ???",

    "pen up": "? ???",

    "set pen color to %c": "? ??? %c (?)? ???",

    "change pen color by %n": "? ??? %n ?? ???",

    "set pen color to %n": "? ??? %n (?)? ???",

    "change pen shade by %n": "? ??? %n ?? ???",

    "set pen shade to %n": "? ??? %n (?)? ???",

    "change pen size by %n": "? ??? %n ?? ???",

    "set pen size to %n": "? ??? %n (?)? ???",

    "when @greenFlag clicked": "@greenFlag ???? ?",

    "when %m.key key pressed": "%m.key ?? ??? ?",

    "when this sprite clicked": "? ?????? ??? ?",

    "when backdrop switches to %m.backdrop": "??? %m.backdrop (?)? ???? ?",

    "when %m.triggerSensor > %n": "%m.triggerSensor > %n ? ?",

    "when I receive %m.broadcast": "%m.broadcast ?(?) ??? ?",

    "broadcast %m.broadcast": "%m.broadcast ????",

    "broadcast %m.broadcast and wait": "%m.broadcast ???? ????",

    "wait %n secs": "%n ? ????",

    "repeat %n": "%n ? ????",

    "forever": "?? ????",

    "if %b then": "?? %b (?)??",

    "wait until %b": "%b ?? ????",

    "repeat until %b": "%b ?? ????",

    "stop %m.stop": "%m.stop ???",

    "when I start as a clone": "????? ?",

    "create clone of %m.spriteOnly": "%m.spriteOnly ????",

    "delete this clone": "? ??? ????",

    "ask %s and wait": "%s ?? ????",

    "turn video %m.videoState": "??? %m.videoState",

    "set video transparency to %n%": "??? ???? %n% ? ???",

    "reset timer": "??? ???",

    "set %m.var to %s": "%m.var ?(?) %s ? ???",

    "change %m.var by %n": "%m.var ?(?) %n ?? ???",

    "show variable %m.var": "%m.var ?? ???",

    "hide variable %m.var": "%m.var ?? ???",

    "add %s to %m.list": "%s ??? %m.list ? ????",

    "delete %d.listDeleteItem of %m.list": "%d.listDeleteItem ?? ??? %m.list ?? ????",

    "if on edge, bounce": "?? ??? ???",

    "insert %s at %d.listItem of %m.list": "%s ?(?) %d.listItem ?? %m.list ? ??",

    "replace item %d.listItem of %m.list with %s": "%d.listItem ?? %m.list ? ??? %s (?)? ???",

    "show list %m.list": "%m.list ??? ???",

    "hide list %m.list": "%m.list ??? ???",

    "x position": "x??",

    "y position": "y??",

    "direction": "??",

    "costume #": "?? #",

    "size": "??",

    "backdrop name": "?? ??",

    "backdrop #": "?? ?? #",

    "volume": "??",

    "tempo": "??",

    "touching %m.touching?": "%m.touching ? ?????",

    "touching color %c?": "%c ?? ?????",

    "color %c is touching %c?": "%c ?? %c ?? ?????",

    "distance to %m.spriteOrMouse": "%m.spriteOrMouse ?? ??",

    "answer": "??",

    "key %m.key pressed?": "%m.key ?? ?????",

    "mouse down?": "???? ??????",

    "mouse x": "???? x??",

    "mouse y": "???? y??",

    "loudness": "??",

    "video %m.videoMotionType on %m.stageOrThis": "??? %m.videoMotionType ? ?? %m.stageOrThis ??? ???",

    "timer": "???",

    "%m.attribute of %m.spriteOrStage": "%m.attribute (%m.spriteOrStage)",

    "current %m.timeAndDate": "?? %m.timeAndDate",

    "days since 2000": "2000? ?? ???? ???",

    "username": "?????",

    "pick random %n to %n": "%n ?? %n ??? ??",

    "%b and %b": "%b ??? %b",

    "%b or %b": "%b ?? %b",

    "not %b": "%b ?(?) ???",

    "join %s %s": "%s ? %s ????",

    "letter %n of %s": "%n ?? ?? ( %s )",

    "length of %s": "%s ? ??",

    "%n mod %n": "%n ??? %n ? ???",

    "round %n": "%n ???",

    "%m.mathOp of %n": "%m.mathOp ( %n )",

    "item %d.listItem of %m.list": "%d.listItem ?? %m.list ??",

    "length of %m.list": "%m.list ???? ?? ?",

    "%m.list contains %s?": "%m.list ???? %s ???????",

    "when %m.booleanSensor": "%m.booleanSensor ? ?",

    "when %m.sensor %m.lessMore %n": "%m.sensor %m.lessMore %n ? ?",

    "sensor %m.booleanSensor?": "??? %m.booleanSensor?",

    "%m.sensor sensor value": "%m.sensor ? ???",

    "turn %m.motor on for %n secs": "%n ? ?? %m.motor ??",

    "turn %m.motor on": "%m.motor ??",

    "turn %m.motor off": "%m.motor ??",

    "set %m.motor power to %n": "%m.motor ??? %n (?)? ???",

    "set %m.motor2 direction to %m.motorDirection": "%m.motor2 ??? %m.motorDirection ??? ???",

    "when distance %m.lessMore %n": "?? %m.lessMore %n ? ?",

    "when tilt %m.eNe %n": "??? %m.eNe %n ? ?",

    "distance": "??",

    "tilt": "???",

    "else": "???"

  },

  "ignorelt": [

    "??undefined"

  ],

  "dropdowns": {

    "A connected": "A ???",

    "all": "??",

    "all around": "????",

    "B connected": "B ???",

    "brightness": "??",

    "button pressed": "?? ??",

    "C connected": "C ???",

    "color": "??",

    "costume name": "?? ??",

    "D connected": "D ???",

    "date": "?",

    "day of week": "??",

    "don't rotate": "???? ??",

    "down arrow": "??? ???",

    "edge": "?",

    "fisheye": "?? ??",

    "ghost": "???",

    "hour": "?",

    "left arrow": "?? ???",

    "left-right": "??-???",

    "light": "?",

    "minute": "?",

    "month": "?",

    "mosaic": "????",

    "motion": "??",

    "mouse-pointer": "??? ???",

    "myself": "? ??",

    "off": "??",

    "on": "??",

    "on-flipped": "??-????",

    "other scripts in sprite": "?????? ?? ?? ????",

    "pixelate": "???",

    "previous backdrop": "?? ??",

    "random position": "?? ??",

    "resistance-A": "??-A",

    "resistance-B": "??-B",

    "resistance-C": "??-C",

    "resistance-D": "??-D",

    "reverse": "???",

    "right arrow": "??? ???",

    "second": "?",

    "slider": "???? ????",

    "sound": "??",

    "space": "????",

    "Stage": "??",

    "that way": "?????",

    "this script": "? ????",

    "this sprite": "? ?????",

    "this way": "????",

    "up arrow": "?? ???",

    "video motion": "??? ??",

    "whirl": "????",

    "year": "?"

  },

  "osis": [

    "?????? ?? ?? ????",

    "??? ?? ?? ????"

  ],

  "define": [

    "????"

  ],

  "palette": {

    "Motion": "??",

    "Looks": "??",

    "Sound": "??",

    "Pen": "?",

    "Data": "???",

    "variable": "??",

    "list": "???",

    "Events": "???",

    "Control": "??",

    "Sensing": "??",

    "Operators": "??",

    "More Blocks": "?? ??",

    "Tips": "???"

  },

  "math": [

    "???",

    "?? ??",

    "?? ??",

    "???"

  ],

  "aliases": {},

  "_name": "???"

}

},{}],13:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "ga %n steg",

    "turn @turnRight %n degrees": "vend @turnRight %n grader",

    "turn @turnLeft %n degrees": "vend @turnLeft %n grader",

    "point in direction %d.direction": "pek i retning %d.direction",

    "point towards %m.spriteOrMouse": "pek mot %m.spriteOrMouse",

    "go to x:%n y:%n": "ga til x:%n y:%n",

    "go to %m.location": "ga til %m.location",

    "glide %n secs to x:%n y:%n": "gli %n sekunder til x:%n y:%n",

    "change x by %n": "endre x med %n",

    "set x to %n": "sett x til %n",

    "change y by %n": "endre y med %n",

    "set y to %n": "sett y til %n",

    "set rotation style %m.rotationStyle": "begrens rotasjon %m.rotationStyle",

    "say %s for %n secs": "si %s i %n sekunder",

    "say %s": "si %s",

    "think %s for %n secs": "tenk %s i %n sekunder",

    "think %s": "tenk %s",

    "show": "vis",

    "hide": "skjul",

    "switch costume to %m.costume": "bytt drakt til %m.costume",

    "next costume": "neste drakt",

    "next backdrop": "neste bakgrunn",

    "switch backdrop to %m.backdrop": "bytt bakgrunn til %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "bytt bakgrunn til %m.backdrop og vent",

    "change %m.effect effect by %n": "endre %m.effect effekt med %n",

    "set %m.effect effect to %n": "sett %m.effect effekt til %n",

    "clear graphic effects": "ta bort grafiske effekter",

    "change size by %n": "endre storrelse med %n",

    "set size to %n%": "sett storrelse til %n%",

    "go to front": "legg foran",

    "go back %n layers": "flytt bakover %n lag",

    "play sound %m.sound": "spill lyden %m.sound",

    "play sound %m.sound until done": "spill lyden %m.sound til den er ferdig",

    "stop all sounds": "stopp all lyd",

    "play drum %d.drum for %n beats": "trommeslag %d.drum som varer %n takter",

    "rest for %n beats": "pause %n takter",

    "play note %d.note for %n beats": "spill tone %d.note i %n takter",

    "set instrument to %d.instrument": "velg instrument %d.instrument",

    "change volume by %n": "endre volum med %n",

    "set volume to %n%": "sett volum %n%",

    "change tempo by %n": "endre tempo med %n",

    "set tempo to %n bpm": "sett tempo til %n slag i minuttet",

    "clear": "slett",

    "stamp": "stemple avtrykk",

    "pen down": "penn pa",

    "pen up": "penn av",

    "set pen color to %c": "velg pennfarge %c",

    "change pen color by %n": "endre pennfarge med %n",

    "set pen color to %n": "velg pennfarge %n",

    "change pen shade by %n": "endre pennintensitet med %n",

    "set pen shade to %n": "sett pennintensitet til %n",

    "change pen size by %n": "endre pennbredde med %n",

    "set pen size to %n": "sett pennbredde til %n",

    "when @greenFlag clicked": "nar @greenFlag klikkes",

    "when %m.key key pressed": "nar %m.key trykkes",

    "when this sprite clicked": "nar denne figuren klikkes",

    "when backdrop switches to %m.backdrop": "nar bakgrunn bytter til %m.backdrop",

    "when %m.triggerSensor > %n": "nar %m.triggerSensor > %n",

    "when I receive %m.broadcast": "nar jeg mottar %m.broadcast",

    "broadcast %m.broadcast": "send melding %m.broadcast",

    "broadcast %m.broadcast and wait": "send melding %m.broadcast og vent",

    "wait %n secs": "vent %n sekunder",

    "repeat %n": "gjenta %n ganger",

    "forever": "for alltid",

    "if %b then": "hvis %b",

    "wait until %b": "vent til %b",

    "repeat until %b": "gjenta til %b",

    "stop %m.stop": "stopp %m.stop",

    "when I start as a clone": "nar jeg starter som klon",

    "create clone of %m.spriteOnly": "lag klon av %m.spriteOnly",

    "delete this clone": "slett denne klonen",

    "ask %s and wait": "spor %s og vent",

    "turn video %m.videoState": "sett video %m.videoState",

    "set video transparency to %n%": "sett gjennomsiktighet av video til %n%",

    "reset timer": "nullstill klokka",

    "set %m.var to %s": "sett %m.var til %s",

    "change %m.var by %n": "endre %m.var med %n",

    "show variable %m.var": "vis variablen %m.var",

    "hide variable %m.var": "skjul variabel %m.var",

    "add %s to %m.list": "legg %s til %m.list",

    "delete %d.listDeleteItem of %m.list": "slett %d.listDeleteItem i %m.list",

    "if on edge, bounce": "sprett tilbake ved kanten",

    "insert %s at %d.listItem of %m.list": "sett inn %s pa plass %d.listItem i %m.list",

    "replace item %d.listItem of %m.list with %s": "erstatt element %d.listItem i %m.list med %s",

    "show list %m.list": "vis listen %m.list",

    "hide list %m.list": "skjul liste %m.list",

    "x position": "x-posisjon",

    "y position": "y-posisjon",

    "direction": "retning",

    "costume #": "drakt #",

    "size": "storrelse",

    "backdrop name": "navn pa bakgrunn",

    "backdrop #": "bakgrunn #",

    "volume": "volum",

    "touching %m.touching?": "berorer %m.touching?",

    "touching color %c?": "berorer fargen %c?",

    "color %c is touching %c?": "farge %c berorer %c?",

    "distance to %m.spriteOrMouse": "avstand til %m.spriteOrMouse",

    "answer": "svar",

    "key %m.key pressed?": "tast %m.key trykket?",

    "mouse down?": "museknappen er nede?",

    "mouse x": "mus x",

    "mouse y": "mus y",

    "loudness": "lydniva",

    "video %m.videoMotionType on %m.stageOrThis": "video %m.videoMotionType pa %m.stageOrThis",

    "timer": "klokke",

    "%m.attribute of %m.spriteOrStage": "%m.attribute av %m.spriteOrStage",

    "current %m.timeAndDate": "navarende %m.timeAndDate",

    "days since 2000": "dager siden 2000",

    "username": "brukernavn",

    "pick random %n to %n": "tilfeldig tall fra %n til %n",

    "%b and %b": "%b og %b",

    "%b or %b": "%b eller %b",

    "not %b": "ikke %b",

    "join %s %s": "sett sammen %s %s",

    "letter %n of %s": "bokstav %n i %s",

    "length of %s": "lengden av %s",

    "round %n": "avrund %n",

    "%m.mathOp of %n": "%m.mathOp av %n",

    "item %d.listItem of %m.list": "element %d.listItem av %m.list",

    "length of %m.list": "lengden av %m.list",

    "%m.list contains %s?": "%m.list inneholder %s?",

    "when %m.booleanSensor": "nar %m.booleanSensor",

    "when %m.sensor %m.lessMore %n": "nar %m.sensor %m.lessMore %n",

    "%m.sensor sensor value": "%m.sensor sensorverdi",

    "turn %m.motor on for %n secs": "start %m.motor i %n sekunder",

    "turn %m.motor on": "start %m.motor",

    "turn %m.motor off": "stopp %m.motor",

    "set %m.motor power to %n": "velg %m.motor styrke %n",

    "set %m.motor2 direction to %m.motorDirection": "velg %m.motor2 dreieretning %m.motorDirection",

    "when distance %m.lessMore %n": "nar avstand %m.lessMore %n",

    "when tilt %m.eNe %n": "nar helning %m.eNe %n",

    "distance": "avstand",

    "tilt": "helning",

    "else": "ellers"

  },

  "ignorelt": [

    "nar avstandundefined"

  ],

  "dropdowns": {

    "A connected": "A tilkoblet",

    "all": "alle",

    "all around": "fri rotasjon",

    "B connected": "B tilkoblet",

    "brightness": "lysstyrke",

    "button pressed": "knapp trykket",

    "C connected": "C tilkoblet",

    "color": "farge",

    "costume name": "draktnavn",

    "D connected": "D tilkoblet",

    "date": "dato",

    "day of week": "ukedag",

    "don't rotate": "ikke roter",

    "down arrow": "pil ned",

    "edge": "kant",

    "fisheye": "fiskeoye",

    "ghost": "gjennomsiktig",

    "hour": "time",

    "left arrow": "pil venstre",

    "left-right": "vend sideveis",

    "light": "lys",

    "minute": "minutt",

    "month": "maned",

    "mosaic": "mosaikk",

    "motion": "bevegelse",

    "mouse-pointer": "musepeker",

    "myself": "meg",

    "off": "av",

    "on": "pa",

    "on-flipped": "pa-speilvendt",

    "other scripts in sprite": "andre skript i figuren",

    "pixelate": "piksel",

    "previous backdrop": "forrige bakgrunn",

    "random position": "tilfeldig sted",

    "resistance-A": "motstand-A",

    "resistance-B": "motstand-B",

    "resistance-C": "motstand-C",

    "resistance-D": "motstand-D",

    "reverse": "baklengs",

    "right arrow": "pil hoyre",

    "second": "sekund",

    "slider": "skyveknapp",

    "sound": "lyd",

    "space": "mellomrom",

    "Stage": "Scene",

    "that way": "mot klokken",

    "this script": "dette skriptet",

    "this sprite": "denne figuren",

    "this way": "med klokken",

    "up arrow": "pil opp",

    "video motion": "videobevegelse",

    "whirl": "virvel",

    "year": "ar"

  },

  "osis": [

    "andre skript i figuren",

    "andre skript pa scenen"

  ],

  "define": [

    "definer"

  ],

  "palette": {

    "Motion": "Bevegelse",

    "Looks": "Utseende",

    "Sound": "Lyd",

    "Pen": "Penn",

    "variable": "variabel",

    "list": "liste",

    "Events": "Hendelser",

    "Control": "Styring",

    "Sensing": "Sansning",

    "Operators": "Operatorer",

    "More Blocks": "Flere klosser",

    "Tips": "Hjelp"

  },

  "math": [

    "gulv",

    "tak",

    "kvadratrot",

    "arcsin",

    "arccos",

    "arctan"

  ],

  "aliases": {

    "vend venstre %n grader": "turn @turnLeft %n degrees",

    "vend hoyre %n grader": "turn @turnRight %n degrees",

    "nar gront flagg klikkes": "when @greenFlag clicked",

    "slutt": "end"

  },

  "_name": "Norsk Bokmal"

}

},{}],14:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "neem %n stappen",

    "turn @turnRight %n degrees": "draai @turnRight %n graden",

    "turn @turnLeft %n degrees": "draai @turnLeft %n graden",

    "point in direction %d.direction": "richt naar %d.direction graden",

    "point towards %m.spriteOrMouse": "richt naar %m.spriteOrMouse",

    "go to x:%n y:%n": "ga naar x:%n y:%n",

    "go to %m.location": "ga naar %m.location",

    "glide %n secs to x:%n y:%n": "schuif in %n sec. naar x:%n y:%n",

    "change x by %n": "verander x met %n",

    "set x to %n": "maak x %n",

    "change y by %n": "verander y met %n",

    "set y to %n": "maak y %n",

    "set rotation style %m.rotationStyle": "maak draaistijl %m.rotationStyle",

    "say %s for %n secs": "zeg %s %n sec.",

    "say %s": "zeg %s",

    "think %s for %n secs": "denk %s %n sec.",

    "think %s": "denk %s",

    "show": "verschijn",

    "hide": "verdwijn",

    "switch costume to %m.costume": "verander uiterlijk naar %m.costume",

    "next costume": "volgend uiterlijk",

    "next backdrop": "volgende achtergrond",

    "switch backdrop to %m.backdrop": "verander achtergrond naar %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "verander achtergrond naar %m.backdrop en wacht",

    "change %m.effect effect by %n": "verander %m.effect-effect met %n",

    "set %m.effect effect to %n": "zet effect %m.effect op %n",

    "clear graphic effects": "zet alle effecten uit",

    "change size by %n": "verander grootte met %n",

    "set size to %n%": "maak grootte %n%",

    "go to front": "ga naar voorgrond",

    "go back %n layers": "ga %n lagen naar achteren",

    "play sound %m.sound": "start geluid %m.sound",

    "play sound %m.sound until done": "start geluid %m.sound en wacht",

    "stop all sounds": "stop alle geluiden",

    "play drum %d.drum for %n beats": "speel slagwerk %d.drum %n tellen",

    "rest for %n beats": "pauzeer %n tellen",

    "play note %d.note for %n beats": "speel noot %d.note %n tellen",

    "set instrument to %d.instrument": "gebruik instrument %d.instrument",

    "change volume by %n": "verander volume met %n",

    "set volume to %n%": "zet volume op %n%",

    "change tempo by %n": "verander tempo met %n",

    "set tempo to %n bpm": "maak tempo %n bpm",

    "clear": "wis alles",

    "stamp": "stempel",

    "pen down": "pen neer",

    "pen up": "pen op",

    "set pen color to %c": "maak penkleur %c",

    "change pen color by %n": "verander penkleur met %n",

    "set pen color to %n": "maak penkleur %n",

    "change pen shade by %n": "verander penhelderheid met %n",

    "set pen shade to %n": "maak penhelderheid %n",

    "change pen size by %n": "verander pendikte met %n",

    "set pen size to %n": "maak pendikte %n",

    "when @greenFlag clicked": "wanneer @greenFlag wordt aangeklikt",

    "when %m.key key pressed": "wanneer %m.key wordt ingedrukt",

    "when this sprite clicked": "wanneer op deze sprite wordt geklikt",

    "when backdrop switches to %m.backdrop": "wanneer achtergrond verandert naar %m.backdrop",

    "when %m.triggerSensor > %n": "wanneer %m.triggerSensor > %n",

    "when I receive %m.broadcast": "wanneer ik signaal %m.broadcast ontvang",

    "broadcast %m.broadcast": "zend signaal %m.broadcast",

    "broadcast %m.broadcast and wait": "zend signaal %m.broadcast en wacht",

    "wait %n secs": "wacht %n sec.",

    "repeat %n": "herhaal %n keer",

    "forever": "herhaal",

    "if %b then": "als %b dan",

    "wait until %b": "wacht tot %b",

    "repeat until %b": "herhaal tot %b",

    "when I start as a clone": "wanneer ik als kloon start",

    "create clone of %m.spriteOnly": "maak kloon van %m.spriteOnly",

    "delete this clone": "verwijder deze kloon",

    "ask %s and wait": "vraag %s en wacht",

    "turn video %m.videoState": "zet video %m.videoState",

    "set video transparency to %n%": "maak videodoorzichtigheid %n%",

    "reset timer": "zet tijdklok op nul",

    "set %m.var to %s": "maak %m.var %s",

    "change %m.var by %n": "verander %m.var met %n",

    "show variable %m.var": "toon variabele %m.var",

    "hide variable %m.var": "verberg variabele %m.var",

    "add %s to %m.list": "voeg %s toe aan %m.list",

    "delete %d.listDeleteItem of %m.list": "verwijder item %d.listDeleteItem van %m.list",

    "if on edge, bounce": "keer om aan de rand",

    "insert %s at %d.listItem of %m.list": "voeg %s toe op %d.listItem van %m.list",

    "replace item %d.listItem of %m.list with %s": "vervang item %d.listItem van %m.list door %s",

    "show list %m.list": "toon lijst %m.list",

    "hide list %m.list": "verberg lijst %m.list",

    "x position": "x-positie",

    "y position": "y-positie",

    "direction": "richting",

    "costume #": "uiterlijk #",

    "size": "grootte",

    "backdrop name": "achtergrond naam",

    "backdrop #": "achtergrond #",

    "touching %m.touching?": "raak ik %m.touching?",

    "touching color %c?": "raak ik kleur %c?",

    "color %c is touching %c?": "kleur %c raakt %c?",

    "distance to %m.spriteOrMouse": "afstand tot %m.spriteOrMouse",

    "answer": "antwoord",

    "key %m.key pressed?": "toets %m.key ingedrukt?",

    "mouse down?": "muis ingedrukt?",

    "mouse x": "muis x",

    "mouse y": "muis y",

    "loudness": "geluidsterkte",

    "video %m.videoMotionType on %m.stageOrThis": "video %m.videoMotionType op %m.stageOrThis",

    "timer": "tijdklok",

    "%m.attribute of %m.spriteOrStage": "%m.attribute van %m.spriteOrStage",

    "current %m.timeAndDate": "huidige %m.timeAndDate",

    "days since 2000": "dagen sinds 2000",

    "username": "gebruikersnaam",

    "pick random %n to %n": "willekeurig getal tussen %n en %n",

    "%b and %b": "%b en %b",

    "%b or %b": "%b of %b",

    "not %b": "niet %b",

    "join %s %s": "voeg %s en %s samen",

    "letter %n of %s": "letter %n van %s",

    "length of %s": "lengte van %s",

    "%n mod %n": "%n modulo %n",

    "round %n": "afgerond %n",

    "%m.mathOp of %n": "%m.mathOp van %n",

    "item %d.listItem of %m.list": "item %d.listItem van %m.list",

    "length of %m.list": "lengte van %m.list",

    "%m.list contains %s?": "%m.list bevat %s?",

    "when %m.booleanSensor": "wanneer %m.booleanSensor",

    "when %m.sensor %m.lessMore %n": "als %m.sensor %m.lessMore %n",

    "%m.sensor sensor value": "waarde van sensor %m.sensor",

    "turn %m.motor on for %n secs": "zet %m.motor %n sec. aan",

    "turn %m.motor on": "zet %m.motor aan",

    "turn %m.motor off": "zet %m.motor uit",

    "set %m.motor power to %n": "zet %m.motor vermogen op %n",

    "set %m.motor2 direction to %m.motorDirection": "zet %m.motor2 richting op %m.motorDirection",

    "when distance %m.lessMore %n": "wanneer afstand %m.lessMore %n",

    "when tilt %m.eNe %n": "wanneer draaiing %m.eNe %n",

    "distance": "afstand",

    "tilt": "kantel",

    "else": "anders"

  },

  "ignorelt": [

    "wanneer afstandundefined"

  ],

  "dropdowns": {

    "A connected": "A verbonden",

    "all": "alle",

    "all around": "helemaal rond",

    "B connected": "B verbonden",

    "brightness": "helderheid",

    "button pressed": "knop ingedrukt",

    "C connected": "C verbonden",

    "color": "kleur",

    "costume name": "naam uiterlijk",

    "D connected": "D verbonden",

    "date": "datum",

    "day of week": "dag van de week",

    "don't rotate": "niet draaien",

    "down arrow": "pijltje omlaag",

    "edge": "rand",

    "fisheye": "vissenoog",

    "ghost": "geest",

    "hour": "uur",

    "left arrow": "pijltje links",

    "left-right": "links-rechts",

    "light": "licht",

    "minute": "minuut",

    "month": "maand",

    "mosaic": "mozaiek",

    "motion": "beweging",

    "mouse-pointer": "muisaanwijzer",

    "myself": "mijzelf",

    "off": "uit",

    "on": "aan",

    "on-flipped": "aan-gespiegeld",

    "other scripts in sprite": "andere scripts in sprite",

    "pixelate": "pixeleren",

    "previous backdrop": "vorige achtergrond",

    "random position": "willekeurige positie",

    "resistance-A": "weerstand-A",

    "resistance-B": "weerstand-B",

    "resistance-C": "weerstand-C",

    "resistance-D": "weerstand-D",

    "reverse": "omkeren",

    "right arrow": "pijltje rechts",

    "second": "seconde",

    "slider": "schuif",

    "sound": "geluid",

    "space": "spatiebalk",

    "Stage": "Speelveld",

    "that way": "daarheen",

    "this script": "dit script",

    "this sprite": "deze sprite",

    "this way": "hierheen",

    "up arrow": "pijltje omhoog",

    "video motion": "videobeweging",

    "whirl": "draaikolk",

    "year": "jaar"

  },

  "osis": [

    "andere scripts in sprite",

    "andere scripts op het speelveld"

  ],

  "define": [

    "definieer"

  ],

  "palette": {

    "Motion": "Beweging",

    "Looks": "Uiterlijken",

    "Sound": "Geluid",

    "variable": "variabele",

    "list": "lijst",

    "Events": "Gebeurtenissen",

    "Control": "Besturen",

    "Sensing": "Waarnemen",

    "Operators": "Functies",

    "More Blocks": "Meer blokken"

  },

  "math": [

    "absoluut",

    "beneden",

    "boven",

    "wortel"

  ],

  "aliases": {

    "draai %n graden naar links": "turn @turnLeft %n degrees",

    "draai %n graden naar rechts": "turn @turnRight %n degrees",

    "wanneer groene vlag wordt aangeklikt": "when @greenFlag clicked",

    "einde": "end"

  },

  "_name": "Nederlands"

}

},{}],15:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "przesu? o %n krokow",

    "turn @turnRight %n degrees": "obro? @turnRight o %n stopni",

    "turn @turnLeft %n degrees": "obro? @turnLeft o %n stopni",

    "point in direction %d.direction": "ustaw kierunek na %d.direction",

    "point towards %m.spriteOrMouse": "ustaw w stron? %m.spriteOrMouse",

    "go to x:%n y:%n": "id? do x:%n y:%n",

    "go to %m.location": "id? do %m.location",

    "glide %n secs to x:%n y:%n": "le? przez %n s do x:%n y:%n",

    "change x by %n": "zmie? x o %n",

    "set x to %n": "ustaw x na %n",

    "change y by %n": "zmie? y o %n",

    "set y to %n": "ustaw y na %n",

    "set rotation style %m.rotationStyle": "ustaw styl obrotu %m.rotationStyle",

    "say %s for %n secs": "powiedz %s przez %n s",

    "say %s": "powiedz %s",

    "think %s for %n secs": "pomy?l %s przez %n s",

    "think %s": "pomy?l %s",

    "show": "poka?",

    "hide": "ukryj",

    "switch costume to %m.costume": "zmie? kostium na %m.costume",

    "next costume": "nast?pny kostium",

    "next backdrop": "nast?pne t?o",

    "switch backdrop to %m.backdrop": "zmie? t?o na %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "zmie? t?o na %m.backdrop i czekaj",

    "change %m.effect effect by %n": "zmie? efekt %m.effect o %n",

    "set %m.effect effect to %n": "ustaw efekt %m.effect na %n",

    "clear graphic effects": "wyczy?? efekty graficzne",

    "change size by %n": "zmie? rozmiar o %n",

    "set size to %n%": "ustaw rozmiar na %n%",

    "go to front": "na wierzch",

    "go back %n layers": "wro? o %n warstw",

    "play sound %m.sound": "zagraj d?wi?k %m.sound",

    "play sound %m.sound until done": "zagraj d?wi?k %m.sound i czekaj",

    "stop all sounds": "zatrzymaj wszystkie d?wi?ki",

    "play drum %d.drum for %n beats": "zagraj b?ben %d.drum przez %n taktow",

    "rest for %n beats": "pauzuj przez %n taktow",

    "play note %d.note for %n beats": "zagraj nut? %d.note przez %n taktow",

    "set instrument to %d.instrument": "ustaw instrument na %d.instrument",

    "change volume by %n": "zmie? g?o?no?? o %n",

    "set volume to %n%": "ustaw g?o?no?? na %n%",

    "change tempo by %n": "zmie? tempo o %n",

    "set tempo to %n bpm": "ustaw tempo %n taktow na minut?",

    "clear": "wyczy??",

    "stamp": "stempluj",

    "pen down": "przy?o? pisak",

    "pen up": "podnie? pisak",

    "set pen color to %c": "ustaw kolor pisaka na %c",

    "change pen color by %n": "zmie? kolor pisaka o %n",

    "set pen color to %n": "ustaw kolor pisaka na %n",

    "change pen shade by %n": "zmie? odcie? pisaka o %n",

    "set pen shade to %n": "ustaw odcie? pisaka na %n",

    "change pen size by %n": "zmie? rozmiar pisaka o %n",

    "set pen size to %n": "ustaw rozmiar pisaka na %n",

    "when @greenFlag clicked": "kiedy klikni?to @greenFlag",

    "when %m.key key pressed": "kiedy klawisz %m.key naci?ni?ty",

    "when this sprite clicked": "kiedy duszek klikni?ty",

    "when backdrop switches to %m.backdrop": "kiedy t?o zmieni si? na %m.backdrop",

    "when %m.triggerSensor > %n": "kiedy %m.triggerSensor > %n",

    "when I receive %m.broadcast": "kiedy otrzymam %m.broadcast",

    "broadcast %m.broadcast": "nadaj %m.broadcast",

    "broadcast %m.broadcast and wait": "nadaj %m.broadcast i czekaj",

    "wait %n secs": "czekaj %n s",

    "repeat %n": "powtorz %n razy",

    "forever": "zawsze",

    "if %b then": "je?eli %b to",

    "wait until %b": "czekaj a? %b",

    "repeat until %b": "powtarzaj a? %b",

    "stop %m.stop": "zatrzymaj %m.stop",

    "when I start as a clone": "kiedy zaczynam jako klon",

    "create clone of %m.spriteOnly": "sklonuj %m.spriteOnly",

    "delete this clone": "usu? tego klona",

    "ask %s and wait": "zapytaj %s i czekaj",

    "turn video %m.videoState": "kamera %m.videoState",

    "set video transparency to %n%": "ustaw przezroczysto?? kamery na %n%",

    "reset timer": "zeruj stoper",

    "set %m.var to %s": "ustaw %m.var na %s",

    "change %m.var by %n": "zmie? %m.var o %n",

    "show variable %m.var": "poka? zmienn? %m.var",

    "hide variable %m.var": "ukryj zmienn? %m.var",

    "add %s to %m.list": "dodaj %s do %m.list",

    "delete %d.listDeleteItem of %m.list": "usu? %d.listDeleteItem z %m.list",

    "if on edge, bounce": "je?eli na brzegu, odbij si?",

    "insert %s at %d.listItem of %m.list": "wstaw %s na pozycji %d.listItem do %m.list",

    "replace item %d.listItem of %m.list with %s": "zamie? element %d.listItem z %m.list na %s",

    "show list %m.list": "poka? list? %m.list",

    "hide list %m.list": "ukryj list? %m.list",

    "x position": "wspo?rz?dna x",

    "y position": "wspo?rz?dna y",

    "direction": "kierunek",

    "costume #": "kostium #",

    "size": "rozmiar",

    "backdrop name": "nazwa t?a",

    "backdrop #": "t?o #",

    "volume": "g?o?no??",

    "touching %m.touching?": "dotyka %m.touching?",

    "touching color %c?": "dotyka koloru %c?",

    "color %c is touching %c?": "czy kolor %c dotyka %c?",

    "distance to %m.spriteOrMouse": "odleg?o?? do %m.spriteOrMouse",

    "answer": "odpowied?",

    "key %m.key pressed?": "klawisz %m.key naci?ni?ty?",

    "mouse down?": "wci?ni?ty klawisz myszy?",

    "mouse x": "x myszy",

    "mouse y": "y myszy",

    "loudness": "g?o?no??",

    "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType kamery na %m.stageOrThis",

    "timer": "stoper",

    "%m.attribute of %m.spriteOrStage": "%m.attribute z %m.spriteOrStage",

    "current %m.timeAndDate": "aktualna %m.timeAndDate",

    "days since 2000": "dni od 2000",

    "username": "nazwa u?ytkownika",

    "pick random %n to %n": "losuj od %n do %n",

    "%b and %b": "%b i %b",

    "%b or %b": "%b lub %b",

    "not %b": "nie %b",

    "join %s %s": "po??cz %s i %s",

    "letter %n of %s": "litera %n z %s",

    "length of %s": "d?ugo?? %s",

    "round %n": "zaokr?glij %n",

    "%m.mathOp of %n": "%m.mathOp z %n",

    "item %d.listItem of %m.list": "element %d.listItem z %m.list",

    "length of %m.list": "d?ugo?? %m.list",

    "%m.list contains %s?": "%m.list zawiera %s?",

    "when %m.booleanSensor": "kiedy %m.booleanSensor",

    "when %m.sensor %m.lessMore %n": "kiedy %m.sensor %m.lessMore %n",

    "sensor %m.booleanSensor?": "czujnik %m.booleanSensor?",

    "%m.sensor sensor value": "warto?? czujnika %m.sensor",

    "turn %m.motor on for %n secs": "w??cz silnik %m.motor na %n s",

    "turn %m.motor on": "w??cz silnik %m.motor",

    "turn %m.motor off": "wy??cz silnik %m.motor",

    "set %m.motor power to %n": "ustaw moc silnika %m.motor na %n",

    "set %m.motor2 direction to %m.motorDirection": "ustaw kierunek silnika %m.motor2 na %m.motorDirection",

    "when distance %m.lessMore %n": "kiedy odleg?o?? %m.lessMore %n",

    "when tilt %m.eNe %n": "kiedy pochylenie %m.eNe %n",

    "distance": "odleg?o??",

    "tilt": "wychylenie",

    "else": "w przeciwnym razie"

  },

  "ignorelt": [

    "Kiedy odleg?o??undefined"

  ],

  "dropdowns": {

    "A connected": "Pod??czone",

    "all": "wszystko",

    "all around": "dooko?a",

    "B connected": "B pod??czone",

    "brightness": "jasno??",

    "button pressed": "przycisk naci?ni?ty",

    "C connected": "C pod??czone",

    "color": "kolor",

    "costume name": "nazwa kostiumu",

    "D connected": "D pod??czone",

    "date": "data",

    "day of week": "dzie? tygodnia",

    "don't rotate": "nie obracaj",

    "down arrow": "strza?ka w do?",

    "edge": "kraw?d?",

    "fisheye": "rybie oko",

    "ghost": "duch",

    "hour": "godzina",

    "left arrow": "strza?ka w lewo",

    "left-right": "lewo-prawo",

    "light": "?wiat?o",

    "minute": "minuta",

    "month": "miesi?c",

    "mosaic": "mozaika",

    "motion": "ruch",

    "mouse-pointer": "wska?nik myszy",

    "myself": "siebie",

    "off": "wy??czony",

    "on": "w??czony",

    "on-flipped": "na odwrot",

    "other scripts in sprite": "inne skrypty duszka",

    "pixelate": "pikselizacja",

    "previous backdrop": "poprzednie t?o",

    "random position": "losowe po?o?enie",

    "resistance-A": "opor-A",

    "resistance-B": "opor-B",

    "resistance-C": "opor-C",

    "resistance-D": "opor-D",

    "reverse": "odwro?",

    "right arrow": "strza?ka w prawo",

    "second": "sekunda",

    "slider": "suwak",

    "sound": "d?wi?k",

    "space": "spacja",

    "Stage": "Scena",

    "that way": "w tamten sposob",

    "this script": "ten skrypt",

    "this sprite": "ten duszek",

    "this way": "w ten sposob",

    "up arrow": "strza?ka w gor?",

    "video motion": "ruch w kamerze",

    "whirl": "wir",

    "year": "rok"

  },

  "osis": [

    "inne skrypty duszka",

    "inne skrypty na scenie"

  ],

  "define": [

    "definiuj"

  ],

  "palette": {

    "Motion": "Ruch",

    "Looks": "Wygl?d",

    "Sound": "D?wi?k",

    "Pen": "Pisak",

    "Data": "Dane",

    "variable": "zmienna",

    "list": "lista",

    "Events": "Zdarzenia",

    "Control": "Kontrola",

    "Sensing": "Czujniki",

    "Operators": "Wyra?enia",

    "More Blocks": "Wi?cej blokow",

    "Tips": "Wskazowki"

  },

  "math": [

    "warto?? bezwzgl?dna",

    "pod?oga",

    "sufit",

    "pierwiastek kwadratowy",

    "arcsin",

    "arccos",

    "arctan"

  ],

  "aliases": {

    "obro? w lewo o %n stopni": "turn @turnLeft %n degrees",

    "obro? w prawo o %n stopni": "turn @turnRight %n degrees",

    "kiedy klikni?to zielon? flag?": "when @greenFlag clicked",

    "koniec": "end"

  },

  "_name": "Nazwa j?zyka"

}

},{}],16:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "anda %n passos",

    "turn @turnRight %n degrees": "gira @turnRight %n °",

    "turn @turnLeft %n degrees": "gira @turnLeft %n °",

    "point in direction %d.direction": "altera a tua direccao para %d.direction °",

    "point towards %m.spriteOrMouse": "aponta em direccao a %m.spriteOrMouse",

    "go to x:%n y:%n": "vai para as coordenadas (x:%n , y:%n )",

    "go to %m.location": "vai para %m.location",

    "glide %n secs to x:%n y:%n": "desliza em %n s para as coordenadas (x:%n , y:%n )",

    "change x by %n": "adiciona %n a tua coordenada x",

    "set x to %n": "altera a tua coordenada x para %n",

    "change y by %n": "adiciona %n a tua coordenada y",

    "set y to %n": "altera a tua coordenada y para %n",

    "set rotation style %m.rotationStyle": "altera o teu estilo de rotacao para %m.rotationStyle",

    "say %s for %n secs": "diz %s durante %n s",

    "say %s": "diz %s",

    "think %s for %n secs": "pensa %s durante %n s",

    "think %s": "pensa %s",

    "show": "mostra-te",

    "hide": "esconde-te",

    "switch costume to %m.costume": "muda o teu traje para %m.costume",

    "next costume": "passa para o teu proximo traje",

    "next backdrop": "passa para o teu proximo cenario",

    "switch backdrop to %m.backdrop": "muda o cenario para %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "muda o cenario para %m.backdrop e espera",

    "change %m.effect effect by %n": "adiciona ao teu efeito %m.effect o valor %n",

    "set %m.effect effect to %n": "altera o teu efeito %m.effect para %n",

    "clear graphic effects": "cancela os teus efeitos graficos",

    "change size by %n": "adiciona %n% ao teu tamanho",

    "set size to %n%": "altera o teu tamanho para %n%",

    "go to front": "vem para a frente",

    "go back %n layers": "recua %n camadas",

    "play sound %m.sound": "toca o som %m.sound",

    "play sound %m.sound until done": "toca o som %m.sound ate terminar",

    "stop all sounds": "para todos os sons",

    "play drum %d.drum for %n beats": "toca a percussao %d.drum durante %n tempos",

    "rest for %n beats": "faz uma pausa de %n tempos",

    "play note %d.note for %n beats": "toca a nota %d.note durante %n tempos",

    "set instrument to %d.instrument": "altera o teu instrumento para %d.instrument",

    "change volume by %n": "adiciona %n% ao teu volume",

    "set volume to %n%": "altera o teu volume para %n%",

    "change tempo by %n": "adiciona %n bpm ao teu andamento",

    "set tempo to %n bpm": "altera o teu andamento para %n bpm",

    "clear": "apaga tudo do palco",

    "stamp": "carimba-te",

    "pen down": "baixa a tua caneta",

    "pen up": "levanta a tua caneta",

    "set pen color to %c": "altera a cor da tua caneta para %c",

    "change pen color by %n": "adiciona %n a cor da tua caneta",

    "set pen color to %n": "altera a cor da tua caneta para %n",

    "change pen shade by %n": "adiciona %n ao tom da tua caneta",

    "set pen shade to %n": "altera o tom da tua caneta para %n",

    "change pen size by %n": "adiciona %n a espessura da tua caneta",

    "set pen size to %n": "altera a espessura da tua caneta para %n",

    "when @greenFlag clicked": "Quando alguem clicar em @greenFlag",

    "when %m.key key pressed": "Quando alguem pressionar a tecla %m.key",

    "when this sprite clicked": "Quando alguem clicar em ti",

    "when backdrop switches to %m.backdrop": "Quando o cenario mudar para %m.backdrop",

    "when %m.triggerSensor > %n": "Quando o valor do sensor %m.triggerSensor exceder %n",

    "when I receive %m.broadcast": "Quando receberes a mensagem %m.broadcast",

    "broadcast %m.broadcast": "difunde a mensagem %m.broadcast",

    "broadcast %m.broadcast and wait": "difunde a mensagem %m.broadcast e espera",

    "wait %n secs": "espera %n s",

    "repeat %n": "repete %n vezes",

    "forever": "repete para sempre",

    "if %b then": "se %b , entao",

    "wait until %b": "espera ate que %b",

    "repeat until %b": "ate que %b , repete",

    "stop %m.stop": "para %m.stop",

    "when I start as a clone": "Quando fores criado como um clone",

    "create clone of %m.spriteOnly": "cria um clone de %m.spriteOnly",

    "delete this clone": "remove-te como clone",

    "ask %s and wait": "pergunta %s e espera pela resposta",

    "turn video %m.videoState": "altera o estado do video para %m.videoState",

    "set video transparency to %n%": "altera a transparencia do video para %n%",

    "reset timer": "reinicia o cronometro",

    "set %m.var to %s": "altera %m.var para %s",

    "change %m.var by %n": "adiciona a %m.var o valor %n",

    "show variable %m.var": "mostra a variavel %m.var",

    "hide variable %m.var": "esconde a variavel %m.var",

    "add %s to %m.list": "acrescenta %s a %m.list",

    "delete %d.listDeleteItem of %m.list": "remove %d.listDeleteItem de %m.list",

    "if on edge, bounce": "se estiveres a bater na borda, ressalta",

    "insert %s at %d.listItem of %m.list": "insere %s como %d.listItem de %m.list",

    "replace item %d.listItem of %m.list with %s": "substitui %d.listItem de %m.list por %s",

    "show list %m.list": "mostra a lista %m.list",

    "hide list %m.list": "esconde a lista %m.list",

    "x position": "a coordenada x da posicao",

    "y position": "a coordenada y da posicao",

    "direction": "a direccao",

    "costume #": "o numero do traje",

    "size": "o tamanho",

    "backdrop name": "o nome do cenario",

    "backdrop #": "o numero do cenario",

    "volume": "o volume",

    "tempo": "o andamento",

    "touching %m.touching?": "estas a tocar em %m.touching",

    "touching color %c?": "estas a tocar na cor %c",

    "color %c is touching %c?": "a cor %c esta a tocar na cor %c",

    "distance to %m.spriteOrMouse": "a distancia ate %m.spriteOrMouse",

    "answer": "a resposta",

    "key %m.key pressed?": "a tecla %m.key esta a ser pressionada",

    "mouse down?": "o botao do rato esta pressionado",

    "mouse x": "a coordenada x do rato",

    "mouse y": "a coordenada y do rato",

    "loudness": "o volume",

    "video %m.videoMotionType on %m.stageOrThis": "%m.videoMotionType do video em %m.stageOrThis",

    "timer": "o valor do cronometro",

    "%m.attribute of %m.spriteOrStage": "%m.attribute de %m.spriteOrStage",

    "current %m.timeAndDate": "%m.timeAndDate actual",

    "days since 2000": "o numero de dias desde 2000",

    "username": "o nome de utilizador",

    "pick random %n to %n": "um valor ao acaso entre %n e %n",

    "%b and %b": "%b e %b",

    "%b or %b": "%b ou %b",

    "not %b": "e falso que %b",

    "join %s %s": "a juncao de %s com %s",

    "letter %n of %s": "o caractere %n de %s",

    "length of %s": "o comprimento de %s",

    "%n mod %n": "o resto de %n a dividir por %n",

    "round %n": "o arredondamento de %n",

    "%m.mathOp of %n": "%m.mathOp de %n",

    "item %d.listItem of %m.list": "%d.listItem de %m.list",

    "length of %m.list": "o comprimento de %m.list",

    "%m.list contains %s?": "%m.list contem %s",

    "when %m.booleanSensor": "Quando o sensor %m.booleanSensor estiver activo",

    "when %m.sensor %m.lessMore %n": "Quando o valor do sensor %m.sensor for %m.lessMore %n",

    "sensor %m.booleanSensor?": "o sensor %m.booleanSensor esta activo",

    "%m.sensor sensor value": "o valor do sensor %m.sensor",

    "turn %m.motor on for %n secs": "liga %m.motor durante %n s",

    "turn %m.motor on": "liga %m.motor",

    "turn %m.motor off": "desliga %m.motor",

    "set %m.motor power to %n": "altera a potencia de %m.motor para %n%",

    "set %m.motor2 direction to %m.motorDirection": "altera a direccao de %m.motor2 para %m.motorDirection",

    "when distance %m.lessMore %n": "Quando a distancia for %m.lessMore que %n",

    "when tilt %m.eNe %n": "Quando a inclinacao for %m.eNe a %n",

    "distance": "a distancia",

    "tilt": "a inclinacao",

    "else": "senao,"

  },

  "ignorelt": [],

  "dropdowns": {

    "A connected": "A conectado",

    "all": "tudo",

    "all around": "gira a toda a volta",

    "B connected": "B conectado",

    "brightness": "brilho",

    "button pressed": "botao pressionado",

    "C connected": "C conectado",

    "color": "cor",

    "costume name": "o nome do traje",

    "D connected": "D conectado",

    "date": "a data",

    "day of week": "o dia da semana",

    "don't rotate": "nao gires",

    "down arrow": "seta para baixo",

    "edge": "a borda",

    "fisheye": "olho de peixe",

    "ghost": "fantasma",

    "hour": "a hora",

    "left arrow": "seta para a esquerda",

    "left-right": "olha apenas para a esquerda e para a direita",

    "light": "luz",

    "minute": "o minuto",

    "month": "o mes",

    "mosaic": "mosaico",

    "motion": "o movimento",

    "mouse-pointer": "o ponteiro do rato",

    "myself": "ti mesmo",

    "off": "desligado",

    "on": "ligado",

    "on-flipped": "ligado e espelhado",

    "other scripts in sprite": "os teus outros guioes",

    "pixelate": "pixelizacao",

    "previous backdrop": "cenario anterior",

    "random position": "uma posicao ao acaso",

    "resistance-A": "resistencia-A",

    "resistance-B": "resistencia-B",

    "resistance-C": "resistencia-C",

    "resistance-D": "resistencia-D",

    "reverse": "para tras",

    "right arrow": "seta para a direita",

    "second": "o segundo",

    "slider": "deslizador",

    "sound": "som",

    "space": "espaco",

    "Stage": "o palco",

    "that way": "por ai",

    "this script": "este guiao",

    "this sprite": "ti mesmo",

    "this way": "por aqui",

    "up arrow": "seta para cima",

    "video motion": "o movimento do video",

    "whirl": "remoinho",

    "year": "o ano"

  },

  "osis": [

    "os teus outros guioes",

    "os teus outros guioes"

  ],

  "define": [

    "Define"

  ],

  "palette": {

    "Motion": "Movimento",

    "Looks": "Aparencia",

    "Sound": "Som",

    "Pen": "Caneta",

    "Data": "Dados",

    "variable": "variavel",

    "list": "lista",

    "Events": "Eventos",

    "Control": "Controlo",

    "Sensing": "Sensores",

    "Operators": "Operadores",

    "More Blocks": "Mais Blocos",

    "Tips": "Dicas"

  },

  "math": [

    "o valor absoluto",

    "o chao (o maior inteiro nao superior)",

    "o tecto (menor inteiro nao inferior)",

    "a raiz quadrada",

    "o seno",

    "cosseno",

    "a tangente",

    "o arco-seno",

    "o arco-cosseno",

    "o arco-tangente",

    "o logaritmo natural",

    "o logaritmo",

    "a exponencial"

  ],

  "aliases": {

    "gira para a esquerda %n o": "turn @turnLeft %n degrees",

    "gira para a direita %n o": "turn @turnRight %n degrees",

    "Quando alguem clicar na bandeira verde": "when @greenFlag clicked",

    "fim": "end"

  },

  "_name": "Portugues"

}

},{}],17:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "идти %n шагов",

    "turn @turnRight %n degrees": "повернуть @turnRight на %n градусов",

    "turn @turnLeft %n degrees": "повернуть @turnLeft на %n градусов",

    "point in direction %d.direction": "повернуть в направлении %d.direction",

    "point towards %m.spriteOrMouse": "повернуться к %m.spriteOrMouse",

    "go to x:%n y:%n": "перейти в x:%n y:%n",

    "go to %m.location": "перейти в %m.location",

    "glide %n secs to x:%n y:%n": "плыть %n секунд в точку x:%n y:%n",

    "change x by %n": "изменить x на %n",

    "set x to %n": "установить x в %n",

    "change y by %n": "изменить y на %n",

    "set y to %n": "установить y в %n",

    "set rotation style %m.rotationStyle": "стиль вращения %m.rotationStyle",

    "say %s for %n secs": "говорить %s в течение %n секунд",

    "say %s": "сказать %s",

    "think %s for %n secs": "думать %s %n секунд",

    "think %s": "думать %s",

    "show": "показаться",

    "hide": "спрятаться",

    "switch costume to %m.costume": "сменить костюм на %m.costume",

    "next costume": "следующий костюм",

    "next backdrop": "следующий фон",

    "switch backdrop to %m.backdrop": "сменить фон на %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "сменить фон на %m.backdrop и ждать",

    "change %m.effect effect by %n": "изменить %m.effect эффект на %n",

    "set %m.effect effect to %n": "установить эффект %m.effect в значение %n",

    "clear graphic effects": "убрать графические эффекты",

    "change size by %n": "изменить размер на %n",

    "set size to %n%": "установить размер %n%",

    "go to front": "перейти в верхний слой",

    "go back %n layers": "перейти назад на %n слоев",

    "play sound %m.sound": "играть звук %m.sound",

    "play sound %m.sound until done": "играть звук %m.sound до конца",

    "stop all sounds": "остановить все звуки",

    "play drum %d.drum for %n beats": "барабану %d.drum играть %n тактов",

    "rest for %n beats": "подождать %n тактов",

    "play note %d.note for %n beats": "играть ноту %d.note %n тактов",

    "set instrument to %d.instrument": "выбрать инструмент %d.instrument",

    "change volume by %n": "изменить громкость на %n",

    "set volume to %n%": "установить громкость %n%",

    "change tempo by %n": "изменить темп на %n",

    "set tempo to %n bpm": "установить темп %n bpm",

    "clear": "очистить",

    "stamp": "печать",

    "pen down": "опустить перо",

    "pen up": "поднять перо",

    "set pen color to %c": "установить цвет %c для пера",

    "change pen color by %n": "изменить цвет пера на %n",

    "set pen color to %n": "установить цвет пера %n",

    "change pen shade by %n": "изменить тень пера на %n",

    "set pen shade to %n": "установить тень пера %n",

    "change pen size by %n": "изменить размер пера на %n",

    "set pen size to %n": "установить размер пера %n",

    "when @greenFlag clicked": "когда щелкнут по @greenFlag",

    "when %m.key key pressed": "когда клавиша %m.key нажата",

    "when this sprite clicked": "когда спрайт нажат",

    "when backdrop switches to %m.backdrop": "когда фон меняется на %m.backdrop",

    "when %m.triggerSensor > %n": "когда %m.triggerSensor > %n",

    "when I receive %m.broadcast": "когда я получу %m.broadcast",

    "broadcast %m.broadcast": "передать %m.broadcast",

    "broadcast %m.broadcast and wait": "передать %m.broadcast и ждать",

    "wait %n secs": "ждать %n секунд",

    "repeat %n": "повторить %n",

    "forever": "всегда",

    "if %b then": "если %b , то",

    "wait until %b": "ждать до %b",

    "repeat until %b": "повторять пока не %b",

    "stop %m.stop": "стоп %m.stop",

    "when I start as a clone": "когда я начинаю как клон",

    "create clone of %m.spriteOnly": "создать клон %m.spriteOnly",

    "delete this clone": "удалить клон",

    "ask %s and wait": "спросить %s и ждать",

    "turn video %m.videoState": "повернуть видео на %m.videoState",

    "set video transparency to %n%": "установить прозрачность видео %n%",

    "reset timer": "перезапустить таймер",

    "set %m.var to %s": "задать %m.var значение %s",

    "change %m.var by %n": "изменить %m.var на %n",

    "show variable %m.var": "показать переменную %m.var",

    "hide variable %m.var": "скрыть переменную %m.var",

    "add %s to %m.list": "добавить %s к %m.list",

    "delete %d.listDeleteItem of %m.list": "удалить %d.listDeleteItem из %m.list",

    "if on edge, bounce": "если на краю, оттолкнуться",

    "insert %s at %d.listItem of %m.list": "вставить %s в %d.listItem из %m.list",

    "replace item %d.listItem of %m.list with %s": "заменить элемент %d.listItem в %m.list на %s",

    "show list %m.list": "показать список %m.list",

    "hide list %m.list": "скрыть список %m.list",

    "x position": "положение x",

    "y position": "положение y",

    "direction": "направление",

    "costume #": "костюм #",

    "size": "размер",

    "backdrop name": "имя фона",

    "backdrop #": "фон #",

    "volume": "громкость",

    "tempo": "темп",

    "touching %m.touching?": "касается %m.touching?",

    "touching color %c?": "касается цвета %c?",

    "color %c is touching %c?": "цвет %c касается %c?",

    "distance to %m.spriteOrMouse": "расстояние до %m.spriteOrMouse",

    "answer": "ответ",

    "key %m.key pressed?": "клавиша %m.key нажата?",

    "mouse down?": "мышка нажата?",

    "mouse x": "мышка по x",

    "mouse y": "мышка по y",

    "loudness": "громкость",

    "video %m.videoMotionType on %m.stageOrThis": "видео %m.videoMotionType на %m.stageOrThis",

    "timer": "таймер",

    "%m.attribute of %m.spriteOrStage": "%m.attribute от %m.spriteOrStage",

    "current %m.timeAndDate": "текущие %m.timeAndDate",

    "days since 2000": "дней с 01.01.2000",

    "username": "имя участника",

    "pick random %n to %n": "выдать случайное от %n до %n",

    "%b and %b": "%b и %b",

    "%b or %b": "%b или %b",

    "not %b": "не %b",

    "join %s %s": "слить %s и %s",

    "letter %n of %s": "буква %n в %s",

    "length of %s": "длина %s",

    "%n mod %n": "остаток от деления %n на %n",

    "round %n": "округлить %n",

    "%m.mathOp of %n": "%m.mathOp от %n",

    "item %d.listItem of %m.list": "элемент %d.listItem из %m.list",

    "length of %m.list": "длина списка %m.list",

    "%m.list contains %s?": "%m.list содержит %s?",

    "when %m.booleanSensor": "сенсор %m.booleanSensor",

    "when %m.sensor %m.lessMore %n": "когда %m.sensor %m.lessMore %n",

    "sensor %m.booleanSensor?": "сенсор %m.booleanSensor?",

    "%m.sensor sensor value": "%m.sensor значение датчика",

    "turn %m.motor on for %n secs": "включить %m.motor на %n секунд",

    "turn %m.motor on": "включить %m.motor",

    "turn %m.motor off": "выключить %m.motor",

    "set %m.motor power to %n": "задать мощность %m.motor значение %n",

    "set %m.motor2 direction to %m.motorDirection": "задать для %m.motor2 направление %m.motorDirection",

    "when distance %m.lessMore %n": "когда расстояние %m.lessMore %n",

    "when tilt %m.eNe %n": "когда наклон %m.eNe %n",

    "distance": "расстояние",

    "tilt": "наклон",

    "else": "иначе"

  },

  "ignorelt": [

    "когда дистанцияundefined"

  ],

  "dropdowns": {

    "A connected": "A соединён",

    "all": "все",

    "all around": "кругом",

    "B connected": "B соединен",

    "brightness": "яркость",

    "button pressed": "кнопка нажата",

    "C connected": "C соединен",

    "color": "цвет",

    "costume name": "имя костюма",

    "D connected": "D соединен",

    "date": "дата",

    "day of week": "день недели",

    "don't rotate": "не вращать",

    "down arrow": "стрелка вниз",

    "edge": "край",

    "fisheye": "рыбий глаз",

    "ghost": "призрак",

    "hour": "час",

    "left arrow": "стрелка влево",

    "left-right": "влево-вправо",

    "light": "свет",

    "minute": "минута",

    "month": "месяц",

    "mosaic": "мозаика",

    "motion": "движение",

    "mouse-pointer": "указатель мышки",

    "myself": "себя самого",

    "off": "выключить",

    "on": "включить",

    "on-flipped": "перевернутый",

    "other scripts in sprite": "другие скрипты спрайта",

    "pixelate": "укрупнение пикселей",

    "previous backdrop": "предыдущий фон",

    "random position": "случайная позиция",

    "resistance-A": "сопротивление-A",

    "resistance-B": "сопротивление-B",

    "resistance-C": "сопротивление-C",

    "resistance-D": "сопротивление-D",

    "reverse": "вернуться",

    "right arrow": "стрелка направо",

    "second": "секунда",

    "slider": "рычажок",

    "sound": "звук",

    "space": "пробел",

    "Stage": "Сцена",

    "that way": "туда",

    "this script": "этот скрипт",

    "this sprite": "этот спрайт",

    "this way": "сюда",

    "up arrow": "стрелка вверх",

    "video motion": "движение видео",

    "whirl": "завихрение",

    "year": "год"

  },

  "osis": [

    "другие скрипты спрайта",

    "другие скрипты сцены"

  ],

  "define": [

    "определить"

  ],

  "palette": {

    "Motion": "Движение",

    "Looks": "Внешность",

    "Sound": "Звук",

    "Pen": "Перо",

    "Data": "Данные",

    "variable": "переменная",

    "list": "список",

    "Events": "События",

    "Control": "Управление",

    "Sensing": "Сенсоры",

    "Operators": "Операторы",

    "More Blocks": "Другие блоки",

    "Tips": "Подсказки"

  },

  "math": [

    "модуль",

    "пол",

    "предел",

    "квадратный корень"

  ],

  "aliases": {

    "повернуть влево на %n градусов": "turn @turnLeft %n degrees",

    "повернуть вправо на %n градусов": "turn @turnRight %n degrees",

    "когда щёлкнут по зелёному флагу": "when @greenFlag clicked",

    "конец": "end"

  },

  "_name": "Название языка"

}

},{}],18:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "%n ad?m git",

    "turn @turnRight %n degrees": "@turnRight %n derece don",

    "turn @turnLeft %n degrees": "@turnLeft %n derece don",

    "point in direction %d.direction": "%d.direction yonune don",

    "point towards %m.spriteOrMouse": "%m.spriteOrMouse 'ye do?ru don",

    "go to x:%n y:%n": "x:%n y:%n noktas?na git",

    "go to %m.location": "%m.location 'na git",

    "glide %n secs to x:%n y:%n": "%n sn.de x:%n y:%n a suzul",

    "change x by %n": "x'i %n artt?r",

    "set x to %n": "x, %n olsun",

    "change y by %n": "y'yi %n artt?r",

    "set y to %n": "y, %n olsun",

    "set rotation style %m.rotationStyle": "kuklan?n ?ekli %m.rotationStyle",

    "say %s for %n secs": "%s de %n saniye",

    "say %s": "%s de",

    "think %s for %n secs": "%s diye du?un %n saniye",

    "think %s": "%s diye du?un",

    "show": "gorun",

    "hide": "gizlen",

    "switch costume to %m.costume": "%m.costume k?l???na gec",

    "next costume": "sonraki k?l?k",

    "next backdrop": "sonraki dekor",

    "switch backdrop to %m.backdrop": "%m.backdrop dekoruna gec",

    "switch backdrop to %m.backdrop and wait": "%m.backdrop dekoruna gec ve bekle",

    "change %m.effect effect by %n": "%m.effect etkisini %n artt?r",

    "set %m.effect effect to %n": "%m.effect etkisi %n olsun",

    "clear graphic effects": "gorsel etkileri temizle",

    "change size by %n": "%n birim buyut",

    "set size to %n%": "buyuklu?u %%n yap",

    "go to front": "uste c?k",

    "go back %n layers": "%n katman alta in",

    "play sound %m.sound": "%m.sound sesini cal",

    "play sound %m.sound until done": "%m.sound sesini bitene kadar cal",

    "stop all sounds": "tum sesleri durdur",

    "play drum %d.drum for %n beats": "%d.drum davulunu %n vuru? cal",

    "rest for %n beats": "%n vuru? sus",

    "play note %d.note for %n beats": "%d.note notas?n? %n vuru? cal",

    "set instrument to %d.instrument": "calg?y? %d.instrument yap",

    "change volume by %n": "sesi %n birim yukselt",

    "set volume to %n%": "ses ?iddeti %%n olsun",

    "change tempo by %n": "tempoyu %n artt?r",

    "set tempo to %n bpm": "tempo %n vuru?/dk olsun",

    "clear": "temizle",

    "stamp": "iz b?rak",

    "pen down": "kalemi bast?r",

    "pen up": "kalemi kald?r",

    "set pen color to %c": "kalem rengini %c yap",

    "change pen color by %n": "kalem rengini %n artt?r",

    "set pen color to %n": "kalem rengini %n yap",

    "change pen shade by %n": "kalem tonunu %n artt?r",

    "set pen shade to %n": "kalem tonunu %n yap",

    "change pen size by %n": "kalem kal?nl???n? %n artt?r",

    "set pen size to %n": "kalem kal?nl???n? %n yap",

    "when @greenFlag clicked": "@greenFlag t?klan?nca",

    "when %m.key key pressed": "%m.key tu?u bas?l?nca",

    "when this sprite clicked": "bu kukla t?klan?nca",

    "when backdrop switches to %m.backdrop": "dekor %m.backdrop olunca",

    "when %m.triggerSensor > %n": "%m.triggerSensor > %n olunca",

    "when I receive %m.broadcast": "%m.broadcast haberi gelince",

    "broadcast %m.broadcast": "%m.broadcast haberini sal",

    "broadcast %m.broadcast and wait": "%m.broadcast haberini sal ve bekle",

    "wait %n secs": "%n saniye bekle",

    "repeat %n": "%n defa tekrarla",

    "forever": "surekli tekrarla",

    "if %b then": "e?er %b ise",

    "wait until %b": "%b olana kadar bekle",

    "repeat until %b": "%b olana kadar tekrarla",

    "stop %m.stop": "%m.stop durdur",

    "when I start as a clone": "ikiz olarak ba?lad???mda",

    "create clone of %m.spriteOnly": "%m.spriteOnly in ikizini yarat",

    "delete this clone": "bu ikizi sil",

    "ask %s and wait": "%s diye sor ve bekle",

    "turn video %m.videoState": "videoyu %m.videoState",

    "set video transparency to %n%": "video saydaml??? %%n olsun",

    "reset timer": "sure olceri s?f?rla",

    "set %m.var to %s": "%m.var , %s olsun",

    "change %m.var by %n": "%m.var 'i %n artt?r",

    "show variable %m.var": "%m.var de?i?kenini goster",

    "hide variable %m.var": "%m.var de?i?kenini gizle",

    "add %s to %m.list": "%s i %m.list e ekle",

    "delete %d.listDeleteItem of %m.list": "sil %d.listDeleteItem s?ras?ndakini %m.list in",

    "if on edge, bounce": "kenara geldiysen sek",

    "insert %s at %d.listItem of %m.list": "koy %s 'yi, %d.listItem s?ras?na %m.list 'nin",

    "replace item %d.listItem of %m.list with %s": "de?i?tir %d.listItem s?ras?ndakini %m.list listesinin %s ile",

    "show list %m.list": "%m.list listesini goster",

    "hide list %m.list": "%m.list listesini gizle",

    "x position": "x konumu",

    "y position": "y konumu",

    "direction": "yonu",

    "costume #": "k?l?k no",

    "size": "buyukluk",

    "backdrop name": "dekorun ad?",

    "backdrop #": "dekor #",

    "volume": "ses ?iddeti",

    "touching %m.touching?": "%m.touching a de?di (mi?)",

    "touching color %c?": "%c rengine de?di (mi?)",

    "color %c is touching %c?": "%c rengi %c rengine de?di (mi?)",

    "distance to %m.spriteOrMouse": "%m.spriteOrMouse a mesafe",

    "answer": "yan?t",

    "key %m.key pressed?": "%m.key tu?u bas?l? (m??)",

    "mouse down?": "fareye bas?l? (m??)",

    "mouse x": "farenin x'i",

    "mouse y": "farenin y'si",

    "loudness": "ses ?iddeti",

    "video %m.videoMotionType on %m.stageOrThis": "video %m.videoMotionType , %m.stageOrThis uzerindeki",

    "timer": "sure olcer",

    "%m.attribute of %m.spriteOrStage": "%m.attribute de?eri %m.spriteOrStage 'in",

    "current %m.timeAndDate": "?imdiki %m.timeAndDate",

    "days since 2000": "2000'den beri gecen gun",

    "username": "kullan?c? ad?",

    "pick random %n to %n": "%n ile %n aras?nda bir say? (tut)",

    "%b and %b": "%b ve %b",

    "%b or %b": "%b veya %b",

    "not %b": "%b de?il",

    "join %s %s": "%s ile %s i birle?tir",

    "letter %n of %s": "%n . harfi %s in",

    "length of %s": "%s in uzunlu?u",

    "round %n": "%n i yuvarla",

    "%m.mathOp of %n": "%m.mathOp %n",

    "item %d.listItem of %m.list": "%d.listItem s?ras?ndaki %m.list 'in",

    "length of %m.list": "%m.list in uzunlu?u",

    "%m.list contains %s?": "%m.list listesinde %s var (m??)",

    "when %m.booleanSensor": "%m.booleanSensor olunca",

    "when %m.sensor %m.lessMore %n": "%m.sensor %m.lessMore %n oldu?unda",

    "sensor %m.booleanSensor?": "alg?lay?c? %m.booleanSensor (m??)",

    "%m.sensor sensor value": "%m.sensor alg?lay?c?s?n?n de?eri",

    "turn %m.motor on for %n secs": "%m.motor i?levini ba?lat %n saniye boyunca",

    "turn %m.motor on": "%m.motor i?levini ba?lat",

    "turn %m.motor off": "%m.motor i?levini durdur",

    "set %m.motor power to %n": "%m.motor gucunu %n yap",

    "set %m.motor2 direction to %m.motorDirection": "%m.motor2 yonunu %m.motorDirection cevir",

    "when distance %m.lessMore %n": "mesafe %m.lessMore %n oldu?unda",

    "when tilt %m.eNe %n": "e?iklik %m.eNe %n oldu?unda",

    "distance": "mesafe",

    "tilt": "yana e?il",

    "else": "de?ilse"

  },

  "ignorelt": [],

  "dropdowns": {

    "A connected": "A ba?land?",

    "all": "hepsi",

    "all around": "her yone donebilsin",

    "B connected": "B ba?land?",

    "brightness": "parlakl?k",

    "button pressed": "du?meye bas?ld?",

    "C connected": "C ba?land?",

    "color": "renk",

    "costume name": "k?l???n?n ad?",

    "D connected": "D ba?land?",

    "date": "tarih",

    "day of week": "haftan?n gunu",

    "don't rotate": "hic donemesin",

    "down arrow": "a?a?? ok",

    "edge": "kenar",

    "fisheye": "bal?k gozu",

    "ghost": "hayalet",

    "hour": "saat",

    "left arrow": "sol ok",

    "left-right": "sa?a-sola donebilsin",

    "light": "???k",

    "minute": "dakika",

    "month": "ay",

    "mosaic": "mozaik",

    "motion": "hareketi",

    "mouse-pointer": "fare oku",

    "myself": "kendim",

    "off": "kapat",

    "on": "ac",

    "on-flipped": "ac - solu sa? yap",

    "other scripts in sprite": "kuklan?n di?er dizilerini",

    "pixelate": "benekle?tir",

    "previous backdrop": "onceki dekor",

    "random position": "rastgele konum",

    "resistance-A": "direnc-A",

    "resistance-B": "direnc-B",

    "resistance-C": "direnc-C",

    "resistance-D": "direnc-D",

    "reverse": "tersine",

    "right arrow": "sa? ok",

    "second": "saniye",

    "slider": "surgu",

    "sound": "ses",

    "space": "bo?luk",

    "Stage": "Sahne",

    "that way": "di?er tarafa",

    "this script": "bu diziyi",

    "this sprite": "bu kukla",

    "this way": "bu tarafa",

    "up arrow": "yukar? ok",

    "video motion": "video hareketi",

    "whirl": "f?r?lda",

    "year": "y?l"

  },

  "osis": [

    "kuklan?n di?er dizilerini",

    "sahnedeki di?er diziler"

  ],

  "define": [

    "tan?mla"

  ],

  "palette": {

    "Motion": "Hareket",

    "Looks": "Gorunum",

    "Sound": "Ses",

    "Pen": "Kalem",

    "Data": "Veri",

    "variable": "de?i?ken",

    "list": "liste",

    "Events": "Olaylar",

    "Control": "Kontrol",

    "Sensing": "Alg?lama",

    "Operators": "??lemler",

    "More Blocks": "Ozel Ta?lar",

    "Tips": "?puclar?"

  },

  "math": [

    "mutlak de?er",

    "a?a?? yuvarla",

    "yukar? yuvarla",

    "karekok"

  ],

  "aliases": {

    "_ derece sola don": "turn @turnLeft %n degrees",

    "_ derece sa?a don": "turn @turnRight %n degrees",

    "_ derece saatin tersi yonde don": "turn @turnLeft %n degrees",

    "_ derece saat yonunde don": "turn @turnRight %n degrees",

    "ye?il bayrak t?kland???nda": "when @greenFlag clicked",

    "son": "end"

  },

  "_name": "Turkce"

}

},{}],19:[function(require,module,exports){

module.exports={

  "commands": {

    "move %n steps": "移? %n ?",

    "turn @turnRight %n degrees": "右? @turnRight %n 度",

    "turn @turnLeft %n degrees": "左? @turnLeft %n 度",

    "point in direction %d.direction": "面向 %d.direction 方向",

    "point towards %m.spriteOrMouse": "面向 %m.spriteOrMouse",

    "go to x:%n y:%n": "移到 x:%n y:%n",

    "go to %m.location": "移到 %m.location",

    "glide %n secs to x:%n y:%n": "在 %n 秒内滑行到 x:%n y:%n",

    "change x by %n": "将x坐?增加 %n",

    "set x to %n": "将x坐??定? %n",

    "change y by %n": "将y坐?增加 %n",

    "set y to %n": "将y坐??定? %n",

    "set rotation style %m.rotationStyle": "将旋?模式?定? %m.rotationStyle",

    "say %s for %n secs": "? %s %n 秒",

    "say %s": "? %s",

    "think %s for %n secs": "思考 %s %n 秒",

    "think %s": "思考 %s",

    "show": "?示",

    "hide": "?藏",

    "switch costume to %m.costume": "将造型切?? %m.costume",

    "next costume": "下一个造型",

    "next backdrop": "下一个背景",

    "switch backdrop to %m.backdrop": "将背景切?? %m.backdrop",

    "switch backdrop to %m.backdrop and wait": "将背景切?? %m.backdrop 并等待",

    "change %m.effect effect by %n": "将 %m.effect 特效增加 %n",

    "set %m.effect effect to %n": "将 %m.effect 特效?定? %n",

    "clear graphic effects": "清除所有?形特效",

    "change size by %n": "将角色的大小增加 %n",

    "set size to %n%": "将角色的大小?定? %n",

    "go to front": "移至最上?",

    "go back %n layers": "下移 %n ?",

    "play sound %m.sound": "播放声音 %m.sound",

    "play sound %m.sound until done": "播放声音 %m.sound 直到播放完?",

    "stop all sounds": "停播所有声音",

    "play drum %d.drum for %n beats": "?奏鼓声 %d.drum %n 拍",

    "rest for %n beats": "休止 %n 拍",

    "play note %d.note for %n beats": "?奏音符 %d.note %n 拍",

    "set instrument to %d.instrument": "演奏?器?? %d.instrument",

    "change volume by %n": "将音量增加 %n",

    "set volume to %n%": "将音量?定? %n",

    "change tempo by %n": "将演奏速度加快 %n",

    "set tempo to %n bpm": "将演奏速度?定? %n bpm",

    "clear": "清空",

    "stamp": "?章",

    "pen down": "落?",

    "pen up": "抬?",

    "set pen color to %c": "将画??色?定? %c",

    "change pen color by %n": "将画??色增加 %n",

    "set pen color to %n": "将画??色?定? %n",

    "change pen shade by %n": "将画?亮度增加 %n",

    "set pen shade to %n": "将画?亮度?定? %n",

    "change pen size by %n": "将画?粗?增加 %n",

    "set pen size to %n": "将画?粗??定? %n",

    "when @greenFlag clicked": "当 @greenFlag 被点?",

    "when %m.key key pressed": "当按下 %m.key ?",

    "when this sprite clicked": "当角色被点??",

    "when backdrop switches to %m.backdrop": "当背景切?到 %m.backdrop",

    "when %m.triggerSensor > %n": "当 %m.triggerSensor > %n",

    "when I receive %m.broadcast": "当接收到 %m.broadcast",

    "broadcast %m.broadcast": "广播 %m.broadcast",

    "broadcast %m.broadcast and wait": "广播 %m.broadcast 并等待",

    "wait %n secs": "等待 %n 秒",

    "repeat %n": "重??行 %n 次",

    "forever": "重??行",

    "if %b then": "如果 %b 那?",

    "wait until %b": "在 %b 之前一直等待",

    "repeat until %b": "重??行直到 %b",

    "stop %m.stop": "停止 %m.stop",

    "when I start as a clone": "当作?克隆体???",

    "create clone of %m.spriteOnly": "克隆 %m.spriteOnly",

    "delete this clone": "?除本克隆体",

    "ask %s and wait": "?? %s 并等待",

    "turn video %m.videoState": "将?像? %m.videoState",

    "set video transparency to %n%": "将??透明度?置? %n%",

    "reset timer": "??器?零",

    "set %m.var to %s": "将 %m.var ?定? %s",

    "change %m.var by %n": "将 %m.var 增加 %n",

    "show variable %m.var": "?示?量 %m.var",

    "hide variable %m.var": "?藏?量 %m.var",

    "add %s to %m.list": "将 %s 加到 %m.list ",

    "delete %d.listDeleteItem of %m.list": "?除第 %d.listDeleteItem ?于 %m.list ",

    "if on edge, bounce": "?到??就反?",

    "insert %s at %d.listItem of %m.list": "插入 %s ?第 %d.listItem ?于 %m.list  ",

    "replace item %d.listItem of %m.list with %s": "替?第 %d.listItem ?于 %m.list ? %s",

    "show list %m.list": "?示列表 %m.list",

    "hide list %m.list": "?藏列表 %m.list",

    "x position": "x 坐?",

    "y position": "y 坐?",

    "direction": "方向",

    "costume #": "造型?号",

    "size": "大小",

    "backdrop name": "背景名称",

    "backdrop #": "背景?号",

    "volume": "音量",

    "tempo": "演奏速度",

    "touching %m.touching?": "?到 %m.touching?",

    "touching color %c?": "?到?色 %c?",

    "color %c is touching %c?": "?色 %c ?到 %c?",

    "distance to %m.spriteOrMouse": "到 %m.spriteOrMouse 的距?",

    "answer": "回答",

    "key %m.key pressed?": "按? %m.key 是否按下？",

    "mouse down?": "鼠??被按下？",

    "mouse x": "鼠?的x坐?",

    "mouse y": "鼠?的y坐?",

    "loudness": "?度",

    "video %m.videoMotionType on %m.stageOrThis": "?? %m.videoMotionType ?于 %m.stageOrThis",

    "timer": "??器",

    "%m.attribute of %m.spriteOrStage": "%m.attribute ?于 %m.spriteOrStage ",

    "current %m.timeAndDate": "目前??的 %m.timeAndDate",

    "days since 2000": "自2000年至今的天数",

    "username": "用?名",

    "pick random %n to %n": "在 %n 到 %n ?随机?一个数",

    "%b and %b": "%b 与 %b",

    "%b or %b": "%b 或 %b",

    "not %b": "%b 不成立",

    "join %s %s": "?接 %s 和 %s",

    "letter %n of %s": "第 %n 个字符： %s",

    "length of %s": "%s 的?度",

    "%n mod %n": "%n 除以 %n 的余数",

    "round %n": "将 %n 四舍五入",

    "%m.mathOp of %n": "%m.mathOp %n",

    "item %d.listItem of %m.list": "第 %d.listItem ?于 %m.list",

    "length of %m.list": "%m.list 的?目数",

    "%m.list contains %s?": "%m.list 包含 %s?",

    "when %m.booleanSensor": "当 %m.booleanSensor",

    "when %m.sensor %m.lessMore %n": "当 %m.sensor %m.lessMore %n",

    "sensor %m.booleanSensor?": "?感器 %m.booleanSensor？",

    "%m.sensor sensor value": "%m.sensor ?感器的?",

    "turn %m.motor on for %n secs": "?? %m.motor ?? %n 秒",

    "turn %m.motor on": "?? %m.motor",

    "turn %m.motor off": "?? %m.motor",

    "set %m.motor power to %n": "将?? %m.motor 功率?定? %n",

    "set %m.motor2 direction to %m.motorDirection": "将?? %m.motor2 方向?定? %m.motorDirection",

    "when distance %m.lessMore %n": "当距? %m.lessMore %n",

    "when tilt %m.eNe %n": "当?角 %m.eNe %n",

    "distance": "距?",

    "tilt": "?斜",

    "else": "否?"

  },

  "ignorelt": [

    "当距?undefined"

  ],

  "dropdowns": {

    "A connected": "A 已?接",

    "all": "全部",

    "all around": "任意",

    "B connected": "B 已?接",

    "brightness": "亮度",

    "button pressed": "按?被按下",

    "C connected": "C 已?接",

    "color": "?色",

    "costume name": "造型名称",

    "D connected": "D 已?接",

    "date": "日",

    "day of week": "周",

    "don't rotate": "不旋?",

    "down arrow": "下移?",

    "edge": "??",

    "fisheye": "?眼",

    "ghost": "虚像",

    "hour": "?",

    "left arrow": "左移?",

    "left-right": "左-右翻?",

    "light": "光?",

    "minute": "分",

    "month": "月",

    "mosaic": "??克",

    "motion": "?作",

    "mouse-pointer": "鼠?指?",

    "myself": "自己",

    "off": "??",

    "on": "??",

    "on-flipped": "以左右翻?模式??",

    "other scripts in sprite": "角色的其他脚本",

    "pixelate": "像素化",

    "previous backdrop": "上一个背景",

    "random position": "随机位置",

    "resistance-A": "阻力-A",

    "resistance-B": "阻力-B",

    "resistance-C": "阻力-C",

    "resistance-D": "阻力-D",

    "reverse": "反?",

    "right arrow": "右移?",

    "second": "秒",

    "slider": "滑杆",

    "sound": "声音",

    "space": "空格",

    "Stage": "舞台",

    "that way": "向左?",

    "this script": "当前脚本",

    "this sprite": "当前角色",

    "this way": "向右?",

    "up arrow": "上移?",

    "video motion": "??移?",

    "whirl": "旋?",

    "year": "年"

  },

  "osis": [

    "角色的其他脚本",

    "舞台上的其他脚本"

  ],

  "define": [

    "定?"

  ],

  "palette": {

    "Motion": "??",

    "Looks": "外?",

    "Sound": "声音",

    "Pen": "画?",

    "Data": "数据",

    "variable": "?量",

    "list": "列表",

    "Events": "事件",

    "Control": "控制",

    "Sensing": "??",

    "Operators": "?算",

    "More Blocks": "更多?木",

    "Tips": "提示"

  },

  "math": [

    "???",

    "向下取整",

    "向上取整",

    "平方根"

  ],

  "aliases": {

    "左? %n 度": "turn @turnLeft %n degrees",

    "右? %n 度": "turn @turnRight %n degrees",

    "点??旗?": "when @greenFlag clicked",

    "?束": "end"

  },

  "_name": "?体中文"

}

},{}]},{},[1]);

