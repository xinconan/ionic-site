import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
export var ApiDemoPage = (function () {
    function ApiDemoPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.testRadioOpen = false;
        this.testCheckboxOpen = false;
    }
    ApiDemoPage.prototype.doAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['Ok']
        });
        alert.present();
    };
    ApiDemoPage.prototype.doConfirm = function () {
        var alert = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ApiDemoPage.prototype.doPrompt = function () {
        var alert = this.alertCtrl.create({
            title: 'Login',
            message: 'Enter a name for this new album you\'re so keen on adding',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ApiDemoPage.prototype.doRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Lightsaber color');
        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green'
        });
        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });
        alert.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow'
        });
        alert.addInput({
            type: 'radio',
            label: 'Purple',
            value: 'purple'
        });
        alert.addInput({
            type: 'radio',
            label: 'White',
            value: 'white'
        });
        alert.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present();
    };
    ApiDemoPage.prototype.doCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Which planets have you visited?');
        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Coruscant',
            value: 'value3'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Endor',
            value: 'value4'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Hoth',
            value: 'value5'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Jakku',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Naboo',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Takodana',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Tatooine',
            value: 'value6'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
            }
        });
        alert.present();
    };
    ApiDemoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
    ApiDemoPage.ctorParameters = [
        { type: AlertController, },
    ];
    return ApiDemoPage;
}());
export var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = ApiDemoPage;
    }
    ApiDemoApp.decorators = [
        { type: Component, args: [{
                    template: "<ion-nav [root]=\"root\"></ion-nav>"
                },] },
    ];
    ApiDemoApp.ctorParameters = [];
    return ApiDemoApp;
}());
