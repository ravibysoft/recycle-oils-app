import { RegistrationStep2 } from './components/registration/registration-step2/registration-step2';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Onboarding } from './components/onboarding/onboarding';
import { RoleSelection } from './components/role-selection/role-selection';
import { Login } from './components/login/login';
import { RegistrationStep1 } from './components/registration/registration-step1/registration-step1';
import { RegistrationStep3 } from './components/registration/registration-step3/registration-step3';
import { VerificationSuccess } from './components/registration/verification-success/verification-success';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: Onboarding },
            { path: 'role-section', component: RoleSelection },
            { path: 'login', component: Login },
            { path: 'registration_step1', component: RegistrationStep1 },
            { path: 'registration_step2', component: RegistrationStep2 },
            { path: 'registration_step3', component: RegistrationStep3 },
            { path: 'registration_step4', component: VerificationSuccess },

        ]

    },
    {
        path: '**',
        redirectTo: ''
    }
];
