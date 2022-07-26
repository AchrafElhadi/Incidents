export interface Incident {
    id: number;
    objet: string;
    description: string;
    telephone: string;
    adresse: string;
    raison: string;
    document: string;
    gravite:string;
    creation:Date;
    status:string;
}
