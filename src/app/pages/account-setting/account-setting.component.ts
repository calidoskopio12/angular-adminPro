import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../services/settings.service';

@Component({selector: 'app-account-setting', templateUrl: './account-setting.component.html', styles: []})
export class AccountSettingComponent implements OnInit {


    constructor(private settingService : SettingsService) {}

    ngOnInit(): void {

        this.settingService.chekCurrentTheme();
    }

    changeTheme(theme : string) {

        this.settingService.changeTheme(theme);


    }

}
