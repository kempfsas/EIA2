namespace Aufgabe8 {
   
    // Struktur des heterogenen assoziativen Arrays als Datensatz f�r eine studierende Person
export interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        age: number;
        gender: boolean;
        course: string;
    }
    
   

    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    
    //Export, damit die andere Datei vom anderen Bescheid wei�
    
export interface Studis {
        
        //Matrieln werden abgespeichert, Datentyp sind nur Studenten, homogen, da nur ein Datentyp  da ist, assoziatives Array
        
         [matrikel: string]: Studi;
    }

    // Simples Array zum Speichern der Studi-Datens�tze (nur zur Demonstration)
export let studiSimpleArray: Studi[] = [];
    
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
export let studiHomoAssoc: Studis = {};
    
export interface AssocStringString {
    [key: string]: string;
}
    }