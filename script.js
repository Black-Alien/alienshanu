window.onload = () => {
  const myInput = document.getElementById('dummyKeyboard');
  myInput.onpaste = e => e.preventDefault();
 }
const COMMANDS = {
  whoami:
    'Black Alien',
  8055:
    'Supported commands: <span class="code">tools</span>, <span class="code">files</span>, <span class="code">showme</span>',
  tools:'Supported commands: <span class="code">hackbar</span>, <span class="code">shell</span>, <span class="code">ransomeware</span><span class="code">rat</span>',
  files:'Supported commands: <span class="code">notes</span>, <span class="code">hacking video</span>, <span class="code">pdf course</span><span class="code">links</span>',
  showme:'<img src="./showme.png">',
  
  hackbar:'Supported commands: <span class="code">download</span>, <span class="code">installation</span>',
  download:"<a href='./HBM Hackbar 2020-v.07.1.xpi' class='success link'><img src='./hkbar.png'></a> <a href='./Alien 2020 Red Button Theme.rar' class='success link'><img src='./theme.png'></a>",
  installation:"<video width='320' height='240' controls><source src='./HBM.mp4' type='video/mp4'></a>",
  
  
  cry:'<embed src="./scarylaugh.mp3"autostart style="visibility:hidden" type="audio/mpeg"></embed>',
  
  
  
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">acknowledges</span>, <span class="code">certificates</span>, <span class="code">contact</span>',
  about: "Hello 👋<br>I'm Alien Shanu. Information Security enthusiast, I do bug bounty hunting, Capture The Flag as a hobby and passion",
  skills: '<span class="code">Skill:</span>Pentesting, Programming, Bughunting, Grapic Design, 2D Animation, ...<br>',
  education: "unknown",
  certificates: "<a href='https://www.alienshanu.me/certificates' class='success link'>certificates</a>",
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "No Experience😥",
  acknowledges: "<a href='xxxx' class='success link'>Google Hall of Fame</a> , <a href='xxxx' class='success link'>Nokia HOF</a> , <a href='xxxx' class='success link'>dev.to HOF</a> , <a href='xxxx' class='success link'>Netflix HOF</a> , <a href='xxxx' class='success link'>Pinterest HOF</a> , <a href='xxxx' class='success link'>Philips HOF</a> , <a href='xxxx' class='success link'>Soundcloud HOF</a> , <a class='success link'>many more...</a>  ", 
  contact: "You can contact me on any of following :<br><a href='https://t.me/Alien_Shanu/' class='success link'>Telegram</a>, <a href='https://www.instagram.com/alien_shanu/' class='success link'>Instagram</a>, <a href='https://www.twitter.com/Alien_Shanu/' class='success link'>Twitter</a>, <a href='mailto:mail@blackalien@pm.me' class='success link'>Email</a>, <a href='https://api.whatsapp.com/send?phone=+966547818575' class='success link'>whatsapp</a>",
 
};

const  userInput = document.getElementById("userInput");
const  terminalOutput = document.getElementById("terminalOutput");
const  inputfield = document.getElementById("dummyKeyboard");

inputfield.addEventListener('keypress', (e) =>{
  if (e.key === "Enter") {
    let input = e.target.value;
    input = input.toLowerCase();
    if (input.length === 0) {
      return;
    }
    let output;
    output = `<div class="terminal-line"><span class="code1">➜</span> <span class="success">Alien</span><span class="directory">@Shanu:~$</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">no such command: ${input}</div>`;
      console.log("Oops! no such command");
    } else {
      output += COMMANDS[input];
    };
    terminalOutput.innerHTML = `${
      terminalOutput.innerHTML
    }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight; 
    e.target.value = ""
 
  };
});


