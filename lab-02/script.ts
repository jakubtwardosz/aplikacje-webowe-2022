class App {
    boom: HTMLAudioElement;
    clap: HTMLAudioElement;
    hihat: HTMLAudioElement;
    kick: HTMLAudioElement;
    openhat: HTMLAudioElement;
    ride: HTMLAudioElement;
    snare: HTMLAudioElement;
    tink: HTMLAudioElement;
    tom: HTMLAudioElement;
    // Problem
    channels: Array<Array<[number, string]>>;
    currentChannel : number = -1;
    key : string;
    time : number;
    flag : boolean = false;

    constructor() {
        document.addEventListener('keypress', (event : KeyboardEvent) => {
            this.channels = new Array<Array<[number, string]>>;
            this.key = event.key;
            this.time = event.timeStamp;                        
            this.record(this.key, this.time, this.currentChannel);                  
            this.play(this.key);           
        });

        for (let i = 0; i < 4; i++) {
            let playChannel = document.querySelector("#playChannel" + i);
            let recordChannel = document.querySelector("#recordChannel" + i);

                playChannel?.addEventListener("click", () => {
                    //cuttentChannel.forEach((sound) => {setTimeout(() => this.play(sound[0]), sound[1]); })
                });

                recordChannel?.addEventListener('click', () => {
                    this.time = 0;
                    this.currentChannel = i;
                    this.flag = !this.flag;
                    if (this.flag === false){
                        this.currentChannel = -1;
                    }
                });          
        }       
    }

    record(key, time, currentChannel){

        
        //this.channels['currentChannel'].push([key,time]);
        // if (currentChannel == 0) {
        //     // Problem 
        //     this.channels.push(currentChannel);
        //     //this.channels['currentChannel'].push([key,time]);
        //     console.log(this.channels.cu);          
        // }
        if (currentChannel == 1) {
            this.channels = [currentChannel];   
            console.log(this.channels);
            //this.channels[currentChannel].push(key,time);
            console.log(this.channels);           
        }
        if (currentChannel == 2) {
            this.channels[currentChannel].push(key,time);
            console.log(this.currentChannel);           
        }
        if (currentChannel == 3) {
            this.channels[currentChannel].push(key,time);
            console.log(this.currentChannel);           
        }
              
    }

    play(key) {
        this.boom = document.querySelector('[data-sound="boom"]') as HTMLAudioElement;
        this.clap = document.querySelector('[data-sound="clap"]') as HTMLAudioElement;
        this.hihat = document.querySelector('[data-sound="hihat"]') as HTMLAudioElement;
        this.kick = document.querySelector('[data-sound="kick"]') as HTMLAudioElement;
        this.openhat = document.querySelector('[data-sound="openhat"]') as HTMLAudioElement;
        this.ride = document.querySelector('[data-sound="ride"]') as HTMLAudioElement;
        this.snare = document.querySelector('[data-sound="snare"]') as HTMLAudioElement;
        this.tink = document.querySelector('[data-sound="tink"]') as HTMLAudioElement;
        this.tom = document.querySelector('[data-sound="tom"]') as HTMLAudioElement;

        switch (key) {
            case 'q':
                this.boom.currentTime = 0;
                this.boom.play();
                break;
            case 'w':
                this.clap.currentTime = 0;
                this.clap.play();
                break;
            case 'e':
                this.hihat.currentTime = 0;
                this.hihat.play();
                break;
            case 'r':
                this.kick.currentTime = 0;
                this.kick.play();
                break;
            case 't':
                this.openhat.currentTime = 0;
                this.openhat.play();
                break;
            case 'a':
                this.ride.currentTime = 0;
                this.ride.play();
                break;
            case 's':
                this.snare.currentTime = 0;
                this.snare.play();
                break;
            case 'd':
                this.tink.currentTime = 0;
                this.tink.play();
                break;
            case 'f':
                this.tom.currentTime = 0;
                this.tom.play();
                break;
        }
    }
}

let app = new App();




