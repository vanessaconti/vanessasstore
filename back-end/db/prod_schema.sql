\c d4ct9jkueee2nl;

DROP TABLE IF EXISTS collections;
DROP TABLE IF EXISTS dolls;

CREATE TABLE collections (
    id SERIAL PRIMARY KEY, 
    collectionsName TEXT UNIQUE, 
    numberOfDolls INT

);

CREATE TABLE dolls (
    id SERIAL PRIMARY KEY, 
    dollscollection TEXT REFERENCES collections (collectionsName),
    dollsname TEXT NOT NULL, 
    doll_id TEXT, 
    series TEXT, 
    price TEXT,
    is_featuredrare BOOLEAN, 
    image TEXT
)