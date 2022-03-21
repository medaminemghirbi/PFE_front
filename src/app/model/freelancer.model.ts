export class Freelancer {
id? : number;
lastname? : string;
firstname? : string;
email? : string;
adresse? : string;
birthday?: Date;
password?:string;
sexe?:string;
rating?:number;
phone?:number;
job?:string;
inscriptiondate?:Date;
description?:string;
photo?:string;
role?:string;
  constructor(args: Freelancer = {}) {
    this.id=args.id;
    this.lastname = args.lastname;
    this.firstname = args.firstname;
    this.email = args.email;
    this.adresse = args.adresse;
    this.birthday = args.birthday;
    this.password = args.password;
    this.sexe = args.sexe;
    this.rating = args.rating;
    this.job = args.job;
    this.inscriptiondate = args.inscriptiondate;
    this.description = args.description;
    this.phone = args.phone;
    this.photo = args.photo;
    this.role = args.role;
    }
}
