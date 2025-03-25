let score = 0;


setTimeout(() => {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('gameplay').classList.remove('hidden');
}, 10000); 

setTimeout(() => {
    document.getElementById('gameplay').classList.add('hidden');
    document.getElementById('redirect').classList.remove('hidden');
}, 25000);

setTimeout(() => {
    window.location.href = 'https://play.google.com/store'; 
}, 30000);

function matchColor() {
    score += 10;
    document.getElementById('score').textContent = `Score: ${score}`;
}