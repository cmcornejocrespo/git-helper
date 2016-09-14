/* jshint esversion:6 */

if (typeof process.argv[2] === "undefined"){
  console.log('usage: node commit.js file');
  process.exit(1);
}else{
  const file = process.argv[2];
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function random_name(){
  return left[randomInt(0,left.length)]+' '+right[randomInt(0,right.length)];
}

const left=["admiring","adoring","agitated","amazing","angry","awesome","backstabbing","berserk","big","boring","clever","cocky","compassionate","condescending","cranky","desperate","determined","distracted","dreamy","drunk","ecstatic","elated","elegant","evil","fervent","focused","furious","gigantic","gloomy","goofy","grave","happy","high","hopeful","hungry","insane","jolly","jovial","kickass","lonely","loving","mad","modest","naughty","nauseous","nostalgic","pedantic","pensive","prickly","reverent","romantic","sad","serene","sharp","sick","silly","sleepy","small","stoic","stupefied","suspicious","tender","thirsty","tiny","trusting"];
const right=["albattani","allen","almeida","archimedes","ardinghelli","aryabhata","austin","babbage","banach","bardeen","bartik","bassi","bell","bhabha","bhaskara","blackwell","bohr","booth","borg","bose","boyd","brahmagupta","brattain","brown","carson","chandrasekhar","colden","cori","cray","curie","darwin","davinci","dijkstra","dubinsky","easley","einstein","elion","engelbart","euclid","euler","fermat","fermi","feynman","franklin","galileo","gates","goldberg","goldstine","goldwasser","golick","goodall","hamilton","hawking","heisenberg","heyrovsky","hodgkin","hoover","hopper","hugle","hypatia","jang","jennings","jepsen","joliot","jones","kalam","kare","keller","khorana","kilby","kirch","knuth","kowalevski","lalande","lamarr","leakey","leavitt","lichterman","liskov","lovelace","lumiere","mahavira","mayer","mccarthy","mcclintock","mclean","mcnulty","meitner","meninsky","mestorf","minsky","mirzakhani","morse","murdock","newton","nobel","noether","northcutt","noyce","panini","pare","pasteur","payne","perlman","pike","poincare","poitras","ptolemy","raman","ramanujan","ride","ritchie","roentgen","rosalind","saha","sammet","shaw","shirley","shockley","sinoussi","snyder","spence","stallman","stonebraker","swanson","swartz","swirles","tesla","thompson","torvalds","turing","varahamihira","visvesvaraya","volhard","wescoff","williams","wilson","wing","wozniak","wright","yalow","yonath"];
const name = random_name();
const spawn = require('child_process').spawn;

var fs = require('fs');
fs.appendFile(file,name+'\n',function(err) {
    if(err) {return console.log(err);}
    add();
});

function add(){
  const x = spawn('git', ['add', file]);
  x.stdout.on('data', (data) => {console.log(`stdout: ${data}`);});
  x.stderr.on('data', (data) => {console.log(`stderr: ${data}`);});
  x.on('close', (code) => {
    commit();
  });
}
function commit(){
  const x = spawn('git', ['commit', '-m',`${name}`]);
  x.stdout.on('data', (data) => {console.log(`stdout: ${data}`);});
  x.stderr.on('data', (data) => {console.log(`stderr: ${data}`);});
  x.on('close', (code) => {
    console.log(`${code}`);
  });
}
