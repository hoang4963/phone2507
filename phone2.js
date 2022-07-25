class Mobile {
    battery;
    draft;
    inbox;
    sent;

    constructor() {
        this.battery = 100;
        this.draft = "";
        this.inbox = [];
        this.sent = [];
    }
    checkOnOff(){
        return this.battery>0;
    }
    charge(){
        this.battery = 100;
    }
    writeMessage(newMessage){
        this.draft = newMessage;
    }
    sendMessage(newPhone){
        let mess = this.draft;
        newPhone.inbox.push(mess);
        this.sent.push(mess);
        this.draft = "";
        this.battery--;
    }
}

let dtCuaVinh = new Mobile();
let dtCuaHung = new Mobile();