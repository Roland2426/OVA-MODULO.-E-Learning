//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=15; attempts=0; attemptsMax=1;
var score=0; scoreMax=15; scoreInc=1; scoreDec=0
var typeGame=1;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="HAS LOGRADO UN DESEMPEÑO EXCEPCIONAL"; messageTime="AVANZA!!!!"; messageError="INTENTA NUEVAMENTE"; messageAttempts="SIGUE ASÍ "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img alt"play" id="playSound" class="imaLeft" src="index_resources/media/sound.png" alt="Sound"  align="left"><p>Los <select aria-label="Item 1" name="item1" id="item1" class="ardoraCombo"></select> son herramientas tecnológicas que permiten a los estudiantes interactuar con modelos dinámicos y realistas de conceptos complejos, facilitando la <select aria-label="Item 2" name="item2" id="item2" class="ardoraCombo"></select> de fenómenos que de otra manera serían difíciles de observar. Su implementación en el aula promueve un aprendizaje más <select aria-label="Item 3" name="item3" id="item3" class="ardoraCombo"></select> y <select aria-label="Item 4" name="item4" id="item4" class="ardoraCombo"></select>. </p><p> </p>','<img alt"play" id="playSound" class="imaLeft" src="index_resources/media/sound.png" alt="Sound"  align="left"><p><select aria-label="Item 5" name="item5" id="item5" class="ardoraCombo"></select> es una plataforma gratuita desarrollada por la Universidad de Colorado Boulder, reconocida por sus simulaciones interactivas de <select aria-label="Item 6" name="item6" id="item6" class="ardoraCombo"></select> y matemáticas. Ofrece una amplia gama de herramientas que permiten la <select aria-label="Item 7" name="item7" id="item7" class="ardoraCombo"></select> de conceptos abstractos de manera visual y práctica, mejorando la <select aria-label="Item 8" name="item8" id="item8" class="ardoraCombo"></select> de los estudiantes con el contenido. </p><p>  </p><p> </p>','<img alt"play" id="playSound" class="imaLeft" src="index_resources/media/sound.png" alt="Sound"  align="left"><p>Los simuladores PhET se destacan por sus <select aria-label="Item 9" name="item9" id="item9" class="ardoraCombo"></select>, que incluyen la manipulación de variables, la observación de efectos en tiempo real y la representación <select aria-label="Item 10" name="item10" id="item10" class="ardoraCombo"></select> de datos. Estas características clave permiten a los usuarios realizar <select aria-label="Item 11" name="item11" id="item11" class="ardoraCombo"></select> virtuales, fomentando la indagación y el razonamiento científico. </p><p>  </p><p> </p>','<img alt"play" id="playSound" class="imaLeft" src="index_resources/media/sound.png" alt="Sound"  align="left"><p>El potencial pedagógico de PhET en el segundo ciclo del Nivel Primario reside en su capacidad para transformar la enseñanza de conceptos complejos en experiencias <select aria-label="Item 12" name="item12" id="item12" class="ardoraCombo"></select> y <select aria-label="Item 13" name="item13" id="item13" class="ardoraCombo"></select>. PhET permite a los docentes crear escenarios donde los estudiantes pueden <select aria-label="Item 14" name="item14" id="item14" class="ardoraCombo"></select> y descubrir principios científicos de manera <select aria-label="Item 15" name="item15" id="item15" class="ardoraCombo"></select>, adaptándose a sus necesidades de aprendizaje. </p><p>  </p><p> </p>'];
var b=["Mg==","MTM=","MTA=","MTE=","MTQ=","MTU=","MTI=","Ng==","MQ==","Mw==","NA==","OA==","NQ==","Nw==","OQ=="];
var c=[11,10,6,12,8,9,9,7,21,6,12,11,28,11,28];
var answers=["comprensión","atractivas","visual","experimentos","explorar","intuitiva","prácticas","ciencia","simuladores virtuales","activo","experimental","interacción","PhET Interactive Simulations","exploración","funcionalidades interactivas"];
var a=["2","13","10","11","14","15","12","6","1","3","4","8","5","7","9"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var fHelp="Verdana, Geneva, sans-serif";
var imaW=["300","300","300","300"];
var imaH=["225","225","225","225"];
var info=["","","",""];
