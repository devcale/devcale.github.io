import React from 'react'
import styling from "./WizardChessPage.module.css";
import { ProjectMainComponent } from '../../../components/ProjectMain/ProjectMainComponent';


export const WizardChessPage = () => {
    return (
        <div>
            <ProjectMainComponent title='WIZARD CHESS VR' project='wizardchess' categories={['Capstone Project', 'Game Development', 'Game Design', 'Virtual Reality Development', 'Natural Language Model Training']} technologies={['Unity 3D', 'PlasticSCM', 'C#', 'Wit.AI']} role='Game Programmer' year = '2023' description="This project consists of the design, implementation and validation of Wizard Chess, a multiplayer chess game in virtual reality that uses voice commands as the main interface. The video game, developed using the Unity3D game engine, is developed with the aim of encouraging people who have had little contact with chess to play it in a more immersive and interesting way. The voice interface interaction is provided by Wit.ai API, which allows the conversion of voice inputs to in-game commands. Multiplayer, consisting of two players playing cooperatively against the black tiles, is implemented using the Photon Unity networking platform. "/>

        </div>

    )
}
