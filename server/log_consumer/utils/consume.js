var { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: 'log-service',
  brokers: [process.env.KAFKA_ADDR || 'localhost:9092']
})

const consumer = kafka.consumer({ groupId: "kafka" });

const consume = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: "logs", fromBeginning: true });
    await consumer.run({
      eachMessage: async ({ message }) => {
        try {
          console.log(
            "****************** Arrived in Consumer ******************"
          );
          console.log("our object", JSON.parse(message.value));
        } catch (err) {
          console.log(err);
        }
      },
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = consume;