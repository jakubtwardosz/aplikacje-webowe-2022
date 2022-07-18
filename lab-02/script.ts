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
    channels: Array<Array<[string, number]>> = []; 
    currentChannel : number = -1;
    key : string;
    time : number = 0;
    flag : boolean = false;
    startTime : any;

    constructor() {

        document.addEventListener('keypress', (event : KeyboardEvent) => {                                
            this.key = event.key;
            this.time = event.timeStamp;
            if (this.flag == true) {
                this.record(this.key, this.time, this.currentChannel);
            }                 
            this.play(this.key);       
        });

        for (let i = 0; i < 4; i++) {
            let playChannel = document.querySelector("#playChannel" + i);
            let recordChannel = document.querySelector("#recordChannel" + i);


                recordChannel?.addEventListener('click', (event) => {
                    this.flag = !this.flag;                   
                    this.currentChannel = i;
                    
                    if(recordChannel){
                        recordChannel.textContent = "Stop recording channel " + i;   
                    }
                                     
                    if(this.flag === true)
                    {                        
                        this.startTime= Number(event.timeStamp);
                    }                    
                    if (this.flag === false){
                        if(recordChannel){                       
                            recordChannel.textContent = "Start recording channel " +i;
                        }
                    }                   
                });
                
                playChannel?.addEventListener("click", () => {
                    this.currentChannel = i;
                    if(this.channels[i]){
                        this.channels[i].forEach((sound) => {
                            setTimeout(() => this.play(sound[0]), Number(sound[1])); 
                        })

                    }                   
                    
                });
        }

        let playAllChannels = document.querySelector("#playAllChannels");

        playAllChannels?.addEventListener('click', (event) => {
            this.channels.forEach((channel) => {
                channel.forEach((sound) => {
                    setTimeout(() => this.play(sound[0]), Number(sound[1])); 
                }) 
            });
        });        
    }

    record(key, time, currentChannel){
        if (currentChannel == 0) {
            if (!this.channels[this.currentChannel]) {
                this.channels[this.currentChannel] = [];          
            }            
            this.channels[currentChannel].push([key, Number(time - this.startTime)]);
        }
        if (currentChannel == 1) {
            if (!this.channels[this.currentChannel]) {
                this.channels[this.currentChannel] = [];            
            }
            this.channels[currentChannel].push([key, Number(time - this.startTime)]);
        }
        if (currentChannel == 2) {
            if (!this.channels[this.currentChannel]) {
                this.channels[this.currentChannel] = [];            
            }
            this.channels[currentChannel].push([key, Number(time - this.startTime)]);
        }
        if (currentChannel == 3) {
            if (!this.channels[this.currentChannel]) {
                this.channels[this.currentChannel] = [];            
            }
            this.channels[currentChannel].push([key, Number(time - this.startTime)]);
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




