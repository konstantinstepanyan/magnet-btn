document.addEventListener('DOMContentLoaded', () => {
    {
    let offset = 50, cur = false;

document.body.addEventListener('mouseenter', function(e) {
  if(e.target.classList.contains('magnetic') && cur === false) {
    cur = {
        e: e.target,
      x: e.target.getBoundingClientRect().left,
      y: e.target.getBoundingClientRect().top
    };
  }
}, true);

document.addEventListener('mousemove', function(e) {
    if(cur !== false) {
    let x = (e.clientX - cur.x) - (cur.e.getBoundingClientRect().width / 2),
            y = (e.clientY - cur.y) - (cur.e.getBoundingClientRect().height / 2);
        
        
        console.log(`X: ${(e.clientX - cur.x)} - ${(cur.e.getBoundingClientRect().width / 2)} = ${x}`);
        console.log(`Y: ${(e.clientY - cur.y)} - ${(cur.e.getBoundingClientRect().height / 2)} = ${y}`);
        
        console.log(cur.e)
        
    cur.e.style.transform = `translate(${x}px,${y}px)`;
    //
    if(Math.abs(x) >= offset || Math.abs(y) >= offset) {
        cur.e.style.transform = 'translate(0,0)';
      cur = false;
    }
  }
});
}
});
