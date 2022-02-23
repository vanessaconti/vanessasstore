DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS collections;

CREATE TABLE collections (
    id SERIAL PRIMARY KEY, 
    collectionsname TEXT UNIQUE, 
    numberofdolls INT

);

CREATE TABLE dolls (
    id SERIAL PRIMARY KEY, 
    dollscollection TEXT REFERENCES collections (collectionsname),
    dollsname TEXT NOT NULL, 
    doll_id TEXT, 
    series TEXT, 
    price TEXT,
    is_featuredrare BOOLEAN, 
    image TEXT
)
