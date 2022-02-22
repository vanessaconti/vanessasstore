DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS dolls;

CREATE TABLE dolls (
    id SERIAL PRIMARY KEY, 
    collectionsname TEXT UNIQUE, 
    numberofdolls INT

);

CREATE TABLE details (
    id SERIAL PRIMARY KEY, 
    dollscollection TEXT REFERENCES dolls (collectionsname),
    dollsname TEXT NOT NULL, 
    doll_id TEXT, 
    series TEXT, 
    price TEXT,
    is_rare BOOLEAN
)
