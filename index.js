prompt = require('prompt-sync')();
quit = 'press control and c to exit '
const friend = prompt('choose a companion ');
const name = prompt('choose a name ');
const path = prompt('choose m or d for a path ')
if (path == 'm') {
  console.log('You go to SHEOGORATH, PRINCE OF MADNESS')
} else if (path == 'd') {
  console.log('You also get to SHEOGORATH, PRINCE OF MADNESS, and other things...')
} else {
  prompt(quit);
};
console.log(`do you
A.Join the madness gang.
B. Fight Sheogorath`);
const team = prompt('');
if (team == 'A') {
  console.log('You are now helping sheogorath')
console.log(`Sheogorath Goes INSANE:
A. Fight
B. NIGERNDIOOO`)
const fight = prompt('');
if (fight == 'A') {
  console.log('You are SHEOGORATH, PRINCE OF MADNESS');
  console.log('You Got')
  console.log(`
███╗░░░███╗░█████╗░██████╗░███╗░░██╗███████╗░██████╗░██████╗
████╗░████║██╔══██╗██╔══██╗████╗░██║██╔════╝██╔════╝██╔════╝
██╔████╔██║███████║██║░░██║██╔██╗██║█████╗░░╚█████╗░╚█████╗░
██║╚██╔╝██║██╔══██║██║░░██║██║╚████║██╔══╝░░░╚═══██╗░╚═══██╗
██║░╚═╝░██║██║░░██║██████╔╝██║░╚███║███████╗██████╔╝██████╔╝
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═════╝░╚═╝░░╚══╝╚══════╝╚═════╝░╚═════╝░`)
} else {
  console.log('you got the ending')
  console.log(`
╭━━╮╭┳╮  ╭╮
╰┃┃╋╯┣╋━┫╰╮
╭┃┃┫╋┃┃╋┃╭┫
╰━━┻━┻┻━┻━╯`)
}
} else if (team == 'B') {
  console.log('You escape the isles and tell the guard of the issue');
  console.log('You got the ending: ')
  console.log(`
╭━╮╭━╮╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╭╮╱╱╭╮
┃┃╰╯┃┃╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱┃┃╱┃┃╱╭╯╰╮
┃╭╮╭╮┣━━┳━╯┣━╮╭━━┳━━┳━━╮┃╰━╯┣━┻╮╭╋━━┳━╮
┃┃┃┃┃┃╭╮┃╭╮┃╭╮┫┃━┫━━┫━━┫┃╭━╮┃╭╮┃┃┃┃━┫╭╯
┃┃┃┃┃┃╭╮┃╰╯┃┃┃┃┃━╋━━┣━━┃┃┃╱┃┃╭╮┃╰┫┃━┫┃
╰╯╰╯╰┻╯╰┻━━┻╯╰┻━━┻━━┻━━╯╰╯╱╰┻╯╰┻━┻━━┻╯`)
} else if (team == 'Volkihar' && friend == 'Serana') {
  console.log('Secret ending! ')
  console.log(`
█▄▄ █░░ █▀█ █▀█ █▀▄   █▀▀ ▄▀█ █▄░█ █▀▀
█▄█ █▄▄ █▄█ █▄█ █▄▀   █▄█ █▀█ █░▀█ █▄█`)
} else {
  prompt(quit);
};