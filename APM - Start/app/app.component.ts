import { Component } from 'angular2/core';

@Component
({
    selector: 'testr-app',
    template: `
    <div>
        <h1>
            {{ pageTitle }}
        </h1>
    </div>
    `

})

export class AppComponent
{
    pageTitle: string = 'Smart way to take Test'
}