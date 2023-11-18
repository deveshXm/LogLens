const express = require('express');
const router = express.Router();
const { Kafka } = require('kafkajs');

const defaultKafkaAddr = ['kafka-1:29092','kafka-2:29093'];

const kafka = new Kafka({
  clientId: 'log-service',
  brokers: process.env.KAFKA_ADDR ? process.env.KAFKA_ADDR.split(",") : defaultKafkaAddr,
});

const producer = kafka.producer();

// Connect the producer outside of the request handler
producer.connect();

router.post('/', async (req, res, next) => {
  try {
    // Use a unique key for each message, for example, a timestamp
    const key = new Date().toISOString();

    await producer.send({
      topic: 'logs',
      messages: [{ key, value: JSON.stringify(req.body) }],
    });

    console.log('Message sent');
    res.status(200).send({ status: 'OK' });
  } catch (err) {
    console.error('Error sending message:', err);
    res.status(500).send({ status: 'NOT OK' });
  }
});

// Disconnect the producer when the application is shutting down
process.on('SIGINT', async () => {
  await producer.disconnect();
  process.exit(0);
});

module.exports = router;
