video = "";

function preload()
{
    video = createVideo("video.mp4");
}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.position(570,270);
    video.hide();
}

function draw()
{
    image(video,0,0,400,400);
}