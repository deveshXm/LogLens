const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'log-consumer',
  brokers: ['kafka-1:9092', 'kafka-2:9092'],
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
