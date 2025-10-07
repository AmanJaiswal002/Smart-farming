var lettering = function(el, optionalArg) {
    var text = el.innerHTML,
        arg = optionalArg || "char",
        size = window.getComputedStyle(el).getPropertyValue("font-size").substring(0,2);
    if(el.classList.contains('fallback'));
    if(el.parentNode.getAttribute('aria-hidden') === null){
      var clone = el.cloneNode(true);
      
      clone.classList.add('fallback');
      
      el.setAttribute('aria-hidden', 'true');
      
      clone.classList.add('hide');
      
      el.parentNode.insertBefore(clone, el.nextSibling);
    };
    el.innerHTML = "";
    if(arg === "char"){
      for(var i = 0; i < text.length; i++){
        var span = document.createElement("span");
        span.innerHTML = text[i];
        if(text[i] == " "){
          span.style.margin = "0 " + (size/10) + "px";
        }
        span.classList.add("char"+(i+1));
        el.appendChild(span);
      }
    } else if(arg === "words") {
      var words = text.split(" ");
      for(var i = 0; i < words.length; i++){
        var span = document.createElement("span");
        span.innerHTML = words[i];
        span.classList.add("word"+(i+1));
        span.style.margin = "0 " + (size/10) + "px";
        el.appendChild(span);
      }
    } else if(arg === "lines") {
      var lines = text.split("<br>");
      el.style.display = "block";
      for(var i = 0; i < lines.length; i++){
        var span = document.createElement("span");
        span.innerHTML = lines[i];
        span.classList.add("line"+(i+1));
        span.style.display = "block";
        el.appendChild(span);
      }
    }
  };
  
  var h1 = document.querySelector("header h1");
  
  lettering(h1);
  
  var ring = document.querySelector("path#ring"),
      path = "",
      base = document.querySelector('circle#base'),
      second = document.querySelector('path#second'),
      third = document.querySelector('path#third');
  
  base.setAttribute('cx', 80);
  base.setAttribute('cy', 135);
  base.setAttribute('r', 35);
  
  path = "M45,145 c-50,-10 -60,-40 10,-35 c95,8 150,50 51,46";
  
  ring.setAttribute('d', path);
  second.setAttribute('d', path);
  third.setAttribute('d', path);
  
  var animate = function() {
    ring.classList.add('animate');
    second.classList.add('animate');
    third.classList.add('animate');
  };
  
  
  h1.onload = animate();
  