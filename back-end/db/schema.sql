DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS dolls;

CREATE TABLE dolls (
    id SERIAL PRIMARY KEY, 
    name TEXT
);
