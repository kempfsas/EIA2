namespace Aufgabe5 {
    
    //Speicherort f�r Spielername und Score
    
    export interface Player {

        name: string;
        points: number;
    }

    export interface Players {
        [players: string]: Player;
    }

    export let players: Players = {}
}





