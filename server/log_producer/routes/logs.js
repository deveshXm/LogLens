var express = require('express');
var router = express.Router();
var {Kafka} = require('kafkajs');

const defaultKafkaAddr = ['kafka-1:9092,kafka-2:9092']

const kafka = new Kafka({
  clientId: 'log-service',
  brokers: process.env.KAFKA_ADDR ? process.env.KAFKA_ADDR.split(",") : defaultKafkaAddr
})

const producer = kafka.producer()

router.post('/', async function(req, res, next) {
  try{
    await producer.connect()
    await producer.send({
      topic: 'logs',
      messages: [
        {value: JSON.stringify(req.body)}
      ]
    })
    console.log("message send")
    res.send({status: 'OK'}).status(200)
  }catch(err){
    console.log(err)
    res.send({status: 'NOT OK'}).status(500)
  }
});

module.exports = router;
