var Circle = function(sel){
    var circles = document.querySelectorAll(sel);
    [].forEach.call(circles,function(el){
        var valEl = parseFloat(el.innerHTML);
        valEl = valEl*155/100;
        el.innerHTML = '<svg width="63" height="63"><circle transform="rotate(-90)" r="25" cx="-30" cy="30" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 155px;" r="25" cx="-30" cy="30" /></svg>';
        
    });
};
Circle('.circle');