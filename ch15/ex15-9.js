const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);

d1 > d2    // false
d1 < d2	   // true


const msDiff = d2 - d1;		       // 417740400000 ms
const daysDiff = msDiff/1000/60/60/24; // 4834.96 days
