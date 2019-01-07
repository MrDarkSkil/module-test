import { Module, Controller } from 'elios-sdk'

export default class Test implements Module {
    name: string = 'test';

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
                    height: 150px;
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
