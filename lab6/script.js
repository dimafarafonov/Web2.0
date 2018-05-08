function check(x1, y1)
{
    if((x1>=0)&&(y1>=0)&&(x1<columns)&&(y1<rows))
        return board[x1+y1*columns];
}

function getNumber(index)
{
    return tile[index].src.substr(tile[index].src.length-5,1);
}

function init()
{
    try{
        document.getElementById("main").outerHTML = "";
        document.getElementById("over").outerHTML = "";
        document.getElementById("status").innerHTML = "";
    }
    catch(exception){};

    var p = parseInt(document.getElementById("param").value);
    var m = parseInt(document.getElementById("bombs").value);
    if (p > 50) {window.rows = 50; window.columns = 50;}
    else {window.rows = p; window.columns = p;}
    if (m > columns*rows/3) window.mines = columns*rows/3; else window.mines = m;
    window.revealed=0;
    window.board=[];
    window.tile=[];
    window.flags = mines;

    var cont = document.createElement('div');
    cont.setAttribute("id","main");
    cont.style.width = rows*30+1 + "px";
    cont.style.marginTop = 5 + "px";
    document.body.appendChild(cont);

    for (i = 0; i < rows * columns; i++)
    {
        tile[i] = document.createElement('img');
        tile[i].src = "x.png";
        tile[i].style = "height:30px; width: 30px; margin-top: -4px";
        tile[i].addEventListener('mousedown',click);
        tile[i].setAttribute("id", i.toString());
        document.getElementById("main").appendChild(tile[i]);
    }

    for(var i = 0; i < mines; i++)
    {
        var j = Math.floor(Math.random()*columns*rows);
        if (board[j] != 'mine') board[j]='mine';
        else i--;
    }

    for(var x = 0; x < columns; x++)
        for(var y = 0; y < rows+1; y++)
        {
            if(check(x, y) != "mine")
            {
                board[x + y * columns]=
                    ((check(x,y+1)=="mine")|0) +((check(x-1,y+1)=="mine")|0) +((check(x+1,y+1)=="mine")|0) +((check(x,y-1)=="mine")|0)
                    +((check(x-1,y-1)=="mine")|0) +((check(x+1,y-1)=="mine")|0) +((check(x-1,y)=="mine")|0) +((check(x+1,y)=="mine")|0);
            }
        }
}

function click(event) {
    var src = event.target;
    var id = src.id;
    if (event.which == 1  && flags > 0) {
        switch(getNumber(id))
        {
            case 'x' : tile[id].src = 'f.png'; flags--; break;
            case 'f' : tile[id].src = 'x.png'; flags++; break;
        }
        }

    document.getElementById('status').innerHTML = "Mines remaining: " + flags;

    if(event.which == 3 && getNumber(id) != 'f')
    {
        if(board[id] == 'mine')
        {
            for (var i = 0; i < rows * columns; i++)
            {
                if(board[i] == 'mine') tile[i].src = "m.png";
                if(board[i] != 'mine' && getNumber(i) == 'f') tile[i].src="e.png";
            }
            var btn = document.createElement("DIV");
            var t = document.createTextNode("You lost. Click to try again");
            btn.appendChild(t);
            btn.className = "overlay";
            btn.setAttribute("id", "over");
            btn.addEventListener("mousedown", init);
            document.body.appendChild(btn);
        }
        else
        if(getNumber(id) == 'x') open(id);
    }
    if(revealed == rows * columns - mines)
    {
        var btn = document.createElement("DIV");
        var t = document.createTextNode("You won. Click to restart");
        btn.appendChild(t);
        btn.className = "overlay";
        btn.setAttribute("id", "over");
        btn.addEventListener("mousedown", init);
        document.body.appendChild(btn);
    }

}

function open(index)
{
    if(board[index] != 'mine'&&getNumber(index) == "x")
        revealed++;
    tile[index].src=board[index]+".png";

    var x = index % columns;
    var y = Math.floor(index / columns) ;
    if(board[index] == 0)
    {
        index = parseInt(index);
        if(x > 0 && getNumber(index - 1) == "x")                                                   open(index-1);
        if(x < (columns-1) && getNumber(index + 1) == "x")                                         open(+index+1);
        if(y < (rows - 1) && getNumber(index + columns) == "x")                                    open(+index+columns);
        if(y > 0 && getNumber(index - columns) == "x")                                             open(index-columns);
        if(x > 0 && y > 0 && getNumber(index - columns - 1) == "x")                                open(index-columns-1);
        if(x < (columns - 1) && y < (rows - 1) && getNumber(index + columns + 1) == "x")           open(+index+columns+1);
        if(x > 0 && y < (rows - 1) && y < (rows - 1) && getNumber(index + columns - 1) == "x")     open(+index+columns-1);
        if(x < (columns - 1) && y > 0 && y < (rows - 1) && getNumber(index - columns + 1) == "x")  open(+index-columns+1);

    }

}

