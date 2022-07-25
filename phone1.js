function sentVinhToHung() {
    let mess = document.getElementById("mess1").value;
    dtCuaVinh.writeMessage(mess);
    dtCuaVinh.sendMessage(dtCuaHung)
    showInbox();
}
function sentHungToVing() {
    let mess = document.getElementById("mess2").value;
    dtCuaHung.writeMessage(mess);
    dtCuaHung.sendMessage(dtCuaVinh)
    showInbox();
}
function showInbox() {
    let inboxOfVinh = "";
    for (let i = 0; i < dtCuaVinh.inbox.length; i++) {
        inboxOfVinh += dtCuaVinh.inbox[i] + ",";
    }
    document.getElementById("inbox1").innerText = inboxOfVinh;

    let inboxOfHung = "";
    for (let i = 0; i < dtCuaHung.inbox.length; i++) {
        inboxOfHung += dtCuaHung.inbox[i] + ",";
    }
    document.getElementById("inbox2").innerText = inboxOfHung;
}