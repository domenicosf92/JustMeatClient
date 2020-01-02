
    export interface Plate {
        name: string;
        price: number;
    }

    export interface Restaurant {
        id: string;
        name: string;
        address: string;
        city: string;
        email: string;
        plate: Plate[];
        rating?: any;
        typology: string;
    }
