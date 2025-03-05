export interface Auth {
   email?: string | null | undefined;
   password?: string | null | undefined;
}

export interface ResponseAuth {
   token: string;
   userId:string;
   username:string;
} 