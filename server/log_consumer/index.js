const { Kafka } = require('kafkajs');

const defaultKafkaAddr = ['kafka-1:29092','kafka-2:29093'];

const kafka = new Kafka({
  clientId: 'log-service',
  brokers: process.env.KAFKA_ADDR ? process.env.KAFKA_ADDR.split(",") : defaultKafkaAddr,
});

const consumer = kafka.consumer({ groupId: 'log-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'logs', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const value = JSON.parse(message.value.toString());
      // Process the message as needed
      console.log('Received message:', value);
    },
  });
};

run().catch(console.error);
