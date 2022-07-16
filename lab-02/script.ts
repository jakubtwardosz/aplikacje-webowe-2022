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
    channel: any = [];

    constructor() {
        document.addEventListener('keypress', (event : KeyboardEvent) => {
            let arr: any = [];
            let key = event.key;
            let time = event.timeStamp;
            arr.push(key, time);
            this.channels(arr);
            this.play(key);           
        });   
    }

    channels(arr){
        console.log(arr);
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




