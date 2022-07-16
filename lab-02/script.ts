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

    constructor() {
        document.addEventListener('keypress', this.play);
    }

    play(event: KeyboardEvent) {
        this.boom = document.querySelector('[data-sound="boom"]') as HTMLAudioElement;
        this.clap = document.querySelector('[data-sound="clap"]') as HTMLAudioElement;
        this.hihat = document.querySelector('[data-sound="hihat"]') as HTMLAudioElement;
        this.kick = document.querySelector('[data-sound="kick"]') as HTMLAudioElement;
        this.openhat = document.querySelector('[data-sound="openhat"]') as HTMLAudioElement;
        this.ride = document.querySelector('[data-sound="ride"]') as HTMLAudioElement;
        this.snare = document.querySelector('[data-sound="snare"]') as HTMLAudioElement;
        this.tink = document.querySelector('[data-sound="tink"]') as HTMLAudioElement;
        this.tom = document.querySelector('[data-sound="tom"]') as HTMLAudioElement;

        switch (event.key) {
            case 'q':
                this.boom.play();
                break;
            case 'w':
                this.clap.play();
                break;
            case 'e':
                this.hihat.play();
                break;
            case 'r':
                this.kick.play();
                break;
            case 't':
                this.openhat.play();
                break;
            case 'a':
                this.ride.play();
                break;
            case 's':
                this.snare.play();
                break;
            case 'd':
                this.tink.play();
                break;
            case 'f':
                this.tom.play();
                break;
        }
    }
}

let app = new App();




