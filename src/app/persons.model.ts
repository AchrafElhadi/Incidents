export interface Persons {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    
}
export interface Client extends Persons{
    numero: string;
}

export interface Consultant extends Persons{

}

export interface Admin extends Persons{

}