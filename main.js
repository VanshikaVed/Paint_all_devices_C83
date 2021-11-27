canvas = document.getElementById("paint");
c1 = canvas.getContext("2d");

var line_w = 2;
var colour = "black";
var m_event = "";
var t_event = "";
var prev_x_m;
var prev_y_m;

canvas.addEventListener("mousedown" , m_down);

function m_down(){
   colour =  document.getElementById("colour_input").value;
   line_w = document.getElementById("line_width_input").value;
   m_event  = "md";
}

canvas.addEventListener("mouseup", m_up);

function m_up(){
    m_event = "mu";
}

canvas.addEventListener("mouseleave", m_leave);

function m_leave(){
    m_event = "ml";
}

canvas.addEventListener("mousemove", m_move);

function m_move(e){
    current_x_p = e.clientX-canvas.offsetLeft;
    current_y_p = e.clientY-canvas.offsetTop;
    if(m_event == "md"){
        c1.beginPath();
        c1.strokeStyle = colour;
        c1.lineWidth = line_w;
        c1.moveTo(prev_x_m , prev_y_m);
        c1.lineTo(current_x_p,current_y_p);
        c1.stroke();
    }
    prev_x_m = current_x_p;
    prev_y_m = current_y_p;
}

screen_w  = screen.width;
screen_h  = screen.height;
canvas_nw = screen.width-100;
canvas_nh = screen.height-400;

if(screen.width<900){
    document.getElementById("paint").width=canvas_nw;
    document.getElementById("paint").height=canvas_nh;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart" , t_start);

var prev_x_t;
var prev_y_t;

function t_start(e){

    
    prev_x_t = e.touches[0].clientX - canvas.offsetLeft;
    prev_y_t = e.touches[0].clientY - canvas.offsetTop;
    colour =  document.getElementById("colour_input").value;
   line_w = document.getElementById("line_width_input").value;
   t_event  = "ts";
}

canvas.addEventListener("touchmove" , t_move);

function t_move(e){

    
        current_x_t = e.touches[0].clientX - canvas.offsetLeft;
    current_y_t = e.touches[0].clientY - canvas.offsetTop;
    c1.beginPath();
        c1.strokeStyle = colour;
        c1.lineWidth = line_w;
        c1.moveTo(prev_x_t , prev_y_t);
        c1.lineTo(current_x_t,current_y_t);
        c1.stroke();

    prev_x_t = current_x_t;
    prev_y_t = current_y_t;

}

function erase(){
    c1.clearRect(0 , 0 , canvas.width , canvas.height);
}
