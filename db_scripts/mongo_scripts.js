
// this a mongo api shell script

// creates a new instance of connenction to the refereced database
const db = new Mongo().getDB('fika-safe');
//
// db.issues.remove({});
// // inserting some mock data
// db.issues.insert([
//     {
//         status: 'Open', owner: 'Ravan',
//         created: new Date('2016-08-15'),
//         effort: 5,
//         completionDate: undefined,
//         title: 'Error in console when clicking Add',
//     },
//     {
//         status: 'Assigned', owner: 'Eddie',
//         created: new Date('2016-08-16'),
//         effort: 14,
//         completionDate: new Date('2016-08-30'),
//         title: 'Missing bottom border on panel',
//     },
// ]);
// // creating indexes for schema purposes
// db.issues.createIndex({ owner: 1 });
// db.issues.createIndex({ created: 1 });
// db.issues.createIndex({ status: 1 });