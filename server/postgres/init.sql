DROP TABLE IF EXISTS logs;

CREATE TABLE logs (
    id SERIAL PRIMARY KEY,
    level VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    resourceId VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    traceId VARCHAR(255) NOT NULL,
    spanId VARCHAR(255) NOT NULL,
    commit VARCHAR(255) NOT NULL,
    parentResourceId VARCHAR(255)
);

CREATE INDEX timestamp_index ON logs (timestamp);
