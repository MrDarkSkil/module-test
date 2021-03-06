import { Module, Controller } from 'elios-sdk'

export default class Test implements Module {
    name: string = 'test';

    installId: string = '';

    requireVersion: string = '0.0.1';
    showOnStart: boolean = true;

    widget: any;
    it: any;

    constructor(private elios: Controller) {    
    }

    init() {
        console.log('MODULE DEV LOADED ' + this.name);
    }

    start() {
        console.log('MODULE STARTED ' + this.name);

        this.widget = this.elios.createWidget({
            id: this.installId
        });

        let i = 0;

        this.it = setInterval(() => {
            this.widget.html.next(`<div>
            <div class="card" >
               Hello form module-test ! :)

                <br>
                    ${i}
                </div>
            </div>
            
            <style>
                .card {
                    color: white;
                    padding: 10px;
                    position: absolute;
                    top: 0;
                    right: 0;
                    left:  0;
                    bottom: 0;
                    background-color: orange;
                    border-radius: 5px;
                }
            </style>`
            );

            i++;
        }, 1000);

    }

    stop() {
        clearInterval(this.it);
        console.log('MODULE STOPED ' + this.name);
    }
}
