DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS collections;

CREATE TABLE collections (
    id SERIAL PRIMARY KEY, 
    collectionsName TEXT UNIQUE, 
    numberOfDolls INT

);

CREATE TABLE dolls (
    id SERIAL PRIMARY KEY, 
    dollsCollection TEXT REFERENCES collections (collectionsName),
    dollsName TEXT NOT NULL, 
    doll_id TEXT, 
    series TEXT, 
    price TEXT,
    is_featuredRare BOOLEAN, 
    image TEXT
)
