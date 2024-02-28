var jogador = "X";
var jgUm = "";
var jgDois = "";
var jgTres = "";
var jgQuatro = "";
var jgCinco = "";
var jgSeis = "";
var jgSete = "";
var jgOito = "";
var jgNove = "";
var ganhador = "";
var jogadas = 0;
var placarX = 0;
var placarTie = 0;
var placarO = 0;
var modo = 1;

function ModoDupla(){
    modo = 1;
    document.getElementById("modoUm").style.backgroundColor = "#31c4be";
    document.getElementById("modoDois").style.backgroundColor = "#a8bec9"
}

function ModoRobo(){
    modo = 2;
    document.getElementById("modoDois").style.backgroundColor = "#31c4be";
    document.getElementById("modoUm").style.backgroundColor = "#a8bec9"
}

function PlayUm(){
    jgUm = document.getElementById('um').innerText;
    console.log(jgUm)
        if(jgUm == ""){
            jgUm = jogador;
            document.getElementById('um').innerText = jgUm;
            jogadas++;
            if(jogador == "X"){
                jogador = "O";
            }else {
                jogador = "X"
            }
        }else {
            alert("Posição ocupada, escolha novamente.")
  
        }
    console.log("PlayUm clicked");
    VerificationWin();
}

function PlayDois() {
    jgDois = document.getElementById('dois').innerText;
    console.log(jgDois);
    if (jgDois == "") {
        jgDois = jogador;
        document.getElementById('dois').innerText = jgDois;
        jogadas++;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayDois clicked");
    VerificationWin();
}

function PlayTres() {
    jgTres = document.getElementById('tres').innerText;
    console.log(jgTres);
    if (jgTres == "") {
        jgTres = jogador;
        document.getElementById('tres').innerText = jgTres;
        jogadas++;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayTres clicked");
    VerificationWin();
}

function PlayQuatro() {
    jgQuatro = document.getElementById('quatro').innerText;
    console.log(jgQuatro);
    if (jgQuatro == "") {
        jgQuatro = jogador;
        document.getElementById('quatro').innerText = jgQuatro;
        jogadas++;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayQuatro clicked");
    VerificationWin();
}

function PlayCinco() {
    jgCinco = document.getElementById('cinco').innerText;
    console.log(jgCinco);
    if (jgCinco == "") {
        jgCinco = jogador;
        document.getElementById('cinco').innerText = jgCinco;
        jogadas++;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayCinco clicked");
    VerificationWin();
}

function PlaySeis() {
    jgSeis = document.getElementById('seis').innerText;
    console.log(jgSeis);
    if (jgSeis == "") {
        jgSeis = jogador;
        document.getElementById('seis').innerText = jgSeis;
        jogadas++;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlaySeis clicked");
    VerificationWin();
}

function PlaySete() {
    jgSete = document.getElementById('sete').innerText;
    console.log(jgSete);
    if (jgSete == "") {
        jgSete = jogador;
        document.getElementById('sete').innerText = jgSete;
        jogadas++;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlaySete clicked");
    VerificationWin();
}

function PlayOito() {
    jgOito = document.getElementById('oito').innerText;
    console.log(jgOito);
    if (jgOito == "") {
        jgOito = jogador;
        document.getElementById('oito').innerText = jgOito;
        jogadas++;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayOito clicked");
    VerificationWin();
}

function PlayNove() {
    jgNove = document.getElementById('nove').innerText;
    console.log(jgNove);
    if (jgNove == "") {
        jgNove = jogador;
        document.getElementById('nove').innerText = jgNove;
        jogadas++;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayNove clicked");
    VerificationWin();
}

function Reset(){
    document.getElementById('um').innerText = "";
    document.getElementById('dois').innerText = "";
    document.getElementById('tres').innerText = "";
    document.getElementById('quatro').innerText = "";
    document.getElementById('cinco').innerText = "";
    document.getElementById('seis').innerText = "";
    document.getElementById('sete').innerText = "";
    document.getElementById('oito').innerText = "";
    document.getElementById('nove').innerText = "";
    jgUm = "";
    jgDois = "";
    jgTres = "";
    jgQuatro = "";
    jgCinco = "";
    jgSeis = "";
    jgSete = "";
    jgOito = "";
    jgNove = "";
    jogadas = 0;
}

function VerificationWin(){
    // d
    // 123
    // 456
    // 789
    if(jgUm != ""){
        if(jgUm == jgDois && jgDois == jgTres){
            ganhador = jgUm;
        }
    }
        
    if(jgQuatro != ""){
        if(jgQuatro == jgCinco && jgCinco == jgSeis){
            ganhador = jgQuatro;
        }
    }

    if(jgSete != ""){     
        if(jgSete == jgOito && jgOito == jgNove){
            ganhador = jgSete;
        }
    }
    // p
    // 147
    // 258
    // 369

    if(jgUm != ""){
        if(jgUm == jgQuatro && jgQuatro == jgSete){
            ganhador = jgUm;
        }
    }

    if(jgDois != ""){
        if(jgDois == jgCinco && jgCinco == jgOito){
            ganhador = jgDois;
        }
    }

    if(jgTres != ""){
        if(jgTres == jgSeis && jgSeis == jgNove){
            ganhador = jgTres;
        }
    }
        // c
        // 159
        // 357

    if(jgUm != ""){
        if(jgUm == jgCinco && jgCinco == jgNove){
            ganhador = jgUm;
        }
    }

    if(jgTres != ""){
        if(jgTres == jgCinco && jgCinco == jgSete){
            ganhador = jgTres;
        }
    }
    if(ganhador != ""){
        document.getElementById("winner").style.display = 'flex';
        document.getElementById("saida-winner").innerText = "(" + ganhador + ") TAKES THE ROUND";
        if(ganhador == "X"){
        placarX++
        document.getElementById("placarX").innerText = "placar x \n" + placarX;
        }else{
        placarO++;
        document.getElementById("placarO").innerText = "placar o \n" + placarO;
        }
    }

    if(jogadas == 9 & ganhador == ""){
        document.getElementById("winner").style.display = 'flex';
        document.getElementById("paragraph-winner").innerText = "";
        document.getElementById("saida-winner").innerText = "Tie";
        placarTie++;
        document.getElementById("placarTie").innerText = "placar tie \n" + placarTie;
        Reset();
    }
}

function Restart (){
    ganhador = "";
    Reset();
    document.getElementById("winner").style.display = 'none';
}

function Quit(){
    document.getElementById("quiter").style.display = 'flex';

}


3