// Redis is an in-memory key-value store
//it's extremely fast, so instead of always fetching from Mysql/MangoDB
//you can store data temprarily in Redis and retrieve it instantly


//Reason for caching
// 1.speed: Fetching from Redis can be 10*-100** 
// 2.Reduced Load:less stress on your main database  
// 3.cost saving: fewer expensive DB queries