window.cmd_actions = ["/execute at @a as @s if block ~~-1~ air run", "/execute at @a as @s if block ~~-1~ water run"];
window.num_action = getRndInteger(0, 2);
window.cmd_events = [" kill @s", " give @s diamond"];
window.num_event = getRndInteger(0, 2);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  };

function copy() {
  navigator.clipboard.writeText(window.cmd_actions[window.num_action] + window.cmd_events[window.num_event]);
  alert('La commande a été copiée')
};

function genererConcept() {
    var actions = ["sauter", "toucher l'eau"];
    window.cmd_actions = ["/execute at @a as @s if block ~~-1~ air run", "/execute at @a as @s if block ~~-1~ water run"];
    window.num_action = getRndInteger(0, 2);
    var event = ["te tue", "te donne des diamants"];
    window.cmd_events = [" kill @s", " give @s diamond"];
    window.num_event = getRndInteger(0, 2);
    document.getElementById("concept").innerHTML = '<p style="color:#06007b;font-weight:700;">Essaye de finir Minecraft Mais <strong id="event">' + actions[window.num_action] + '</strong> <strong id="action">' + event[window.num_event] + '</strong></p>';
    document.getElementById("command").innerHTML = '<p style="color:#06007b;font-weight:700;">La commande à copier est : ' + window.cmd_actions[window.num_action] + window.cmd_events[window.num_event] + '</p>';
    document.getElementById("copybtn").innerHTML = '<button onclick="copy()">Copier</button>'
}