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
var ganhador = ''

function PlayUm(){
    jgUm = document.getElementById('um').innerText;
    console.log(jgUm)
        if(jgUm == ""){
            jgUm = jogador;
            document.getElementById('um').innerText = jgUm;
            if(jogador == "X"){
                jogador = "O";
            }
        }else {
            alert("Posição ocupada, escolha novamente.")
  
        }
    console.log("PlayUm clicked");
}

function PlayDois() {
    jgDois = document.getElementById('dois').innerText;
    console.log(jgDois);
    if (jgDois == "") {
        jgDois = jogador;
        document.getElementById('dois').innerText = jgDois;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayDois clicked");
}

function PlayTres() {
    jgTres = document.getElementById('tres').innerText;
    console.log(jgTres);
    if (jgTres == "") {
        jgTres = jogador;
        document.getElementById('tres').innerText = jgTres;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayTres clicked");
}
function PlayQuatro() {
    jgQuatro = document.getElementById('quatro').innerText;
    console.log(jgQuatro);
    if (jgQuatro == "") {
        jgQuatro = jogador;
        document.getElementById('quatro').innerText = jgQuatro;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayQuatro clicked");
}

function PlayCinco() {
    jgCinco = document.getElementById('cinco').innerText;
    console.log(jgCinco);
    if (jgCinco == "") {
        jgCinco = jogador;
        document.getElementById('cinco').innerText = jgCinco;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayCinco clicked");
}

function PlaySeis() {
    jgSeis = document.getElementById('seis').innerText;
    console.log(jgSeis);
    if (jgSeis == "") {
        jgSeis = jogador;
        document.getElementById('seis').innerText = jgSeis;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlaySeis clicked");
}

function PlaySete() {
    jgSete = document.getElementById('sete').innerText;
    console.log(jgSete);
    if (jgSete == "") {
        jgSete = jogador;
        document.getElementById('sete').innerText = jgSete;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlaySete clicked");
}

function PlayOito() {
    jgOito = document.getElementById('oito').innerText;
    console.log(jgOito);
    if (jgOito == "") {
        jgOito = jogador;
        document.getElementById('oito').innerText = jgOito;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayOito clicked");
}

function PlayNove() {
    jgNove = document.getElementById('nove').innerText;
    console.log(jgNove);
    if (jgNove == "") {
        jgNove = jogador;
        document.getElementById('nove').innerText = jgNove;
        if (jogador == "X") {
            jogador = "O";
        }else {
            jogador = "X"
        }
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayNove clicked");
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
}

function VerificationWin(){
    // d
    // 123
    // 456
    // 789

    if(jgUm == jgDois && jgDois == jgTres){
        ganhador == jgUm;
    }

    if(jgQuatro == jgCinco && jgCinco == jgSeis){
        ganhador == jgQuatro;
    }

    if(jgSete == jgOito && jgOito == jgNove){
        ganhador == jgSete;
    }
    // p
    // 147
    // 258
    // 369
    
    if(jgUm == jgQuatro && jgQuatro == jgSete){
        ganhador == jgUm;
    }

    if(jgDois == jgCinco && jgCinco == jgOito){
        ganhador == jgDois;
    }

    if(jgTres == jgSeis && jgSeis == jgNove){
        ganhador == jgTres;
    }
    // c
    // 159
    // 357
    
    if(jgUm == jgCinco && jgCinco == jgNove){
        ganhador == jgUm;
    }

    if(jgTres == jgCinco && jgCinco == jgSete){
        ganhador == jgTres;
    }
}