window.addEventListener('message', function (event) {
    var nui = event.data;
    if (nui.type == "openui") {
        $('.main').fadeIn(300);
    }
    if (nui.type == "closeui") {
        $('.main').fadeOut(300);
    }
    $(document).on('click', '.closekey', function () {
        $('.main').fadeOut(300);
        $.post("http://Dolphin_JoinScreen/close");
    });
});

function ChangeImg(){
    document.getElementById("imgId").src = "https://media.discordapp.net/attachments/898258172450578514/906534513595801611/11.png";
}

function ChangeImg2(){
    document.getElementById("imgId").src = "https://cdn.discordapp.com/attachments/895325209056411691/907629794353643550/unknown.png";
}

function ChangeImg3(){
    document.getElementById("imgId").src = "https://cdn.discordapp.com/attachments/895325209056411691/914428554832408606/kqmxxeSHbWqpgosK35X8JWRca-DdsVAnUc1W2Y6T403sPpMi8mN9Fy4XB08559F0lng9f9WWJwk7OEzvgSLCWgbF6w_VB4WJGwQcwSyi-jXwMEc.png";
}

function ChangeImg4(){
    document.getElementById("imgId").src = "https://cdn.discordapp.com/attachments/895325209056411691/906213666439958568/u4.png";
}

function ChangeImg5(){
    document.getElementById("imgId").src = "https://media.discordapp.net/attachments/895325210008510495/912731080656822312/unknown.png?width=1193&height=671";
}

function ChangeImg6(){
    document.getElementById("imgId2").src = "https://cdn.discordapp.com/attachments/900208244524458044/914456260777234523/unknown.png";
}

function ChangeImg7(){
    document.getElementById("imgId2").src = "https://cdn.discordapp.com/attachments/900208244524458044/914456324153159740/unknown.png";
}