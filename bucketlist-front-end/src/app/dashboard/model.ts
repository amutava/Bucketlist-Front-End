export class BucketList {
	id: number;
	name: string;
	description:string;
	created_by : string;
	
    constructor(values: Object = {}) {
       Object.assign(this, values);
    }
}